import "../index.css"
import Header from "../component/Header.jsx"
import Footer from "../component/Footer.jsx"
import lasersBleus from "../images/iStock-180756441.jpg"
import iconeOrdi from "../images/icone-d-ordinateur-bleu.png"
import iconeHTML from "../images/html.png"
import iconeDollar from "../images/dollar.png"








export default function Services() {
    return (
        <div className="App">
            <Header></Header>
            <div>
                <img className="laser-bleu" src={lasersBleus} alt="Lasers bleus"></img>
            </div>;
            <div className="intro">
                <h1>MON OFFRE DE SERVICES</h1>
                <p className="intro-services">Voici les prestations sur lesquelles je peux intervenir.</p>

                <hr className="services" />
            </div>

            <div className="service">

                <div className="bloc-service">
                    <img className="image-service" src={iconeOrdi} alt="icones d'ordinateur bleue"></img>
                    <h3 className="titre-service">UX DESIGN</h3>
                    <p className="details-services">L'<strong>UX Design </strong>est une méthode de conception centrée sur l'utilisateur.
                        Son but est d'offrir une expérience de navigation optimale à l'internaute.</p>
                </div>

                <div className="bloc-service">
                    <img className="image-service" src={iconeHTML} alt="icones de document HTML bleue"></img>
                    <h3 className="titre-service">DÉVELOPPEMMENT WEB</h3>
                    <p className="details-services">Le <strong>développement de sites web</strong> repose sur l'utilisation des langages HTML, CSS,
                        JavaScript et PHP.</p>
                </div>

                <div className="bloc-service">
                    <img className="image-service" src={iconeDollar} alt="icones loupe avec un dollar à l'intérieur bleue" ></img>
                    <h3 className="titre-service">RÉFÉRENCEMENT</h3>
                    <p className="details-services">Le <strong>référencement naturel d'un site</strong>, aussi appelé SEO,
                        consiste à mettre des techniques en oeuvre pour améliorer sa position dans les résultats des moteurs de recherche.</p>
                </div>
            </div>

            <Footer></Footer>
        </div>
    )
}

