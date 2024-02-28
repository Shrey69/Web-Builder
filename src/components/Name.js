import React from 'react'
import ButtonList from './ButtonList'


const Name = () => {
  return (
    <div>

      <div className='py-8'>
        <p className='text-5xl text-slate-800'>Best Website builders in the US</p>
      </div>

      <hr />

      <div className="flex py-4  text-slate-800">

        <span className="pr-4 flex">
        <img className="pr-2" src={require("../images/1.png")} alt=''/>
         Last Updated - February 22, 2020</span>

        <span className=" flex ">
        <img className="pr-2" src={require("../images/2.png")} alt=''/>
            Advertising Disclosure</span>

        <span className="ml-auto flex ">Top Relevant
        <img className='pl-1' src={require("../images/3.png")} alt=''/>
        </span>

      </div>

       <hr /> 
       <ButtonList />

       <div className='flex'>
        {["Home", "Hosting for all", "Hosting", "Hosting6", "Hosting5"].map((item, index) => (
            <span className='flex p-1 ' key={index}>
                {item}
                {index !== item.length-1 && <img className='p-2 ' src= {require("../images/Vector.png")} alt='>' />}
            </span>
        ))}
       </div>
    </div>
  )
}

export default Name
