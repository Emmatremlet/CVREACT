import "../index.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



export default function Header() {
    return (
        <div className="App">
            <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
                <Container >
                    <Navbar.Brand className="fs-3 text text-white" href="#home">JOHN DOE</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto offset-4">
                            <Nav.Link className="fs-5 text me-4 text-white" href="/">ACCUEIL</Nav.Link>
                            <Nav.Link className="fs-5 text me-4 text-white" href="/services">SERVICES</Nav.Link>
                            <Nav.Link className="fs-5 text me-4 text-white" href="/realisation">RÉALISATIONS</Nav.Link>
                            <Nav.Link className="fs-5 text me-4 text-white" href="/blog">BLOG</Nav.Link>
                            <Nav.Link className="fs-5 text me-4 text-white" href="/contact">ME CONTACTER</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}



