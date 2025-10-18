import React from 'react';
import headerStyles from './Header.module.css';
import { Link } from 'react-router-dom';

function Header() {
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
                        <Link to="/voluntario">Seja Voluntário</Link>
                        <Link to="/como-ajudar">Como ajudar</Link>
                        <Link to="/adote">Adote</Link>
                        <Link to="/contato">Contato</Link>
                    </nav>
                    <div className={headerStyles.buttons}>
                        <Link to="/entrar" className={headerStyles.btnLink}>
                            <button className={`${headerStyles.btn} ${headerStyles.entrar}`}>Entrar</button>
                        </Link>
                        <Link to="/cadastrar" className={headerStyles.btnLink}>
                            <button className={`${headerStyles.btn} ${headerStyles.cadastrar}`}>Cadastrar</button>
                        </Link>
                    </div>
                </div>
            </div>

        </header>
    );
}

export default Header;