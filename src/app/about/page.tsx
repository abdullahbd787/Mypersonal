import React from 'react'
import mypic from './entrepreneur-593358_1280.jpg'
import Image from 'next/image'


const About = () => {
  return (
    <div className='py-10 border-b'>
      <div className='md:items-center flex flex-col-reverse md:flex-row mx-auto px-8 sm:w-[600px] md:w-[728px] lg:w-[990px] xl:w-[1260px] 2xl:w-[1470px]'>
        <div className="about-info md:w-6/12 pr-10">
          <h2 className='md:text-[40px] text-[28px] text-[#414650]'>So, Who am I?</h2>
          <p className='mt-3 mb-8 text-[#6B7280]'>
          I&quot;m your new social media bestie. My mission is to help small and medium-sized businesses grow their audience and brand recognition through social media. My goal is to help you understand the power of social media and create connections that go beyond the internet.
          </p>
          <a className='px-10 py-5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-[18px] rounded' href="">Contact me</a>
        </div>
        <div className="about-image md:w-6/12">
          <Image src={mypic} alt="" />
        </div>
      </div>    
    </div>
  )
}

export default About