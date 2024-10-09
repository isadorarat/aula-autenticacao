import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/esm/Button';

function Navegacao() {

    // Gerencia o estado de autenticação
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Verifica o token de autenticação no localStorage
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    // Lida com o logout
    const handleLogout = () => {
        localStorage.clear();  // Remove todos os itens do localStorage
        setIsAuthenticated(false);  // Atualiza o estado de autenticação
        window.location.href = '/';  // Redireciona para a página inicial
    };

    // Lida com o login
    const handleLogin = () => {
        window.location.href = '/login';  // Redireciona para a página de login
    };

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
                    {isAuthenticated ? (
                        <Button onClick={handleLogout} variant='light'>Logout</Button>
                    ) : (
                        <Button onClick={handleLogin} variant='light'>Login</Button>
                    )}
                </Container>
            </Navbar>
        </>
    );
}

export default Navegacao;