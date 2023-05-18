import React from "react";
import { Card } from "primereact/card";
import '../Css/speeddial.css';


function Experience() {
    const skills = [
        "CSS",
        "JavaScript",
        "HTML",
        "Express.js",
        "React.js",
        "Laravel",
        "Java",
        "Python",
        "JavaScript",
        "PHP",
        "React Native",
        "C Language",
    ];

    return (
        <div className="skills-container">
            {/* <h4 style={{ color: "#7b7be1" }}>Cette année à l'ENSA El Jadida m'a permis d'acquérir un bon bagage en informatique et d'apprendre de nouveaux langages de programmation </h4> */}
            <br></br>
            <hr></hr>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <Card key={index} className="skill-card">
                        {skill}
                    </Card>
                ))}
            </div>
        </div >
    );
}

export default Experience;
