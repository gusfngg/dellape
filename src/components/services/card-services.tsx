import { Truck } from 'lucide-react'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'

import Image, { StaticImageData } from 'next/image'

// Definindo a interface para os props
interface CardServicesProps {
  name: string
  description: string
  img?: StaticImageData
}

export function CardServices({ name, description, img }: CardServicesProps) {
  return (
    <Card className="flex flex-col bg-[#f8f5ed]">
      <CardHeader>
        <div className="flex items-start gap-2">
          <Truck size={20} className="text-neutral-800" />
          <CardTitle>{name}</CardTitle>
        </div>
        <CardDescription className="my-6 text-justify text-neutral-600">
          {description}
        </CardDescription>

        {img && (
          <Image
            className="h-80 w-full rounded"
            src={img}
            alt=""
            height={1920}
            width={1080}
          />
        )}
      </CardHeader>
    </Card>
  )
}
