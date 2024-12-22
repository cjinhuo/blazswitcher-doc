import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Download, Github } from 'lucide-react'
import { ModeToggle } from '@/components/mode-toggle'

export function SiteHeader() {
  return (
    <header className='fixed top-0 w-full z-50 border-b border-border/40 bg-background/80 backdrop-blur-sm'>
      <div className='container flex h-14 max-w-7xl items-center justify-between mx-auto px-4 sm:px-6 lg:px-8'>
        <div>
          <Link href='/' className='flex items-center space-x-2'>
            {/* <Download className='h-5 w-5' /> */}
            {/* todo icon */}
            <span className='font-bold'>Blazwitcher</span>
          </Link>
        </div>
        <div className='flex items-center space-x-4'>
          <ModeToggle />
          <Button variant='outline' asChild>
            <Link
              href='https://github.com/cjinhuo/blazwitcher'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center'>
              <Github className='mr-2 h-4 w-4' />
              GitHub
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
