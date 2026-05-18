import { VideoEmbed } from '../VideoEmbed'

interface AISectionProps {
  sectionLabel: string
  thumbnail: string
  thumbnailAlt: string
  platform: 'vimeo' | 'youtube'
  videoId: string
  body: string
}

export function AISection({ sectionLabel, thumbnail, platform, videoId, body }: AISectionProps) {
  const paragraphs = body.split('\n\n')

  return (
    <section
      id="ai"
      className="bg-[#0d0d0d] py-16 md:py-24"
      aria-labelledby="ai-heading"
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">
        <h2
          id="ai-heading"
          className="font-condensed text-gold uppercase text-5xl md:text-7xl font-bold mb-12"
        >
          {sectionLabel}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Video embed */}
          <VideoEmbed videoId={videoId} platform={platform} title={sectionLabel} thumbnail={thumbnail} />

          {/* Text */}
          <div className="space-y-5">
            {paragraphs.map((para, i) => (
              <p key={i} className="text-white/70 text-base md:text-lg leading-relaxed font-light">
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
