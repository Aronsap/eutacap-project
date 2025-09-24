import * as React from "react"
import { cn } from "../../lib/cn"

export function Card(props: React.HTMLAttributes<HTMLDivElement>) {
  const { className, ...rest } = props
  return <div className={cn("rounded-2xl border bg-white shadow-sm", className)} {...rest} />
}
export function CardHeader(props: React.HTMLAttributes<HTMLDivElement>) {
  const { className, ...rest } = props
  return <div className={cn("p-6 pb-2", className)} {...rest} />
}
export function CardTitle(props: React.HTMLAttributes<HTMLHeadingElement>) {
  const { className, ...rest } = props
  return <h2 className={cn("text-xl font-semibold", className)} {...rest} />
}
export function CardContent(props: React.HTMLAttributes<HTMLDivElement>) {
  const { className, ...rest } = props
  return <div className={cn("p-6 pt-2", className)} {...rest} />
}
export function CardFooter(props: React.HTMLAttributes<HTMLDivElement>) {
  const { className, ...rest } = props
  return <div className={cn("p-6 pt-0", className)} {...rest} />
}
