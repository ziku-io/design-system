import type { Meta, StoryObj } from "@storybook/react-vite"

import { CopyButton, CopyField } from "./copy-button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { UIStringsProvider } from "@/lib/strings"
import { ptPT } from "@/lib/strings-pt"

const meta: Meta = {
  title: "Blocks/CopyButton",
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Copies a value. The icon turns into a check for two seconds and a screen reader hears “Copied”. If the clipboard refuses, a warning says to copy by hand. `CopyField` is a term, its value and the button, for details a reader pastes somewhere else.",
      },
    },
  },
}
export default meta

export const Default: StoryObj = {
  render: () => <CopyButton value="PT50 0000 0000 0000 0000 0000 0" label="IBAN" />,
}

/** Beside a read-only field: the field shows the whole key, the button copies it. */
export const BesideAField: StoryObj = {
  render: () => (
    <div className="flex max-w-md items-center gap-2">
      <Input readOnly value="mock_key_0000_0000_0000" className="font-mono" aria-label="API key" />
      <CopyButton value="mock_key_0000_0000_0000" label="API key" />
    </div>
  ),
}

/** Bank details: codes in mono, a row without a button where copying makes no sense. */
export const Fields: StoryObj = {
  render: () => (
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle>Bank transfer</CardTitle>
      </CardHeader>
      <CardContent>
        <dl>
          <CopyField label="Amount" value="€ 1,250.00" />
          <CopyField label="Reference" value="IVA-2026-0019" mono />
          <CopyField label="IBAN" value="PT50 0000 0000 0000 0000 0000 0" mono />
          <CopyField label="BIC" value="MOCKPTPL" mono />
          <CopyField label="Status" value="Awaiting payment" copy={false} />
        </dl>
      </CardContent>
    </Card>
  ),
}

/** Nothing to copy: disabled rather than a click that pretends to work. */
export const Empty: StoryObj = {
  render: () => <CopyButton value="" label="phone" />,
}

export const Translated: StoryObj = {
  render: () => (
    <UIStringsProvider strings={ptPT}>
      <dl className="max-w-md">
        <CopyField label="IBAN" value="PT50 0000 0000 0000 0000 0000 0" mono />
        <CopyField label="Referência" value="IVA-2026-0019" mono />
      </dl>
    </UIStringsProvider>
  ),
}
