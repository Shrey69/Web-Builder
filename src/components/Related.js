import React from 'react'
import Block from './Block'

const Related = () => {
  return (
    <div>
       <div className='py-8'>
        <p className=' text-2xl md:text-4xl text-slate-700'>Related deals you might like for</p>
      </div>

      <div className='flex p-5 md:p-8  flex-col md:flex-row justify-around items-center '>
        <Block/>
        <Block/>
        <Block/>
      </div>
      
    </div>
  )
}

export default Related

