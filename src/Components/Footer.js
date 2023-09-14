import React from 'react'
import { Link } from 'react-router-dom'
import { LuArrowBigRightDash } from 'react-icons/lu';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BiLogoFacebook } from 'react-icons/bi';
import { FaLinkedinIn } from 'react-icons/fa6';
import { AiOutlineInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer " data-aos="fade-up" data-aos-delay="800">
        <div className=" container  py-5 px-sm-3 px-md-5 text-white">
        <div className="row pt-5">
            <div className="col-lg-3 col-md-6 mb-5">
                <h4 className=" mb-4">Get In Touch:</h4>
                <p><i className="fa fa-map-marker-alt mr-2"></i>123 Street, New York, USA</p>
                <p><i className="fa fa-phone-alt mr-2"></i>+012 345 67890</p>
                <p><i className="fa fa-envelope mr-2"></i>info@example.com</p>
                <div className=" icon-social d-flex justify-content-start mt-4">
                    <Link className="btn btn-outline-light rounded-circle text-center mr-2 px-0"  ><AiOutlineInstagram/></Link>
                    <Link className="btn btn-outline-light rounded-circle text-center mr-2 px-0"  href="#"><BiLogoFacebook/></Link>
                    <Link className="btn btn-outline-light rounded-circle text-center mr-2 px-0"  href="#"><AiOutlineTwitter/></Link>
                    <Link className="btn btn-outline-light rounded-circle text-center mr-2 px-0"  href="#"><FaLinkedinIn/></Link>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
                <h4 className=" mb-4">Quick Links:</h4>
                <div className="d-flex flex-column justify-content-start">
                    <Link className="text-white mb-2" href="#"><LuArrowBigRightDash/>Home</Link>
                    <Link className="text-white mb-2" href="#"><LuArrowBigRightDash/>About Us</Link>
                    <Link className="text-white mb-2" href="#"><LuArrowBigRightDash/>Our Features</Link>
                    <Link className="text-white mb-2" href="#"><LuArrowBigRightDash/>classes</Link>
                    <Link className="text-white" href="#"><LuArrowBigRightDash/>Contact Us</Link>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
                <h4 className=" mb-4">Popular Links:</h4>
                <div className="d-flex flex-column justify-content-start">
                    <Link className="text-white mb-2" href="#"><LuArrowBigRightDash/>Home</Link>
                    <Link className="text-white mb-2" href="#"><LuArrowBigRightDash/>About Us</Link>
                    <Link className="text-white mb-2" href="#"><LuArrowBigRightDash/>Our Features</Link>
                    <Link className="text-white mb-2" href="#"><LuArrowBigRightDash/>classes</Link>
                    <Link className="text-white" href="#"><LuArrowBigRightDash/>Contact Us</Link>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
                <h4 className=" mb-4">Opening Hours:</h4>
                <h5 className="text-white">Monday - Friday</h5>
                <p>8.00 AM - 8.00 PM</p>
                <h5 className="text-white">Saturday - Sunday</h5>
                <p>2.00 PM - 8.00 PM</p>
            </div>
        </div>
        <div className="container border-top border-dark pt-5">
            <p className="m-0 text-center text-white">
                &copy; <Link className="text-white font-weight-bold" href="#">Life-Gym</Link>.العبدلله 
            </p>
        </div>
    </div>
    </div>
  )
}

export default Footer