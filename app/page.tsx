import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { ProjectsSection } from '@/components/projects-section'
import { ExpertiseSection } from '@/components/expertise-section'
import { ContactFooter } from '@/components/contact-footer'
import { WhatsappButton } from '@/components/whatsapp-button'
import { CustomCursor } from '@/components/custom-cursor'
import { EntryPreloader } from '@/components/entry-preloader'

export default function Page() {
  return (
    <div className="min-h-dvh bg-background overflow-x-clip">
      <EntryPreloader />
      <CustomCursor />
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExpertiseSection />
      </main>
      <ContactFooter />
      <WhatsappButton />
    </div>
  )
}
