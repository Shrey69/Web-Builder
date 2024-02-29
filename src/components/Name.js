import React from 'react'
import ButtonList from './ButtonList'


const Name = () => {
  return (
    <div>

      <div className='py-8'>
        <p className='text-3xl md:text-5xl text-slate-800'>Best Website builders in the US</p>
      </div>

      <hr />

      <div className="flex flex-col md:flex-row py-4 text-slate-800">

  <div className="pr-0 md:pr-4 flex items-center">
    <img className="pr-2" src={require("../images/1.png")} alt=''/>
    <span>Last Updated - February 22, 2020</span>
  </div>

  <div className="flex items-center">
    <img className="pr-2" src={require("../images/2.png")} alt=''/>
    <span>Advertising Disclosure</span>
  </div>

  <div className="flex ml-auto items-center">
    <span>Top Relevant</span>
    <img className='pl-1' src={require("../images/3.png")} alt=''/>
  </div>

</div>


       <hr /> 
       <ButtonList />

       <div className='flex pb-6'>
        {["Home", "Hosting for all", "Hosting", "Hosting6", "Hosting5"].map((item, index) => (
            <span className='flex pr-1 md:p-1 ' key={index}>
                {item}
                {index !== item.length-1 && <img className='p-1 md:p-2 ' src= {require("../images/Vector.png")} alt='>' />}
            </span>
        ))}
       </div>
    </div>
  )
}

export default Name
