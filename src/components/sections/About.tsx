interface AboutProps {
  sectionLabel: string
  avatar: string
  avatarAlt: string
  bio: string[]
}

export function About({ sectionLabel, avatar, avatarAlt, bio }: AboutProps) {
  return (
    <section
      id="about"
      className="bg-[#0d0d0d] py-16 md:py-24"
      aria-labelledby="about-heading"
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">
        <h2
          id="about-heading"
          className="font-condensed text-gold uppercase text-5xl md:text-7xl font-bold mb-12"
        >
          {sectionLabel}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Bio */}
          <div className="space-y-5">
            {bio.map((paragraph, i) => (
              <p
                key={i}
                className="text-white/75 text-base md:text-lg leading-relaxed font-light"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Avatar — constrained on mobile, full column on md+ */}
          <div className="flex justify-center md:justify-end">
            <img
              src={avatar}
              alt={avatarAlt}
              className="w-48 md:w-full object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
