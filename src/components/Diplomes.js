import React from 'react';
import {ArrowRight, OpenInNew} from "@mui/icons-material";
import diploma from "../images/diploma.png";
import Title from "./Title";
import Certificates from "./Certificates";

const Diplomes = () => {
    return (
        <div id="diplomes" className="py-16">
            <div className=" my-5">
                <Title title="Education" icon={diploma} color="#fff" />
            </div>
            <div className="text-color grid gap-8 w-fit mx-auto">
                <div className="flex">
                    <p className="w-28"><span className="font-bold text-lg"><ArrowRight/>2019: </span></p>
                    <p>Bachelor's degree in <span className="font-bold">Mathematics, Computer Science and Applications (SMIA)</span>, <span>Polydisciplinary Faculty of OUARZAZATE.</span></p>
                </div>
                <div className="flex">
                    <p className="w-28"><span className="font-bold text-lg"><ArrowRight/>2018: </span></p>
                    <p>University general studies diploma in <span className="font-bold">Mathematics, Computer Science and Applications (SMIA)</span>, <span>Polydisciplinary Faculty of OUARZAZATE.</span></p>
                </div>
                <div className="flex">
                    <p className="w-28"><span className="font-bold text-lg"><ArrowRight/>2015: </span></p>
                    <p>Baccalaureate degree in <span className="font-bold">Physics</span>, <span>ABOU BAKR SEDDIK high school OUARZAZATE</span>.</p>
                </div>
                <div className=" my-5">
                    <Title title="Certificates" icon={diploma} color="#fff" />
                </div>
                <div className="flex">
                    <p className="w-28"><span className="font-bold text-lg"><ArrowRight/>2022: </span></p>
                    <p className="f6">Certificate of <u>Spring Boot</u> <a className="ml-2" href="https://brightcoding.dev/certificate/hamma-ali-rachid/57B72F32"><OpenInNew/></a></p>
                </div>
                <div className="flex">
                    <p className="w-28"><span className="font-bold text-lg"><ArrowRight/>2022: </span></p>
                    <p className="f6">Certificate of <u>Laravel Advanced</u> <a className="ml-2" href="https://brightcoding.dev/certificate/hamma-ali-rachid/3AF0B681"><OpenInNew/></a></p>
                </div>
                <div className="flex">
                    <p className="w-28"><span className="font-bold text-lg"><ArrowRight/>2021: </span></p>
                    <p className="f6">Certificate of <u>React JS & REDUX</u> <a className="ml-2" href="https://brightcoding.dev/certificate/hamma-ali-rachid/98945728"><OpenInNew/></a></p>
                </div>
            </div>

            {/*<Certificates/>*/}

        </div>

    );
};

export default Diplomes;