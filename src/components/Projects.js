import React from 'react';
import ProjectCard from "./ProjectCard";

const Projects = () => {

    // 2018 : app quiz for kids (android studio, Java)
    //
    // 2019 : app countdown of season 8 of game of thrones (android studio, Java)
    // 2019: tripping book (Laravel, PHP, Mysql, Bootstrap
    // 2019: Hotels reservation (Laravel, PHP, Mysql, Bootstrap, paypal
    // 2019: Tours reservation (Laravel, PHP, Mysql, Bootstrap, paypal
    //
    // 2020: unity game 3d fire head (Unity 3D, C#, Photoshop
    //
    // 2021: AUOZT SIG platform (  Laravel, PHP ,Postgresql, Reactjs, Redux-saga, Tailwind CSS, Materiel UI, Javascript, OpenLayerMap,
    //     2021: LMS MI ( Moodle, PHP, Mustache, Bootstrap, Laravel, Liferay, Postgresql,
    //     //2021: KMS MI ( Liferay, Laravel, Postgresql, Javascript,
    //     2021: LMS BS ( Spring boot, Java, Mysql, Reactjs, Redux-saga, Tailwind CSS, Materiel UI, Javascript
    // // 2021: Kms bs liferay (  Laravel, PHP ,Mysql, Reactjs, Redux-saga, Tailwind CSS, Materiel UI, Javascript,
    // // 2021: Iglomi (  Laravel, PHP ,Mysql, Reactjs, Redux-saga, Tailwind CSS, Materiel UI, Javascript,
    //
    // deployment
    // AWS
    // openshift
    // VM ubuntu/centos/windows
    // docker
    const projects = [

        {
            name: "Brain up kids",
            year: "2018",
            description: "app quiz for kids",
            tech: ["Android studio", "Java", "XML"],
            picSrc: "/ekfkze",
            workType: "Travaille individuel",
            url: "",
        },
        {
            name: "GOT season 8 countdown episodes",
            year: "2018",
            description: "app countdown of season 8 of game of thrones",
            tech: ["Android studio", "Java", "XML"],
            picSrc: "/ekfkze",
            workType: "Travaille individuel",
            url: "",
        },
        {
            name: "Tripping book",
            year: "2019",
            description: "Application Web en Laravel qui gère les destinations touristiques du Monde, permet à n’importe quel utilisateur de trouver les meilleures destinations, préciser et simplifier la recherche, trouver des endroits où ils peuvent faire leurs loisirs et savoir les détails sur le lieu.",
            tech: ["Laravel", "PHP", "Bootstrap", "HTML5", "CSS3", "JavaScript", "mySQL(Eloquent ORM)"],
            picSrc: "/ekfkze",
            workType: "Travaille individuel",
            url: "",
        },
        {
            name: "Hotel/Camping",
            year: "2019",
            description: "Application Web en Laravel permet aux utilisateurs de voir les chambres disponibles et effectuer sa réservation avec une méthode de paiement confiant et International (PayPal). elle permet à l’administration d’hôtel de gérer les chambres et les réservations des clients.",
            tech: ["Laravel", "PHP", "Bootstrap", "HTML5", "CSS3", "JavaScript", "mySQL(Eloquent ORM)"],
            picSrc: "/ekfkze",
            workType: "Travaille individuel",
            url: "",
        },
        {
            name: "Location des Quads et tours",
            year: "2019",
            description: "Application Web en Laravel pour les agences touristiques de location des Quads et tours, permet aux utilisateurs de voir les tours et les véhicules fournir par l’agence et effectuer sa réservation (PayPal).\n",
            tech: ["Laravel", "PHP", "Bootstrap", "HTML5", "CSS3", "JavaScript", "mySQL(Eloquent ORM)"],
            picSrc: "/ekfkze",
            workType: "Travaille individuel",
            url: "",
        },
        {
            name: "Fire Head",
            year: "2020",
            description: "unity game 3d",
            tech: ["Unity 3D", "C#", "Photoshop"],
            picSrc: "/ekfkze",
            workType: "Travaille individuel",
            url: "",
        },
        {
            name: "AUOZT SIG platform",
            year: "2021",
            description: "AUOZT SIG platform ",
            tech: ["Laravel", "PHP" ,"Postgresql", "Reactjs", "Redux-saga", "Tailwind CSS", "Materiel UI", "Javascript", "OpenLayers"],
            picSrc: "/ekfkze",
            workType: "Travaille individuel",
            url: "",
        },
        {
            name: "LMS-MI",
            year: "2021",
            description: "LMS-MI",
            tech: ["Moodle", "Postgresql", "PHP", "Mustache", "Bootstrap", "Laravel", "Liferay"],
            picSrc: "/ekfkze",
            workType: "Travaille individuel",
            url: "",
        },
        {
            name: "LMS-BS",
            year: "2021",
            description: "LMS-BS",
            tech: ["Spring boot", "Java", "Mysql", "Reactjs", "Redux-saga", "Tailwind CSS", "Materiel UI", "Javascript"],
            picSrc: "/ekfkze",
            workType: "Travaille individuel",
            url: "",
        },
    ]
    return (
        <div className="grid gap-8 pt-8 px-24 text-gray-600">
            {projects.map( p => <ProjectCard data={p}/>)}
        </div>
    );
};

export default Projects;