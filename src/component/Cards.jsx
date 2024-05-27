import React from 'react'

function Cards() {
  return (
    <div className='w-full  h-screen flex gap-5 items-center px-32 bg-zinc-200  '>
        <div className="card w-1/2 h-[50vh]   ">
            <div className="ca relative rounded-xl w-full h-full flex items-center justify-center bg-[#004D43]">
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute left-10 px-5 py-1 border rounded-full bottom-10'>&copy; 2019-2022</button>
            </div>
        </div>
        <div className="card flex gap-5 h-[50vh] w-1/2 ">
            <div className="c relative  rounded-xl w-1/2 bg-[#192826] flex items-center justify-center">
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className='absolute left-10 px-5 py-1 border rounded-full bottom-10'>Business Boost</button>
            </div>
            <div className="c relative  rounded-xl w-1/2 bg-[#192826] flex items-center justify-center">
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className='absolute border-opacity-20 left-10 px-5 py-1 border rounded-full bottom-10'>&copy; 2019</button>
            </div>
        </div>
    </div>
  )
}

export default Cards