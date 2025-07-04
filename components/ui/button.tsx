import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white dark:focus-visible:ring-gray-200",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-md hover:scale-[1.02] hover:shadow-xl active:scale-95",
        outline:
          "border-2 border-white/40 text-white backdrop-blur-md hover:border-white/60 hover:scale-105",
        ghost:
          "text-white hover:bg-white/10 hover:scale-105 active:scale-95",
        glassy:
          "bg-white/20 text-white backdrop-blur-md border border-white/30 shadow-md hover:shadow-xl hover:scale-105 active:scale-95",
        link: "text-white underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-8 px-4 text-sm",
        lg: "h-12 px-8 text-base",
        icon: "size-10 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Button, buttonVariants }
