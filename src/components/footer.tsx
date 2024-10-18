import { MapPin, PhoneCall } from 'lucide-react'
import BlurFade from './ui/blur-fade'
import { BLUR_FADE_DELAY } from '@/lib/delay-animation'

export function Footer() {
  return (
    <footer>
      <BlurFade delay={BLUR_FADE_DELAY * 21} inView>
        <div className="p-7 md:p-20">
          <div className="bg-gradient-to-tr from-zinc-300 to-neutral-200 bg-clip-text text-3xl font-bold leading-snug text-transparent md:text-4xl">
            Entre em contato!
          </div>

          <ul className="mt-8 flex flex-col gap-4">
            <li className="flex items-center gap-2 text-neutral-200">
              <MapPin />

              <span className="text-base font-medium md:text-xl">
                Salto de Pirapora - São Paulo, Brasil.
              </span>
            </li>
            <li className="flex items-center gap-2 text-neutral-200">
              <PhoneCall />

              <span className="text-base font-medium md:text-xl">
                +55 15 99744-0854
              </span>
            </li>
          </ul>
        </div>
      </BlurFade>
    </footer>
  )
}
