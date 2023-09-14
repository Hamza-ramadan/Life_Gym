import React from 'react'
import"./page.css"
import ImagContent from '../Components/ImagContent'
import { ReactComponent as Lablbla } from "../Images/svgexport-6.svg"
import { ReactComponent as Lablblb } from "../Images/svg/svgexport-17 (1).svg"
import { ReactComponent as Lablblc } from "../Images/svg/svgexport-17 (2).svg"
import { ReactComponent as Lablbld } from "../Images/svg/svgexport-17 (3).svg"
import { ReactComponent as Lablble } from "../Images/svg/svgexport-17 (4).svg"
import { ReactComponent as Lablblf } from "../Images/svg/svgexport-17 (5).svg"
import { ReactComponent as Lablblg } from "../Images/svg/svgexport-17 (6).svg"
import { ReactComponent as Lablblh } from "../Images/svg/svgexport-17 (7).svg"
import img_bl1 from "../Images/img111.jpg"
import img_bl2 from "../Images/img222.jpg"
import img_bl3 from "../Images/img333.jpg"
import BlogBox from '../Components/BlogBox'
import { Link } from 'react-router-dom'
const Service = () => {
  return (
    <div>
        <ImagContent mainTitle={"Services"} title={"Service"}/>
        
        
        <div className="services-boxs mt-3">
            <div className="container">
                <div className="row ">
                <div className="col-12 col-sm-6 col-lg-3 text-center d-flex align-items-stretch" data-aos="flip-up">
                    <div className="servvice-box">
                        <div className="icon">
                        <Lablbla/>
                        </div>
                        <div className="desc">
                        <h2>Yoga</h2>
                        
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3 text-center d-flex align-items-stretch" data-aos="flip-up">
                    <div className="servvice-box">
                        <div className="icon">
                        <Lablblb/>
                        </div>
                        <div className="desc">
                        <h2>Sona</h2>
                        
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3 text-center d-flex align-items-stretch" data-aos="flip-up">
                    <div className="servvice-box">
                        <div className="icon">
                        <Lablblc/>
                        </div>
                        <div className="desc">
                        <h2>Jacuzzi</h2>
                        
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3 text-center d-flex align-items-stretch" data-aos="flip-up">
                    <div className="servvice-box">
                        <div className="icon">
                        <Lablbld/>
                        </div>
                        <div className="desc">
                        <h2>Runing</h2>
                        
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3 text-center d-flex align-items-stretch" data-aos="flip-up">
                    <div className="servvice-box">
                        <div className="icon">
                        <Lablble/>
                        </div>
                        <div className="desc">
                        <h2>Body Building</h2>
                        
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3 text-center d-flex align-items-stretch" data-aos="flip-up">
                    <div className="servvice-box">
                        <div className="icon">
                        <Lablblf/>
                        </div>
                        <div className="desc">
                        <h2>Healthy diet</h2>
                        
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3 text-center d-flex align-items-stretch" data-aos="flip-up">
                    <div className="servvice-box">
                        <div className="icon">
                        <Lablblg/>
                        </div>
                        <div className="desc">
                        <h2>Healthy food</h2>
                        
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3 text-center d-flex align-items-stretch" data-aos="flip-up">
                    <div className="servvice-box">
                        <div className="icon">
                        <Lablblh/>
                        </div>
                        <div className="desc">
                        <h2>Zompa & Dance</h2>
                        
                        </div>
                    </div>
                </div>
                
                </div>
            
            </div>
        </div>
        <div id="fh5co-pricing pt-5">
		<div className="container">
			<div className="row animate-box">
				<div className="col-12 text-center fh5co-heading">
					<h2 className="heder-text mt-5" >Pricing Plan</h2>
					<p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
				</div>
			</div>
            <div className="pricing">
			<div className="row">
				
					<div className="col-md-3">
						<div className="price-box">
							<h2 className="pricing-plan">Starter</h2>
							<div className="price"><sup className="currency">$</sup>9<small>/month</small></div>
							<ul className="classes">
								<li>15 Cardio class</li>
								<li className="color">10 Swimming Lesson</li>
								<li>10 Yoga class</li>
								<li className="color">20 Aerobics</li>
								<li>10 Zumba class</li>
								<li className="color">5 Massage</li>
								<li>10 Body Building</li>
							</ul>
							<Link className="btn btn-select-plan btn-sm">Select Plan</Link>
						</div>
					</div>

					<div className="col-md-3">
						<div className="price-box ">
							<h2 className="pricing-plan">Basic</h2>
							<div className="price"><sup className="currency">$</sup>27<small>/month</small></div>
							<ul className="classes">
								<li>15 Cardio class</li>
								<li className="color">10 Swimming Lesson</li>
								<li>10 Yoga class</li>
								<li className="color">20 Aerobics</li>
								<li>10 Zumba class</li>
								<li className="color">5 Massage</li>
								<li>10 Body Building</li>
							</ul>
							<Link className="btn btn-select-plan btn-sm">Select Plan</Link>
						</div>
					</div>

					<div className="col-md-3 ">
						<div className="price-box popular">
							<h2 className="pricing-plan pricing-plan-offer">Pro <span>Best Offer</span></h2>
							<div className="price"><sup className="currency">$</sup>74<small>/month</small></div>
							<ul className="classes">
								<li>15 Cardio class</li>
								<li className="color">10 Swimming Lesson</li>
								<li>10 Yoga class</li>
								<li className="color">20 Aerobics</li>
								<li>10 Zumba class</li>
								<li className="color">5 Massage</li>
								<li>10 Body Building</li>
							</ul>
							<Link className="btn btn-select-plan btn-sm">Select Plan</Link>
						</div>
					</div>

					<div className="col-md-3 animate-box">
						<div className="price-box">
							<h2 className="pricing-plan">Unlimited</h2>
							<div className="price"><sup className="currency">$</sup>140<small>/month</small></div>
							<ul className="classes">
								<li>15 Cardio class</li>
								<li className="color">10 Swimming Lesson</li>
								<li>10 Yoga class</li>
								<li className="color">20 Aerobics</li>
								<li>10 Zumba class</li>
								<li className="color">5 Massage</li>
								<li>10 Body Building</li>
							</ul>
							<Link className="btn btn-select-plan btn-sm">Select Plan</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
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
      <div className="col-12 col-lg-4"><BlogBox imgssss={img_bl3}/></div>
				
			</div>
		</div>
	</div>


    </div>
  )
}

export default Service