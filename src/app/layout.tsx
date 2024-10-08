import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { DM_Sans } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dellape',
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
