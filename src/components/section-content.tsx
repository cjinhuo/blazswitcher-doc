'use client'
import { Button } from '@/components/ui/button'
import { LinkButton } from '@/components/ui/link-button'
import { motion } from 'motion/react'
import { ComputerIcon as Windows } from 'lucide-react'

export default function SectionContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='container flex max-w-7xl flex-col items-center gap-4 text-center mx-auto px-4 sm:px-6 lg:px-8'>
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
          variant='outline'
          className='h-8 rounded-full border-muted px-4'>
          获取同款拼音搜索算法
          <span className='ml-2 text-muted-foreground'>Text Search Engine →</span>
        </LinkButton>
      </div>
    </motion.div>
  )
}
