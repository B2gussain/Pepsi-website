import React from 'react'
import can from "../assets/can-2.webp"

const Landing_page = () => {
  return (
    <div className='z-10 pb-[60px] top-0 landing_page h-[100%] md:gap-[80px] gap-[20px] w-[100vw] flex flex-col md:flex-row items-center justify-center text-center'>

      {/* Image with slide-in-left animation */}
      <img 
        src={can} 
        className='h-[250px] md:h-[450px] saturate-[1.2] animate-slideInLeft' 
        alt="Can" 
      />

      {/* Text with slide-in-right animation */}
      <div className=''>
        <h1 className='text-6xl md:text-8xl text-[#0025ff] font-extrabold'>WELCOME</h1>
        <h2 className='text-3xl md:text-6xl font-bold text-white'>LET’S GET STARTED</h2>
        <h3 className='mt-[30px] text-xl md:text-3xl font-bold text-white tracking-wide'>
          CHECK OUT THE LATEST DROP<br/>&#9660;
        </h3>
      </div>
    </div>
  )
}

export default Landing_page;
