import Image from 'next/image'
import About from './about/page'
import Hero from '@/components/Hero'
import Service from './service/page'

export default function Home() {
  return (
    <main className="">
      <Hero/>
      <About/>
      <Service/>
    </main>
  )
}
