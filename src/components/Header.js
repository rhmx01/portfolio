import React from 'react';
import {Divider} from "@mui/material";
import {FacebookOutlined, GitHub, LinkedIn} from "@mui/icons-material";
// import pic from "../images/pic.png"
import linkedin from "../images/media-icons/linkedin.svg"
import github from "../images/media-icons/github.svg"
import medium from "../images/media-icons/medium.svg"

const Header = () => {
    const pic = "https://firebasestorage.googleapis.com/v0/b/testimageview.appspot.com/o/photo2.png?alt=media&token=79e416b2-6a5c-472d-a2bc-0b0b640d94f5";
    return (
        <header id="home" className="">

            <nav id="nav-wrap" className="w-full flex justify-between items-center nav-bg">
                {/*<a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>*/}
                {/*<a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>*/}
                <ul className="nav flex items-center">
                    <li className="logo font-bold text-xl pl-4">HAMMA ALI</li>
                </ul>
                <ul id="nav" className="nav">
                    <li className="current"><a className="font-bold" href="#home">Home</a></li>
                    <li><a className="font-bold" href="#about">About</a></li>
                    <li><a className="font-bold" href="#resume">Resume</a></li>
                    <li><a className="font-bold" href="#portfolio">Works</a></li>
                    <li><a className="font-bold" href="#testimonials">Testimonials</a></li>
                    <li><a className="font-bold" href="#contact">Contact</a></li>
                </ul>

            </nav>
            <div className="h-screen flex items-center">
                <div className="flex items-center grid grid-cols-1 md:grid-cols-8 lg:grid-cols-10 gap-2">
                    <div className="w-full justify-end col-start-2 col-span-2">
                        <img src={pic} alt="mypic" className="flex w-72 h-72 rounded-full shadow-xl"/>
                    </div>
                    <div className="col-span-4 text-white">
                        <h1 className="p-4 font-bold header-name">I'm rachid hamma ali.</h1>
                        <h3 className="p-4 text-left">Project Engineer with +3 years of experience in the information technology, mostly in large projects like Geographic Information System (SIG) &  learning management systems (LMS)</h3>
                        <div className="p-4 flex">
                            <a href="https://www.linkedin.com/in/rhmx/" target="_blank"><img src={linkedin} alt="Rachid hamma ali linkedIn profile" className="social-icons p-1 rounded-md"/></a>
                            <a href="https://github.com/rhmx01" target="_blank"><img src={github} alt="Rachid hamma ali github profile" className="social-icons p-1 rounded-md"/></a>
                            <a href="https://medium.com/@r.hammaali" target="_blank"><img src={medium} alt="Rachid hamma ali medium profile" className="social-icons p-1 rounded-md"/></a>
                        </div>
                    </div>
                </div>
            </div>


            <p className="scrolldown">
                <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>

        </header>
    );
};

export default Header;