import { Button } from '@/components/ui/button'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { FeatureCarousel } from '@/components/feature-carousel'
import { Download, ComputerIcon as Windows } from 'lucide-react'
import YoutubeEmbed from '@/components/youtube-embed'

export default function Home() {
  return (
    <div className='relative flex min-h-screen flex-col'>
      <SiteHeader />
      <main className='flex-1'>
        <section className='space-y-6 pb-8 pt-32 md:pb-12 md:pt-40 lg:py-32'>
          <div className='container flex max-w-7xl flex-col items-center gap-4 text-center mx-auto px-4 sm:px-6 lg:px-8'>
            <h1 className='font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl'>
              Your shortcut to
              <br />
              everything.
            </h1>
            <p className='max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 mx-auto'>
              A collection of powerful productivity tools all within
              <br />
              an extendable launcher. Fast, ergonomic and reliable.
            </p>
            <div className='space-x-4'>
              <Button size='lg' className='h-12'>
                <Download className='mr-2 h-4 w-4' />
                Download for Mac
              </Button>
              <Button size='lg' variant='outline' className='h-12'>
                <Windows className='mr-2 h-4 w-4' />
                Join Windows waitlist
              </Button>
            </div>
            <div className='flex flex-col items-center space-y-4 mt-4'>
              <p className='text-xs text-muted-foreground'>v1.83.4 | macOS 12+ | Install via homebrew</p>
              <Button variant='outline' size='sm' className='h-8 rounded-full border-muted px-4'>
                Blazwitcher for iOS
                <span className='ml-2 text-muted-foreground'>Join waitlist →</span>
              </Button>
            </div>
          </div>
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
