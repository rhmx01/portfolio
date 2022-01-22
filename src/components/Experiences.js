import React from 'react';
import work from "../images/work.png";
import Title from "./Title";
import {ArrowRight, CalendarToday, Circle, Event, Flag} from "@mui/icons-material";

const Experiences = () => {
    return (
        <div className="mt-5 pt-8">
            <div className=" mt-5 mb-5">
                <Title title="Expérience Professionnelle" icon={work} color="#1f2235"/>
            </div>
            <div>
                <div id="workexperience" className="sectionClass">
                    <div className="row ">
                        <div className="fullWidth eight columns">
                            <ul className="cbp_tmtimeline">
                                <li>
                                    <div className="cbp_tmicon cbp_tmicon-phone flex items-center">
                                        <img src={work} alt="rachid hamma ali work" className="w-16 mx-auto"/>
                                    </div>
                                    <div className="cbp_tmlabel wow fadeInRight animated">
                                        <h3>Project Engineer</h3>
                                        <div className="date">
                                            <Event/> March 2020 - Présent
                                        </div>
                                        <h4><Flag/> Bluescratch, Casablanca</h4>
                                        <p className="projectParagraph">

                                            <span className="font-bold"><ArrowRight/>Système d'Information Géographique (SIG) :</span><br/>
                                            <p className="ml-8">Travailler en équipe pour développer une application SIG avec <b>Laravel</b> & <b>React JS</b>, pour l’Agence Urbaine Ouarzazate-Zagora–Tinghir (AUOZT)</p>
                                            <br/>
                                            <span className="font-bold"><ArrowRight/>Learning Management System (LMS) :</span><br/>
                                            <p className="ml-8">Travail individuel pour développer une application LMS personnalisée avec <b>Moodle</b> pour le Ministère d'Intérieur</p>
                                            <br/>
                                            <span className="font-bold"><ArrowRight/>Learning Management System (LMS) :</span><br/>
                                            <p className="ml-8">Travailler en équipe pour développer une application LMS avancé avec Spring Boot & <b>React JS</b></p>


                                            {/*<span className="font-bold"><ArrowRight/>   </span><br/>*/}
                                            {/*<p className="ml-8">   </p>*/}
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Experiences;