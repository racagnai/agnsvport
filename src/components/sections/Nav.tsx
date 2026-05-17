interface NavProps {
  name: string
  links: Array<{ label: string; href: string }>
}

export function Nav({ name, links }: NavProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#111111]/90 backdrop-blur-sm">
      <nav
        className="max-w-screen-xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between"
        aria-label="Primary navigation"
      >
        <a
          href="#"
          className="font-condensed text-sm tracking-widest text-white hover:text-gold transition-colors duration-150"
          aria-label="Andre Filipiny — home"
        >
          {name}
        </a>

        <ul className="hidden md:flex items-center gap-1" role="list">
          {links.map((link, i) => (
            <li key={link.href} className="flex items-center">
              {i > 0 && (
                <span className="text-white/20 mx-3 text-xs select-none" aria-hidden="true">|</span>
              )}
              <a
                href={link.href}
                className="text-xs tracking-wide uppercase text-white/60 hover:text-white transition-colors duration-150 font-normal"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
