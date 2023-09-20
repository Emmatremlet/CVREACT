import "../index.css";
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function Header() {
    return (
        <div className="App">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"></link>
            <Navbar fixed="top" expand="lg" className="bg-body-tertiary navbar">
                <Container >
                    <Navbar.Brand className="fs-3 text" href="/">JOHN DOE</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto offset-4">
                            <Nav.Link className="fs-5 text me-4" href="/">ACCUEIL</Nav.Link>
                            <Nav.Link className="fs-5 text me-4" href="/services">SERVICES</Nav.Link>
                            <Nav.Link className="fs-5 text me-4 " href="/realisation">RÉALISATIONS</Nav.Link>
                            <Nav.Link className="fs-5 text me-4" href="/blog">BLOG</Nav.Link>
                            <Nav.Link className="fs-5 text me-4" href="/contact">ME CONTACTER</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
        </div>
    )
}



