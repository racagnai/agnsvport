import './index.css'
import data from './data/portfolio.json'
import { Nav } from './components/sections/Nav'
import { Hero } from './components/sections/Hero'
import { Reel } from './components/sections/Reel'
import { Work } from './components/sections/Work'
import { About } from './components/sections/About'
import { AISection } from './components/sections/AISection'
import { Contact } from './components/sections/Contact'
import { Footer } from './components/sections/Footer'

export default function App() {
  return (
    <>
      <Nav name={data.nav.name} links={data.nav.links} />

      <main>
        <Hero
          line1={data.hero.line1}
          line2={data.hero.line2}
          subtitle={data.hero.subtitle}
        />

        <Reel
          thumbnail={data.reel.thumbnail}
          alt={data.reel.alt}
          vimeoId={data.reel.videoId}
          cta={data.reel.cta}
        />

        <Work
          sectionLabel={data.work.sectionLabel}
          projects={data.work.projects}
        />

        <About
          sectionLabel={data.about.sectionLabel}
          avatar={data.about.avatar}
          avatarAlt={data.about.avatarAlt}
          bio={data.about.bio}
        />

        <AISection
          sectionLabel={data.ai.sectionLabel}
          thumbnail={data.ai.thumbnail}
          thumbnailAlt={data.ai.thumbnailAlt}
          platform={data.ai.platform as 'vimeo' | 'youtube'}
          videoId={data.ai.videoId}
          body={data.ai.body}
        />

        <Contact
          sectionLabel={data.contact.sectionLabel}
          heading={data.contact.heading}
          body={data.contact.body}
          email={data.contact.email}
        />
      </main>

      <Footer copy={data.footer.copy} name={data.nav.name} />
    </>
  )
}
