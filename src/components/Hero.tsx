import React from 'react'
import mypic from './images/entrepreneur-593358_1280.jpg'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='bg-slate-900	 h-[620px] text-white'>
        <div className='flex h-16 justify-between mx-auto px-8 sm:w-[600px] md:w-[728px] lg:w-[990px] xl:w-[1260px] 2xl:w-[1470px]'>
            <div className='py-10 mt-28'>
                <h4 className='md:text-[40px] text-[32px] leading-10 mb-4 font-semibold'>Hi, This is Abdullah Al-Mamun.</h4>
                <h3 className='md:text-[28px] text-[22px] leading-10 mb-3'>
                   A Web developer
                </h3>
                <p className='md:text-[26px] text-[20px] leading-10 mb-10'>Grow your business. So what are you waiting for? </p>
                <a className=' bg-gradient-to-r from-violet-600 to-indigo-700 px-10 py-5 rounded text-[18px]' href="">Hire Me ☜</a>
            </div>
            <div>
              
            </div>
        </div>
    </div>
  )
}

export default Hero