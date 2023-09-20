import "../style/footer.css";
import { Link } from "react-router-dom"
import Github from "../images/github.svg"
import Twitter from "../images/logo-twitter.png"
import Linkedin from "../images/linkedin.png"
import FlecheBleue from "../images/symbole-fleche-droite-bleu.png"

const styleLink = {
    color: "black",
    textDecoration: "none", 
    fontFamily : "Nunito Sans"
}

const styleLink2 = {
    color: "white",
    textDecoration: "none",
    fontFamily : "Nunito Sans"
}

export default function Footer(props) {
    return (
        <div className="footer">
            <div className="column">
                <div className="infos">
                    <h4>John Doe</h4>
                    <p className="adresse-postale">40 rue Laure Diebold <br />
                        69009 Lyon, France <br />
                        Téléphone : 06 20 30 40 50
                    </p>
                    <div className="social-networks">
                        <a href="https://github.com/Emmatremlet">
                            <img src={Github} alt="Profil GitHub Emma TREMLET" id="github" />
                        </a>
                        <a href="https://twitter.com/emmatremlet">
                            <img src={Twitter} alt="Profil Twitter Emma TREMLET" id="twitter" />
                        </a>
                        <a href="https://www.linkedin.com/in/emma-tremlet/">
                            <img src={Linkedin} alt="Profil Linkedin Emma TREMLET" id="linkedin" />
                        </a>
                    </div>
                </div>
                <div className="link">
                    <h4>Liens utiles</h4>
                    <img src={FlecheBleue} className="fleche-bleue" alt="Flèche bleue"></img>
                    <Link style={styleLink} to="/">Accueil</Link><br />
                    <img src={FlecheBleue} className="fleche-bleue" alt="Flèche bleue"></img>
                    <a style={styleLink} href="#a-propos">À propos</a><br />
                    <img src={FlecheBleue} className="fleche-bleue" alt="Flèche bleue"></img>
                    <Link style={styleLink} to="/services">Services</Link><br />
                    <img src={FlecheBleue} className="fleche-bleue" alt="Flèche bleue"></img>
                    <Link style={styleLink} to="/contact">Me contacter</Link><br />
                    <img src={FlecheBleue} className="fleche-bleue" alt="Flèche bleue"></img>
                    <Link style={styleLink} to="/mentionslegales">Mentions légales</Link><br />
                </div>
                <div className="last-realisations">
                    <h4>Mes dernières réalisations</h4>
                    <img src={FlecheBleue} className="fleche-bleue" alt="Flèche bleue"></img>
                    <a style={styleLink} href="/realisation/.fresh-food">Fresh food</a><br />
                    <img src={FlecheBleue} className="fleche-bleue" alt="Flèche bleue"></img>
                    <a style={styleLink} href=".resto-akira">Restaurant Akira</a><br />
                    <img src={FlecheBleue} className="fleche-bleue" alt="Flèche bleue"></img>
                    <a style={styleLink} href=".bien-etre">Espace bien-être</a><br />
                </div>
                <div className="last-articles">
                    <h4>Mes derniers articles</h4>
                    <img src={FlecheBleue} className="fleche-bleue" alt="Flèche bleue"></img>
                    <a style={styleLink} href=".coder-son-site">Coder son site en HTML/CSS</a><br />
                    <img src={FlecheBleue} className="fleche-bleue" alt="Flèche bleue"></img>
                    <a style={styleLink} href=".vendre-ses-produits">Vendre ses produits sur le web</a><br />
                    <img src={FlecheBleue} className="fleche-bleue" alt="Flèche bleue"></img>
                    <a style={styleLink} href=".se-positionner">Se positionner sur Google</a><br />
                </div>
            </div>
            <div className="copyright">
                <a href={props.link} style={styleLink2}>© Designed by Emma Tremlet</a>
            </div>
        </div>
    )
}