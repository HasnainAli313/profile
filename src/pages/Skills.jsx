import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";


function Skills() {
  return (
    <>
    <div className='text-white flex gap-4 flex-wrap justify-center m-20 '>
        <FaHtml5 fontSize={'170px'} />
        <FaCss3Alt fontSize={'170px'} />
          <FaBootstrap fontSize={'170px'} />
          <RiTailwindCssFill fontSize={'170px'} />
        <TbBrandJavascript fontSize={'170px'}  />
      <FaReact fontSize={'170px'} />
    </div>

    
    </>
  )
}

export default Skills
