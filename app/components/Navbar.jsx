import {assets} from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div>
     	<nav className='w-full fixed px-5 lg:px-8 x1:px-[8%] py-4
		flex items-center justify-between bg-white z-50 shadow-md'>
		<a href=""> 
		<Image src={assets.logo} className='w-28 alt="" 
		cursor-pointer mr-24'/>
		</a>
			<ul>
				<li><a href="#top">Home</a></li>
					<li><a href="#about">About me</a></li>
			<li><a href="#services">Services</a></li>
				<li><a href="#work">My work</a></li>
				<li><a href="#contact">Contact</a></li>
			</ul>
			<div> 
				<a href="#contact">Contact <Image src={assets.arrow_icon} alt="" className='w-3'/></a>
			</div>
		</nav>
    </div>
  )
}

export default Navbar

