import Header from "../component/Header.jsx"
import DevWeb from "../images/man-597178_1280.jpg"
import ProgressBar from 'react-bootstrap/ProgressBar';
import Footer from "../component/Footer.jsx"


export default function Home() {

    return (
        <div className="App">
            <Header></Header>
            <div className="header">
                <div className="background"></div>
                <div className="titre-header">
                    <h1>Bonjour, je suis John Doe</h1>
                    <h2 className="header-job">Développeur web full stack</h2>
                    <a className="en-savoir-plus" href="#a-propos">En savoir plus</a>
                </div>
            </div>
            <div className="a-propos" id="a-propos">
                <div className="description">
                    <h2>À propos</h2>
                    <hr color="#0d6efd" /> <br />
                    <p>Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation d'<strong>intégrateur-développeur web</strong> au CEF. Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans le domaine du <strong>développement web</strong>. <br /> <br />
                        Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de <strong>développeur web full stack</strong>. <br /> <br />
                        J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.</p>
                </div>
                <div className="competences">
                    <img src={DevWeb} alt="Homme de profil qui travaille"></img>
                    <h3>Mes compétences</h3> <br />
                    <div>
                        <h4> HTML5 90% </h4>
                        <ProgressBar variant="danger" now={90} /> <br/>
                        <h4> CSS3 80% </h4>
                        <ProgressBar variant="info" now={80} /> <br/>
                        <h4> JAVASCRIPT 70% </h4>
                        <ProgressBar variant="warning" now={70} /> <br/>
                        <h4> PHP 60% </h4>
                        <ProgressBar variant="success" now={60} /> <br />
                        <h4> REACT 50% </h4>
                        <ProgressBar now={50} /> <br/>
                    </div>
                </div>
            </div>

            <Footer></Footer>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        </div>
    );
}
