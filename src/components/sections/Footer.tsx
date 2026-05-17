interface FooterProps {
  copy: string
  name: string
}

export function Footer({ copy, name }: FooterProps) {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 py-8">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 flex items-center justify-between gap-4">
        <span className="font-condensed text-xs tracking-widest text-white/30 uppercase">
          {name}
        </span>
        <span className="text-white/20 text-xs font-light">
          {copy}
        </span>
      </div>
    </footer>
  )
}
