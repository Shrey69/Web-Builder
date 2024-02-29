import React from 'react'

const Header = () => {
  return (
    <div className='bg-slate-900  md:h-16 flex justify-center items-center'>
        
      <div className=' p-0 md:p-4 md:p-10 m-8 md:m-10'>
        <button className='absolute pt-1 pl-1'>
        <img  alt='search' src={require("..//images/search.png")}/>
        </button>
      <input
      
      type='text'
      className='w-[80%] md:w-[130%] h-9 pl-2 md:pl-6 rounded-lg' 
      />
      </div>

      <div>
      {["Categories", "Website Builders", "Today's deal"].map((item, index)=> (
            <a className={`text-xs md:text-sm font-light text-white pl-2 md:pl-12 ${index===2 && "ml-0 md:ml-8"} `} key={index}>{item}</a>
        ))}
      </div>
    </div>
  )
}

export default Header
