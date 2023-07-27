import React from 'react'
import {FaFacebookF,FaMapMarkerAlt, FaPhoneAlt,FaPaperPlane} from 'react-icons/fa'
import {AiOutlineTwitter, AiFillInstagram} from 'react-icons/ai'
import {BiLogoLinkedin} from 'react-icons/bi'


const Footer = () => {
  return (
    <div className='pt-5 bg-[#e7e8e9]'>
      <div className='grid text-[#6B7280] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto px-8 sm:w-[600px] md:w-[728px] lg:w-[990px] xl:w-[1260px] 2xl:w-[1470px]'>
        <div className=' mb-6 pr-10'>
          <h1 className='text-[22px] mb-4'>Md. Abdullah Al-Mamun</h1>
          <p>Developer</p>
          <p>
            A small river named Duden flows by their place and supplies it with the necessary regelialia.
          </p>
          <div className='social-icons mt-5'>
            <ul className='flex gap-4 text-white'>
              <li><a className='bg-blue-600 px-4 p-4 flex rounded-full hover:bg-blue-500' href=""><FaFacebookF/></a></li>
              <li><a className=' bg-[#1DA1F2] px-4 p-4 flex rounded-full hover:bg-[#2c92d1]' href=""><AiOutlineTwitter/></a></li>
              <li><a className=' bg-gradient-to-l from-[#6A12C5] to-[#F70575] px-4 p-4 flex rounded-full' href=""><AiFillInstagram/></a></li>
              <li><a className='bg-[#0066C8] px-4 p-4 flex rounded-full hover:bg-[#4497e5]' href=""><BiLogoLinkedin/></a></li>
            </ul>
          </div>
        </div>
        <div className=' mb-6'>
          <h1 className='text-[22px] mb-4'>Services</h1>
          <ul className='grid grid-cols-1 gap-2'>
            <li><a href="">&#8594; Web Design</a></li>
            <li><a href="">&#8594; Web Development</a></li>
            <li><a href="">&#8594; Graphic Design</a></li>
            <li><a href="">&#8594; UI/UX Design</a></li>
          </ul>
        </div>
        <div className=' mb-6'>
          <h1 className='text-[22px] mb-4'>Have a Questions?</h1>
          <ul>
            <li className='flex items-center gap-6 mb-6'>
              <span><FaMapMarkerAlt/></span>
              <span>Meherpur, Khulna Division</span>
            </li>
            <li className='flex items-center gap-6 mb-6'>
              <span><FaPhoneAlt/></span>
              <span>01307252362</span>
            </li>
            <li className='flex items-center gap-6 mb-6'>
              <span><FaPaperPlane/></span>
              <span>abdullah.it1328@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer