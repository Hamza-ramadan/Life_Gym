import React from 'react'
import ImagContent from '../Components/ImagContent'
import WhyChose from '../Components/WhyChose'
import Experience from '../Components/Experience'
import Subscribe from '../Components/Subscribe'

const About = () => {
  return (
    <div className='abuot'>
  <ImagContent mainTitle={"About Us"} title={"About"}/>
        <WhyChose/>
        <Experience/>
        <Subscribe/>

    </div>
  )
}

export default About