import "../index.css"
import Header from "../component/Header.jsx"
import Footer from "../component/Footer.jsx"
import Accordion from 'react-bootstrap/Accordion';
import iconeAdresse from "../images/pin.png"
import iconeTel from "../images/mobile-phone.png"
import iconeMail from "../images/mail.png"
import iconeWorld from "../images/world.png"





export default function MentionsLegales() {
    return (
        <div className="App">
            <Header></Header>
            <br />
            <br />
            <br />
            <br />
            

            <h1>MENTIONS LÉGALES</h1>

            <hr className="barre"></hr>

            <br />
            <br />
            <br />

            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Editeur du site</Accordion.Header>
                    <Accordion.Body>
                        <h2>John Doe</h2>
                        <img className="icone" src={iconeAdresse} alt="icone de point de localisation"></img>
                        <p className="adresse-postale">40 rue Laure Diebold <br />
                            69009 Lyon, France <br /></p>
                        <img className="icone" src={iconeTel} alt="icone de téléphone"></img>
                        <p className="tel">06 20 30 40 50</p>
                        <img className="icone" src={iconeMail} alt="icone de boite mail"></img>
                        <p className="mail">john.doe@gmail.com</p>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Hébergeur</Accordion.Header>
                    <Accordion.Body>
                        <h2>Always Data</h2>
                        <img className="icone" src={iconeAdresse} alt="icone de point de localisation"></img>
                        <p className="adresse-postale">91 rue du Faubourg Saint Honoré<br />
                            75008 Paris, France <br /></p>
                        <img className="icone" src={iconeWorld} alt="icone représentant le monde"></img>
                        <p className="site-web">www.alwaysdata.com</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Crédits</Accordion.Header>
                    <Accordion.Body>
                        <h2>Crédits</h2>
                        <p className="credits">Site développé par John Doe, étudiant du CEF. <br/> <br/>
                            Les images libres de droit sont issues du site <a href="https://pixabay.com">Pixabay</a>.</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>


            <Footer></Footer>
        </div>
    )
}

