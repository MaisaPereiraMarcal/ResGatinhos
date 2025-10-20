import React from 'react';
import headerStyles from './Header.module.css';
import { Link } from 'react-router-dom';

// REMOVA todas as importações de páginas daqui (Home, Adote, Contato, etc.)

function Header({ isLoggedIn, onLogout }) {
    // ... (O restante do seu código HTML/JSX aqui) ...
    return (


        <header className={headerStyles.headerContainer}>
            <div className={headerStyles.headerContent}>
            
                <div className={headerStyles.navAndButtons}>
                    <nav className={headerStyles.navLinks}>
                        {/* O Header só precisa dos links de navegação, não dos componentes */}
                        <Link to="/seja-voluntario">Seja Voluntário</Link>
                        <Link to="/como-ajudar">Como ajudar</Link>
                        <Link to="/adote">Adote</Link>
                        <Link to="/contato">Contato</Link>
                    </nav>
                </div>
                <div className={headerStyles.buttons}>

                    {isLoggedIn ? (

                        <>

                            <Link to="/conta" className={headerStyles.btnLink}>
                                <button className={`${headerStyles.btn} ${headerStyles.entrar}`}>
                                    PERFIL
                                </button>
                            </Link>

                            <button
                                className={`${headerStyles.btn} ${headerStyles.cadastrar}`}
                                onClick={onLogout}
                            >
                                SAIR
                            </button>
                        </>
                    ) : (

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

        </header>
    );
}

export default Header;