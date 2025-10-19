import React, { useState } from 'react';
import styles from './SejaVoluntario.module.css';

function SejaVoluntario() {
    // 1. **COLOQUE SEU LINK REAL DO FORMSPREE AQUI**
    const FORMSPREE_URL = 'https://formspree.io/f/xjkazrwd'; 

    const [enviado, setEnviado] = useState(false);
    const [enviando, setEnviando] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault(); // <-- ESSENCIAL: Impede o redirecionamento padrão do HTML!
        setEnviando(true);

        const form = e.target;
        const data = new FormData(form);

        try {
            const response = await fetch(
                FORMSPREE_URL,
                {
                    method: 'POST',
                    body: data,
                    headers: {
                        'Accept': 'application/json'
                    }
                }
            );

            if (response.ok) {
                setEnviado(true); // Exibe mensagem de sucesso
                form.reset();     // Limpa o formulário

                // Esconde a mensagem depois de 4 segundos
                setTimeout(() => setEnviado(false), 4000);
            } else {
                alert("Ocorreu um erro ao enviar o formulário. Tente novamente.");
            }
        } catch (error) {
            alert("Erro de conexão. Verifique sua rede.");
        } finally {
            setEnviando(false); // Reabilita o botão
        }
    };

    return (
        <main>
 
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
                    {/* CARD 1 */}
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

                    {/* CARD 2 */}
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

                    {/* CARD 3 */}
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

                    {/* CARD 4 */}
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
     

            <div className={styles.formSection}>
                <p>Se deseja se tornar um voluntário preencha o formulário de inscrição.</p>

                <form className={styles.form} onSubmit={handleSubmit}> 
                    <p className={styles.formTitle}>Formulário de Inscrição</p>
                    <p className={styles.message}>Junte-se a nós e ajude a salvar vidas felinas!</p>

                    <label>
                        <input className={styles.input} type="text" name="nome" placeholder=" " required />
                        <span>Nome completo</span>
                    </label>
                    <label>
                        <input className={styles.input} type="tel" name="telefone" placeholder=" " required />
                        <span>Telefone / WhatsApp</span>
                    </label>
                    <label>
                        <input className={styles.input} type="email" name="email" placeholder=" " required />
                        <span>E-mail</span>
                    </label>
                    <label>
                        <textarea className={`${styles.input} ${styles.textarea}`} name="disponibilidade" placeholder=" " required></textarea>
                        <span>Disponibilidade (dias e horários)</span>
                    </label>
                    <label>
                        <textarea className={`${styles.input} ${styles.textarea}`} name="area" placeholder=" " required></textarea>
                        <span>Área em que gostaria de ajudar</span>
                    </label>

                    <button type="submit" className={styles.submit} disabled={enviando}>
                        {enviando ? 'Enviando...' : 'Enviar Inscrição'}
                    </button>

                    {enviado && (
                        <p className={styles.successMessage}>
                            Formulário enviado com sucesso! Nossa equipe entrará em contato em breve.
                        </p>
                    )}
                </form>
            </div>

      
            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <div className={styles.footerContact}>
                        <h3>Contato</h3>
                        <p>E-mail: contato@resgatinhosblumenau.com.br</p>
                        <p>Telefone: 47 99999-9999</p>
                        <div className={styles.socialIcons}>
                            <a href="https://www.facebook.com/resgatinhosblumenau" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000" alt="Facebook" />
                            </a>
                            <a href="https://www.instagram.com/resgatinhosblumenau/" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000" alt="Instagram" />
                            </a>
                        </div>
                    </div>

                    <div className={styles.footerPartners}>
                        <h3>Parcerias</h3>
                        <p>@fa.blumenau</p>
                        <p>@petgramnatural</p>
                        <p>@fangpetstore</p>
                    </div>

                    <div className={styles.footerCat}>
                        <p className={styles.catMessage}>
                            Nós merecemos um lar cheio de amor
                        </p>
                        <img
                            src="/gatinho.png"
                            alt="Gatinho olhando"
                            className={styles.catImage}
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "/gatinho.png";
                            }}
                        />
                    </div>
                </div>
            </footer>
    
        </main>
    );
}

export default SejaVoluntario;