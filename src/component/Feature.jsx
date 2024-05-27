import React from 'react'

function Feature() {
  return (
    <div className='w-full py-10 bg-zinc-900'>
        <div className='w-full px-20 border-b-2 pb-10'>
            <h1 className='text-8xl tracking-tight'>FEATURED</h1>
           
        </div>
       <div className='px-20 py-10'>
       <div className="cards w-full flex gap-10 ">
                <div className="card relative  w-1/2 h-[80vh] ">
                    <h1 className='absolute text-7xl left-full -translate-x-1/2 top-1/2 -translate-y-1/2  z-[9999]'>FYDE</h1>
                    <div className='w-full rounded-xl h-full '>
<img className="w-full h-full bg-cover"src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                    </div>
                </div>
                <div className="card  w-1/2 h-[80vh] relative ">
                <h1 className='absolute text-7xl right-full translate-x-1/2 top-1/2 -translate-y-1/2   z-[9999]'></h1>
                <div className='w-full rounded-xl h-full '>
<img className="w-full h-full bg-cover"src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                </div>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Feature