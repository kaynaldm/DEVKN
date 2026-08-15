import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { ProjectsSection } from '@/components/projects-section'
import { ExpertiseSection } from '@/components/expertise-section'
import { ContactFooter } from '@/components/contact-footer'

export default function Page() {
  return (
    <div className="min-h-dvh bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <ProjectsSection />
        <ExpertiseSection />
      </main>
      <ContactFooter />
    </div>
  )
}
