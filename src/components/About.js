import React from 'react';
import Title from "./Title";
import work from "../images/work.png";
import boxeicon from "../images/boxe.png";
import cookingicon from "../images/cooking.png";
import {Circle, CircleOutlined, Email, Phone, Public} from "@mui/icons-material";
import {Rating} from "@mui/material";

const About = () => {

    const langages = [
        {name: "English", level: 4},
        {name: "French", level: 3},
        {name: "Arab", level: 5},
        {name: "Tamazight", level: 5},
        ]
    return (
        <div id="" className="py-8">
            <div className="mt-5 mb-5">
                <Title title="About" className="text-color" icon={work} color="#fff"/>
            </div>
            <div className="flex mx-auto items-center">
                <div className="p-2 grid grid-cols-4 gap-4 lg:gap-8 mx-auto text-color items-center">
                    {/*<div className="p-4">*/}
                    {/*<img src={pic} alt="Rachid hamma ali" className="flex w-56 h-56 rounded-full shadow-xl"/>*/}
                    {/*</div>*/}
                    <div id="details" className="p-4 px-8">
                        <h1 className="mb-4 font-bold text-2xl uppercase">Personal details</h1>
                        <h3 className="font-bold text-color"><a className="text-color" href="https://www.google.com/maps/place/30%C2%B052'03.0%22N+6%C2%B051'50.9%22W/@30.867502,-6.8649286,225m/data=!3m2!1e3!4b1!4m6!3m5!1s0x0:0x0!7e2!8m2!3d30.8675025!4d-6.8641443">
                            Located at : TARMIGT OUARZAZATE</a></h3>
                        <h3 className="font-bold">Age : 25 years old</h3>
                        {/*<h3 className="font-bold">Né le : 26-03-1997</h3>*/}
                        <h3 className="font-bold">Situation : Single</h3>
                        {/*<h3 className="font-bold">Permis de Conduire (B) : 2019</h3>*/}
                    </div>
                    <div id="contact" className="p-4 px-8 border-l order-slate-800">
                        <h1 className="mb-4 font-bold text-2xl uppercase">Contact</h1>
                        <h3 className="mb-4 font-bold"><a href="mailto:rachid@hammaali.ma"><Email/> rachid@hammaali.ma</a></h3>
                        <h3 className="mb-4 font-bold"><a href="tel:0696227119"><Phone/> +(212) 696 22 71 19</a></h3>
                        <h3 className="mb-4 font-bold"><Public/> <a href="https://hammaali.ma/" target="_blank">www.hammaali.ma</a></h3>
                    </div>
                    <div id="langages" className="p-4 px-8 border-l order-slate-800">
                        <h1 className="mb-4 font-bold text-2xl uppercase">Languages</h1>
                        {langages.map( skill => (
                            <div key={skill.name} className="flex justify-between mt-4 mx-auto">
                                <h1 className="font-bold text-xl mr-2">{skill.name}</h1>
                                <Rating
                                    name="read-only"
                                    value={skill.level}
                                    readOnly
                                    icon={<Circle className="text-color w-2"/>}
                                    emptyIcon={<CircleOutlined className="text-color w-2"/>}
                                />
                            </div>
                        ))}
                    </div>
                    <div id="interests" className="p-4 px-8 border-l order-slate-800 grid grid-cols-3 gap-2 w-fit">
                        <h1 className="mb-3 font-bold text-2xl uppercase col-span-3">Hobbies</h1>
                        <div className="bg-dark-blue p-4 rounded-full w-fit h-fit mx-auto">
                            <img src="https://firebasestorage.googleapis.com/v0/b/testimageview.appspot.com/o/s.png?alt=media&token=24d6f552-55d6-42b5-a607-4e48040a57f7" alt="mypic" className="m-auto"/>
                        </div>
                        <div className="bg-dark-blue p-4 rounded-full w-fit h-fit m-auto">
                        <img src="https://firebasestorage.googleapis.com/v0/b/testimageview.appspot.com/o/r.png?alt=media&token=dc263b32-c9c2-4aeb-9106-419430e84273" alt="mypic" className="m-auto"/>
                        </div>
                        <div className="bg-dark-blue p-4 rounded-full w-fit h-fit m-auto">
                        <img src="https://firebasestorage.googleapis.com/v0/b/testimageview.appspot.com/o/t.png?alt=media&token=6b0735a4-4c90-489b-9e7c-6c8151f7bdb0" alt="mypic" className="m-auto"/>
                        </div>
                        <div className="bg-dark-blue p-4 rounded-full w-fit h-fit m-auto">
                            <img src="https://firebasestorage.googleapis.com/v0/b/testimageview.appspot.com/o/g.png?alt=media&token=09525ccf-8c90-47ac-8498-daa0fb68641b" alt="mypic" className="m-auto"/>
                        </div>
                        <div className="bg-dark-blue p-4 rounded-full w-fit h-fit m-auto">
                            <img src={boxeicon} alt="mypic" className="m-auto"/>
                        </div>
                        <div className="bg-dark-blue p-4 rounded-full w-fit h-fit m-auto">
                            <img src={cookingicon} alt="mypic" className="m-auto"/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;