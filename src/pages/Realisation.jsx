import "../style/realisation.css"
import Header from "../component/Header.jsx"
import Footer from "../component/Footer.jsx"
import lasersBleus from "../images/iStock-180756441.jpg"
import imageLegumes from "../images/freshfood.jpg"
import sushi from "../images/sushi.jpg"
import bienEtre from "../images/bien-être.jpg"
import Card from "react-bootstrap/Card"
import Button from 'react-bootstrap/Button';



const styleTitle = {
    fontSize: "30px",
    fontFamily: "Nunito Sans Gras",
    margin: "20px"
}

const styleBody = {
    textAlign: "center",
    fontSize: "medium",
    fontFamily: "Nunito Sans"
}





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

            <div className="row realisation justify-content-center">

                <Card className="col-lg-3 col-md-4 col-6">
                    <Card.Img variant="top" src={imageLegumes} />
                    <Card.Body>
                        <Card.Title style={styleTitle}>Fresh food</Card.Title>
                        <Card.Text style={styleBody}>
                            Réalisation d'un site avec commande en ligne.
                        </Card.Text>
                        <Button variant="outline-primary">Voir</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted card-footer-realisation">Site réalisé avec PHP et MySQL</Card.Footer>
                </Card>
                <Card className="col-lg-3 col-md-4 col-6">
                    <Card.Img variant="top" src={sushi} />
                    <Card.Body>
                        <Card.Title style={styleTitle}>Restaurant Akira</Card.Title>
                        <Card.Text style={styleBody}>
                            Réalisation d'un site vitrine.
                        </Card.Text>
                        <Button variant="outline-primary">Voir</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted card-footer-realisation">Site réalisé avec WordPress</Card.Footer>
                </Card>
                <Card className="col-lg-3 col-md-4 col-6">
                    <Card.Img variant="top" src={bienEtre} />
                    <Card.Body>
                        <Card.Title style={styleTitle}>Espace bien-être</Card.Title>
                        <Card.Text style={styleBody}>
                            Réalisation d'un site vitrine pour un patricien de bien-être.
                        </Card.Text>
                        <Button classname= "button" variant="outline-primary">Voir</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted card-footer-realisation">Site réalisé en HTML/CSS</Card.Footer>
                </Card>
            </div>

            <Footer link="#header"></Footer>
        </div>
    )
}

