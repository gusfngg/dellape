'use client'
import { CardServices } from './card-services'
import BlurFade from '@/components/ui/blur-fade'
import { BLUR_FADE_DELAY } from '@/lib/delay-animation'

import AreiaFina from '@/assets/imgs-services/areia-fina.jpg'
import AreiaMedia from '@/assets/imgs-services/areia-media.jpg'
import AreiaMediaBranca from '@/assets/imgs-services/areia-media=branca.jpg'
import Pedra1 from '@/assets/imgs-services/pedra1.png'
import Pedra2 from '@/assets/imgs-services/pedra2.jpg'
import Rachao from '@/assets/imgs-services/rachao.jpg'
import Pedrisco from '@/assets/imgs-services/pedrisco.jpg'
import PóDePedra from '@/assets/imgs-services/pó de pedra.png'

export function Services() {
  return (
    <section id="services" className="border-t border-neutral-300">
      <div className="flex flex-col items-start md:items-center">
        <BlurFade delay={BLUR_FADE_DELAY * 8} inView>
          <div className="my-7 bg-gradient-to-tr from-zinc-900 to-neutral-500 bg-clip-text text-5xl font-bold leading-snug text-transparent">
            Serviços
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 justify-center gap-6 md:grid-cols-2 lg:grid-cols-4">
          <BlurFade delay={BLUR_FADE_DELAY * 9} inView>
            <CardServices
              name="Areia fina"
              description="Areia fina é um tipo de areia cujas partículas possuem diâmetros pequenos,
            normalmente entre 0,06 mm e 0,2 mm. Esse tipo de areia é comumente utilizado em aplicações que exigem um 
            acabamento mais suave, como em rebocos de construção e argamassas finas."
              img={AreiaFina}
            />
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 10} inView>
            <CardServices
              name="Areia média"
              description="Areia média é composta por grãos com diâmetros entre 0,2 mm e 0,6 mm. Areia média é usada e
            na construção civil, é ideal para concretos e assentamento de tijolos, 
            proporcionando boa resistência e aderência, além de ser adequada para pisos e contrapiso."
              img={AreiaMedia}
            />
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 11} inView>
            <CardServices
              name="Areia média branca"
              description="Areia média branca possui grãos de 0,2 mm a 0,6 mm e é valorizada pela cor clara e pureza. 
            Usada em acabamentos finos e decoração, é comum em paisagismo, rejuntes e revestimentos. 
            Sua tonalidade branca dá destaque estético em projetos sofisticados de construção."
              img={AreiaMediaBranca}
            />
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 12} inView>
            <CardServices
              name="Pedra 1"
              description="Pedra 1 é um agregado de granulometria entre 9,5 mm e 19 mm, 
            utilizado em concretos estruturais e pavimentações. 
            Sua uniformidade garante boa resistência mecânica, sendo ideal para lajes, pilares e fundações, 
            além de melhorar a drenagem em obras de infraestrutura."
              img={Pedra1}
            />
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 13} inView>
            <CardServices
              name="Pedra 2"
              description="Pedra 2 tem granulometria entre 19 mm e 25 mm, sendo amplamente usada em concretos de maior resistência, 
            como em grandes estruturas e fundações. Concretos que exijam mais resistência.
            Devido ao seu tamanho, oferece melhor compactação e drenagem, sendo indicada para pavimentações e obras de infraestrutura pesada."
              img={Pedra2}
            />
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14} inView>
            <CardServices
              name="Rachão"
              description="Rachão é um tipo de pedra bruta com granulometria entre 76 mm e 250 mm,
             usada em obras de grande porte, como base de pavimentação e contenção de encostas.
            Sua alta resistência e tamanho proporcionam excelente drenagem, sendo ideal para estabilizar solos em aterros. Drenagem
            Estabilização de solo Concreto ciclópico"
              img={Rachao}
            />
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 15} inView>
            <CardServices
              name="Pedrisco"
              description="Pedrisco é um agregado com granulometria entre 4,8 mm e 9,5 mm, utilizado em concretos 
            finos, calçadas e blocos de concreto. Sua pequena dimensão permite boa trabalhabilidade e acabamento, 
            sendo também ideal para pavimentação de estradas e revestimentos em geral."
              img={Pedrisco}
            />
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 16} inView>
            <CardServices
              name="Pó de pedra "
              description="Pó de pedra é um material fino, resultante da britagem de rochas, com partículas abaixo de 4,8 mm. Usado em calçadas,
             pavimentações intertravadas e assentamento de pisos, é valorizado pela boa compactação e drenagem. Também substitui a areia em 
             algumas misturas de concreto."
              img={PóDePedra}
            />
          </BlurFade>
        </div>
      </div>
    </section>
  )
}
