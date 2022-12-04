import React from 'react';
import {ArrowRight, OpenInNew} from "@mui/icons-material";
import diploma from "../images/diploma.png";
import Title from "./Title";

const Certificates = () => {
    return (
        <div id="certificats" className="py-16">
            <div className=" my-5">
                <Title title="Certificats" icon={diploma} color="#fff" />
            </div>
            <div className="text-color grid gap-8 w-fit">
                <div className="flex">
                    <p className="w-28"><span className="font-bold text-lg"><ArrowRight/>2022: </span></p>
                    <p className="f6">Spring Boot <a className="ml-2" href="https://brightcoding.dev/certificate/hamma-ali-rachid/57B72F32">Voir <OpenInNew/></a></p>
                </div>
                <div className="flex">
                    <p className="w-28"><span className="font-bold text-lg"><ArrowRight/>2022: </span></p>
                    <p className="f6">Laravel Advanced <a className="ml-2" href="https://brightcoding.dev/certificate/hamma-ali-rachid/3AF0B681">Voir <OpenInNew/></a></p>
                </div>
                <div className="flex">
                    <p className="w-28"><span className="font-bold text-lg"><ArrowRight/>2021: </span></p>
                    <p className="f6">React JS + REDUX + HOOKS <a className="ml-2" href="https://brightcoding.dev/certificate/hamma-ali-rachid/98945728">Voir <OpenInNew/></a></p>
                </div>
            </div>
        </div>

    );
};

export default Certificates;