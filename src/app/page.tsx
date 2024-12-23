import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { FeatureCarousel } from '@/components/feature-carousel'
import YoutubeEmbed from '@/components/youtube-embed'
import SectionContent from '@/components/section-content'

export default function Home() {
  return (
    <div className='relative flex min-h-screen flex-col'>
      <SiteHeader />
      <main className='flex-1'>
        <section className='space-y-6 pb-8 pt-32 md:pb-12 md:pt-40 lg:py-32'>
          <SectionContent />
        </section>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
          <div className='mb-16 flex justify-center items-center'>
            <div className='relative rounded-lg overflow-hidden aspect-video'>
              <YoutubeEmbed />
            </div>
          </div>
          <FeatureCarousel />
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
