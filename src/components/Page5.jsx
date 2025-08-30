import React from 'react'
import can1 from "../assets/can1.png"
import can2 from "../assets/can2.png"
import can3 from "../assets/can3.png"
import can4 from "../assets/can4.png"
import can5 from "../assets/can5.png"
import can6 from "../assets/can6.png"
import can7 from "../assets/can7.png"
import can8 from "../assets/can8.png"
import can9 from "../assets/can9.png"
import can10 from "../assets/can10.png"


const Page5 = () => {
    const cans = [can1, can2, can3, can4, can5, can6, can7, can8, can9, can10];

    return (
        <div className='flex flex-col py-[50px] gap-3 h-[100%] w-[100vw] items-center'>
            <h1 className='md:text-6xl text-4xl font-extrabold text-[#0026ff]'>PRODUCTS</h1>
            <div className='w-[100%] h-auto justify-center  flex flex-wrap'>
                {cans.map((src, index) => (
                    <img key={index} src={src} className='h-[300px] hover:bg-[#0025f54d] w-auto py-[20px] md:px-[50px] px-[80px] border-[1px] border-[#0025ff]' alt="" />
                ))}
            </div>
        </div>
    )
}

export default Page5