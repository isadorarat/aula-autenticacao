import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/esm/Button';

function Navegacao() {

    const estiloNavbar = {
        backgroundColor: 'var(--primaryColor)',
    }

    const estiloNavOptions = {
        color: 'var(--fontColor)',
    }

    return (
        <>
            <Navbar style={estiloNavbar}>
                <Container>
                    <Navbar.Brand href="/" style={estiloNavOptions}>Home</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/pessoas" style={estiloNavOptions}>Pessoas</Nav.Link>
                    </Nav>
                    <Button href='/login' variant='light'>Login</Button>
                </Container>
            </Navbar>
        </>
    );
}

export default Navegacao;