import { BLUR_FADE_DELAY } from '@/lib/delay-animation'
import BlurFade from './ui/blur-fade'
import Image from 'next/image'
import Constellation from '@/assets/constellation-01.png.jpg'

export function Transport() {
  return (
    <section id="transport" className="mt-20 border-t border-neutral-300">
      <div className="flex flex-col items-start">
        <BlurFade delay={BLUR_FADE_DELAY * 8} inView>
          <div className="my-7 bg-gradient-to-tr from-zinc-900 to-neutral-500 bg-clip-text text-5xl font-bold leading-snug text-transparent">
            Transporte
          </div>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 9} inView>
          <p className="mb-6 text-justify text-base tracking-tight text-neutral-900 md:max-w-[600px] md:text-lg">
            Além de fornecer materiais de alta qualidade, oferecemos também
            <strong> serviços de transporte</strong>, garantindo que o produto
            chegue com segurança e pontualidade ao local da sua obra. Nossa
            equipe é dedicada a atender as necessidades específicas de cada
            cliente, oferecendo soluções ágeis e confiáveis para projetos de
            construção e reformas.
          </p>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 10} inView>
          <Image
            src={Constellation}
            alt=""
            width={1920}
            height={1080}
            className="aspect-[3/4] rounded-lg object-cover"
          />
        </BlurFade>
      </div>
    </section>
  )
}
