import React from 'react'
import pepsi_can from "../assets/pepsi-cans.mp4"
const Page2 = () => {
  return (
    <div className='h-[100%] w-[100vw]'>
        <video src={pepsi_can} autoPlay loop muted className='w-[100%] h-[100vh] object-cover'></video>
    </div>
  )
}

export default Page2;