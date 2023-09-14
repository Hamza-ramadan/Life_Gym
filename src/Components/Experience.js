import React from 'react'
import img_ex from "../Images/experience.jpg"
import { IoIosFitness } from 'react-icons/io';
import { LiaCertificateSolid } from 'react-icons/lia';

const Experience = () => {
return (
    <div className='experience' data-aos="fade-up" data-aos-delay="500">
        <div className="container py-5">
        <div className="row align-items-center">
            <div className="col-lg-6">
                <img className="img-fluid mb-4 mb-lg-0" src={img_ex} alt=""/>
            </div>
            <div className="col-lg-6">
                <h2 >10 Years Experience</h2>
                <p>Labore vero lorem eos sed aliquy ipsum aliquy sed. Vero dolore dolore takima ipsum lorem rebum</p>
                <div className="row py-2">
                    <div className="col-sm-6">
                        <IoIosFitness/>
                        <h4 className="font-weight-bold">Certified GYM Center</h4>
                        <p>Ipsum sanctu dolor ipsum dolore sit et kasd duo</p>
                    </div>
                    <div className="col-sm-6">
                        <LiaCertificateSolid/>
                        <h4 className="font-weight-bold">Award Winning</h4>
                        <p>Ipsum sanctu dolor ipsum dolore sit et kasd duo</p>
                    </div>
                </div>
                <a href="/" className="btns">Learn More</a>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Experience