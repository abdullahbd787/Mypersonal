import React from 'react'
import {CgWebsite} from "react-icons/cg"
const Service = () => {
  return (
    <div className=' p-10 text-black border-b'>
        <div  className='flex flex-col justify-center mx-auto px-8 sm:w-[600px] md:w-[728px] lg:w-[990px] xl:w-[1260px] 2xl:w-[1470px]'>
            <h3 className='text-center text-[24px] mt-6 font-medium'>Our Service</h3>
            <h4 className='text-center text-[20px] mt-3 font-light'>What Web Solution Do You Need? Genuine care for your web development project.</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
                <div className='flex flex-col items-center justify-center'>
                  <span className='text-green-500 text-[50px]'><CgWebsite/></span>
                  <h1 className='text-[20px]'>Web Application Development</h1>
                  <p className='text-center'>Innovative Web application Development for your unique needs to enhance your business growth and user experience.</p>
                </div>
                <div className='flex flex-col items-center justify-center text-center'>
                <span className='text-yellow-500 text-[50px]'><CgWebsite/></span>
                  <h1 className='text-[20px]'>UI/UX Design</h1>
                  <p>Innovative Web application Development for your unique needs to enhance your business growth and user experience.</p>
                </div>
                <div className='flex flex-col items-center justify-center text-center'>
                <span className='text-blue-500 text-[50px]'><CgWebsite/></span>
                  <h1 className='text-[20px]'>Web Design & Development</h1>
                  <p>Innovative Web application Development for your unique needs to enhance your business growth and user experience.</p>
                </div>
                <div className='flex flex-col items-center justify-center text-center'>
                <span className='text-red-500 text-[50px]'><CgWebsite/></span>
                  <h1 className='text-[20px]'>e-Commerce Development</h1>
                  <p>Innovative Web application Development for your unique needs to enhance your business growth and user experience.</p>
                </div>
                <div className='flex flex-col items-center justify-center text-center'>
                <span className='text-pink-500 text-[50px]'><CgWebsite/></span>
                  <h1 className='text-[20px]'>Search engine optimize </h1>
                  <p>Innovative Web application Development for your unique needs to enhance your business growth and user experience.</p>
                </div>
                <div className='flex flex-col items-center justify-center text-center'>
                <span className='text-purple-500 text-[50px]'><CgWebsite/></span>
                  <h1 className='text-[20px]'>WordPress Development</h1>
                  <p className=''>Innovative Web application Development for your unique needs to enhance your business growth and user experience.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Service