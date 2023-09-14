import "../index.css";
import { Link } from "react-router-dom"
import Github from "../images/github.svg"
import Twitter from "../images/logo-twitter.png"
import Linkedin from "../images/linkedin.png"


export default function Footer() {
    return (
        <div className="Footer">
            <div className="infos">
                <strong>John Doe</strong>
                <p className="adresse-postale">40 rue Laure Diebold <br />
                    69009 Lyon, France <br />
                    Téléphone : 06 20 30 40 50
                </p>
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
            <div className="link">
                <strong>Liens utiles</strong><br />
                <Link to="/">Accueil</Link><br />
                <a href="#a-propos">À propos</a><br />
                <Link to="/services">Services</Link><br />
                <Link to="/contact">Me contacter</Link><br />
                <Link to="/mentionslegales">Mentions légales</Link><br />
            </div>
            <div className="last-realisations">
                <strong>Mes derniers articles</strong><br />
                <a href="#">Fresh food</a><br />
                <a href="#">Restaurant Akira</a><br />
                <a href="">Espace bien-être</a><br />
            </div>
            <div className="last-articles">
                <strong>Mes derniers articles</strong><br />
                <a href="#">Coder son site en HTML/CSS</a><br />
                <a href="#">Vendre ses produits sur le web</a><br />
                <a href="">Se positionner sur Google</a><br />
            </div>
            <div className="copyright">
                <p>© Designed by Emma Tremlet</p>
            </div>
        </div>
    )
}