import React from 'react'
import Container from './Container'

const Main = () => {
  return (
    <div>
      <ul className='list-decimal'>
        <li className="">
        <Container
      imgbest = {<img className='pr-2' src={require("../images/trophy.png")} alt='' />}
      best= "Best Choice"
      start1="WixPro 72-Inch Responsive Website Builder"
       start2="- Comprehensive Digital Platform Creation Tool,
       Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)" 
       highlight="[What You Get]: Receive the WixPro website builder suite, access to premium design templates,
       an extensive library of widgets and apps, and detailed step-by-step guides."
       rating ="9.8"
       word="Exceptional"
       star={<img className="pl-2" src={require("../images/Rating.png")} alt='Rating' />}
       />
        </li>

        <li>
        <Container 
        imgbest = {<img className='pr-2' src={require("../images/value.png")} alt='' />}
        best= "Best Value"
        start1="SiteCraft 68-Inch Ultimate Web Design Studio"
       start2="- Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for
        Dynamic Websites and E-commerce Platforms (Green/White)" 
       highlight="[What You Get]: Gain access to the SiteCraft design studio,
        featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations."
       rating ="9.5"
       word="Excellent"
       star={<img className="pl-0" src={require("../images/4.5.png")} alt='Rating' />}
       />
        </li>


        <li>
        <Container
        imgbest = ""
        best= ""
        start1="WixPro 72-Inch Responsive Website Builder"
       start2="- Comprehensive Digital Platform Creation Tool,
       Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)" 
       highlight="[What You Get]: Receive the WixPro website builder suite, access to premium design templates,
       an extensive library of widgets and apps, and detailed step-by-step guides."
       rating ="9.3"
       word="Exceptional"
       star={<img className="pl-2" src={require("../images/Rating.png")} alt='Rating' />}
       />
        </li>
      </ul>
      




      
    </div>
  )
}

export default Main
