import { Services } from '@/components/services'
import NavBar from '@/components/navBar'
import { About } from '@/components/about'
import { Hero } from '@/components/hero'

export default function Home() {
  return (
    <div className="mx-auto mb-20 flex min-h-screen max-w-[92rem] flex-col px-5 antialiased">
      <NavBar />

      <Hero />
      <Services />
      <About />
    </div>
  )
}
