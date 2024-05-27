import React, { useEffect, useState } from 'react'

 
function Eyes() {
    const [rotate,setRotate] = useState(0);
    useEffect(()=>{
        window.addEventListener("mousemove" , (e)=>{
            let mouseX= e.clientX;
            let mouseY= e.clientY;
            let deltaX= mouseX - window.innerWidth/2;
            let deltaY= mouseY - window.innerHeight/2;
            var angle = Math.atan2(deltaY,deltaX)*(180/Math.PI);
            setRotate(angle-180);
        })
    })
  return (
    <div className='eys w-full h-screen overflow-hidden relative'>
     <div data-scroll data-scroll-speed="-.9" className='w-full relative h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'></div>
      <div className='absolute flex gap-10  top-1/2 left-1/2  -translate-x-[50%] -translate-y-[50%]'>
       <div className='w-[15vw] h-[15vw]  relative flex items-center justify-center rounded-full bg-white'>
        <div className='w-2/3 h-2/3  relative rounded-full flex items-center justify-center bg-black'>
            <div style={{ transform: `translate(-0%, -5%) rotate(${rotate}deg)` }} className='  line top-1/2 left-1/2  -translate-x-[0%] -translate-y-[5%]  w-full h-10  '>
            <div className='w-10 h-10 rounded-full bg-white'></div>
            </div>
        
        </div>
       </div>
 <div className='w-[15vw] h-[15vw] flex relative items-center justify-center rounded-full bg-white'>
  <div className='w-2/3 h-2/3 relative flex items-center justify-center rounded-full bg-black'>
  <div style={{ transform: `translate(-0%, -5%) rotate(${rotate}deg)` }} className='line   top-1/3 left-1/3  -translate-x-[30%] -translate-y-[50%]  w-full h-10 '>
  <div className='w-10 h-10 rounded-full bg-white'></div>
  </div>
  
    </div>
     </div>
      </div>
       </div>
  )
}

export default Eyes