import "../index.css";
import { Link } from "react-router-dom"



export default function App() {
    return (
        <div className="App">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>

            <nav class="navbar navbar-expand-lg navbar-light bg-grey " >
                <div class="container-fluid">
                    <Link class="navbar-brand text-white " to="#">JOHN DOE</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link text-white active" aria-current="page" to="/">ACCUEIL</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-white" aria-current="page" to="/services">SERVICES</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-white" aria-current="page" to="/realisation">RÉALISATIONS</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-white" to="/blog">BLOG</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-white" to="/contact">ME CONTACTER</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}



