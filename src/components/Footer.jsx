import React from 'react'
import logo from "../assets/logo.png"
import {Instagram,Twitter,Facebook ,Youtube ,Music2 ,AtSign} from "lucide-react"
const Footer = () => {
  return (
    <div className='h-auto  bottom-0  md:grid-cols-5 sm:grid-cols-2 w-[100vw]  gap-[20px] p-[50px] bg-[#0025ff] grid '>
        <img src={logo} alt="" className='h-[150px] w-[150px]' />
        <ul className='flex text-xl font-bold flex-col '>
            <li>CONTACT US</li>
            <li>TERMS & CONDITIONS</li>
            <li>PRIVACY POLICY</li>
            <li>FAQ</li>
        </ul>
        <ul className='flex text-xl font-bold flex-col '>
            <li>COPYRIGHT</li>
            <li>PRODUCT FACTS</li>
            <li>STORE LOCATOR</li>
        </ul>
         <ul className='flex text-xl font-bold flex-col '>
            <li>SERVE PEPSI</li>
            <li>ABOUT OUR ADS</li>
            <li>CAREERS</li>
        </ul>
<div className='flex gap-2 font-bold'>
    <Instagram  />
    <Twitter />
    <Facebook />
    <Youtube />
    <Music2 />
    <AtSign />
</div>

    </div>
  )
}

export default Footer