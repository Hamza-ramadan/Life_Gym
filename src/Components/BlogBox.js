import React from 'react'
import { AiOutlineComment } from 'react-icons/ai';
const BlogBox = ({imgssss}) => {
  return (
    <div className='blogbox'>
					<div className="fh5co-blog ">
						<img className="img-responsive img-fluid" src={imgssss} alt=""/>
						<div className="blog-text"  data-aos="flip-right"data-aos-delay="1000">
							<h3>45 Minimal Worksspace Rooms for Web Savvys</h3>
							<span className="posted_on">Sep. 15th</span>
							<span className="comment">21<AiOutlineComment/></span>
							<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
							<button href="#" className="btns">Read More</button>
						</div> 
					</div>
    </div>
  )
}

export default BlogBox