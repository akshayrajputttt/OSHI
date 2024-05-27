import { motion } from 'framer-motion'
import React from 'react'

function Landing() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='Textstructure mt-40 px-20'>
        {["We Create", "Eye opening", "Presentations"].map((item, index) => (
  <div key={index} className='Masker'>
    <div className='w-fit flex items-center'>
        {index===1 && (<motion.div initial={{width: 0}} animate={{width:"10vw"}} transition={{ease: [0.76,0,0.24,1], duration: 2}} className='w-[10vw] h-[6vw] relative top-[0.4vw] bg-cover bg-green-500 bg-[url("https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg")]'></motion.div>)}
    <h1 className="uppercase mr-[1vw] text-8xl font-Domaine_Disp_Cond_Medium leading-[7vw] tracking-tighter font-semibold">{item}</h1>
    </div>
   
  </div>
))}    
 </div>
        <div className='border-t border-zinc-900 mt-24 flex justify-between px-20 py-2 items-center'>
  {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
    <p key={index} className='text-md font-light'>{item}</p>
  ))}
  <div className='Start'>
    <div className='px-4 py-2 border-[2px] rounded-full border-zinc-500'>Start the project</div>
  </div>
</div>

    </div>
  )
}

export default Landing