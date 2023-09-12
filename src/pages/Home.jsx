import Header from "../component/Header.jsx"
import DevWeb from "../images/man-597178_1280.jpg"


export default function Home() {

    return (
        <div className="App">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
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
                    <hr color="#0d6efd" /> <br/>
                    <p>Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation d'<strong>intégrateur-développeur web</strong> au CEF. Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans le domaine du <strong>développement web</strong>. <br /> <br />
                        Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de <strong>développeur web full stack</strong>. <br /> <br />
                        J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.</p>
                </div>
                <div className="competences">
                    <img src={DevWeb} alt="Homme de profil qui travaille"></img>
                    <h3>Mes compétences</h3> <br/>
                    <p>HTML5 90%</p>
                    <div class="progress">
                        <div class="progress-bar bg-success" role="progressbar" width="90%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <br/>
                    <p>CSS3 80%</p>
                    <div class="progress">
                        <div class="progress-bar bg-info" role="progressbar" width="80%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <br/>
                    <p>JAVASCRIPT 70%</p>
                    <div class="progress">
                        <div class="progress-bar bg-warning" role="progressbar" width="70%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <br/>
                    <p>PHP 60%</p>
                    <div class="progress">
                        <div class="progress-bar bg-danger" role="progressbar" width="60%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <br/>
                    <p>REACT 50%</p>
                    <div class="progress">
                        <div class="progress-bar bg-danger" role="progressbar" width="50%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <br/>
                </div>
            </div>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        </div>
    );
}
