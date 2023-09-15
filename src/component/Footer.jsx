import "../index.css";
import { Link } from "react-router-dom"
import Github from "../images/github.svg"
import Twitter from "../images/logo-twitter.png"
import Linkedin from "../images/linkedin.png"
import FlecheBleue from "../images/symbole-fleche-droite-bleu.png"

const styleLink = {
    color: "black",
    textDecoration: "none"
}

export default function Footer() {
    return (
        <div className="footer">
            <div className="column">
                <div className="infos">
                    <strong>John Doe</strong>
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
                    <strong>Liens utiles</strong><br />
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
                    <strong>Mes derniers articles</strong><br />
                    <img src={FlecheBleue} className="fleche-bleue" alt="Flèche bleue"></img>
                    <a style={styleLink} href=".fresh-food">Fresh food</a><br />
                    <img src={FlecheBleue} className="fleche-bleue" alt="Flèche bleue"></img>
                    <a style={styleLink} href=".resto-akira">Restaurant Akira</a><br />
                    <img src={FlecheBleue} className="fleche-bleue" alt="Flèche bleue"></img>
                    <a style={styleLink} href=".bien-etre">Espace bien-être</a><br />
                </div>
                <div className="last-articles">
                    <strong>Mes derniers articles</strong><br />
                    <img src={FlecheBleue} className="fleche-bleue" alt="Flèche bleue"></img>
                    <a style={styleLink} href=".coder-son-site">Coder son site en HTML/CSS</a><br />
                    <img src={FlecheBleue} className="fleche-bleue" alt="Flèche bleue"></img>
                    <a style={styleLink} href=".vendre-ses-produits">Vendre ses produits sur le web</a><br />
                    <img src={FlecheBleue} className="fleche-bleue" alt="Flèche bleue"></img>
                    <a style={styleLink} href=".se-positionner">Se positionner sur Google</a><br />
                </div>
            </div>
            <div className="copyright">
                <p>© Designed by Emma Tremlet</p>
            </div>
        </div>
    )
}