import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className='px-1 md:px-6 py-1 md:py-2 m-2  bg-white shadow-sm  rounded-lg hover:shadow-md'>{name}</button>
    </div>
  )
}

export default Button
