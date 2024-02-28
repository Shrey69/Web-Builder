import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='flex'>
      <Button name="Tools"/>
      <Button name="AWS Builder"/>
      <Button name="Start Build"/>
      <Button name="Build Supplies"/>
      <Button name="Tooling"/>
      <Button name="BlueHosting"/>
    </div>
  )
}

export default ButtonList
