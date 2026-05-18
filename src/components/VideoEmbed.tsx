import { useState, useRef, useEffect } from 'react'

type Platform = 'vimeo' | 'youtube'

interface VideoEmbedProps {
  videoId: string
  platform: Platform
  title: string
  /** Optional override poster. If omitted, YouTube uses its thumbnail API automatically. */
  thumbnail?: string
}

function getPoster(platform: Platform, videoId: string, thumbnail?: string): string {
  if (thumbnail) return thumbnail
  if (platform === 'youtube') {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
  }
  return '' // Vimeo always requires an explicit thumbnail
}

function getEmbedSrc(platform: Platform, videoId: string): string {
  if (platform === 'youtube') {
    return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`
  }
  return `https://player.vimeo.com/video/${videoId}?autoplay=1&title=0&byline=0&portrait=0`
}

function getAllow(platform: Platform): string {
  if (platform === 'youtube') {
    return 'autoplay; clipboard-write; encrypted-media; picture-in-picture'
  }
  return 'autoplay; fullscreen; picture-in-picture'
}

export function VideoEmbed({ videoId, platform, title, thumbnail }: VideoEmbedProps) {
  const [loaded, setLoaded] = useState(false)
  const [inView, setInView] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const poster = getPoster(platform, videoId, thumbnail)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden bg-black"
      style={{ aspectRatio: '16 / 9' }}
    >
      {!loaded && (
        <div
          className="absolute inset-0 cursor-pointer group"
          onClick={() => setLoaded(true)}
          role="button"
          tabIndex={0}
          aria-label={`Play ${title}`}
          onKeyDown={(e) => e.key === 'Enter' && setLoaded(true)}
        >
          {poster && (
            <img
              src={poster}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          )}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/45 transition-colors duration-200 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full border border-white/70 flex items-center justify-center bg-black/20 group-hover:border-white group-hover:scale-105 transition-all duration-200">
              <svg
                className="w-5 h-5 text-white ml-0.5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      )}

      {inView && loaded && (
        <iframe
          src={getEmbedSrc(platform, videoId)}
          title={title}
          allow={getAllow(platform)}
          allowFullScreen
          className="absolute inset-0 w-full h-full border-0"
          loading="lazy"
        />
      )}
    </div>
  )
}
