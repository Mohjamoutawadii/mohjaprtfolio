import React from "react";
import { Card } from "primereact/card";
import '../Css/speeddial.css';

import pokemonImage from "../images/pokmon.png";
import laravel from "../images/laravel.png";
import universiteImage from "../images/universite.png";

function Projects() {
    const projects = [
        {
            title: "Pokemon Mobile Application",
            subTitle: "React Native",
            description:
                "Il s'agit d'une application mobile développée à l'aide d'Android Studio et React Native qui récupère des données à partir de l'API Pokemon et les affiche dans une interface utilisateur.",
            githubLink: "https://mohjamoutawadii.github.io/pokemon/",
            image: pokemonImage,
        },
        {
            title: "Gestion Des Salles Et Machines",
            subTitle: "Laravel",
            description:
                "une app pour faciliter la gestion des ressources de l'entreprise qui permet de superviser l'utilisation des salles et des équipements et des machines,",
            githubLink:
                "https://github.com/zakaria-333/Gestion-des-salles-et-machinnes.git",
            image: laravel,
        },
        {
            title: "Website universite",
            subTitle: "Wordpress",
            description:
                "Le site web de l'Université Polydisciplinaire de Sidi Bennour vise à fournir des informations complètes  sur l'université, ses programmes d'études,ses enseignants et ses activités académiques et extra-académiques.",
            youtubeLink: "https://youtu.be/DScIqat1DUk",
            image: universiteImage,
        },
    ];

    return (
        <div className="projects-container">
            <div className="projects-row">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <Card title={project.title} subTitle={project.subTitle}>
                            <div className="project-image-container">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="project-image"
                                />
                            </div>
                            <h4>Description:</h4>
                            <p>{project.description}</p>
                            {project.githubLink && (
                                <p>
                                    Savoir plus sur Github:{" "}
                                    <a href={project.githubLink}>{project.githubLink}</a>
                                </p>
                            )}
                            {project.youtubeLink && (
                                <p>
                                    Savoir plus sur YouTube:{" "}
                                    <a href={project.youtubeLink}>{project.youtubeLink}</a>
                                </p>
                            )}
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
