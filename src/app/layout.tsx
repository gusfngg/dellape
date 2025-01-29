import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { DM_Sans } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://dellape.vercel.app'),
  keywords: [
    'Transporte de Areia e Pedra',
    'Transporte de Areia e Pedra em Salto de Pirapora',
    'Venda de Areia e Pedra',
    'Venda de Areia e Pedra em Salto de Pirapora',
    'Venda de areia',
    'Venda de pedra',
    'Transporte de Pedra',
    'Transporte de Areia',
    'Transporte de pedra',
  ],
  title: 'Transporte e venda de Areia e Pedra | Salto de Pirapora',
  openGraph: {
    title: 'Dellape | Serviços de Areia e Pedra',
    description:
      'Oferecemos areia e pedra de alta qualidade para suprir as suas necessidades. Com um compromisso de entregar materiais confiáveis e duradouros, garantimos agilidade e eficiência desde o pedido até a entrega.',
    images: [''],
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Dellape',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body
        // eslint-disable-next-line max-len
        className={` ${dmSans.className} overflow-auto bg-[#fcfaf3] antialiased [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-neutral-800 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-neutral-800 [&::-webkit-scrollbar]:w-1`}
      >
        {children}
      </body>
    </html>
  )
}
