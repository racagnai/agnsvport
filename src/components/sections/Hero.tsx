interface HeroProps {
  line1: string
  line2: string
  subtitle: string
}

export function Hero({ line1, line2, subtitle }: HeroProps) {
  return (
    <section
      id="home"
      className="pt-14 bg-[#111111]"
      aria-label="Introduction"
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 pt-16 pb-12 md:pt-24 md:pb-16 text-center">
        <h1 className="font-condensed leading-none tracking-tight uppercase w-full">
          {/* Both lines use the same viewport-based size so they read as a matched pair */}
          <span
            className="block text-white w-full"
            style={{ fontSize: 'clamp(2.5rem, 7.5vw, 7.5rem)' }}
          >
            {line1}
          </span>
          <span
            className="block text-gold w-full"
            style={{ fontSize: 'clamp(2.5rem, 7.5vw, 7.5rem)' }}
          >
            {line2}
          </span>
        </h1>
        <p className="mt-6 text-white/55 text-base md:text-lg font-light max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  )
}
