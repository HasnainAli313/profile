import React from 'react'
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { LiaGithub } from "react-icons/lia";
import { TiSocialInstagramCircular } from "react-icons/ti";
import profile from "../assets/Pic2.png"


function Home() {
 
  return (
    <>
    <div className='text-center pt-6 text-white '>
        <img className='w-56 m-auto ' src={profile} alt="profile pic" />
     <h1 className='md:text-7xl text-3xl m-5 font-bold'>Hi, its me <span className='text-blue-500'>Hasnain Ali</span> </h1>
     <h2 className='md:text-4xl text-2xl mt-10'>A Frontend Web Developer</h2> 
    </div>

    <div className='flex justify-center mt-10 md:mt-4 '>
        <a className='hover:scale-105 transition'  href="https://linkedin.com/in/HasnainAli313">
         <TiSocialLinkedinCircular  color='white'  size={'70px'}/>   
        </a>
        <a className='hover:scale-105 transition' href="https://github.com/HasnainAli313">
         <LiaGithub color='white' size={'70px'}/>   
        </a>
        <a className='hover:scale-105 transition' href="https://instagram.com/HasnainAli_313">
         <TiSocialInstagramCircular  color='white'size={'70px'}/>   
        </a>
    </div>
    </>
  )
}

export default Home
