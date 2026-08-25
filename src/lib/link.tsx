import * as React from "react"

export type LinkProps = React.ComponentProps<"a"> & { href: string }

// ponytail: one context so blocks work with Next/React Router links without importing either.
// Default renders a plain <a>. Apps wrap once: <LinkProvider component={NextLink}>.
const LinkContext = React.createContext<React.ComponentType<LinkProps>>((props) => <a {...props} />)

export function LinkProvider({
  component,
  children,
}: {
  component: React.ComponentType<LinkProps>
  children: React.ReactNode
}) {
  return <LinkContext.Provider value={component}>{children}</LinkContext.Provider>
}

export function Link(props: LinkProps) {
  const Component = React.useContext(LinkContext)
  return <Component {...props} />
}
