interface ContactProps {
  sectionLabel: string
  heading: string
  body: string
  email: string
}

export function Contact({ sectionLabel, heading, body, email }: ContactProps) {
  return (
    <section
      id="contact"
      className="bg-[#111111] py-16 md:py-24"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">
        <h2
          id="contact-heading"
          className="font-condensed text-gold uppercase text-5xl md:text-7xl font-bold mb-12"
        >
          {sectionLabel}
        </h2>

        <div className="max-w-2xl">
          <p className="text-white/55 text-base md:text-lg font-light leading-relaxed mb-6">
            {heading}
          </p>
          <p className="text-white/55 text-base md:text-lg font-light leading-relaxed mb-10">
            {body}
          </p>
          <a
            href={`mailto:${email}`}
            className="text-gold text-base md:text-lg font-light underline underline-offset-4 decoration-gold/40 hover:decoration-gold transition-all duration-150"
          >
            {email}
          </a>
        </div>
      </div>
    </section>
  )
}
