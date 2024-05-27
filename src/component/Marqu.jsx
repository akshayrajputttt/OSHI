import { motion } from 'framer-motion'
import React from 'react'

function Marqu() {
  return (
    <div className="w-full py-10 bg-[#004D43]">
        <div className='text border-t-2 border-b-2 border-zinc-400  flex overflow-hidden whitespace-nowrap'>
            <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{repeat: Infinity , duration: 6 , ease: "linear"}} className='text-[18vw] leading-none font-["Canopee"] font-semibold uppercase pt-10'>We are ochi</motion.h1>
            <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{repeat: Infinity , duration: 6 , ease: "linear"}} className='text-[18vw] leading-none font-["Canopee"] font-semibold uppercase pt-10'>We are ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marqu