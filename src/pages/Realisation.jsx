import "../index.css"
import Header from "../component/Header.jsx"
import Footer from "../component/Footer.jsx"
import lasersBleus from "../images/iStock-180756441.jpg"
import imageLegumes from "../images/freshfood.jpg"
import sushi from "../images/sushi.jpg"
import bienEtre from "../images/bien-être.jpg"


const buttonVoir = <button className="See">Voir</button>;



export default function Realisation() {
    return (
        <div className="App">
            <Header></Header>
            <div id="header">
                <img className="laser-bleu" src={lasersBleus} alt="Lasers bleus"></img>
            </div>;
            <div className="intro">
                <h1>PORTFOLIO</h1>
                <p className="intro-services">Voici quelques-unes de mes réalisations.</p>

                <hr className="barre" />
            </div>

            <div className="realisation">

                <div className="fresh-food bloc-realisation">
                    <img className="image-realisation" src={imageLegumes} alt="Panier de légumes"></img>
                    <h3 className="titre-realisation">Fresh food</h3>
                    <p className="details-realisation">Réalisation d'un site avec commande en ligne.</p>
                    {buttonVoir}
                    <div className="techno-utilisees">Site réalisé avec PHP et MySQL</div>

                </div>

                <div className="resto-akira bloc-realisation">
                    <img className="image-realisation" src={sushi} alt="icones d'ordinateur bleu"></img>
                    <h3 className="titre-realisation">Restaurant Akira</h3>
                    <p className="details-realisation">Réalisation d'un site vitrine.</p>
                    {buttonVoir}
                    <div className="techno-utilisees">Site réalisé avec WordPress</div>
                </div>

                <div className="bien-etre bloc-realisation">
                    <img className="image-realisation" src={bienEtre} alt="icones d'ordinateur bleu"></img>
                    <h3 className="titre-realisation">Espace bien-être</h3>
                    <p className="details-realisation">Réalisation d'un site vitrine pour un patricien de bien-être.</p>
                    {buttonVoir}
                    <div className="techno-utilisees">Site réalisé en HTML/CSS</div>
                </div>
            </div>

            <Footer link="#header"></Footer>
        </div>
    )
}

