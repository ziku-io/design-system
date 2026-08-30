import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { GithubLogoIcon, GoogleLogoIcon } from "@phosphor-icons/react"
import { AuthLayout } from "./auth-layout"
import { LoginForm } from "./login-form"
import { RegisterForm } from "./register-form"
import { ForgotPasswordForm } from "./forgot-password-form"
import { Button } from "@/components/ui/button"
import { UIStringsProvider } from "@/lib/strings"

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

/** Nothing here is English. The block is the same block — only the dictionary
 *  changed, and the app that owns it supplies whatever it likes. */
export const Translated: StoryObj = {
  render: () => (
    <UIStringsProvider
      strings={{
        auth: {
          loginTitle: "Bem-vindo de volta",
          loginDescription: "Inicie sessão na sua conta",
          email: "Email",
          emailPlaceholder: "voce@empresa.pt",
          password: "Palavra-passe",
          signIn: "Iniciar sessão",
          invalidEmail: "Introduza um email válido",
          passwordRequired: "A palavra-passe é obrigatória",
        },
      }}
    >
      <AuthLayout logo={Logo}>
        <LoginForm onSubmit={() => wait(800)} />
      </AuthLayout>
    </UIStringsProvider>
  ),
}

/** No sign-up and no mailer: both links off, and the form is just the two
 *  fields and the button. */
export const NoSelfService: StoryObj = {
  render: () => (
    <AuthLayout logo={Logo}>
      <LoginForm onSubmit={() => wait(800)} registerHref={null} forgotPasswordHref={null} />
    </AuthLayout>
  ),
}
