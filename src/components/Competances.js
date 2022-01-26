import React from 'react';
import Title from "./Title";
import work from "../images/work.png";
import {Rating} from "@mui/material";
import {Circle, CircleOutlined} from "@mui/icons-material";

const Competances = () => {
    const skills = [
        {name: "React js", level: 4},
        {name: "Laravel", level: 4},
        {name: "Spring Boot", level: 3},
        {name: "Redux-Saga", level: 4},
        {name: "Git/Github", level: 4},
        {name: "SQL(mysql, postgresql)", level: 4},
        {name: "Android Studio", level: 3},
        {name: "Moodle", level: 4},

        {name: "Liferay", level: 2},
        {name: "Gestion de projet", level: 2},
        {name: "SEO", level: 3},
        {name: "AWS", level: 2},
        {name: "Docker", level: 3},
        {name: "DevOps", level: 3},
        {name: "Unity 2d", level: 2},
        {name: "Photoshop", level: 4},
    ];
    return (
        <div id="skills" className="mt-5 pt-8">
            <div className=" mt-5 mb-5">
                <Title title="Compétences" icon={work} color="#fff"/>
            </div>

            <div className="grid grid-cols-2 gap-1 mx-auto">
                {skills.map( skill => (
                    <div className="flex justify-between w-96 items-center text-white border-b mt-4 mx-auto">
                        <h1 className="font-bold text-xl mr-2">{skill.name}</h1>
                        <Rating
                            name="read-only"
                            value={skill.level}
                            readOnly
                            icon={<Circle className="text-white w-2"/>}
                            emptyIcon={<CircleOutlined className="text-white w-2"/>}
                        />
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Competances;