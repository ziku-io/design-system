import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { GithubLogoIcon, GoogleLogoIcon } from "@phosphor-icons/react"
import { AuthLayout } from "./auth-layout"
import { LoginForm } from "./login-form"
import { RegisterForm } from "./register-form"
import { ForgotPasswordForm } from "./forgot-password-form"
import { Button } from "@/components/ui/button"

const meta: Meta = {
  title: "Blocks/Auth",
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
}
export default meta

const wait = (ms: number) => new Promise<void>((r) => setTimeout(r, ms))
const Logo = <span className="text-lg font-bold tracking-tight text-foreground">ziku</span>
const Footer = (
  <>
    By continuing you agree to our <a href="#">Terms</a> and <a href="#">Privacy Policy</a>.
  </>
)
const Providers = (
  <>
    <Button variant="outline" type="button">
      <GoogleLogoIcon /> Google
    </Button>
    <Button variant="outline" type="button">
      <GithubLogoIcon /> GitHub
    </Button>
  </>
)

export const Login: StoryObj = {
  render: () => (
    <AuthLayout logo={Logo} footer={Footer}>
      <LoginForm onSubmit={() => wait(800)} providers={Providers} />
    </AuthLayout>
  ),
}
export const LoginWithError: StoryObj = {
  render: () => (
    <AuthLayout logo={Logo}>
      <LoginForm onSubmit={() => wait(800)} error="Invalid email or password." />
    </AuthLayout>
  ),
}
export const Register: StoryObj = {
  render: () => (
    <AuthLayout logo={Logo} footer={Footer}>
      <RegisterForm onSubmit={() => wait(800)} providers={Providers} />
    </AuthLayout>
  ),
}
function ForgotDemo() {
  const [sent, setSent] = useState(false)
  return (
    <AuthLayout logo={Logo}>
      <ForgotPasswordForm
        sent={sent}
        onSubmit={async () => {
          await wait(600)
          setSent(true)
        }}
      />
    </AuthLayout>
  )
}
export const ForgotPassword: StoryObj = { render: () => <ForgotDemo /> }
