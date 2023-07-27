import Hero from '@/components/Hero'
import React from 'react'
import Service from '@/app/service/page'
import Topbar from '@/components/Topbar'
import About from '../about/page'

const Home = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Service/>
    </div>
  )
}

export default Home