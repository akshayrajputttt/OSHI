import React from 'react'

function Footer() {
  return (
    <div className='w-full h-screen  bg-zinc-900 flex gap-5 p-20'>
        <div className='w-1/2'>
            <div className=''>
                <h1 className='text-[8vw] uppercase leading-none mb-1 font-semibold'>EYE</h1>
                <h1 className='text-[8vw] uppercase leading-none mb-1'>OPENING</h1>
            </div>
        </div>
        <div className='w-1/2'>
            <h1 className='text-[6vw] uppercase leading-none'>Presentation
           
            </h1>
            <div className="dets">
                <a  className="block text-xl text-zinc-100 font-extralight"href="#">FACEBOOK</a>
                <a className="block text-xl text-zinc-100 font-extralight" href="#">TWITTER</a>
                <a  className="block text-xl text-zinc-100 font-extralight"href="#">INSTAGRAM</a>
            </div>
        </div>
    </div>
  )
}

export default Footer