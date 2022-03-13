import React from 'react';
import ProjectCard from "./ProjectCard";
import Title from "./Title";
import diploma from "../images/diploma.png";

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
            name: "Jeu de quiz pour enfants",
            year: "2018",
            description: "Jeu de quiz pour enfants",
            tech: ["Android studio", "Java", "XML"],
            strTech: "Android studio, Java, XML",
            picSrc: "/ekfkze",
            workType: "Travail individuel",
            url: "",
        },
        // {
        //     name: "GOT season 8 countdown episodes",
        //     year: "2018",
        //     description: "app countdown of season 8 of game of thrones",
        //     tech: ["Android studio", "Java", "XML"],
        //     strTech: "Android studio, Java, XML",
        //     picSrc: "/ekfkze",
        //     workType: "Travail individuel",
        //     url: "",
        // },
        {
            name: "Application Web de voyage (PFE)",
            year: "2019",
            description: "Application Web en Laravel qui gère les destinations touristiques du Monde, permet à n’importe quel utilisateur de trouver les meilleures destinations, préciser et simplifier la recherche, trouver des endroits où ils peuvent faire leurs loisirs et savoir les détails sur le lieu.",
            tech: ["Laravel", "PHP", "Bootstrap", "HTML5/CSS3/JavaScript", "mySQL"],
            strTech: "Laravel, PHP, Bootstrap, HTML5/CSS3/JavaScript, mySQL",
            picSrc: "/ekfkze",
            workType: "Travail individuel",
            url: "/rapportpfe",
        },
        {
            name: "Hôtel/Camping",
            year: "2019",
            description: "Application Web en Laravel permet aux utilisateurs de voir les chambres disponibles et effectuer sa réservation avec une méthode de paiement confiant et International (PayPal). elle permet à l’administration d’hôtel de gérer les chambres et les réservations des clients.",
            tech: ["Laravel", "PHP", "Bootstrap", "HTML5/CSS3/JavaScript", "mySQL", "PayPal Gateway"],
            strTech: "Laravel, PHP, Bootstrap, HTML5/CSS3/JavaScript, mySQL, PayPal Gateway",
            picSrc: "/ekfkze",
            workType: "Travail individuel",
            url: "",
        },
        {
            name: "Location des Quads et tours",
            year: "2019",
            description: "Application Web en Laravel pour les agences touristiques de location des Quads et tours, permet aux utilisateurs de voir les tours et les véhicules fournir par l’agence et effectuer sa réservation (PayPal).\n",
            tech: ["Laravel", "PHP", "Bootstrap", "HTML5/CSS3/JavaScript", "mySQL"],
            strTech: "Laravel, PHP, Bootstrap, HTML5/CSS3/JavaScript, mySQL",
            picSrc: "/ekfkze",
            workType: "Travail individuel",
            url: "",
        },
        {
            name: "Jeu vidéo en 2d",
            year: "2020",
            description: "unity game 3d",
            tech: ["Unity 3D", "C#", "Photoshop"],
            strTech: "Unity 3D, C#, Photoshop",
            picSrc: "/ekfkze",
            workType: "Travail individuel",
            url: "",
        },
        {
            name: "Plateforme SIG",
            year: "2021",
            description: "Plateforme web de dématérialisation des procédures et les services en ligne pour le compte de !'Agence Urbaine de Ouarzazate-Zagora-Tinghir",
            tech: ["Laravel", "PHP" ,"Postgresql", "Reactjs", "Redux-saga", "Tailwind CSS", "Materiel UI", "Javascript", "OpenLayers"],
            strTech: "Laravel, PHP ,Postgresql, Reactjs, Redux-saga, Tailwind CSS, Materiel UI, Javascript, OpenLayers",
            picSrc: "/ekfkze",
            workType: "Travail en équipe",
            url: "",
        },
        {
            name: "Système de gestion de l’apprentissage (LMS)",
            year: "2021",
            description: "Application web gèrer le processus d'apprentissage via une ingénierie de formation convenable, pour le Ministère d'Intérieur",
            tech: ["Moodle", "Postgresql", "PHP", "Mustache", "Bootstrap"],
            strTech: "Moodle, Postgresql, PHP, Mustache, Bootstrap",
            picSrc: "/ekfkze",
            workType: "Travail individuel",
            url: "",
        },
        {
            name: "Système de gestion de l’apprentissage (LMS)",
            year: "2021",
            description: "Application LMS avancée",
            tech: ["Spring boot", "Java", "Mysql", "Reactjs", "Redux-saga", "Tailwind CSS", "Materiel UI", "Javascript"],
            strTech: "Spring boot, Java, Mysql, Reactjs, Redux-saga, Tailwind CSS, Materiel UI, Javascript",
            picSrc: "/ekfkze",
            workType: "Travail en équipe",
            url: "",
        },
        {
            name: "Système de gestion des connaissances (KMS)",
            year: "2021",
            description: "Le concept du système de gestion des connaissances (KMS) a pour ambition d'aider les utilisateurs internes créer, partager, structurer et diffuser les connaissances aux utilisateurs ciblés et intéressés.",
            tech: ["Liferay", "Postgresql"],
            strTech: "Liferay, Postgresql",
            picSrc: "/ekfkze",
            workType: "Travail en équipe",
            url: "",
        },
        {
            name: "Système de gestion des connaissances (KMS)",
            year: "2021",
            description: "Système de gestion des connaissances (KMS)",
            tech: ["Laravel", "PHP" ,"MySql", "Reactjs", "Redux-saga", "Tailwind CSS", "Materiel UI", "Javascript"],
            strTech: "Laravel, PHP ,MySql, Reactjs, Redux-saga, Tailwind CSS, Materiel UI, Javascript",
            picSrc: "/ekfkze",
            workType: "Travail en équipe",
            url: "",
        },
        {
            name: "IGLOMI-BS",
            year: "2021",
            description: "BS",
            tech: ["Laravel", "PHP" ,"MySql", "Reactjs", "Redux-saga", "Tailwind CSS", "Materiel UI", "Javascript"],
            strTech: "Laravel, PHP ,MySql, Reactjs, Redux-saga, Tailwind CSS, Materiel UI, Javascript",
            picSrc: "/ekfkze",
            workType: "Travail en équipe",
            url: "",
        },
        {
            name: "SOMAPORT",
            year: "2022",
            description: "SOMAPORT",
            tech: ["Laravel", "PHP" ,"MySql", "Reactjs", "Redux-saga", "Tailwind CSS", "Materiel UI", "Javascript"],
            strTech: "Laravel, PHP ,MySql, Reactjs, Redux-saga, Tailwind CSS, Materiel UI, Javascript",
            picSrc: "/ekfkze",
            workType: "Travail en équipe",
            url: "",
        },
    ]
    return (
        <div>
            <div className=" my-5">
                <Title title="Projects" icon={diploma} color="#fff" />
            </div>
            <div className="grid grid-cols-4 gap-8 pt-8 px-24 text-gray-600">
                {projects.map( p => <ProjectCard data={p}/>)}
            </div>
        </div>
    );
};

export default Projects;