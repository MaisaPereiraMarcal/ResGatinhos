import React from 'react';
import './Header.css';  // Importa o arquivo CSS separado

function Header() {
  return (
    <>
      <header className="header">
        <div className="logo">
          <img src="/logo.png" alt="Logo ResGatinhos" />
        </div>
        <nav className="nav-links">
          <a href="#voluntario">Seja Voluntário</a>
          <a href="#como-ajudar">Como ajudar</a>
          <a href="#adote">Adote</a>
          <a href="#contato">Contato</a>
        </nav>
        <div className="buttons">
          <button className="btn entrar">Entrar</button>
          <button className="btn cadastrar">Cadastrar</button>
        </div>
      </header>

      <div className="banner">
        <img src="/banner-voluntarios.png" alt="Banner Voluntários" />
      </div>
    </>
  );
}

export default Header;
