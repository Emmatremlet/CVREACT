import Header from "../component/Header.jsx"
import DevWeb from "../images/man-597178_1280.jpg"
import ProgressBar from 'react-bootstrap/ProgressBar';
import Footer from "../component/Footer.jsx"
import chatGeek from "../images/chatgeek.jpg"
import React, { useState, useEffect } from 'react'
import "../style/home.css"


export default function Home() {

    const [users, setUsers] = useState([])

    const getUsers = async () => {
        const res = await fetch("https://api.github.com/users/github-john-doe")
        const json = await res.json()
        setUsers(json)
    }

    useEffect(() => {
        getUsers()
    }, [])



    return (
        <div className="App">
            <Header></Header>
            <div className="header" id="header">
                <div className="background"></div>
                <div className="titre-header">
                    <h1 className="john-doe col-12 col-sm-12">Bonjour, je suis John Doe</h1>
                    <h2 className="header-job col-12 col-sm-12">Développeur web full stack</h2>
                    <a className="en-savoir-plus" href="#a-propos">En savoir plus</a>
                </div>
            </div>
            <div className="a-propos row justify-content-center mx-auto" id="a-propos">
                <div className="description col-10 col-sm-4 mx-auto">
                    <h2 className="titre-a-propos">À propos</h2>
                    <hr className="barre1 col-12 col-sm-12" /> <br />
                    <p className="presentation">Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation d'<strong>intégrateur-développeur web</strong> au CEF. Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans le domaine du <strong>développement web</strong>. <br /> <br />
                        Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de <strong>développeur web full stack</strong>. <br /> <br />
                        J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.</p>
                </div>
                <div className="competences col-10 col-sm-4 mx-auto">
                    <img src={DevWeb} alt="Homme de profil qui travaille"></img>
                    <h3 className="titre-competences">Mes compétences</h3> <br />
                    <div className="progress-bar">
                        <h5> HTML5 90% </h5>
                        <ProgressBar variant="danger" now={90} /> <br />
                        <h5> CSS3 80% </h5>
                        <ProgressBar variant="info" now={80} /> <br />
                        <h5> JAVASCRIPT 70% </h5>
                        <ProgressBar variant="warning" now={70} /> <br />
                        <h5> PHP 60% </h5>
                        <ProgressBar variant="success" now={60} /> <br />
                        <h5> REACT 50% </h5>
                        <ProgressBar now={50} /> <br />
                    </div>
                </div>
            </div>
            <div className="github-account row justify-content-center mx-auto">
                <h2 className="title-github col-10 col-sm-4">Github user</h2>
                <h5 className="name-github col-10 col-sm-12">John Doe</h5>
                <img className="img-github col-10 col-sm-2" alt="chat cartoon bleu" src={users.avatar_url}></img>
                <div className="infos-account ">
                    <p classname="bio ">{users.bio}</p>
                    <p>Abonnés : {users.followers}</p>
                    <p>Abonnement : {users.following}</p>
                    <p>Créé le : {users.created_at}</p>
                    <p>Modifié le : {users.updated_at}</p>
                    <p>URL repositories : <a className="link-repo" href={users.repos_url}>{users.repos_url}</a></p>
                </div>
            </div>

            <Footer link="#header"></Footer>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        </div>
    );
}
