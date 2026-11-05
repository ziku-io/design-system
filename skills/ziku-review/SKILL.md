---
name: ziku-review
description: Review UI changes in an app that depends on @ziku/ui for drift from the design system — hand-rolled blocks, raw colours, library overrides, missing states, broken setup. Use when reviewing a diff, PR or whole app built on @ziku/ui.
---

# Reviewing an app against @ziku/ui

Drift is any place the app redraws, restyles or bypasses what the library
already owns. Each drift is a screen that looks right today and breaks on the
next release, in dark mode, at 320px, or in Portuguese.

Load the `ziku-ui` skill first (or read
`node_modules/@ziku/ui/skills/ziku-ui/SKILL.md`): its rules are the standard
and [blocks.md](../ziku-ui/blocks.md) says what should have been used.

## Scope

A diff or PR: the changed files, plus the setup audit only if the diff touches
root wiring, `index.html`, `vite.config`, the main CSS or `package.json`.
"The whole app": every file under the client source plus the setup audit.

## Pass 1: setup

Walk every numbered item of [setup.md](../ziku-ui/setup.md). Each missing item
is a finding with its consequence (no anti-flash script → white flash for dark
readers; no `ConfirmProvider` → every confirm silently answers no; no
`UIStringsProvider` in a non-English app → library words render in English).

## Pass 2: mechanical

Run these over the scope (adjust the path; skip `node_modules`, `dist`, tests
and generated files). Every hit is a candidate, then read the line to confirm.

```bash
S=src  # the app's client source
rg -n '#[0-9a-fA-F]{3,8}\b|rgba?\(|hsla?\(' $S --glob '*.{ts,tsx,css}'          # raw colour
rg -n '\b(bg|text|border|ring|from|to)-(black|white)\b' $S                       # raw neutral
rg -n '\bdark:[\w\[!-]' $S                                                        # dark: variant
rg -n '\[data-slot|!important' $S --glob '*.css'                                  # library override
rg -n --pcre2 '\btext-primary\b(?!-)|(?<![-\w])color:\s*var\(--primary\)' $S                # fill used as text
rg -n 'font-(bold|extrabold|black)\b|font-weight:\s*[7-9]00' $S                   # weight above 600
rg -n 'weight="(bold|duotone|thin|light)"|<\w+Icon\b[^>]*\bsize=\{' $S            # icon weight / size prop
rg -n 'lucide-react|@heroicons|react-icons' $S                                    # other icon sets
rg -n '<(table|select|dialog)\b|type="checkbox"|role="dialog"' $S --glob '*.tsx'  # hand-rolled block
rg -n 'fixed inset-0' $S --glob '*.tsx'                                           # hand-rolled overlay
```

## Pass 3: judgement

Read each changed screen with `blocks.md` open.

- **Hand-rolled block.** A list of records outside `DataTable`, a modal or side
  panel outside `Modal`/`Drawer`, "No X yet" text outside `EmptyState`, a
  failed read drawn as empty, a yes/no `Modal` that should be `useConfirm`, a
  uppercase label outside `SectionLabel`.
- **States.** Every fetched region wires `loading`/`error`/`onRetry`; every
  write returns its promise so a rejection restores input. A missing state
  names the user action that reaches it.
- **Tokens by role.** Status text uses `-fg`; categories use `slot-N`, not a
  status colour; selected uses `bg-accent`; inline links are `text-link` with
  an underline.
- **Shape.** Mixed control sizes in one toolbar, a font size or spacing value
  off the scale in `ziku-ui`, a radius off the scale.
- **Words.** An icon-only button without `aria-label`; library words
  overridden with a literal instead of through `UIStringsProvider`; copy that
  is not a verb on a button.
- **Small screens.** A fixed width over 288px, a row of unknown length with no
  wrap or scroll, side-by-side panels that never stack.

## Output

A ranked list, most severe first: broken behaviour (missing provider, failed
read shown as empty, override that breaks dark mode) before drift before
polish. One line each: `file:line — what is wrong — what to use instead`. A
finding that the library cannot fix from props ends with "upstream", and the
review closes with a list of those as issues to file on
`ziku-io/design-system`. Nothing praised; an empty list is a valid result.

Done when every pass ran over the whole scope and every mechanical hit is
either a finding or dismissed with a reason.
