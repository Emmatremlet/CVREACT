import Header from "../component/Header.jsx"
import Footer from "../component/Footer.jsx"





export default function Contact() {
    return (
        <div className="App">
            <Header></Header>

            <h2 id="contact_title">Contact</h2>
            <form method="post" id="contact_form">
                <div id="id">
                    <div id="first-name">
                        <label for="first-name_box" id="first-name_label" >Prénom :</label>
                        <input type="text" id="first-name_box" name="firstName" placeholder="Votre prénom" v-model="firstName" required/>
                    </div>
                    <div id="last-name">
                        <label for="last-name_box" id="last-name_label">Nom :</label>
                        <input type="text" id="last-name_box" name="lastName" placeholder="Votre nom" v-model="lastName" required />
                    </div>
                </div>
                <div id="email">
                    <label for="email_box" id="email_label">Adresse e-mail :</label>
                    <input type="email" id="email_box" name="email" placeholder="NomPrenom@gmail.com" key="email-input" v-model="email" required />
                </div>
                <div id="object">
                    <label for="object_box" id="object_label"> Objet :</label>
                    <input type="text" id="object_box" name="object" placeholder="Le sujet de votre message" v-model="object" required />
                </div>
                <div id="comments_block">
                    <label id="comments_label" for="comments">Commentaire : </label>
                    <span id="comments-max">Max. 500 caractères</span>
                    <textarea id="comments" name="comments" placeholder="Votre message" rows="4" maxlength="500" v-model="comments"
                        required></textarea>
                </div>
                <p class="alerte" v-if="showAlert">
                    Votre message est parti !
                </p>
                <div id="submit_block">
                    <button type="submit" id="submit">
                        Envoyer
                    </button>
                </div>
            </form>

            <Footer link="#contact_title"></Footer>
        </div>
    );
}