import React from 'react'
import Navbar from '../components/Navbar'

function page() {
    return (
        <div>
            <Navbar />
            <h1 className='flex justify-center text-3xl font-serif m-8 p-3'>This is my <span className='text-teal-400'>  First</span> Page </h1>
            <p className=' flex justify-center text-xl bg-gray-900 m-8 p-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur corrupti incidunt at commodi facilis obcaecati maxime sunt quaerat esse, magni soluta illum mollitia? Recusandae, dolorum maxime cupiditate eos libero officiis.</p>
        </div>
    )
}

export default page