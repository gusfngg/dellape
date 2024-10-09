'use client'

import { Link as ScrollLink } from 'react-scroll'
import { Menu } from 'lucide-react'
import { Button } from './ui/button'
import Image from 'next/image'
import BlurFade from '@/components/ui/blur-fade'
import { BLUR_FADE_DELAY } from '@/lib/delay-animation'
import Logo from '@/assets/dellape-logo-nobg-1.png'

import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { useEffect, useState } from 'react'

const navItems = [
  { name: 'Início', to: 'hero' },
  { name: 'Serviços', to: 'services' },
  { name: 'About', to: 'about' },
]

export default function NavBar() {
  const [isSheetOpen, setIsSheetOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  function handleLinkClick() {
    setTimeout(() => setIsSheetOpen(false), 100)
  }

  if (!isMounted) {
    return null
  }

  return (
    <header className="border-b border-neutral-400">
      <div className="py-5">
        <BlurFade delay={BLUR_FADE_DELAY} inView>
          <div className="flex items-center justify-between">
            <Image
              className="w-32 object-contain"
              src={Logo}
              height={1536}
              width={1536}
              alt="logo"
            />

            <div className="hidden lg:block">
              <nav>
                <ul className="flex items-center gap-10 text-lg font-medium">
                  {navItems.map((item) => (
                    <li key={item.to}>
                      <ScrollLink
                        to={item.to}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        spy={true}
                        activeClass="text-primary"
                      >
                        <Button variant={'link'} className="text-neutral-950">
                          {item.name}
                        </Button>
                      </ScrollLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="flex justify-between min-[825px]:hidden">
              <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger className="transition">
                  <Button
                    size="icon"
                    variant="ghost"
                    className="size-7"
                    aria-label="Open menu"
                  >
                    <Menu className="size-7" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-[#fcfaf3]">
                  <div className="mt-12 flex flex-col justify-center space-y-3">
                    {navItems.map((item) => (
                      <ScrollLink
                        key={item.to}
                        to={item.to}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        spy={true}
                        activeClass="border-primary"
                        onClick={handleLinkClick}
                      >
                        <Button
                          variant="link"
                          className="w-full rounded-lg border border-neutral-400 text-lg text-neutral-900"
                        >
                          {item.name}
                        </Button>
                      </ScrollLink>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </BlurFade>
      </div>
    </header>
  )
}
