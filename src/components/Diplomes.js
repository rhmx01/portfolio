import React from 'react';
import {ArrowRight} from "@mui/icons-material";
import diploma from "../images/diploma.png";
import Title from "./Title";

const Diplomes = () => {
    return (
        <div id="diplomes" className="py-16">
            <div className=" my-5">
                <Title title="Diplômes" icon={diploma} color="#fff" />
            </div>
            <div className="text-color grid gap-8 w-fit mx-auto">
                <div className="flex">
                    <p className="w-28"><span className="font-bold text-lg"><ArrowRight/>2019: </span></p>
                    <p className="f6"><u>Licence</u> fondamentale en sciences Mathématiques, Informatique et Applications au sein de la faculté Polydisciplinaire d’OUARZAZATE.</p>
                </div>
                <div className="flex">
                    <p className="w-28"><span className="font-bold text-lg"><ArrowRight/>2018: </span></p>
                    <p className="f6"><u>DEUG</u> en sciences Mathématique, Informatique et Applications au sein de la faculté Polydisciplinaire d’OUARZAZATE.</p>
                </div>
                <div className="flex">
                    <p className="w-28"><span className="font-bold text-lg"><ArrowRight/>2015: </span></p>
                    <p className="f6">Diplôme <u>Baccalauréat</u> en sciences Physique au sien de LYCÉE ABOU BAKR SEDDIK OUARZAZATE.</p>
                </div>
            </div>
        </div>

    );
};

export default Diplomes;