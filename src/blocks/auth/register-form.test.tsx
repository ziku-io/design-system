import { afterEach, describe, expect, it, vi } from "vitest"
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react"

import { RegisterForm, type PhoneMode, type RegisterFormProps } from "./register-form"
import { defaultStrings } from "@/lib/strings"

afterEach(cleanup)

const t = defaultStrings.auth

function setup(props: Omit<RegisterFormProps, "onSubmit"> = {}) {
  const onSubmit = vi.fn()
  render(<RegisterForm onSubmit={onSubmit} loginHref={null} {...props} />)
  const type = (label: string | RegExp, value: string) =>
    fireEvent.change(screen.getByLabelText(label), { target: { value } })
  type(t.name, "Jay Oak")
  type(t.email, "jay@example.com")
  type(t.password, "hunter2hunter2")
  type(t.confirmPassword, "hunter2hunter2")
  const submit = () => fireEvent.click(screen.getByRole("button", { name: t.createAccount }))
  return { onSubmit, type, submit }
}

describe("RegisterForm", () => {
  it("submits the four fields unchanged without phone or consent", async () => {
    const { onSubmit, submit } = setup()
    expect(screen.queryByLabelText(new RegExp(t.phone))).toBeNull()
    expect(screen.queryByRole("checkbox")).toBeNull()
    submit()
    await waitFor(() => expect(onSubmit).toHaveBeenCalled())
    expect(onSubmit.mock.calls[0][0]).toStrictEqual({
      name: "Jay Oak",
      email: "jay@example.com",
      password: "hunter2hunter2",
      confirmPassword: "hunter2hunter2",
    })
  })

  it("rejects an empty required phone", async () => {
    const { onSubmit, submit } = setup({ phone: "required" })
    submit()
    expect(await screen.findByText(t.phoneRequired)).toBeTruthy()
    expect(onSubmit).not.toHaveBeenCalled()
  })

  it("rejects a malformed phone even when optional", async () => {
    const { onSubmit, type, submit } = setup({ phone: "optional" })
    type(new RegExp(t.phone), "call me")
    submit()
    expect(await screen.findByText(t.invalidPhone)).toBeTruthy()
    expect(onSubmit).not.toHaveBeenCalled()
  })

  it("does not submit with the consent box unticked", async () => {
    const { onSubmit, submit } = setup({ consent: "I accept the privacy policy." })
    submit()
    expect(await screen.findByText(t.consentRequired)).toBeTruthy()
    expect(onSubmit).not.toHaveBeenCalled()
  })

  it("submits a trimmed phone and consent: true", async () => {
    const { onSubmit, type, submit } = setup({
      phone: "required",
      consent: "I accept the privacy policy.",
    })
    const phone = screen.getByLabelText(t.phone)
    expect(phone.getAttribute("type")).toBe("tel")
    expect(phone.getAttribute("autocomplete")).toBe("tel")
    type(t.phone, "  +351 912 345 678 ")
    fireEvent.click(screen.getByLabelText("I accept the privacy policy."))
    submit()
    await waitFor(() => expect(onSubmit).toHaveBeenCalled())
    expect(onSubmit.mock.calls[0][0]).toMatchObject({ phone: "+351 912 345 678", consent: true })
  })

  it("omits an optional phone left empty", async () => {
    const { onSubmit, submit } = setup({ phone: "optional" })
    submit()
    await waitFor(() => expect(onSubmit).toHaveBeenCalled())
    expect(onSubmit.mock.calls[0][0]).not.toHaveProperty("phone")
  })

  // A mode read from config bypasses the type; it must not quietly render an
  // optional field.
  it("rejects an unknown phone mode", () => {
    vi.spyOn(console, "error").mockImplementation(() => {})
    expect(() => render(<RegisterForm onSubmit={() => {}} phone={"yes" as PhoneMode} />)).toThrow(
      /optional, required/,
    )
  })
})
