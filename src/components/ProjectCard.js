import React from 'react';
import {Card, CardContent} from "@mui/material";
import image from "../images/header-background.png"

const ProjectCard = ({data}) => {
    return (
        <div className="">
            <div className="flex rounded-xl overflow-hidden bg-white shadow-lg">
                <img src={image} alt="p1" className="w-64 h-full"/>
                <CardContent>
                    <h1 className="font-bold text-2xl">{data.year}: {data.name}</h1>
                    <p>{data.description}</p>
                    <h3 className="underline font-bold text-xl">Besoins Techniques :</h3>
                    <div className="w-full mt-4">

                        {/*{data.tech.map( e => <div className="p1-2 px-4 w-fit border rounded-md bg-gray-200 font-bold  mr-2" >{e}</div>)}*/}

                        <ul className="">
                            {data.tech.map(e => (
                                <li className="inline">
                                    <div className="tag relative inline-block cursor-pointer p1-2 px-4 w-fit border rounded-md bg-gray-200 font-bold">{e}</div>
                                </li>
                            ))}
                        </ul>

                    </div>
                    <h2 className="mt-4 italic">{data.workType}</h2>
                </CardContent>

            </div>
        </div>
    );
};

export default ProjectCard;