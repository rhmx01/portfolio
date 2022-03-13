import React from 'react';
import {Button} from "@mui/material";
import image from "../images/header-background.png"

const ProjectCard = ({data}) => {
    return (
        <div className="">
            <div className="h-full relative rounded-xl overflow-hidden bg-white shadow-lg">
                <div className="w-full p-2 mb-10">
                    <div className="relative">
                        <img src={image} alt={data.name} className="rounded-xl"/>
                        <div className="absolute top-0 bg-yellow-600 rounded-md shadow-md text-white font-bold text-md px-2 m-2">
                            {data.year}
                        </div>
                    </div>
                    <div className="px-2">
                        <h3 className="font-bold">{data.name}</h3>
                        {/*<p>{data.description}</p>*/}
                        {/*<h3 className="underline font-bold text-xl mt-4">Besoins Techniques :</h3>*/}
                        {/*<p className="font-bold">*/}
                        {/*    {data.strTech}*/}
                        {/*</p>*/}

                    </div>

                </div>
                <div className="flex justify-end  w-full absolute bottom-0 p-2">
                    {/*<h2 className="mt-4 italic">{data.workType}</h2>*/}
                    <Button variant="contained">Détails</Button>
                </div>

            </div>
        </div>
    );
};

export default ProjectCard;