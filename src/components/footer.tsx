import { MapPin, PhoneCall } from 'lucide-react'
import BlurFade from './ui/blur-fade'
import { BLUR_FADE_DELAY } from '@/lib/delay-animation'

export function Footer() {
  return (
    <footer>
      <BlurFade delay={BLUR_FADE_DELAY * 21} inView>
        <div className="mt-16 md:mt-24">
          <div className="bg-gradient-to-tr from-zinc-900 to-neutral-500 bg-clip-text text-4xl font-bold leading-snug text-transparent">
            Entre em contato!
          </div>

          <ul className="mt-8 flex flex-col gap-4">
            <li className="flex items-center gap-2">
              <MapPin />

              <span className="text-xl font-medium">
                Salto de Pirapora - São Paulo, Brasil.
              </span>
            </li>
            <li className="flex items-center gap-2">
              <PhoneCall />

              <span className="text-xl font-medium">+55 15 99744-0854</span>
            </li>
          </ul>
        </div>
      </BlurFade>
    </footer>
  )
}
