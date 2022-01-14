import React from 'react';
import {ArrowRight} from "@mui/icons-material";

const Diplomes = () => {
    return (
        <div className=" text-white grid gap-8">
            <div className="flex">
                <p className="w-40"><span className="font-bold text-lg"><ArrowRight/>2018-2019: </span></p>
                <p className="f6"><u>Licence</u> fondamentale en sciences Mathématiques, Informatique et Applications au sein de la faculté Polydisciplinaire d’OUARZAZATE.</p>
            </div>
            <div className="flex">
                <p className="w-40"><span className="font-bold text-lg"><ArrowRight/>2017-2018: </span></p>
                <p className="f6"><u>DEUG</u> en sciences Mathématique, Informatique et Applications au sein de la faculté Polydisciplinaire d’OUARZAZATE.</p>
            </div>
            <div className="flex">
                <p className="w-40"><span className="font-bold text-lg"><ArrowRight/>2014-2015: </span></p>
                <p className="f6">Diplôme <u>Baccalauréat</u> en sciences Physique au sien de LYCÉE ABOU BAKR SEDDIK OUARZAZATE.</p>
            </div>
        </div>
    );
};

export default Diplomes;