import { Button } from '@/components/ui/button'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { FeatureCarousel } from '@/components/feature-carousel'
import { ComputerIcon as Windows } from 'lucide-react'
import YoutubeEmbed from '@/components/youtube-embed'
import { LinkButton } from '@/components/ui/link-button'

export default function Home() {
  return (
    <div className='relative flex min-h-screen flex-col'>
      <SiteHeader />
      <main className='flex-1'>
        <section className='space-y-6 pb-8 pt-32 md:pb-12 md:pt-40 lg:py-32'>
          <div className='container flex max-w-7xl flex-col items-center gap-4 text-center mx-auto px-4 sm:px-6 lg:px-8'>
            <h1 className='font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl'>
              <span className='inline-block bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent bg-[size:200%] animate-gradient'>
                Ultimate Smooth
              </span>
              <br />
              <span className='inline-block bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent bg-[size:200%] animate-gradient'>
                Pinyin Search
              </span>
            </h1>
            <p className='max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 mx-auto'>
              A Browser Extension for searching tabs, bookmarks, and history, with support for fuzzy Pinyin search.
              <br />
            </p>
            <div className='space-x-4 flex items-center'>
              <LinkButton
                href='https://chromewebstore.google.com/detail/blazwitcher-fuzzy-pinyin/fjgablnemienkegdnbihhemebmmonihg'
                size='lg'
                className='h-12'
                isExternal>
                {/* <BrowserPlus className='mr-2 h-4 w-4' /> */}
                通过插件商店安装
              </LinkButton>
              <Button size='lg' variant='outline' className='h-12'>
                <Windows className='mr-2 h-4 w-4' />
                Join Windows waitlist
              </Button>
            </div>
            <div className='flex flex-col items-center space-y-4 mt-4'>
              <p className='text-xs text-muted-foreground'>v0.33 | Chrome | Arc | Edge | Install via Extension Store</p>
              <LinkButton
                href='https://github.com/cjinhuo/text-search-engine'
                size='sm'
                className='h-8 rounded-full border-muted px-4'>
                获取同款拼音搜索算法
                <span className='ml-2 text-muted-foreground'>Text Search Engine →</span>
              </LinkButton>
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
