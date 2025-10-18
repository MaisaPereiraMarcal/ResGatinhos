import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

function Header() {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Formulário de Inscrição Enviado!");
    };
    return (
        <header className={styles.headerContainer}>

            <div className={styles.headerContent}>
                <div className={styles.logoSection}>
                    <Link to="/">
                        <img src="/logo.png" alt="Logo ResGatinhos" className={styles.logoImg} />
                    </Link>
                </div>

                <div className={styles.navAndButtons}>
                    <nav className={styles.navLinks}>
                        <Link to="/voluntario">Seja Voluntário</Link>
                        <Link to="/como-ajudar">Como ajudar</Link>
                        <Link to="/adote">Adote</Link>
                        <Link to="/contato">Contato</Link>
                    </nav>
                    <div className={styles.buttons}>
                        <Link to="/entrar" className={styles.btnLink}>
                            <button className={`${styles.btn} ${styles.entrar}`}>Entrar</button>
                        </Link>
                        <Link to="/cadastrar" className={styles.btnLink}>
                            <button className={`${styles.btn} ${styles.cadastrar}`}>Cadastrar</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className={styles.heroSection}>
                <img src="/banner-voluntarios.png" alt="Cartaz Voluntários" className={styles.heroImg} />
            </div>

            <div className={styles.whyVolunteerSection}>
                <h2 className={styles.whyVolunteerTitle}>Por que ser voluntário?</h2>
                <p className={styles.whyVolunteerText}>
                    Ser voluntário no Resgatinhos é mais do que ajudar – é fazer parte de uma transformação real.
                    Cada minuto dedicado significa alimento, cuidados médicos e a chance de um lar para gatinhos que antes não tinham esperança.
                    <br />
                    <strong>Seu tempo pode mudar destinos.</strong>
                </p>
            </div>
            <div className={styles.servicesContainer}>
                <div className={styles.cardsGrid}>

                    {/* CARD 1: Alimentação e Cuidados */}
                    <div className={styles.flipCard}>
                        <div className={styles.flipCardInner}>
                            <div className={styles.flipCardFront}>
                                <img src="https://img.icons8.com/?size=100&id=uQ1nuyyLK1WM&format=png&color=000000" alt="Ícone de Alimentação" className={styles.cardPngIcon} />
                                <p className={styles.cardTitle}>Alimentação e Cuidados</p>
                            </div>
                            <div className={styles.flipCardBack}>
                                <p className={styles.cardTitle}>Nutrição</p>
                                <p className={styles.cardBackText}>Ajude a garantir que nossos gatinhos tenham ração de qualidade e água fresca todos os dias.</p>
                            </div>
                        </div>
                    </div>

                    {/* CARD 2: Lar Temporário */}
                    <div className={styles.flipCard}>
                        <div className={styles.flipCardInner}>
                            <div className={styles.flipCardFront}>
                                <img src="https://img.icons8.com/?size=100&id=jDTMXUGahtEq&format=png&color=000000" alt="Ícone de Lar Temporário" className={styles.cardPngIcon} />
                                <p className={styles.cardTitle}>Lar Temporário</p>
                            </div>
                            <div className={styles.flipCardBack}>
                                <p className={styles.cardTitle}>Acolhimento</p>
                                <p className={styles.cardBackText}>Ofereça um abrigo seguro e amoroso enquanto eles aguardam uma família definitiva.</p>
                            </div>
                        </div>
                    </div>

                    {/* CARD 3: Captador(a) de Recursos */}
                    <div className={styles.flipCard}>
                        <div className={styles.flipCardInner}>
                            <div className={styles.flipCardFront}>
                                <img src="https://img.icons8.com/?size=100&id=vox5kPxooOLa&format=png&color=000000" alt="Ícone de Captador" className={styles.cardPngIcon} />
                                <p className={styles.cardTitle}>Captador(a) de Recursos</p>
                            </div>
                            <div className={styles.flipCardBack}>
                                <p className={styles.cardTitle}>Apoio Financeiro</p>
                                <p className={styles.cardBackText}>Ajude a organizar eventos e campanhas para arrecadar fundos para veterinários e remédios.</p>
                            </div>
                        </div>
                    </div>

                    {/* CARD 4: Divulgação */}
                    <div className={styles.flipCard}>
                        <div className={styles.flipCardInner}>
                            <div className={styles.flipCardFront}>
                                <img src="https://img.icons8.com/?size=100&id=103407&format=png&color=000000" alt="Ícone de Divulgação" className={styles.cardPngIcon} />
                                <p className={styles.cardTitle}>Divulgação</p>
                            </div>
                            <div className={styles.flipCardBack}>
                                <p className={styles.cardTitle}>Marketing</p>
                                <p className={styles.cardBackText}>Use suas habilidades de comunicação para encontrar novos lares e divulgar nossa causa nas redes sociais.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* NOVA SEÇÃO DE FORMULÁRIO */}
            <div className={styles.formSection}>
                <p>Se deseja se tornar um voluntário preencha o formulário de inscrição.</p>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <p className={styles.formTitle}>Formulário de Inscrição</p>
                    <p className={styles.message}>Junte-se a nós e ajude a salvar vidas felinas!</p>

                    {/* Campo 1: Nome Completo */}
                    <label>
                        <input className={styles.input} type="text" placeholder=" " required />
                        <span>Nome completo</span>
                    </label>

                    {/* Campo 2: Telefone / WhatsApp */}
                    <label>
                        <input className={styles.input} type="tel" placeholder=" " required />
                        <span>Telefone / WhatsApp</span>
                    </label>

                    {/* Campo 3: E-mail */}
                    <label>
                        <input className={styles.input} type="email" placeholder=" " required />
                        <span>E-mail</span>
                    </label>

                    {/* Campo 4: Disponibilidade (Textarea) */}
                    <label>
                        <textarea className={`${styles.input} ${styles.textarea}`} placeholder=" " required></textarea>
                        <span>Disponibilidade (dias e horários)</span>
                    </label>

                    {/* Campo 5: Área de Ajuda (Textarea) */}
                    <label>
                        <textarea className={`${styles.input} ${styles.textarea}`} placeholder=" " required></textarea>
                        <span>Área em que gostaria de ajudar</span>
                    </label>

                    <button type="submit" className={styles.submit}>Enviar Inscrição</button>

                    <p className={styles.infoMessage}>Nossa equipe entrará em contato!</p>
                </form>
            </div>

        </header>
    );
}

export default Header;