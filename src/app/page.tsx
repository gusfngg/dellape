import { Services } from '@/components/services'
import NavBar from '@/components/navBar'
import { About } from '@/components/about'
import { Hero } from '@/components/hero'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="mx-auto mb-20 flex min-h-screen max-w-[90rem] flex-col px-5 antialiased">
      <div>
        <NavBar />

        <Hero />
        <Services />
        <About />
      </div>

      <div className="mt-20 rounded-lg bg-neutral-900">
        <Footer />
      </div>
    </div>
  )
}
