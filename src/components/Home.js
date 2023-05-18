import React from "react";
import '../Css/speeddial.css';
import logo from '../images/cv_pic.png';

function Home() {
    return (
        <div className="home-container">
            <div className="home-content">
                <div className="home-">
                    <img src={logo} alt="me" className="home-image" />

                </div>
                <div className="home">
                    <p className="home-description">
                        Bonjour ! <b style={{ color: "#7b7be1" }}>Je m'appelle Mohja Moutawadii</b> et je suis une étudiante en première année d'ingénierie à l'ENSA El Jadida. Je suis passionnée par la technologie et l'innovation, et j'ai hâte de développer mes compétences dans le domaine de l'informatique.<br /><br />
                        En tant que programmeuse en herbe, j'apprends actuellement divers langages de programmation tels que Java, Python et JavaScript. Je suis également en train de me familiariser avec les technologies web telles que HTML, CSS et ReactJS.<br /><br />
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;
