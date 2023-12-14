import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='px-16 mt-16 md:mt-24 grid grid-cols-1 gap-8 md:gap-0 md:grid-cols-2 justify-center'>
        <div className='mt-16 text-center md:text-start'>
            <h2 className='font-bold text-indigo-950 text-3xl md:text-5xl tracking-wide mb-2'>Free Resume Builder:</h2>
            <h2 className='font-bold text-indigo-950 text-3xl md:text-5xl tracking-wide mb-2'>Create a Professional</h2>
            <h2 className='font-bold text-indigo-950 text-3xl md:text-5xl tracking-wide'>Resume Online</h2>
            <p className='text-red-400 font-medium mt-2 mb-10'>Free to use.</p>
            <Link to="/resume" className='py-3 px-6 font-medium bg-red-500 rounded-3xl text-white duration-200 hover:bg-red-400/90'>CREATE YOUR RESUME NOW</Link>
        </div>
        <div className='w-full md:w-[600px] '>
            <img className='w-full h-full object-cover' src="../../undraw_Innovative_re_rr5i.png" alt="" />
        </div>
    </div>
  )
}

export default Home