import React from 'react';

const SignUp = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center py-10'>
      <p className='text-center md:text-left text-2xl md:text-4xl text-slate-600 md:mr-4'>
        Sign up and get exclusive special deals
      </p>

      <div className='mt-4 md:mt-0 flex flex-col md:flex-row items-center'>
        <input
          type='text'
          className='p-2 md:p-3 md:my-2 rounded-l-lg w-full md:w-auto shadow-md'
        />

        <button className='bg-blue-500 rounded-r-lg text-white p-2 md:p-3 my-1 md:my-2 ml-0 md:ml-0 text-sm'>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUp;
