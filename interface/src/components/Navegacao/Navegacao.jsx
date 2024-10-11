import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/esm/Button';
import AuthRequests from '../../fetch/AuthRequests';
import { useState, useEffect } from 'react';

function Navegacao() {
    // estado para controlar se o usuário está logado ou não
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [nomeUsuario, setNomeUsuario] = useState('');

    /**
    * Verifica a autenticação do usuário
    */
    useEffect(() => {
        const isAuth = localStorage.getItem('isAuth');  // recupera o valor de autenticação do localstorage
        const token = localStorage.getItem('token');  // recupera o token do localstorage
        if (isAuth && token && AuthRequests.checkTokenExpiry()) {  // verifica se isAuth é true, verifica se o token existe e verifica se o token é válido
            setIsAuthenticated(true);  // caso o token seja válido, seta o valor de autenticação para true
            setNomeUsuario(localStorage.getItem('username'));
        } else {
            setIsAuthenticated(false);  // caso o token seja inválido, seta o valor de autenticação para false
        }
    }, []);

    const estiloNavbar = {
        backgroundColor: 'var(--primaryColor)',
    }

    const estiloNavOptions = {
        color: 'var(--fontColor)',
        marginRight: '15px',
    }

    const logout = () => {
        AuthRequests.removeToken();
    }

    return (
        <>
            <Navbar style={estiloNavbar}>
                <Container>
                    {/* a opção Home é renderizada para todos os usuários, independente de estarem autenticados ou não */}
                    <Navbar.Brand href="/" style={estiloNavOptions}>Home</Navbar.Brand>
                    {isAuthenticated ? (
                        // renderiza as opções de navegação para usuário autenticado
                        <>
                            <Nav className="me-auto">
                                <Nav.Link href="/pessoas" style={estiloNavOptions}>Pessoas</Nav.Link>
                            </Nav>
                            <Nav.Item style={estiloNavOptions}>Bem-vindo, {nomeUsuario}</Nav.Item>
                            <Button variant='light' onClick={logout}>Sair</Button>
                        </>
                    ) : (
                        // renderiza as opções de navegação para usuário não autenticado
                        <Button href='/login' variant='light'>Login</Button>
                    )}
                </Container>
            </Navbar>
        </>
    );
}

export default Navegacao;