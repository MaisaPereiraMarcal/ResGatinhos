import React from 'react';
import headerStyles from './Header.module.css';
import { Link } from 'react-router-dom';

// 1. O componente AGORA aceita as props isLoggedIn e onLogout
function Header({ isLoggedIn, onLogout }) {
    return (
        <header className={headerStyles.headerContainer}>
            <div className={headerStyles.headerContent}>
                <div className={headerStyles.logoSection}>
                    <Link to="/">
                        <img src="/logo.png" alt="Logo ResGatinhos" className={headerStyles.logoImg} />
                    </Link>
                </div>

                <div className={headerStyles.navAndButtons}>
                    <nav className={headerStyles.navLinks}>
                        <Link to="/seja-voluntario">Seja Voluntário</Link>
                        <Link to="/como-ajudar">Como ajudar</Link>
                        <Link to="/adote">Adote</Link>
                        <Link to="/contato">Contato</Link>
                    </nav>
                    
                    <div className={headerStyles.buttons}>
                        {/* 2. Renderização Condicional: Troca os botões com base no estado de login */}
                        {isLoggedIn ? (
                            // ** OPÇÃO 1: USUÁRIO LOGADO **
                            <>
                                {/* Botão Perfil/Conta */}
                                <Link to="/conta" className={headerStyles.btnLink}>
                                    <button className={`${headerStyles.btn} ${headerStyles.entrar}`}>
                                        PERFIL
                                    </button>
                                </Link>
                                {/* Botão Sair */}
                                <button 
                                    className={`${headerStyles.btn} ${headerStyles.cadastrar}`}
                                    onClick={onLogout} // Chama a função que muda o estado no App.js
                                >
                                    SAIR
                                </button>
                            </>
                        ) : (
                            // ** OPÇÃO 2: USUÁRIO DESLOGADO (Seu código original) **
                            <>
                                <Link to="/entrar" className={headerStyles.btnLink}>
                                    <button className={`${headerStyles.btn} ${headerStyles.entrar}`}>
                                        ENTRAR
                                    </button>
                                </Link>
                                <Link to="/cadastrar" className={headerStyles.btnLink}>
                                    <button className={`${headerStyles.btn} ${headerStyles.cadastrar}`}>
                                        CADASTRAR
                                    </button>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;