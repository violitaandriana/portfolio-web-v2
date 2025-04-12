import { cn } from "@/lib/utils"

type LogoIconProps = {
  src: string
  hoverSrc: string
  alt: string
  label: string
  className?: string
}

export function LogoIcon({ src, hoverSrc, alt, label, className }: LogoIconProps) {
  return (
    <div
      className={cn(
        "pop-up-little bg-white shadow-md p-4 rounded-lg flex flex-col items-center justify-center gap-1 h-22 w-24 group transition-transform hover:scale-105 hover:text-rose-400 mb-4",
        className
      )}
    >
      <div className="relative">
        <img
          src={src}
          alt={alt}
          className="absolute top-0 left-0 w-8 h-8 transition-opacity duration-300 group-hover:opacity-0"
        />
        <img
          src={hoverSrc}
          alt={`${alt} Hover`}
          className="w-8 h-8"
        />
      </div>
      <span className="text-xs">{label}</span>
    </div>
  )
}
