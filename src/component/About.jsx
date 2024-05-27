import React from 'react'

function About() {
  return (
    <div data-scroll data-scroll-speed="-.2" className='w-full p-20  bg-[#CDEA68] text-black'>
        <h1  className='text-6xl leading-[3.8vw] -tracking-tighter font-semibold'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
  <div className='w-full flex gap-5 pt-6 border-t-[1px] border-[#141414] mt-20'>
    <div className='w-1/2'>
        <h1 className='text-6xl'>Our Approach</h1>
        <button className='px-8 py-5 mt-7 bg-zinc-900 rounded-full text-white'>Read More</button>
    </div>
    <div className='w-1/2 bg-red-200 h-[60vh] bg-cover bg-center rounded-3xl bg-[url("https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg")]'></div>
  </div>
    </div>
  )
}

export default About