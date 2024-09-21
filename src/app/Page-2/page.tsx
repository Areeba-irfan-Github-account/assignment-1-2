import React from 'react'
import Navbar from '../components/Navbar'

function page() {
  return (
    <div className=' flex flex-col justify-center '>
        <Navbar/>
        <h1 className='flex justify-center text-3xl font-bold m-8 p-9'>
            This is my <span className='text-teal-300'>Second</span> Page
        </h1>
        <p className='bg-slate-600 m-5 p-9 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos unde iste neque! Nobis dolor illum totam. Quas dignissimos totam nemo iusto dolor, dicta nulla placeat ex, amet facilis aut aperiam?</p>
       <div className='flex justify-center items-center'>
       <button className='flex justify-center items-center  bg-blue-600 rounded-lg m-4 p-4'>Thank you</button>
       </div>
    </div>
  )
}

export default page