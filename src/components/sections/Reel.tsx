import { useState } from 'react'

interface ReelProps {
  thumbnail: string
  alt: string
  vimeoId: string
  cta: string
}

export function Reel({ thumbnail, alt, vimeoId, cta }: ReelProps) {
  const [playing, setPlaying] = useState(false)

  return (
    <section id="reel" aria-label="Demo Reel">
      <div
        className="relative w-full cursor-pointer group overflow-hidden"
        style={{ aspectRatio: '16 / 9' }}
        onClick={() => setPlaying(true)}
        role="button"
        tabIndex={0}
        aria-label={cta}
        onKeyDown={(e) => e.key === 'Enter' && setPlaying(true)}
      >
        {!playing ? (
          <>
            {/* Thumbnail — the MainReel_thumb which IS the gold crumpled-paper visual */}
            <img
              src={thumbnail}
              alt={alt}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            {/* Play overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors duration-200">
              <div className="flex flex-col items-center gap-4">
                <div className="w-20 h-20 rounded-full border-2 border-white/80 flex items-center justify-center bg-black/30 group-hover:border-white group-hover:bg-black/50 transition-all duration-200">
                  <svg
                    className="w-7 h-7 text-white ml-1"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="text-white text-xs tracking-widest uppercase font-light bg-black/40 px-4 py-1.5">
                  {cta}
                </span>
              </div>
            </div>
          </>
        ) : (
          <iframe
            src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0`}
            title="Demo Reel"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          />
        )}
      </div>
    </section>
  )
}
