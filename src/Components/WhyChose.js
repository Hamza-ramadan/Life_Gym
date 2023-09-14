import React from 'react'
import img_1 from "../Images/blog-1.jpg"
import img_2 from "../Images/blog-2.jpg"
import img_3 from "../Images/feature-2.jpg"
import img_4 from "../Images/feature-4.jpg"
import { BsFillCalendarRangeFill } from 'react-icons/bs';
import { PiHandsClappingDuotone } from 'react-icons/pi';
import { GiDisintegrate } from 'react-icons/gi';
import { CgGym } from 'react-icons/cg';

const WhyChose = () => {
  return (
    <>
        <div className="container feature pt-5">
        <div className="d-flex flex-column text-center mb-5">
            <h4 className="heder-text">Why Choose Us?</h4>
            <h4 className="header-toptop">Benifits of Joining Our GYM</h4>
        </div>
        <div className="row">
            <div className="col-md-6 mb-5">
                <div className="row align-items-center">
                    <div className="col-sm-5 position-relative">
                    <img className="img-fluid mb-3 mb-sm-0" src={img_1} alt="" />
                    <div className="icon"><BsFillCalendarRangeFill/></div>
                    </div>
                    <div className="col-sm-7">
                        <h4 className="font-weight-bold">Videos Instruction</h4>
                        <p>Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima  erat tempor</p>
                    </div>
                </div>
            </div>
            <div className="col-md-6 mb-5">
                <div className="row align-items-center">
                    <div className="col-sm-5 position-relative">
                    <img className="img-fluid mb-3 mb-sm-0" src={img_2}  alt="" />
                    <div className="icon"><PiHandsClappingDuotone/></div>
                    </div>
                    <div className="col-sm-7">
                        <h4 className="font-weight-bold">Training Calendar</h4>
                        <p>Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima  erat tempor</p>
                    </div>
                </div>
            </div>
            <div className="col-md-6 mb-5">
                <div className="row align-items-center">
                    <div className="col-sm-5 position-relative">
                    <img className="img-fluid mb-3 mb-sm-0" src={img_3}  alt="" />
                    <div className="icon"><GiDisintegrate/></div>
                    </div>
                    <div className="col-sm-7">
                        <h4 className="font-weight-bold">Free Apps & WiFi</h4>
                        <p>Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima  erat tempor</p>
                    </div>
                </div>
            </div>
            <div className="col-md-6 mb-5">
                <div className="row align-items-center">
                    <div className="col-sm-5 position-relative">
                        <img className="img-fluid mb-3 mb-sm-0" src={img_4}  alt="" />
                    <div className="icon"> <CgGym/></div>
                    </div>
                    <div className="col-sm-7">
                        <h4 className="font-weight-bold">Community Support</h4>
                        <p>Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima  erat tempor</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default WhyChose