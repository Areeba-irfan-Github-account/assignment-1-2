import Link from 'next/link'
import React from 'react'


function Navbar() {
  return (
    <div className='flex justify-between items-center p-5 bg-teal-500 pad'>
        <h1 className='font-serif text-3xl font-bold'>My Website</h1>
        <div className='space-x-3 font-sans font-bold '>
            <Link href="/" legacyBehavior ><a href="/" className='hover:bg-teal-600 p-3 hover:text-lg'>Home</a></Link>
            <Link href="/Page-1" legacyBehavior><a className='hover:bg-teal-600 p-3 hover:text-lg' >Page-1</a></Link>
            <Link href="/Page-2" legacyBehavior><a className='hover:bg-teal-600 p-3 hover:text-lg'>Page-2</a></Link>
        </div>
    </div>
  )
}

export default Navbar