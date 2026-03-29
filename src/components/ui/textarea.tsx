import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full border-0 border-b border-border bg-transparent px-0 py-2 text-base font-mono ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-accent disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-colors resize-none",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
