import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import { Progress, ProgressRing } from "./progress"
import { Button } from "./button"

const meta: Meta<typeof Progress> = {
  title: "Components/Progress",
  component: Progress,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof Progress>

/** Climbs to 100 in uneven steps and starts again, so the slide between values
 *  shows. */
function useTicking() {
  const [value, setValue] = React.useState(12)
  React.useEffect(() => {
    const timer = setInterval(
      () => setValue((v) => (v >= 100 ? 0 : Math.min(100, v + 7 + Math.round(Math.random() * 14)))),
      900,
    )
    return () => clearInterval(timer)
  }, [])
  return value
}

export const Default: Story = {
  render: () => <Progress value={62} aria-label="Upload progress" className="w-64" />,
}

/** A live bar: the value moves every second and the fill slides to it. */
export const Animated: Story = {
  render: function Render() {
    const value = useTicking()
    return (
      <div className="w-80">
        <Progress value={value} label="Importing contacts" showValue shimmer />
      </div>
    )
  },
}

/** No number yet: a short bar sweeps the track. */
export const Indeterminate: Story = {
  render: () => <Progress value={null} aria-label="Preparing export" className="w-64" />,
}

/** The status tones, the same four as Alert and Badge. */
export const Variants: Story = {
  render: () => (
    <div className="grid w-80 gap-5">
      <Progress value={64} label="Storage" showValue />
      <Progress value={100} variant="success" label="Backup complete" showValue />
      <Progress value={45} variant="info" label="Syncing calendar" showValue />
      <Progress value={88} variant="warning" label="Monthly quota" showValue />
      <Progress value={97} variant="danger" label="Seats used" showValue />
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="grid w-64 gap-4">
      <Progress value={40} size="sm" aria-label="Small" />
      <Progress value={55} aria-label="Default" />
      <Progress value={70} size="lg" aria-label="Large" />
    </div>
  ),
}

/** Light passes along the fill while the job runs; turn it off when it settles. */
export const Shimmer: Story = {
  render: () => (
    <div className="grid w-80 gap-4">
      <Progress value={58} size="lg" shimmer aria-label="Uploading" />
      <Progress value={72} size="lg" variant="success" shimmer aria-label="Uploading" />
      <Progress value={34} size="lg" variant="info" shimmer aria-label="Uploading" />
    </div>
  ),
}

/** The ring, for a tile or a card corner. Without a value it spins. */
export const Ring: Story = {
  render: function Render() {
    const value = useTicking()
    return (
      <div className="flex items-center gap-5">
        <ProgressRing value={value} showValue size={48} aria-label="Import" />
        <ProgressRing value={76} variant="success" showValue size={48} aria-label="Done" />
        <ProgressRing value={42} variant="warning" showValue size={48} aria-label="Quota" />
        <ProgressRing value={null} size={24} thickness={3} aria-label="Loading" />
        <ProgressRing value={18} variant="danger" size={20} thickness={3} aria-label="Low" />
      </div>
    )
  },
}

/** Start, watch it run, finish: the bar turns success once it reaches 100. */
export const Upload: Story = {
  render: function Render() {
    const [value, setValue] = React.useState<number | null>(0)
    const [running, setRunning] = React.useState(false)
    React.useEffect(() => {
      if (!running) return
      const timer = setInterval(() => {
        setValue((v) => {
          const next = Math.min(100, (v ?? 0) + 6 + Math.round(Math.random() * 10))
          if (next >= 100) setRunning(false)
          return next
        })
      }, 400)
      return () => clearInterval(timer)
    }, [running])
    const done = value === 100
    return (
      <div className="grid w-80 gap-3">
        <Progress
          value={value}
          variant={done ? "success" : "default"}
          shimmer={running}
          label={done ? "Uploaded" : "contract-2026.pdf"}
          showValue
        />
        <Button
          size="sm"
          variant="outline"
          className="justify-self-start"
          onClick={() => {
            setValue(0)
            setRunning(true)
          }}
        >
          {done ? "Upload again" : "Start upload"}
        </Button>
      </div>
    )
  },
}
