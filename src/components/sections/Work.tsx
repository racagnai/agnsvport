import { VideoEmbed } from '../VideoEmbed'

interface Project {
  id: string
  client: string
  title: string
  keywords?: string
  description: string
  thumbnail?: string
  platform: 'vimeo' | 'youtube'
  videoId: string
  year: string
}

interface WorkProps {
  sectionLabel: string
  projects: Project[]
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article aria-label={`${project.client} — ${project.title}`}>
      <VideoEmbed
        videoId={project.videoId}
        platform={project.platform}
        title={`${project.client} — ${project.title}`}
        thumbnail={project.thumbnail}
      />
      <div className="pt-5 pb-8">
        <p className="text-xs tracking-widest uppercase text-white/40 mb-2 font-light">{project.client}</p>
        <h3 className="font-condensed text-gold text-3xl md:text-4xl font-bold leading-tight uppercase mb-3">
          {project.title}
        </h3>
        {project.keywords && (
          <p className="text-white/35 text-xs tracking-wide font-light mb-3">{project.keywords}</p>
        )}
        <p className="text-white/60 text-base md:text-lg leading-relaxed font-light">
          {project.description}
        </p>
      </div>
    </article>
  )
}

export function Work({ sectionLabel, projects }: WorkProps) {
  return (
    <section
      id="work"
      className="bg-[#111111] py-16 md:py-24"
      aria-labelledby="work-heading"
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">
        <h2
          id="work-heading"
          className="font-condensed text-gold uppercase text-5xl md:text-7xl font-bold mb-12"
        >
          {sectionLabel}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
