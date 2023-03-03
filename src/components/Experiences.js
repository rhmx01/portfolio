import React from 'react';
import work from "../images/work.png";
import Title from "./Title";
import {ArrowRight, Event, Flag} from "@mui/icons-material";

const Experiences = () => {
    const data_fr = {
        job: "Ingénieur de projet",
        date: "Mars 2021 - Présent",
        compagny: "Bluescratch, Casablanca",
        projects: [
            {
                id: 1,
                title: "Système d'Information Géographique (SIG)",
                description: "Travail en équipe pour développer une application SIG avec Laravel & React JS, pour l’Agence Urbaine Ouarzazate-Zagora–Tinghir (AUOZT)"
            },
            {
                id: 2,
                title: "Learning Management System (LMS)",
                description: "Travail individuel pour développer une application LMS personnalisée avec Moodle pour le Ministère d'Intérieur"
            },
            {
                id: 5,
                title: "Knowledge management system (KMS)",
                description: "Travail individuel pour développer une application KMS avec Liferay pour le Ministère d'Intérieur"
            },
            {
                id: 3,
                title: "Learning Management System (LMS)",
                description: "Travail en équipe pour développer une application LMS avancée avec Spring Boot & React JS"
            },
            {
                id: 4,
                title: "Knowledge management system (KMS)",
                description: "Travail en équipe pour développer une application KMS avec Laravel & React JS"
            },
            {
                id: 6,
                title: "Plateforme intermédiaire entre experts & entreprises, (React JS, Laravel API)",
                description: "Travail en équipe pour développer une application de bank des consultants en Laravel & React JS"
            },
            // {
            //     id: 7,
            //     title: "SOMAPORT",
            //     description: "Travail en équipe pour développer une application de gestion des facteurs en Laravel & React JS"
            // },
        ],
    }
    return (
        <div id="work" className="pt-16">
            <div className=" mt-5 mb-5">
                <Title title="Expérience Professionnelle" icon={work} color="#1f2235"/>
            </div>
            <div>
                <div id="workexperience" className="sectionClass">
                    <div className="row">
                        <div className="fullWidth eight columns">
                            <ul className="cbp_tmtimeline">
                                <li>
                                    <div className="cbp_tmicon cbp_tmicon-phone flex items-center">
                                        <img src={work} alt="rachid hamma ali work" className="w-16 mx-auto"/>
                                    </div>
                                    <div className="cbp_tmlabel wow fadeInRight animated">
                                        <h3>{data_fr.job}</h3>
                                        <div className="date">
                                            <Event/> {data_fr.date}
                                        </div>
                                        <h4><Flag/> {data_fr.compagny}</h4>
                                        <div className="projectParagraph">
                                            {data_fr.projects.map( project => (
                                                    <div key={project.id} className="mt-2">
                                                        <span className="font-bold"><ArrowRight/>{project.title} :</span><br/>
                                                        <p className="ml-8">{project.description}</p>
                                                    </div>
                                                )
                                            )}

                                            {/*<span className="font-bold"><ArrowRight/>   </span><br/>*/}
                                            {/*<p className="ml-8">   </p>*/}
                                        </div>
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