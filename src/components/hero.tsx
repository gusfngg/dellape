'use client'

import Image from 'next/image'
import { Button } from './ui/button'
import Caminhao from '@/assets/1.jpeg'
import Caminhao2 from '@/assets/caminhou.jpg'
import { PhoneCall } from 'lucide-react'
import { Tag } from './tag'
import BlurFade from '@/components/ui/blur-fade'
import { BLUR_FADE_DELAY } from '@/lib/delay-animation'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import Autoplay from 'embla-carousel-autoplay'
import QuadraAreia from '@/assets/quadra-de-areia.jpg'
import Constallation from '@/assets/constellation-01.png.jpg'
import Constellation02 from '@/assets/constellation-02.png'
import Conteallation03 from '@/assets/constellation-03.png'
import Constellation04 from '@/assets/constellation-04.png'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

export function Hero() {
  const imgs = [
    { src: Constallation },
    { src: Constellation04 },
    { src: Conteallation03 },
    { src: Constellation02 },
    { src: Caminhao },
    { src: Caminhao2 },
    { src: QuadraAreia },
  ]

  return (
    <section id="hero" className="pb-20 pt-8 md:py-10">
      <div className="container">
        <div className="items-center justify-between md:flex">
          <div className="md:max-w-[700px]">
            <div>
              <BlurFade delay={BLUR_FADE_DELAY * 2} inView>
                <div className="mt-6 bg-gradient-to-tr from-zinc-900 to-neutral-500 bg-clip-text text-7xl font-bold tracking-tighter text-transparent">
                  Areia e Pedra de Qualidade!
                </div>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 3} inView>
                <p className="mt-6 text-left text-xl tracking-tight text-neutral-900">
                  Oferecemos areia e pedra de alta qualidade para suprir as suas
                  necessidades. Com um compromisso de entregar materiais
                  confiáveis e duradouros, garantimos agilidade e eficiência
                  desde o pedido até a entrega.
                </p>
              </BlurFade>
            </div>

            <BlurFade delay={BLUR_FADE_DELAY * 4} inView>
              <Link href="https://wa.me/5555159974408" target="_blank">
                <Button
                  size={'lg'}
                  className="mt-[30px] flex max-w-max items-center gap-2 bg-neutral-900 hover:bg-neutral-800"
                >
                  <PhoneCall className="size-[1.18rem]" />
                  <span>Entre em contato</span>
                </Button>
              </Link>
            </BlurFade>

            <div className="mt-12 flex flex-col items-start gap-4 md:mt-8 md:flex-row md:items-center">
              <BlurFade delay={BLUR_FADE_DELAY * 5} inView>
                <Tag tag="+8 mil materiais transportados" />
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 6} inView>
                <Tag tag="+1000 clientes satisfeitos" />
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 7} inView>
                <Tag tag="+2000 obras realizadas" />
              </BlurFade>
            </div>
          </div>
          <div className="mt-20 flex-1 rounded-sm md:mt-0 md:max-w-[500px]">
            <BlurFade delay={BLUR_FADE_DELAY * 2.5} inView>
              <Carousel
                opts={{
                  loop: true,
                }}
                plugins={[
                  Autoplay({
                    delay: 2500,
                  }),
                ]}
              >
                <CarouselContent>
                  {imgs.map(({ src }, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-[3/4] items-center justify-center p-0">
                            <Image
                              src={src}
                              alt=""
                              width={1920}
                              height={1080}
                              className="size-full rounded-lg object-cover"
                            />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  )
}
