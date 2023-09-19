import "../index.css"
import Header from "../component/Header.jsx"
import Footer from "../component/Footer.jsx"
import lasersBleus from "../images/iStock-180756441.jpg"
import code from "../images/code.jpg"
import piecePlante from "../images/pieceplante.jpg"
import google from "../images/google.jpg"
import responsive from "../images/responsive.jpg"
import seo from "../images/SEO.jpg"
import languages from "../images/languages.jpg"


const buttonLire = <button className="Read">Lire la suite</button>;



export default function Blog() {
    return (
        <div className="App">
            <Header></Header>

            <div>
                <img className="laser-bleu" src={lasersBleus} alt="Lasers bleus"></img>
            </div>;
            <div className="intro">
                <h1>PORTFOLIO</h1>
                <p className="intro-services">Voici quelques-unes de mes réalisations.</p>

                <hr className="barre" />
            </div>

            <div className="blog">

                <div className="bloc-blog">
                    <img className="image-blog" src={code} alt="Panier de légumes"></img>
                    <h3 className="titre-blog">Coder son site en HTML/CSS</h3>
                    <p className="details-blog">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    {buttonLire}
                    <div className="date-publication">Publié le 22 août 2022</div>

                </div>

                <div className="bloc-blog">
                    <img className="image-blog" src={piecePlante} alt="icones d'ordinateur bleu"></img>
                    <h3 className="titre-blog">Vendre ses produits sur le web</h3>
                    <p className="details-blog">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    {buttonLire}
                    <div className="date-publication">Publié le 20 août 2022</div>
                </div>

                <div className="bloc-blog">
                    <img className="image-blog" src={responsive} alt="icones d'ordinateur bleu"></img>
                    <h3 className="titre-blog">Se positionner sur Google</h3>
                    <p className="details-blog">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    {buttonLire}
                    <div className="date-publication">Publié le 1 août 2022</div>
                </div>

                <div className="bloc-blog">
                    <img className="image-blog" src={seo} alt="Panier de légumes"></img>
                    <h3 className="titre-blog">Coder en responsive design</h3>
                    <p className="details-blog">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    {buttonLire}
                    <div className="date-publication">Publié le 31 juillet 2022</div>

                </div>

                <div className="bloc-blog">
                    <img className="image-blog" src={languages} alt="icones d'ordinateur bleu"></img>
                    <h3 className="titre-blog">Techniques de référencement</h3>
                    <p className="details-blog">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    {buttonLire}
                    <div className="date-publication">Publié le 30 juillet 2022</div>
                </div>

                <div className="bloc-blog">
                    <img className="image-blog" src={google} alt="icones d'ordinateur bleu"></img>
                    <h3 className="titre-blog">Apprendre à coder</h3>
                    <p className="details-blog">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    {buttonLire}
                    <div className="date-publication">Publié le 12 juillet 2022</div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

