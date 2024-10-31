import { PhoneCall } from 'lucide-react'
import { Button } from './ui/button'
import BlurFade from '@/components/ui/blur-fade'
import { BLUR_FADE_DELAY } from '@/lib/delay-animation'
import { Separator } from './ui/separator'
import Link from 'next/link'
import { CarrouselAbout } from './carrousel-about'

export function About() {
  return (
    <section id="about" className="mt-12 border-t">
      <div className="my-9 flex flex-col items-start gap-3 md:flex-row md:items-end">
        <BlurFade delay={BLUR_FADE_DELAY * 17} inView>
          <div className="bg-gradient-to-tr from-zinc-900 to-neutral-500 bg-clip-text text-5xl font-bold leading-snug text-transparent">
            Sobre nós - Dellape
          </div>
        </BlurFade>
      </div>

      <div className="items-start justify-between gap-4 md:flex">
        <div>
          <BlurFade delay={BLUR_FADE_DELAY * 19} inView>
            <p className="mb-6 text-justify text-base tracking-tight text-neutral-900 md:max-w-[600px] md:text-lg">
              Na Dellape, com mais de 14 anos de experiência no transporte de
              areia e pedra, priorizamos qualidade, honestidade e compromisso.
              Nossos serviços são realizados com transparência e eficiência,
              garantindo a satisfação de nossos clientes em cada entrega. Sua
              confiança é a nossa maior conquista.
            </p>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 20} inView>
            <p className="text-justify text-base tracking-tight text-neutral-900 md:max-w-[600px] md:text-lg">
              Além da excelência no atendimento, trabalhamos com transparência
              em cada etapa do processo, conquistando a confiança de nossos
              parceiros ao longo dos anos. Na Dellape, cada entrega reflete
              nosso compromisso em superar expectativas e construir relações
              duradouras.
            </p>
          </BlurFade>
        </div>

        <BlurFade delay={BLUR_FADE_DELAY * 19} inView>
          <CarrouselAbout />
        </BlurFade>
      </div>

      <BlurFade delay={BLUR_FADE_DELAY * 21} inView>
        <Link href={'https://wa.me/+551599744-0854'} target="_blank">
          <Button
            size={'lg'}
            className="mt-9 flex w-full items-center gap-2 bg-neutral-900 hover:bg-neutral-800 md:mt-[-44px] md:w-auto"
          >
            <PhoneCall className="size-[1.18rem]" />
            <span>Faça um orçamento</span>
          </Button>
        </Link>
      </BlurFade>

      <Separator className="mt-10 bg-neutral-300" />
    </section>
  )
}
