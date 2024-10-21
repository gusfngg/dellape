'use client'

import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'
import Caminhao from '@/assets/caminhão.png'
import Caminhao2 from '@/assets/background-truck.jpg'

export function CarrouselAbout() {
  const imgs = [{ src: Caminhao }, { src: Caminhao2 }]
  return (
    <div>
      <Carousel
        className="mt-8 h-[300px] md:mt-0 md:h-[400px] md:w-[700px]"
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
              <Image
                src={src}
                alt=""
                width={2048}
                height={1152}
                className="h-[300px] w-[700px] rounded-md md:h-[400px]"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
