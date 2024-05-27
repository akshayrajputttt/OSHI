import React from 'react'

function Navbar() {
  return (
    <div className='fixed z-[999] w-full px-20 py-8 flex justify-between items-center'>
        <div className='logo'>
            OSHI
        </div>
        <div className='Links flex gap-9'>
  {["Service", "Our Work", "Insights", "About us" , "Contact"].map((item, index) => (
    <a key={index} className={`text-lg font-semibold ${index===4 && "ml-32"}`}>{item}</a>
  ))}
</div>
    </div>
  )
}

export default Navbar