import Header from "../component/Header.jsx"
import Footer from "../component/Footer.jsx"
import "../style/contact.css"
import Button from "react-bootstrap/Button"
import iconeAdresse from "../images/pin.png"
import iconeTel from "../images/mobile-phone.png"





export default function Contact() {
    return (
        <div className="App">
            <Header></Header>

            <div className="picture col-12">
                <div className="div-contact col-11">
                    <div className="intro">
                        <h1>ME CONTACTER</h1>
                        <p className="intro-services">Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>

                        <hr className="barre" />
                        <br></br>
                    </div>
                    <div className="contact row justify-content-center">
                        <div className="form col-10 col-sm-5">
                            <h2>FORMULAIRE DE CONTACT</h2>
                            <hr className="barre2 col-12 col-sm-5 col-lg-12"></hr>
                            <form method="post" className="contact-form col-10 col-sm-12 col-lg-12">
                                <div className="first-name input ">
                                    <input type="text" className="first-name-box col-12 col-sm-12 col-lg-12" name="firstName" placeholder="Votre nom" v-model="firstName" required />
                                </div>
                                <br></br>
                                <div className="email input ">
                                    <input type="email" className="email-box col-12 col-sm-12 col-lg-12" name="email" placeholder="Votre adresse email" key="email-input" v-model="email" required />
                                </div>
                                <br></br>
                                <div className="phone input">
                                    <input type="text" className="phone-box col-12 col-sm-12 col-lg-12" name="phone" placeholder="Votre numéro de téléphone" key="phone-input" v-model="phone" required />
                                </div>
                                <br></br>
                                <div className="object input ">
                                    <input type="text" className="object-box col-12 col-sm-12 col-lg-12" name="object" placeholder="Sujet" v-model="object" required />
                                </div>
                                <br></br>
                                <div className="comments_block input">
                                    <textarea className="comments col-12 col-sm-12 col-lg-12" name="comments" placeholder="Votre message" rows="4" maxlength="500" v-model="comments"
                                        required></textarea>
                                </div>
                                <br></br>
                                {/* <p class="alerte" v-if="showAlert">
                                Votre message est parti !
                            </p> */}
                                <div id="submit_block">
                                    <Button variant="primary">Envoyer</Button>
                                </div>
                            </form>
                        </div>
                        <div className="coordonees col-10 col-sm-5">
                            <h2>MES COORDONNÉES</h2>
                            <hr className="barre2 separation col-12 col-sm-5 col-lg-12"></hr>

                            <div className="contact">
                                <img className="icone" src={iconeAdresse} alt="icone de point de localisation"></img>
                                <p className="adresse-postale text-contact">40 rue Laure Diebold
                                    69009 Lyon, France </p>
                            </div>
                            <div className="contact ">
                                <img className="icone" src={iconeTel} alt="icone de téléphone"></img>
                                <p className="tel text-contact">06 20 30 40 50</p>
                            </div>
                            <br></br>
                            <iframe className="col-12 col-sm-12 col-lg-12" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.627152462175!2d4.796403976494885!3d45.77866197108088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1695305555189!5m2!1sfr!2sfr" width="550" height="290" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <Footer link="#contact_title"></Footer>
        </div>
    );
}