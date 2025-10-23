import React from 'react';
import './App.css';

function App() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Login</h1>

        <label className="login-label">Usuario:</label>
        <input type="text" className="login-input" />

        <label className="login-label">Senha:</label>
        <input type="password" className="login-input" />

        <div className="options-row">
          <label className="checkbox-container">
            <input type="checkbox" />
            <span>Salvar cadastro</span>
          </label>
          <a href="#" className="forgot-password">Esqueceu a senha?</a>
        </div>

        <button className="login-button">ENTRAR</button>

        <div className="social-login">
          <p className="social-text">Logar com</p>
          <div className="icons">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png" alt="Google" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="Github" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" />
          </div>
          <p className="signup-text">
            Não tem conta? <a href="#" className="signup-link">Cadastre-se</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
