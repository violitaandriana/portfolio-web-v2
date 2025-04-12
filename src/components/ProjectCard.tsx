import { ExternalLink } from "lucide-react"
import { Badge } from "./ui/badge"

interface ProjectProps {
  title: string
  description: React.ReactNode
  techStack: string[]
  imageUrl?: string
  link?: string
}

export default function ProjectCard({
  title,
  description,
  techStack,
  link,
}: ProjectProps) {
  return (
    <div className="pop-up group transition-transform hover:scale-102 rounded-2xl">
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p className="text-sm">{description}</p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1">
          {techStack.map((tech, i) => (
            <Badge
              key={i}
              className="bg-rose-400 text-white"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Link (optional) */}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
          >
            View Project <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  )
}
