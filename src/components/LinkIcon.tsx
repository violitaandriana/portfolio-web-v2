import { cn } from "@/lib/utils"

type LinkIconProps = {
  link: string
  className: string
}

export function LinkIcon({ link, className }: LinkIconProps) {
  return (
    <a href={link} className={cn("text-[30px] p-1 link-icon", className)}></a>
  )
}
