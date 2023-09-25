import "../style/blog.css"
import Header from "../component/Header.jsx"
import Footer from "../component/Footer.jsx"
import lasersBleus from "../images/iStock-180756441.jpg"
import code from "../images/code.jpg"
import piecePlante from "../images/pieceplante.jpg"
import google from "../images/google.jpg"
import responsive from "../images/responsive.jpg"
import seo from "../images/SEO.jpg"
import languages from "../images/languages.jpg"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const styleTitle = {
    fontSize: "25px",
    fontFamily: "Nunito Sans Gras",
    textAlign : "left"
}

const styleBody = {
    fontSize: "medium",
    fontFamily : "Nunito Sans"
}


const styleDate = {
    textALign: "left"
}


export default function Blog() {
    return (
        <div className="App">
            <Header></Header>

            <div id="header">
                <img className="laser-bleu" src={lasersBleus} alt="Lasers bleus"></img>
            </div>
            <div className="intro">
                <h1>PORTFOLIO</h1>
                <p className="intro-services">Voici quelques-unes de mes réalisations.</p>

                <hr className="barre" />
            </div>

            <div className="row blog justify-content-center">

                <Card className="col-lg-3 col-md-4 col-6">
                    <Card.Img variant="top" src={code} />
                    <Card.Body>
                        <Card.Title style= {styleTitle}>Coder son site en HTML/CSS</Card.Title>
                        <Card.Text style={styleBody}>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button  variant="primary">Lire la suite</Button>
                    </Card.Body>
                    <Card.Footer style={styleDate} className="text-muted">Publié le 22 aout 2022</Card.Footer>
                </Card>
                <Card className="col-lg-3 col-md-4 col-6">
                    <Card.Img variant="top" src={piecePlante} />
                    <Card.Body>
                        <Card.Title style= {styleTitle}>Vendre ses produits sur le web</Card.Title>
                        <Card.Text style={styleBody}>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Lire la suite</Button>
                    </Card.Body>
                    <Card.Footer style={styleDate} className="text-muted">Publié le 20 août 2022</Card.Footer>
                </Card>
                <Card className="col-lg-3 col-md-4 col-6">
                    <Card.Img variant="top" src={google} />
                    <Card.Body>
                        <Card.Title style= {styleTitle}>Se positionner sur Google</Card.Title>
                        <Card.Text style={styleBody}>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Lire la suite</Button>
                    </Card.Body>
                    <Card.Footer style={styleDate} className="text-muted">Publié le 1 août 2022</Card.Footer>
                </Card>
                <Card className="col-lg-3 col-md-4 col-6">
                    <Card.Img variant="top" src={seo} />
                    <Card.Body>
                        <Card.Title style= {styleTitle}>Coder en responsive design</Card.Title>
                        <Card.Text style={styleBody}>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Lire la suite</Button>
                    </Card.Body>
                    <Card.Footer style={styleDate} className="text-muted">Publié le 31 juillet 2022</Card.Footer>
                </Card>
                <Card className="col-lg-3 col-md-4 col-6">
                    <Card.Img variant="top" src={responsive} />
                    <Card.Body>
                        <Card.Title style= {styleTitle}>Techniques de référencement</Card.Title>
                        <Card.Text style={styleBody}>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Lire la suite</Button>
                    </Card.Body>
                    <Card.Footer style={styleDate} className="text-muted">Publié le 30 juillet 2022</Card.Footer>
                </Card>
                <Card className="col-lg-3 col-md-4 col-6">
                    <Card.Img variant="top" src={languages} />
                    <Card.Body>
                        <Card.Title style= {styleTitle}>Apprendre à coder</Card.Title>
                        <Card.Text style={styleBody}>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Lire la suite</Button>
                    </Card.Body>
                    <Card.Footer style={styleDate} className="text-muted">Publié le 12 juillet 2022</Card.Footer>
                </Card>
            </div>
            <Footer link="#header"></Footer>
        </div>
    )
}

