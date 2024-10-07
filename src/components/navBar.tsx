'use client'

import Link from 'next/link'
import * as React from 'react'
import { FileText, Menu, Truck, User } from 'lucide-react'
import { Button } from './ui/button'
import Image from 'next/image'
import BlurFade from '@/components/ui/blur-fade'
import { BLUR_FADE_DELAY } from '@/lib/delay-animation'
import Logo from '@/assets/dellape-logo-nobg-1.png'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

export default function NavBar() {
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
                  <li>
                    <Link href={'#hero'}>Início</Link>
                  </li>
                  <li>
                    <Link href={'#services'}>Serviços</Link>
                  </li>
                  <li>
                    <Link href={'#about'}>About</Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex justify-between min-[825px]:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger className="p-2 transition">
                  <Button
                    size="icon"
                    variant="ghost"
                    className="size-4"
                    aria-label="Open menu"
                    asChild
                  >
                    <Menu className="size-7" />
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-48">
                  <DropdownMenuItem>
                    <Link href={'/#hero'} className="flex items-center">
                      <User className="mr-2 size-4" />
                      <span>Início</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href={'/#services'} className="flex items-center">
                      <Truck className="mr-2 size-4" />
                      <span>Serviços</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href={'/#about'} className="flex items-center">
                      <FileText className="mr-2 size-4" />
                      <span>Sobre</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/*             <SheetTrigger className="p-2 transition">
              <Button
                size="icon"
                variant="ghost"
                className="size-4"
                aria-label="Open menu"
                asChild
              >
                <Menu className="size-7" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#f1ede2]">
              <div className="mt-12 flex flex-col space-y-3">
                <Link href="#home">
                  <Button
                    variant="outline"
                    className="w-full bg-foreground text-background"
                  >
                    Início
                  </Button>
                </Link>
                <Link href="#services">
                  <Button
                    variant="outline"
                    className="w-full bg-foreground text-background"
                  >
                    Serviços
                  </Button>
                </Link>

                <Link href="#about">
                  <Button
                    variant="outline"
                    className="w-full bg-foreground text-background"
                  >
                    Sobre
                  </Button>
                </Link>
              </div>
            </SheetContent> */}
            </div>
          </div>
        </BlurFade>
      </div>
    </header>
  )
}
