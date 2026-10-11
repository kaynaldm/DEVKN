import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { ToolsSection } from '@/components/tools-section'
import { ProjectsSection } from '@/components/projects-section'
import { ExpertiseSection } from '@/components/expertise-section'
import { ContactFooter } from '@/components/contact-footer'
import { WhatsappButton } from '@/components/whatsapp-button'

export default function Page() {
  return (
    <div className="min-h-dvh bg-background overflow-x-hidden">
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExpertiseSection />
        <ToolsSection />
      </main>
      <ContactFooter />
      <WhatsappButton />
    </div>
  )
}
