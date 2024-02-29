import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-800 text-white h-96 flex flex-col md:flex-row justify-around items-center'>
        
        <ul>
            <li className='py-2'>CATEGORIES</li>
            <li className='text-sm py-2 text-slate-400'>Web Builder</li>
            <li className='text-sm py-2 text-slate-400'>Hoisting</li>
            <li className='text-sm py-2 text-slate-400'>Data Center</li>
            <li className='text-sm py-2 text-slate-400'>Robotic-Automation</li>
        </ul>
        <ul className='pt-8'>
            <li>CONTACT</li>
            <li className='text-sm py-2 text-slate-400'>Contact</li>
            <li className='text-sm py-2 text-slate-400'>Privacy Policy</li>
            <li className='text-sm py-2 text-slate-400'>Terms of Service</li>
            <li className='text-sm py-2 text-slate-400'>Categories</li>
            <li className='text-sm py-2 text-slate-400'>About</li>
        </ul>

        <span className='flex text-sm text-slate-400'>United States 
        <img    className='m-2 hover:cursor-pointer'
            src={require("..//images/downW.png")} alt='>'/>
        </span>


    </div>
  )
}

export default Footer
