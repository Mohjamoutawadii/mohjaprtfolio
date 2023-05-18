import React from "react";
import { Card } from 'primereact/card';
import { Carousel } from 'primereact/carousel';
import wordpress from '../images/wordpres.PNG';
import javafx from '../images/jvfx.PNG';
import '../Css/speeddial.css';

function Certificats() {
    const certificates = [
        {
            title: 'Certificat Wordpress',
            imageUrl: wordpress,
            description: 'Cette certification démontre une maîtrise des concepts essentiels, des fonctionnalités avancées et des bonnes pratiques liées à la création, à la personnalisation et à la gestion de sites Web avec WordPress'
        },
        {
            title: 'Certificat JavaFx',
            imageUrl: javafx,
            description: 'Cette certif est une accréditation professionnelle qui valide les compétences et les connaissances dans le développement en utilisant la bibliothèque JavaFX. qui est une plateforme logicielle permettant de créer des interfaces utilisateur modernes'
        },
    ];

    const cardTemplate = (certificate) => {
        return (
            <div className="certificate-card">
                <Card title={certificate.title} >
                    <div className="certificate-image">
                        <img src={certificate.imageUrl} alt={certificate.title} />
                    </div>
                    <p className="certificate-description">{certificate.description}</p>
                </Card>
            </div>
        );
    };

    return (
        <div className="certificate-page">
            <div className="certificate-carousel">
                <Carousel
                    value={certificates}
                    itemTemplate={cardTemplate}
                    numVisible={1}
                    circular={true}
                    autoplayInterval={3000}
                />
            </div>
        </div>
    );
}

export default Certificats;
