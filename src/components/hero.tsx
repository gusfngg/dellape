'use client'

import Image from 'next/image'
import { Button } from './ui/button'
import Caminhao from '@/assets/1.jpeg'
import { PhoneCall } from 'lucide-react'
import { Tag } from './tag'
import BlurFade from '@/components/ui/blur-fade'
import { BLUR_FADE_DELAY } from '@/lib/delay-animation'
import Link from 'next/link'

export function Hero() {
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
                <Tag tag="+8 mil material transportado" />
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 6} inView>
                <Tag tag="+1000 clientes satisfeitos" />
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 7} inView>
                <Tag tag="+2000 obras realizadaas" />
              </BlurFade>
            </div>
          </div>
          <div className="mt-20 flex-1 rounded-sm md:mt-0 md:max-w-[500px]">
            <BlurFade delay={BLUR_FADE_DELAY * 2.5} inView>
              <Image
                className="rounded-sm border-2 border-neutral-600"
                src={Caminhao}
                height={1920}
                width={1080}
                alt=""
              />
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  )
}
