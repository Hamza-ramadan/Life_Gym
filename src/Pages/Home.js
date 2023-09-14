import React from 'react'
import { Link } from 'react-router-dom'
import img_home from "../Images/carousel-1.jpg"
import b1 from "../Images/bodybuilding.png"
import b2 from "../Images/muscle.png"
import "./page.css"
import Experience from '../Components/Experience'
import Features from '../Components/Features'
import Teamone from '../Components/Teamone'
import Subscribe from '../Components/Subscribe'
import Tables from '../Components/Tables'
import BlogBox from '../Components/BlogBox'
import img_bl1 from "../Images/img111.jpg"
import img_bl2 from "../Images/img222.jpg"
import img_bl3 from "../Images/img333.jpg"

const Home = () => {
  return (
    <>
    <div className="home">
    <div className="item">
                    <div className="slider-img"><img src={img_home} alt=""/></div>
                    <div className="container">
                        
                        <div className="slider-captions" >
                            <div className="the-best">
                            <div  data-aos="fade-right"></div>
                            <span>the best fitness club in the town .</span>
                            </div>
                            <h5>Gym & Fitness Center</h5>
                            <h1 className="slider-title" data-aos="fade-up">MAKE IT A <span>LIFESTYLE</span>,<br/> NOT A <span>DUTY</span> .</h1>
                            <p className="slider-text">We can help you conquer a wide range of psychological  problems.</p>
                            <div className=" butonsss mt-4">
                            <Link to={"/Services"} className="btns"> join us now</Link>
                            </div>
                                    
                                
                        </div>
            </div>
        </div>
  </div>
  <div className="boxs-body pb-4" >
    <div className="container">
      <div className="row">
      <div className="col-md-6 p-0" data-aos="fade-right">
                <div className="gym-2-box d-flex flex-column align-items-end justify-content-center text-right text-white ">
                    <img src={b2} alt="" />
                    <h3 className="display-4 mb-3 text-white ">Body Building</h3>
                    <p>
                        Lorem justo tempor sit aliquyam invidunt, amet vero ea dolor ipsum ut diam sit dolores, dolor
                        sit eos sea sanctus erat lorem nonumy sanctus takimata. Kasd amet sit sadipscing at..
                    </p>
                    <a href="-" className="btn btn-lg btn-outline-light mt-4 px-4">Join Now</a>
                </div>
            </div>
            <div className="col-md-6 p-0" data-aos="fade-left">
                <div className="gym-1-box d-flex flex-column align-items-start justify-content-center text-left text-white ">
                    <img src={b1} alt="" />
                    <h3 className="display-4 mb-3 text-white ">Muscle Building</h3>
                    <p>
                        Lorem justo tempor sit aliquyam invidunt, amet vero ea dolor ipsum ut diam sit dolores, dolor
                        sit eos sea sanctus erat lorem nonumy sanctus takimata. Kasd amet sit sadipscing at..
                    </p>
                    <a href="/" className="btn btn-lg btn-outline-light mt-4 px-4">Join Now</a>
                </div>
            </div>
      </div>
    </div>
  </div>
  <Experience />
  <Features/>
  <Teamone/>
  <Subscribe/>
  <Tables/>
  <div className=" py-5">
		<div className="container">
			<div className="row">
				<div className="col-12  text-center fh5co-heading ">
					<h2 className='heder-text'>Recent Blog</h2>
					<p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
				</div>
			</div>
			<div className="row row-bottom-padded-md">
      <div className="col-12 col-lg-4"><BlogBox imgssss={img_bl1}/></div>
      <div className="col-12 col-lg-4"><BlogBox imgssss={img_bl2}/></div>
      <div className=" col-12 col-lg-4 "><BlogBox imgssss={img_bl3}/></div>
				
			</div>
		</div>
	</div>
    </>
  )
}

export default Home