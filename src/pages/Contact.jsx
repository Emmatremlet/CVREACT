import Header from "../component/Header.jsx"
import Footer from "../component/Footer.jsx"
import "../style/contact.css"
import Button from "react-bootstrap/Button"





export default function Contact() {
    return (
        <div className="App">
            <Header></Header>

            <div className="picture">
                <div className="div-contact">
                    <div className="intro">
                        <h1>ME CONTACTER</h1>
                        <p className="intro-services">Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>

                        <hr className="barre" />
                    </div>
                    <div className="contact row">
                        <div className="form col-10 col-sm-4">
                            <h2>FORMULAIRE DE CONTACT</h2>
                            <hr className="barre1"></hr>
                            <form method="post" className="contact-form">
                                <div id="first-name">
                                    <label for="first-name_box" className="first-name-label" ></label>
                                    <input type="text" className="first-name-box" name="firstName" placeholder="Votre nom" v-model="firstName" required />
                                </div>
                                <div id="email">
                                    <label for="email_box" className="email-label"></label>
                                    <input type="email" className="email-box" name="email" placeholder="Votre adresse email" key="email-input" v-model="email" required />
                                </div>
                                <div id="phone">
                                    <label for="phone_box" className="phone-label"></label>
                                    <input type="text" className="phone-box" name="phone" placeholder="Votre numéro de téléphone" key="phone-input" v-model="phone" required />
                                </div>
                                <div id="object">
                                    <label for="object_box" className="object-label"></label>
                                    <input type="text" className="object-box" name="object" placeholder="Sujet" v-model="object" required />
                                </div>
                                <div id="comments_block">
                                    <label className="comments-label" for="comments"></label>
                                    <textarea className="comments" name="comments" placeholder="Votre message" rows="4" maxlength="500" v-model="comments"
                                        required></textarea>
                                </div>
                                {/* <p class="alerte" v-if="showAlert">
                                Votre message est parti !
                            </p> */}
                                <div id="submit_block">
                                    <Button variant="primary">Envoyer</Button>
                                </div>
                            </form>
                        </div>
                        <div className="coordonees col-10 col-sm-4">
                            <h2>MES COORDONNÉES</h2>
                            <hr className="barre1"></hr>


                        </div>
                    </div>
                </div>
            </div>


            {/* <h2 id="contact_title">Contact</h2>
            */}

            <Footer link="#contact_title"></Footer>
        </div>
    );
}