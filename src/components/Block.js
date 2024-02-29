import React from 'react'

const Block = () => {
  return (
    <div className='shadow-md p-3 rounded-lg  '>
      <div className='flex justify-center items-center pb-8'>
      <img className='w-auto pt-6 ' src={require("../images/download 1.png")} alt='' />
      </div>

      <div className='pt-2 mt-2 text-sm text-slate-500 font-medium '>
        <span className='p-1 py-2 m-1 bg-gray-100 rounded-lg hover:shadow-md'>20% off</span>
        <span className='p-1 py-2 m-1 bg-gray-100 rounded-lg hover:shadow-md'>Limited time</span>
      </div>

      <p className='flex justify-center items-center pt-4 font-medium text-gray-600 text-lg'>WebBuilder 1
      </p>
      <p className='py-2'>Computer Modern classix with wix support</p>

        <div className='flex py-2'>
            <span className='text-xl text-slate-600'>$39.96</span>
            <span className='text-sm text-slate-400 px-2 pt-2'>$49.96</span>
            <span className='text-sm text-red-500 pt-2 '>(20% off)</span>
            <span></span>
        </div>

      <button className='bg-blue-500  w-72 font-medium text-white p-2 rounded-lg hover:cursor-pointer hover:shadow-md'>View Deal</button>
    </div>
  )
}

export default Block
