'use client'

import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll'
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

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'

export default function NavBar() {
  let scrollPosition = 0

  const handleOpenDrawer = () => {
    scrollPosition = window.scrollY
  }

  const handleCloseDrawer = () => {
    window.scrollTo(0, scrollPosition)
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
              <Drawer onOpen={handleOpenDrawer} onClose={handleCloseDrawer}>
                <DrawerTrigger className="p-2 transition">
                  <Button
                    size="icon"
                    variant="ghost"
                    className="size-4"
                    aria-label="Open menu"
                    asChild
                  >
                    <Menu className="size-7" />
                  </Button>
                </DrawerTrigger>

                <DrawerContent>
                  <div className="px-7 py-6">
                    <nav>
                      <ul className="flex flex-col gap-2 text-xl">
                        <li>
                          <ScrollLink
                            to={'hero'}
                            smooth={true}
                            duration={500}
                            className="flex items-center scroll-smooth"
                          >
                            <User className="mr-2 size-4" />
                            <span>Início</span>
                          </ScrollLink>
                        </li>
                        <li>
                          <DrawerClose asChild>
                            <ScrollLink
                              to={'services'}
                              smooth={true}
                              duration={500}
                              className="flex items-center scroll-smooth"
                            >
                              <Truck className="mr-2 size-4" />
                              <span>Serviços</span>
                            </ScrollLink>
                          </DrawerClose>
                        </li>
                        <li>
                          <ScrollLink
                            to="about"
                            smooth={true}
                            duration={500}
                            className="flex items-center"
                          >
                            <FileText className="mr-2 size-4" />
                            <span>Sobre</span>
                          </ScrollLink>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </DrawerContent>
              </Drawer>

              {/*               <DropdownMenu>
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
                    <ScrollLink
                      to={'hero'}
                      smooth={true}
                      duration={500}
                      className="flex items-center scroll-smooth"
                    >
                      <User className="mr-2 size-4" />
                      <span>Início</span>
                    </ScrollLink>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <ScrollLink
                      to={'services'}
                      smooth={true}
                      duration={500}
                      className="flex items-center scroll-smooth"
                    >
                      <Truck className="mr-2 size-4" />
                      <span>Serviços</span>
                    </ScrollLink>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <ScrollLink
                      to="about"
                      smooth={true}
                      duration={500}
                      className="flex items-center"
                    >
                      <FileText className="mr-2 size-4" />
                      <span>Sobre</span>
                    </ScrollLink>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu> */}

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
