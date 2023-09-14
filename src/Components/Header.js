import React, { useEffect, useRef, useState } from 'react'
import "./components.css"
import { CgMail } from 'react-icons/cg';
import { BsPhone } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsGit } from 'react-icons/bs';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import img_log from "../Images/log.png"
import { NavLink } from 'react-router-dom';
const Header = () => {
    const navref = useRef();
    const buttonrefnone = useRef();
    const buttonrefshow = useRef();
    const showNav = () =>{
       navref.current.classList.toggle("responsive-nav");
       buttonrefnone.current.classList.toggle("responsive-button");
       buttonrefshow.current.classList.toggle("responsive-button-show");
    }
    const [topButton , setButtonTop] =useState(false);

    useEffect(() => {
        window.addEventListener("scroll" ,() => {
            if (window.scrollY > 200) {
                setButtonTop(true);
            }else{
                setButtonTop(false);
            }
        })
    },[])
    const scrollUp = () => {
        window.scrollTo({
            top:0,
             behavior:"smooth"
        })
    }
  return (
    <div>
        <nav className="header-top">
            <div className="container">
            <div className="row">
            <div className="col-12 ">
                <div className="header-top-desc">
                    <div className="gmails">
                        <p><CgMail/>:hahar067@gmail.com</p>
                    </div>
                    <div className="phons d-flex">
                    <p><BsPhone/>:+201117585124</p>
                    <p><AiFillLinkedin/> <BsGit/> <AiFillTwitterCircle/></p>
                    </div>
                </div>
            </div>
            </div>
            
        </div>
    </nav>
    <nav className={topButton ? "header-bottomssss": "header-bottom" } >
    {/* <nav className="header-bottom" > */}
            <div className="container">
            <div className="row">
            <div className="col-12 ">
                <div className="header-botom-desc ">
                    <div className="logo">
                        <h2>Life-Gym</h2>
                        <img src={img_log} alt="" />
                    </div>
                    <div className="">
                    <button ref={buttonrefshow} className='btnclosenav' onClick={showNav}><IoMdClose/></button>
                    <button ref={buttonrefnone} className='btnshownav' onClick={showNav}><AiOutlineMenuUnfold/></button>
                    </div>
                    <div className="navinavi" ref={navref}>
                        <NavLink onClick={scrollUp} to={"/"}>Home</NavLink>
                        <NavLink onClick={scrollUp} to={"/About"}>About</NavLink>
                        <NavLink onClick={scrollUp} to={"/Service"}>Services</NavLink>
                        <NavLink onClick={scrollUp} to={"/Contact"}>Contact</NavLink>
                        <NavLink onClick={scrollUp} to={"/Login"}>Login</NavLink>
                    </div>
                </div>
            </div>
            </div>
            
        </div>
    </nav>
    </div>
  )
}

export default Header