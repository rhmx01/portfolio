import React from 'react';
import ProjectCard from "./ProjectCard";
import Title from "./Title";
import diploma from "../images/diploma.png";
import image from "../images/header-background.png"
import brainupkidsimg from "../images/screens/brainupkids/page.jpg"
import tbimg from "../images/screens/tb/page.jpg"
import quadimg from "../images/screens/quad/page.jpg"
import campingimg from "../images/screens/camping/page.jpg"
import firehead from "../images/screens/firehead/page.jpg"
import iglomiimg from "../images/screens/iglomi/page.jpg"
import rnplmsimg from "../images/screens/rnplms/page.jpg"
import rnpkmsimg from "../images/screens/rnpkms/page.jpg"
import sigimg from "../images/screens/auzot/page.jpg"
import bslmsimg from "../images/screens/bslms/page.jpg"
import bskmsimg from "../images/screens/bskms/page.jpg"
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
            id: 1,
            name: "Jeu de quiz pour enfants",
            year: "2018",
            description: "Jeu de quiz pour enfants",
            tech: ["Android studio", "Java", "XML"],
            strTech: "Android studio, Java, XML",
            picSrc: brainupkidsimg,
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
            id: 2,
            name: "Application Web de voyage (PFE)",
            year: "2019",
            description: "Application Web en Laravel qui gère les destinations touristiques du Monde, permet à n’importe quel utilisateur de trouver les meilleures destinations, préciser et simplifier la recherche, trouver des endroits où ils peuvent faire leurs loisirs et savoir les détails sur le lieu.",
            tech: ["Laravel", "PHP", "Bootstrap", "HTML5/CSS3/JavaScript", "mySQL"],
            strTech: "Laravel, PHP, Bootstrap, HTML5/CSS3/JavaScript, mySQL",
            picSrc: tbimg,
            workType: "Travail individuel",
            url: "/rapportpfe",
        },
        {
            id: 3,
            name: "Hôtel/Camping",
            year: "2019",
            description: "Application Web en Laravel permet aux utilisateurs de voir les chambres disponibles et effectuer sa réservation avec une méthode de paiement confiant et International (PayPal). elle permet à l’administration d’hôtel de gérer les chambres et les réservations des clients.",
            tech: ["Laravel", "PHP", "Bootstrap", "HTML5/CSS3/JavaScript", "mySQL", "PayPal Gateway"],
            strTech: "Laravel, PHP, Bootstrap, HTML5/CSS3/JavaScript, mySQL, PayPal Gateway",
            picSrc: campingimg,
            workType: "Travail individuel",
            url: "",
        },
        {
            id: 4,
            name: "Location des Quads et tours",
            year: "2019",
            description: "Application Web en Laravel pour les agences touristiques de location des Quads et tours, permet aux utilisateurs de voir les tours et les véhicules fournir par l’agence et effectuer sa réservation (PayPal).\n",
            tech: ["Laravel", "PHP", "Bootstrap", "HTML5/CSS3/JavaScript", "mySQL"],
            strTech: "Laravel, PHP, Bootstrap, HTML5/CSS3/JavaScript, mySQL",
            picSrc: quadimg,
            workType: "Travail individuel",
            url: "",
        },
        // {
        //     id: 5,
        //     name: "Jeu vidéo en 2d",
        //     year: "2020",
        //     description: "unity game 3d",
        //     tech: ["Unity 3D", "C#", "Photoshop"],
        //     strTech: "Unity 3D, C#, Photoshop",
        //     picSrc: firehead,
        //     workType: "Travail individuel",
        //     url: "",
        // },
        {
            id: 6,
            name: "Système d'information géographique (SIG)",
            year: "2021",
            description: "Plateforme web de dématérialisation des procédures et les services en ligne pour le compte de !'Agence Urbaine de Ouarzazate-Zagora-Tinghir",
            tech: ["Laravel", "PHP" ,"Postgresql", "Reactjs", "Redux-saga", "Tailwind CSS", "Materiel UI", "Javascript", "OpenLayers"],
            strTech: "Laravel, PHP ,Postgresql, Reactjs, Redux-saga, Tailwind CSS, Materiel UI, Javascript, OpenLayers",
            picSrc: sigimg,
            workType: "Travail en équipe",
            url: "",
        },
        {
            id: 7,
            name: "Learning Management System",
            year: "2021",
            description: "Application web gèrer le processus d'apprentissage via une ingénierie de formation convenable, pour le Ministère d'Intérieur",
            tech: ["Moodle", "Postgresql", "PHP", "Mustache", "Bootstrap"],
            strTech: "Moodle, Postgresql, PHP, Mustache, Bootstrap",
            picSrc: rnplmsimg,
            workType: "Travail individuel",
            url: "",
        },
        {
            id: 8,
            name: "Learning Management System",
            year: "2021",
            description: "Application LMS avancée pour gérer l'apprentissage de l'entreprises de télécommunications inwi",
            tech: ["Spring boot", "Java", "Mysql", "Reactjs", "Redux-saga", "Tailwind CSS", "Materiel UI", "Javascript"],
            strTech: "Spring boot, Java, Mysql, Reactjs, Redux-saga, Tailwind CSS, Materiel UI, Javascript",
            picSrc: bslmsimg,
            workType: "Travail en équipe",
            url: "",
        },
        {
            id: 9,
            name: "Knowledge management system",
            year: "2021",
            description: "Le concept du système de gestion des connaissances (KMS) a pour ambition d'aider les utilisateurs internes créer, partager, structurer et diffuser les connaissances aux utilisateurs ciblés et intéressés.",
            tech: ["Liferay", "Postgresql"],
            strTech: "Liferay, Postgresql",
            picSrc: rnpkmsimg,
            workType: "Travail en équipe",
            url: "",
        },
        {
            id: 10,
            name: "Knowledge management system",
            year: "2021",
            description: "Système de gestion des connaissances (KMS)",
            tech: ["Laravel", "PHP" ,"MySql", "Reactjs", "Redux-saga", "Tailwind CSS", "Materiel UI", "Javascript"],
            strTech: "Laravel, PHP ,MySql, Reactjs, Redux-saga, Tailwind CSS, Materiel UI, Javascript",
            picSrc: bskmsimg,
            workType: "Travail en équipe",
            url: "",
        },
        {
            id: 11,
            name: "Plateforme intermédiaire entre experts & entreprises, (React JS, Laravel API)",
            year: "2021",
            description: "Plateforme intermédiaire entre experts & entreprises",
            tech: ["Laravel", "PHP" ,"MySql", "Reactjs", "Redux-saga", "Tailwind CSS", "Materiel UI", "Javascript"],
            strTech: "Laravel, PHP ,MySql, Reactjs, Redux-saga, Tailwind CSS, Materiel UI, Javascript",
            picSrc: iglomiimg,
            workType: "Travail en équipe",
            url: "",
        },
        // {
        // id: 12,
        //     name: "SOMAPORT",
        //     year: "2022",
        //     description: "SOMAPORT",
        //     tech: ["Laravel", "PHP" ,"MySql", "Reactjs", "Redux-saga", "Tailwind CSS", "Materiel UI", "Javascript"],
        //     strTech: "Laravel, PHP ,MySql, Reactjs, Redux-saga, Tailwind CSS, Materiel UI, Javascript",
        //     picSrc: image,
        //     workType: "Travail en équipe",
        //     url: "",
        // },
    ]
    return (
        <div id="projects" className="py-16">
            <div className=" my-5">
                <Title title="Portfolio" icon={diploma} color="#fff" />
            </div>
            <div className="grid grid-cols-4 gap-8 pt-8 px-24 text-gray-600">
                {projects.map( p => <ProjectCard key={p.id} data={p}/>)}
            </div>
        </div>
    );
};

export default Projects;