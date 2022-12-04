import React from 'react';
import {ArrowRight, OpenInNew} from "@mui/icons-material";
import diploma from "../images/diploma.png";
import Title from "./Title";
import Certificates from "./Certificates";

const Diplomes = () => {
    return (
        <div id="diplomes" className="py-16">
            <div className=" my-5">
                <Title title="Diplomas" icon={diploma} color="#fff" />
            </div>
            <div className="text-color grid gap-8 w-fit mx-auto">
                <div className="flex">
                    <p className="w-28"><span className="font-bold text-lg"><ArrowRight/>2019: </span></p>
                    <p className="f6"><u>Bachelor's degree</u> in Mathematics, Computer Science and Applications (SMIA) within the Polydisciplinary Faculty of OUARZAZATE.</p>
                </div>
                <div className="flex">
                    <p className="w-28"><span className="font-bold text-lg"><ArrowRight/>2018: </span></p>
                    <p className="f6"><u>DEUG</u> in Mathematics, Computer Science and Applications (SMIA) within the Polydisciplinary Faculty of OUARZAZATE.</p>
                </div>
                <div className="flex">
                    <p className="w-28"><span className="font-bold text-lg"><ArrowRight/>2015: </span></p>
                    <p className="f6"><u>Baccalaureate degree</u> in Physics at the ABOU BAKR SEDDIK high school OUARZAZATE.</p>
                </div>
                <div className=" my-5">
                    <Title title="Certificates" icon={diploma} color="#fff" />
                </div>
                <div className="flex">
                    <p className="w-28"><span className="font-bold text-lg"><ArrowRight/>2022: </span></p>
                    <p className="f6">Certificate of <u>Spring Boot</u> <a className="ml-2" href="https://brightcoding.dev/certificate/hamma-ali-rachid/57B72F32">Voir <OpenInNew/></a></p>
                </div>
                <div className="flex">
                    <p className="w-28"><span className="font-bold text-lg"><ArrowRight/>2022: </span></p>
                    <p className="f6">Certificate of <u>Laravel Advanced</u> <a className="ml-2" href="https://brightcoding.dev/certificate/hamma-ali-rachid/3AF0B681">Voir <OpenInNew/></a></p>
                </div>
                <div className="flex">
                    <p className="w-28"><span className="font-bold text-lg"><ArrowRight/>2021: </span></p>
                    <p className="f6">Certificate of <u>React JS & REDUX</u> <a className="ml-2" href="https://brightcoding.dev/certificate/hamma-ali-rachid/98945728">Voir <OpenInNew/></a></p>
                </div>
            </div>

            {/*<Certificates/>*/}

        </div>

    );
};

export default Diplomes;