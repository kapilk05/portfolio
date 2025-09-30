import * as React from "react"



const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={["rounded-lg border bg-card text-card-foreground shadow-sm", className].filter(Boolean).join(" ")}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
  className={["flex flex-col space-y-1.5 p-6", className].filter(Boolean).join(" ")}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={["text-2xl font-semibold leading-none tracking-tight", className].filter(Boolean).join(" ")}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
  className={["text-sm text-muted-foreground", className].filter(Boolean).join(" ")}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={["p-6 pt-0", className].filter(Boolean).join(" ")} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
  className={["flex items-center p-6 pt-0", className].filter(Boolean).join(" ")}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
