import React from 'react';
import work from "../images/work.png";
import Title from "./Title";

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
                                            <i className="fa fa-calendar"></i>March 2020 - Current
                                        </div>
                                        <h4><i className="fa fa-flag"></i>Blue scratch, Casablanca</h4>
                                        <p className="projectParagraph">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing
                                            elit. Fugit obcaecati ipsa quae, iusto laudantium qui, nisi eum modi
                                            perspiciatis quasi facilis corporis iure soluta enim incidunt itaque aspernatur
                                            sequi tempora.
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