import React from 'react';
import Title from "./Title";
import work from "../images/work.png";
import {Rating} from "@mui/material";
import {Circle, CircleOutlined} from "@mui/icons-material";

const Competances = () => {
    const skills = [
        {name: "React JS", level: 4},
        // {name: "JavaScript", level: 4},
        {name: "Laravel", level: 4},
        // {name: "PHP", level: 5},
        {name: "Spring Boot Java", level: 4},
        // {name: "Java", level: 4},
        {name: "Redux-Saga", level: 4},
        // {name: "C#", level: 3},
        {name: "REST/RESTful API", level: 4},
        {name: "SQL(mysql, postgresql)", level: 5},
        {name: "Git/Github", level: 4},
        {name: "Liferay", level: 4},
        {name: "Moodle", level: 4},
        // {name: "Gestion de projet", level: 3},
        {name: "DevOps", level: 3},
        {name: "SEO", level: 3},
        // {name: "AWS", level: 3},
        {name: "Android Studio Java", level: 3},
        {name: "Node JS", level: 4},
        // {name: "Docker", level: 3},
        // {name: "Unity 2d", level: 3},
        // {name: "Microsoft Office", level: 4},
        // {name: "Photoshop", level: 4},
    ];
    return (
        <div id="skills" className="pt-16">
            <div className=" mt-5 mb-5">
                <Title title="Compétences" icon={work} color="#fff"/>
            </div>

            <div className="grid grid-cols-2 gap-1 mx-auto">
                {skills.map( skill => (
                    <div key={skill.name} className="flex justify-between w-96 items-center text-color border-b mt-4 mx-auto">
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

        </div>
    );
};

export default Competances;