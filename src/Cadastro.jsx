import React from "react";
import "./Cadastro.css";
import { Link } from "react-router-dom";

function Cadastro() {
  return (
    <div className="cadastro-container">
      <div className="cadastro-box">
        <h1 className="cadastro-title">Cadastro</h1>

        <label className="cadastro-label">Nome:</label>
        <input type="text" className="cadastro-input" placeholder="Digite seu nome completo" />

        <label className="cadastro-label">E-mail:</label>
        <input type="email" className="cadastro-input" placeholder="Digite seu e-mail" />

        <label className="cadastro-label">Senha:</label>
        <input type="password" className="cadastro-input" placeholder="Crie uma senha" />

        <label className="cadastro-label">Confirmar Senha:</label>
        <input type="password" className="cadastro-input" placeholder="Confirme sua senha" />

        <button className="cadastro-button">CADASTRAR</button>

        <div className="social-login">
          <p className="social-text">Ou cadastre-se com</p>
          <div className="icons">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png" alt="Google" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="Github" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" />
          </div>
          <p className="signup-text">
            Já tem conta? <Link to="/">Ir para o Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
