import React from 'react';
import {Divider} from "@mui/material";
import {FacebookOutlined, GitHub, LinkedIn} from "@mui/icons-material";
import pic from "../images/pic.png"

const Header = () => {
    return (
        <header id="home" className="">

            <nav id="nav-wrap" className="w-full flex justify-between">
                {/*<a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>*/}
                {/*<a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>*/}
                <ul className="nav flex items-center">
                    <li className="logo font-bold text-xl pl-4">Rachid</li>
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
                <div className="flex items-center grid grid-cols-8 gap-2">
                    <img src={pic} alt="mypic" className="flex w-80 h-80 rounded-full col-start-2 col-span-2"/>
                    <div className="col-span-4 text-white">
                        <h1 className="font-bold header-name">rachid hamma ali.</h1>
                        <h3 className="text-left">I'm a Ouarzazate based <span>ocupation</span>. I'm a Web Developer with extensive experience for over 5 years. My expertise is to create and Websites design, graphic design and many more...</h3>
                        <div className="flex">
                            <FacebookOutlined/>
                            <GitHub/>
                            <LinkedIn/>
                        </div>
                    </div>
                    <div>

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