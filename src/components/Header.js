import React, {useState} from 'react';
// import pic from "../images/pic.png"
import linkedin from "../images/media-icons/linkedin.svg"
import github from "../images/media-icons/github.svg"
import medium from "../images/media-icons/medium.svg"
import twitter from "../images/media-icons/twitter.svg"
import photosm from "../images/photo-sm.jpg"

const Header = () => {
    // const pic = "https://firebasestorage.googleapis.com/v0/b/testimageview.appspot.com/o/photo2.png?alt=media&token=79e416b2-6a5c-472d-a2bc-0b0b640d94f5";

    const data_fr = {
        name: "Rachid Hamma Ali.",
        description: "Ingénieur de projet avec +3 ans d'expérience dans les technologies de l'information, principalement dans les projets comme les Systèmes d'Information Géographique (SIG) et Learning Management Systems (LMS)."
    }
    const data_en = {
        name: "Rachid hamma ali.",
        description: "Project Engineer with +3 years of experience in the information technology, mostly in large projects like Geographic Information System (SIG) & learning management systems (LMS)"
    }
    const [section, setSection] = useState('about')
    return (
        <header id="about" className="">

            {/*<nav id="nav-wrap" className="w-full flex justify-between items-center nav-bg px-8 py-4 lg:px-16">*/}
            {/*    /!*<a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>*!/*/}
            {/*    /!*<a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>*!/*/}
            {/*    <ul className="nav flex items-center">*/}
            {/*        <li className="logo font-bold text-xl pl-4">HAMMA ALI</li>*/}
            {/*    </ul>*/}
            {/*    <ul id="nav" className="nav">*/}
            {/*        /!*<li className="current"><a className="font-bold" href="#home">Home</a></li>*!/*/}
            {/*        <li className={section === 'about' ? "current" :""}><a onClick={() => setSection('about')} className="font-bold" href="#about">À propos</a></li>*/}
            {/*        <li className={section === 'skills' ? "current" :""}><a onClick={() => setSection('skills')} className="font-bold" href="#skills">Compétences</a></li>*/}
            {/*        <li className={section === 'work' ? "current" :""}><a onClick={() => setSection('work')} className="font-bold" href="#work">Expérience</a></li>*/}
            {/*        <li className={section === 'diplomes' ? "current" :""}><a onClick={() => setSection('diplomes')} className="font-bold" href="#diplomes">Diplômes</a></li>*/}
            {/*        <li className={section === 'projects' ? "current" :""}><a onClick={() => setSection('projects')} className="font-bold" href="#projects">Portfolio</a></li>*/}
            {/*    </ul>*/}
            {/*</nav>*/}
            <div className="pt-16 flex items-center">
                <div className="flex py-8 mx-auto items-center">
                    <div className="justify-end px-4">
                        <img id="profilepic" src={photosm} alt="Rachid hamma ali" className="flex w-72 h-72 rounded-full shadow-xl"/>
                    </div>
                    <div id="profiledescription" className="text-color">
                        <h1 className="p-4 font-bold header-name text-left">{data_fr.name}</h1>
                        <p className="p-4 text-left max-w-2xl">{data_fr.description}</p>
                        <div className="p-4 flex mx-auto">
                            <a href="https://www.linkedin.com/in/hammaali" target="_blank" rel="noreferrer"><img src={linkedin} alt="Rachid hamma ali linkedIn profile" className="social-icons p-1 rounded-md"/></a>
                            <a href="https://github.com/rhmx01" target="_blank" rel="noreferrer"><img src={github} alt="Rachid hamma ali github profile" className="social-icons p-1 rounded-md"/></a>
                            <a href="https://twitter.com/r_hammaali" target="_blank" rel="noreferrer"><img src={twitter} alt="Rachid hamma ali on twitter" className="social-icons p-1 rounded-md"/></a>
                            <a href="https://hammaali.medium.com" target="_blank" rel="noreferrer"><img src={medium} alt="Rachid hamma ali medium profile" className="social-icons p-1 rounded-md"/></a>
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