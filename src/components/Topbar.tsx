import Link from 'next/link'
import React from 'react'

const Topbar = () => {
  return (
    <div className='bg-purple-400'>
        <ul>
            <Link href={'/home'}><li >Home</li></Link>
            <Link  href="/about" ><li>About</li></Link>
            <Link  href="/contact" ><li>Contact</li></Link>
            
        </ul>
    </div>
  )
}

export default Topbar