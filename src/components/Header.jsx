import React from 'react';
// IMPORTANTE: MANTENDO o nome do arquivo e usando CSS MODULES
import styles from './Header.module.css'; 

function Header() {
  return (
    <header className={styles.headerContainer}>
      
      {/* 1. Navbar (Cabeçalho com Links e Botões) */}
      <div className={styles.headerContent}>
        <div className={styles.logoSection}>
          <img src="/logo.png" alt="Logo ResGatinhos" className={styles.logoImg} />
        </div>
        
        <div className={styles.navAndButtons}> 
          <nav className={styles.navLinks}>
            <a href="#voluntario">Seja Voluntário</a>
            <a href="#como-ajudar">Como ajudar</a>
            <a href="#adote">Adote</a>
            <a href="#contato">Contato</a>
          </nav>
          <div className={styles.buttons}>
            <button className={`${styles.btn} ${styles.entrar}`}>Entrar</button>
            <button className={`${styles.btn} ${styles.cadastrar}`}>Cadastrar</button>
          </div>
        </div>
      </div>
      
      {/* 2. Seção Hero (Banner Voluntários) - AGORA SÓ CONTÊINER E IMAGEM */}
      <div className={styles.heroSection}> 
        
        {/* Imagem Principal do Gato (O cartaz que já tem o texto) */}
        <img src="/banner-voluntarios.png" alt="Cartaz Voluntários" className={styles.heroImg} />
      </div> 

      {/* 3. Seção "Por que ser voluntário?" */}
      <div className={styles.whyVolunteerSection}>
        <h2 className={styles.whyVolunteerTitle}>Por que ser voluntário?</h2>
        <p className={styles.whyVolunteerText}>
          Ser voluntário no Resgatinhos é mais do que ajudar – é fazer parte de uma transformação real. 
          Cada minuto dedicado significa alimento, cuidados médicos e a chance de um lar para gatinhos que antes não tinham esperança. 
          Seu tempo pode mudar destinos.
        </p>
      </div>
    </header>
  );
}

export default Header;