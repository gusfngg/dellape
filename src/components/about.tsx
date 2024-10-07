import { PhoneCall } from 'lucide-react'
import Image from 'next/image'
import Caminhao from '@/assets/caminhão.png'
import { Button } from './ui/button'
import BlurFade from '@/components/ui/blur-fade'
import { BLUR_FADE_DELAY } from '@/lib/delay-animation'

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

      <div className="items-start justify-between md:flex">
        <div>
          <BlurFade delay={BLUR_FADE_DELAY * 18} inView>
            <p className="mb-6 text-justify text-lg tracking-tight text-neutral-900 md:max-w-[650px]">
              Na Dellape, com mais de 14 anos de experiência no transporte de
              areia e pedra, priorizamos qualidade, honestidade e compromisso.
              Nossos serviços são realizados com transparência e eficiência,
              garantindo a satisfação de nossos clientes em cada entrega. Sua
              confiança é a nossa maior conquista.
            </p>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 19} inView>
            <p className="text-justify text-lg tracking-tight text-neutral-900 md:max-w-[650px]">
              Além da excelência no atendimento, trabalhamos com transparência
              em cada etapa do processo, conquistando a confiança de nossos
              parceiros ao longo dos anos. Na Dellape, cada entrega reflete
              nosso compromisso em superar expectativas e construir relações
              duradouras.
            </p>
          </BlurFade>
        </div>

        <BlurFade delay={BLUR_FADE_DELAY * 17} inView>
          <Image
            src={Caminhao}
            width={2048}
            height={1152}
            alt=""
            className="mt-8 h-[300px] w-[700px] rounded-md md:mt-0 md:h-[400px]"
          />
        </BlurFade>
      </div>

      <BlurFade delay={BLUR_FADE_DELAY * 20} inView>
        <Button
          size={'lg'}
          className="mt-9 flex w-full items-center gap-2 bg-neutral-900 hover:bg-neutral-800 md:mt-[-44px] md:w-auto"
        >
          <PhoneCall className="size-[1.18rem]" />
          <span>Faça um orçamento</span>
        </Button>
      </BlurFade>
    </section>
  )
}
