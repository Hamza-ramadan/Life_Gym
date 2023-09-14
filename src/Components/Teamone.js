import React from 'react'
import img_team1 from "../Images/team-2.jpg"
import img_team2 from "../Images/team-3.jpg"
import img_team3 from "../Images/team-4.jpg"
import { BiBasketball } from 'react-icons/bi';
import { BsFacebook } from 'react-icons/bs';
import { BiLogoInstagramAlt } from 'react-icons/bi';
import { IoLogoWhatsapp } from 'react-icons/io';

const Teamone = () => {
  return (
    <div>
        <div className='teams py-4'>
		<div className="container">
			<div className="row">
				<div className="col-12 text-center mb-4">
					<h2>Fitness Expert</h2>
					<p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
				</div>
			</div>
			<div className="row">
				<div className="boxss col-lg-4 col-12" data-aos="flip-up">
					<div className="trainer">
						<img className="img-responsive" src={img_team3} alt="trainer"/>
						<div className="title">
							<h3>Angel Adams</h3>
							<span>Dance Expert</span>
						</div>
						<div className="desc text-center">
							<ul className="fh5co-social-icons">
								<li><BiBasketball/></li>
								<li><BsFacebook/></li>
								<li><BiLogoInstagramAlt/></li>
								<li><IoLogoWhatsapp/></li>
							</ul>
						</div>
					</div>
				</div>
				<div className="boxss col-lg-4 col-12" data-aos="flip-up">
					<div className="trainer">
						<img className="img-responsive" src={img_team2} alt="trainer"/>
						<div className="title">
							<h3>Arnold Smith</h3>
							<span>Body Building Expert</span>
						</div>
						<div className="desc text-center">
							<ul className="fh5co-social-icons">
                            <li><BiBasketball/></li>
								<li><BsFacebook/></li>
								<li><BiLogoInstagramAlt/></li>
								<li><IoLogoWhatsapp/></li>
							</ul>
						</div>
					</div>
				</div>
				<div className="boxss col-lg-4 col-12" data-aos="flip-up">
					<div className="trainer">
						<img className="img-responsive" src={img_team1} alt="trainer"/>
						<div className="title">
							<h3>Rachel Seely</h3>
							<span>Yoga Expert</span>
						</div>
						<div className="desc ">
							<ul className="fh5co-social-icons">
                            <li><BiBasketball/></li>
								<li><BsFacebook/></li>
								<li><BiLogoInstagramAlt/></li>
								<li><IoLogoWhatsapp/></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    </div>
  )
}

export default Teamone