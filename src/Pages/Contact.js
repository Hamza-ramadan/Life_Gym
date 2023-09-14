import React from 'react'
import ImagContent from '../Components/ImagContent'
import { BiSolidLocationPlus } from 'react-icons/bi';
import { BsTelephonePlus } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { IoEarthOutline } from 'react-icons/io5';
import Teamone from '../Components/Teamone'
const Contact = () => {
  return (
    <div>
        <ImagContent mainTitle={"Contact Us"} title={"Contact"}/>
        <div className="fh5co-contact py-5">
		<div className="container">
			<div className="row">
				<div className="col-md-5 col-md-push-1 animate-box">
					
					<div className="fh5co-contact-info">
						<h3 className="heder-text">Contact Information:</h3>
						<ul>
							<li className="address"><BiSolidLocationPlus/>198 West 21th Street, <br/> Suite 721 New York NY 10016</li>
							<li className="phone"><BsTelephonePlus/>+ 1235 2355 98</li>
							<li className="email"><HiOutlineMail/>info@yoursite.com</li>
							<li className="url"><IoEarthOutline/>gettemplates.co</li>
						</ul>
					</div>

				</div>
				<div className="col-md-6 animate-box">
					<h3 className="heder-text">Get In Touch :</h3>
                    <form action="#">
                        <div className="row form-group">
                            <div className="col-md-6">
                                <label  >First Name</label> 
                                <input type="text" id="fname" className="form-control" placeholder="Your firstname"/>
                            </div>
                            <div className="col-md-6">
                                <label forhtml="lname">Last Name</label> 
                                <input type="text" id="lname" className="form-control" placeholder="Your lastname"/>
                            </div>
                        </div>

                        <div className="row form-group">
                            <div className="col-md-12">
                                <label forhtml="email">Email</label> 
                                <input type="text" id="email" className="form-control" placeholder="Your email address"/>
                            </div>
                        </div>

                        <div className="row form-group">
                            <div className="col-md-12">
                                <label forhtml="subject">Subject</label> 
                                <input type="text" id="subject" className="form-control" placeholder="Your subject of this message"/>
                            </div>
                        </div>

                        <div className="row form-group">
                            <div className="col-md-12">
                                <label forhtml="message">Message</label> 
                                <textarea name="message" id="message" cols="30" rows="10" className="form-control" placeholder="Say something about us"></textarea>
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Send Message" className="btns"/>
                        </div>

                    </form>		
				</div>
			</div>
			
		</div>
	</div>
        <Teamone/>
    </div>
  )
}

export default Contact