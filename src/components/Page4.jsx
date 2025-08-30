import React from 'react'
import video from "../assets/Landing_video.mp4"
import text from "../assets/text.png"

const Page4 = () => {
  return (
    <div className='relative h-[100vh] w-[100vw]'>
      {/* Background Video */}
      <video 
        src={video} 
        loop 
        autoPlay 
        muted 
        className='absolute top-0 left-0 h-full w-full object-cover'
      />

      {/* Centered Text Image */}
      <img 
        src={text} 
        alt="Centered Text" 
        className='absolute top-1/2 left-1/2 h-[350px] w-[350px] bg-transparent 
                   transform -translate-x-1/2 -translate-y-1/2'
      />
    </div>
  )
}

export default Page4
