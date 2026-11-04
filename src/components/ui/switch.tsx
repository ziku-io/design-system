"use client"

import * as React from "react"
import { Switch as SwitchPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

function Switch({
  className,
  size = "default",
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root> & {
  size?: "sm" | "default"
}) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      data-size={size}
      className={cn(
        // The button's material: a light tint with a dark mark in the same hue
        // when on, the muted ground with a bordered white thumb when off. The
        // solid --primary track was the one heavy fill left beside the buttons.
        "peer group/switch relative inline-flex shrink-0 items-center rounded-full border p-px transition-[background-color,border-color,box-shadow,filter] outline-none before:absolute before:-inset-1 hover:brightness-95 focus-visible:border-ring focus-visible:ring-[1.5px] focus-visible:ring-ring/80 disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-5 data-[size=default]:w-9 data-[size=sm]:h-4 data-[size=sm]:w-7 data-[state=checked]:border-primary-button-foreground/20 data-[state=checked]:bg-primary-button data-[state=unchecked]:bg-muted",
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none block rounded-full transition-[translate,background-color] ease-settle group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3 group-data-[size=default]/switch:data-[state=checked]:translate-x-4 group-data-[size=sm]/switch:data-[state=checked]:translate-x-3 data-[state=checked]:bg-primary-button-foreground data-[state=unchecked]:translate-x-0 data-[state=unchecked]:bg-card data-[state=unchecked]:shadow-xs data-[state=unchecked]:ring-1 data-[state=unchecked]:ring-border",
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
