import React from 'react'

const Header = () => {
  return (
    <div className='bg-slate-900 h-16 flex justify-center items-center'>
        
      <div className='p-10 m-10 '>
        <button className='absolute pt-1 pl-2'>
        <img  alt='search' src={require("..//images/search.png")}/>
        </button>
      <input
      
      type='text'
      className='w-[130%] h-9 pl-6 rounded-lg' 
      />
      </div>

      <div>
      {["Categories", "Website Builders", "Today's deal"].map((item, index)=> (
            <a className={`text-md font-light text-white pl-12 ${index===2 && "ml-8"} `} key={index}>{item}</a>
        ))}
      </div>
    </div>
  )
}

export default Header
