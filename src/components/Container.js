import React from 'react'

const Container = ({start1, start2, highlight, rating, word, star, imgbest, best}) => {
  return (
    <>
       
       <label className='bg-orange-500 text-white absolute rounded-r-lg flex p-2 m-[-0.5rem]  '>
            {imgbest}
            {best}
        </label>

     <div className='py-12 flex shadow-md rounded-xl hover:shadow-lg'>
     
     <div className='px-20 '>
       
       <img className='w-96 pt-6 ' src={require("../images/download 1.png")} alt='' />
       <p className='p-2 pl-10 text-sm'>Builder 1</p>
     </div>

     <div>
       <p> <b>{start1}</b>
             {start2}
            <br />

            <b>Main Highlights</b>

            <p className='px-3 m-2'>
            {highlight}
            </p>

            </p>
            <span className='flex text-blue-500  '>Show More 
               <img className='m-1 ' src={require("../images/down.png")} alt='>' />
            </span>
     </div>

     <div className='p-8 flex-col justify-between'>
       <div className='flex flex-col  bg-blue-50 rounded-lg p-6 pb-10 '>
             <span className='text-3xl text-blue-900 pl-8 '>{rating}</span>  
             <span className='pl-4'>{word} 
               {star}
               </span>  
       </div>
       <div className='pt-6'>
       <button className='bg-blue-500  w-60 h-12 text-white p-2 rounded-lg hover:cursor-pointer hover:shadow-md font-medium'>View</button>
       </div>

     </div>
     
   </div>
    </>
    
  )
}

export default Container
