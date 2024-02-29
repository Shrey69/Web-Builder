import React from 'react'

const SignUp = () => {
  return (
    <div className='flex justify-between items-center py-10'>
      <p className='text-4xl text-slate-600'>Sign up and get exclusive special deals</p>

      <div>
      <input
        type='text'
        className='p-3 my-2 rounded-l-lg w-60 shadow-md'
      />

      <button className='bg-blue-500 rounded-r-lg text-white p-3 my-2 text-sm'>Sign Up</button>
      </div>
    </div>
  )
}

export default SignUp
