import React, { useState } from 'react';
import './FormLogin.css';
import AuthRequests from '../../fetch/AuthRequests';

function FormLogin() {
    const [username, setUsername] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const login = { username: username, senha: senha }
        // Aqui você deve adicionar a lógica para autenticar o usuário 
        try {
            // faz a requsição de login, se sucesso redireciona a página
            if (await AuthRequests.login(login)) {
                window.location.href = '/';
            }
        } catch (error) {
            console.error('Erro ao tentar realizar login:', error);
            alert('Erro ao fazer login, verifique se usuário e/ou senha estão corretos.');
        }
    };


    return (
        <div className="login-form-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor="email">E-mail:</label>
                    <input
                        type="text"
                        id="email"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Senha:</label>
                    <input
                        type="password"
                        id="password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="login-button">Login</button>
            </form>
        </div>
    );
};

export default FormLogin;