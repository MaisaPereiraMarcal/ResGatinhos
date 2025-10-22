import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import styles from "./page-home.module.css";
import { Link, useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

export default function PageHome({ user, setUser, image }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glow, setGlow] = useState({ x: 50, y: 50 });

  // Animação de scroll da seção de vídeo
  useEffect(() => {
    const section = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add(styles.visible);
            observer.unobserve(section);
          }
        });
      },
      { threshold: 0.2 }
    );
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);


  
  // Fecha dropdown se clicar fora
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  

  const imagens = ["/banner1.jpg", "/banner2.jpg", "/banner3.jpg"];

  // ===== CONFIGURAÇÃO DO CARROSSEL ===== 
  const settings = { dots: true,
     infinite: true, 
     autoplay: true,
      speed: 700,
       autoplaySpeed: 3500, 
      slidesToShow: 1,
       slidesToScroll: 1,
       arrows: false,
       pauseOnHover: true,
       adaptiveHeight: true,
     };

  // Animações de scroll para outros elementos
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(
      `.${styles.textoHero}, .${styles.imgHero}, .${styles.quemSomos}, .${styles.cardGato}`
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const gatinhos = [
    { nome: "Luna", imagem: "/gato1.jpg", descricao: "Doce, tranquila e adora um carinho no colo." },
    { nome: "Tom", imagem: "/gato2.jpg", descricao: "Brincalhão e curioso — impossível não se encantar." },
    { nome: "Mimi", imagem: "/gato3.jpg", descricao: "Calma e observadora, perfeita para lares tranquilos." },
    { nome: "Zeca", imagem: "/gato4.jpg", descricao: "Ativo e carinhoso, vai te seguir por toda parte." },
  ];

  const playSound = () => {
    const audio = document.getElementById("meow-som");
    if (audio) audio.play();
  };

  return (
    <div className={styles.home}>
      {/* ===== NAVBAR ===== */}
      <header className={styles.navbar}>
        <div className={styles.logo}>
          <img src="/logo2.ico" alt="Logo Resgatinhos Blumenal" />
          <h1>ResGatinhos Blumenau</h1>
        </div>

        <nav className={styles.navlinks}>
          <Link to="/seja-voluntario">Seja Voluntário</Link>
          <Link to="/como-ajudar">Como Ajudar</Link>
          <Link to="/adotar">Adote</Link>
          <Link to="/contato">Contato</Link>

          {user ? (
            <div className={styles.perfilContainer} ref={dropdownRef}>
              <img
                src={user.foto}
                alt="Perfil"
                className={styles.fotoPerfil}
                onClick={() => setShowDropdown(!showDropdown)}
              />
              {showDropdown && (
                <div className={styles.dropdownMenu}>
                  <p style={{ color: "#dba511" }}>Bem-vindo, {user.nome}</p>
                  <Link to="/perfil" className={styles.dropdownItem}>Meu Perfil</Link>
                  <Link to="/configuracoes" className={styles.dropdownItem}>Configurações</Link>
                  <button onClick={() => setUser(null)} className={styles.dropdownSair}>Sair</button>
                </div>
              )}
            </div>
          ) : (
            <div className={styles.authButtons}>
              <button onClick={() => navigate("/login")} className={styles.btnEntrar}>Entrar</button>
              <button onClick={() => navigate("/criar-conta")} className={styles.btnCriarConta}>Criar Conta</button>
            </div>
          )}
        </nav>
      </header>

      {/* ===== MAIN ===== */}
      <main className={styles.mainContent}>
        {/* ===== CARROSSEL ===== */} 
        <section className={styles.bannerSection}> 
          <Slider {...settings}> 
            <div className={styles.bannerItem}> 
              <img src="/banner1.jpg" alt="Banner 1 - Adoção de Gatos" title="Adote um novo amigo" />
               </div>
                <div className={styles.bannerItem}>
                   <img src="/banner2.jpg" alt="Banner 2 - Resgate de Gatos" title="Apoie o Resgate" />
                    </div> 
                    <div className={styles.bannerItem}> 
                      <img src="/banner3.jpg" alt="Banner 3 - Voluntariado" title="Seja um voluntário" /> </div>
                       </Slider> 
                       </section>

        {/* ===== HERO ===== */}
        <section className={styles.hero}>
          <div className={styles.textoHero}>
            <h2>Transforme uma vida.<br />Adote um gatinho.</h2>
            <p>Cada gatinho resgatado carrega uma história de superação. Adote e ganhe um amigo para a vida toda.</p>
            <Link to="/adotar" className={styles.btnHero}>Quero Adotar</Link>
          </div>
          <div className={styles.imgHero}>
            <img src="/gato1.jpg" alt="Gato feliz" />
          </div>
        </section>

        {/* ===== CONTADOR =====
        <motion.div
          className={styles.cardWrapper}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          animate={{ rotateX: rotate.y, rotateY: rotate.x }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        ></motion.div> */}

        {/* ===== VÍDEO ===== */}
        <section ref={sectionRef} className={styles.videoSecao}>
          <h2>Assista nossa história</h2>
          <div className={styles.videoCard}>
            <video
              ref={videoRef}
              controls
              muted
              poster="/tbmr.png"
              className={styles.video}
            >
              <source src="/gato.mp4" type="video/mp4" />
              Seu navegador não suporta o vídeo.
            </video>
            <div className={styles.videoOverlay}></div>
          </div>
        </section>

        {/* ===== MAPA ===== */}
        <section className={styles.mapa}>
          <h2>Onde estamos</h2>
          <iframe
            title="Mapa do Abrigo"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.2020564696854!2d-49.0902536!3d-26.8016942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dee114d4bde35b%3A0xf835e4209ea4be1b!2sCEPREAD%20Centro%20de%20Preven%C3%A7%C3%A3o%20e%20Recupera%C3%A7%C3%A3o%20de%20Animais%20Dom%C3%A9sticos!5e0!3m2!1spt-BR!2sbr!4v1761064306882!5m2!1spt-BR!2sbr"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </section>
{/* ===== QUEM SOMOS ===== */} <section className={styles.quemSomos}> <div className={styles.textoQuemSomos}> <h2>Quem Somos — Projeto ResGatinhos</h2> <p> Somos um grupo apaixonado por felinos, dedicado ao resgate, cuidado e adoção responsável de gatinhos em situação de abandono. Nosso objetivo é transformar histórias de dor em finais felizes, unindo cada bichano a um novo lar cheio de amor. 💜 </p> </div> <div className={styles.cardGatoAnimado}> <img src="/gato-animado.gif" alt="Gatinho brincando" title="Gatinho resgatado feliz" /> </div> </section> {/* ===== GATINHOS ===== */}
        <div className={styles.gridGatos}>
          {gatinhos.map((gato, i) => (
            <div key={i} className={styles.cardGato}>
              <div className={styles.cardInner}>
                <div className={styles.cardFront}>
                  <img src={gato.imagem} alt={gato.nome} />
                  <h3>{gato.nome}</h3>
                </div>
                <div className={styles.cardBack}>
                  <p>{gato.descricao}</p>
                  <Link to="/adotar" className={styles.btnAdotar}>Adotar</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>


<div className={styles.cardContainer}>

  {/* 🐾 Faça Parte da Mudança */}
  <div className={styles.card}>
    {/* Coração com patinha */}
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <path fill="#333" d="M32 58s-1-.4-1-1c-6-6-11-11-16-16C7 37 4 32 4 26a14 14 0 0126-8 14 14 0 0126 8c0 6-3 11-11 15-5 3-10 8-16 15z"/>
      <circle cx="22" cy="22" r="3" fill="#333"/>
      <circle cx="42" cy="22" r="3" fill="#333"/>
      <circle cx="32" cy="18" r="2.5" fill="#333"/>
      <circle cx="27" cy="27" r="2.5" fill="#333"/>
    </svg>
    <div className={styles.card__content}>
      <p className={styles.card__title}>Faça Parte da Mudança</p>
      <p className={styles.card__description}>
        Adotar é mudar uma vida — e ganhar um amigo fiel.
      </p>
    </div>
  </div>

  {/* 🧶 Como Ajudar */}
  <div className={styles.card}>
    {/* Mão segurando coração */}
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 10h4v2h-4v4h-2v-4H7v-2h4V8h2v4z"/>
    </svg>
    <div className={styles.card__content}>
      <p className={styles.card__title}>Como Ajudar</p>
      <p className={styles.card__description}>
        Doe ração, remédios ou tempo. Toda ajuda conta!
      </p>
    </div>
  </div>

  {/* 💌 Transparência */}
  <div className={styles.card}>
    {/* Documento com check */}
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <rect x="12" y="8" width="40" height="48" rx="4" fill="#333"/>
      <path fill="none" stroke="#fff" strokeWidth="3" d="M22 32l8 8 12-12"/>
    </svg>
    <div className={styles.card__content}>
      <p className={styles.card__title}>Transparência</p>
      <p className={styles.card__description}>
        Doações com clareza e respeito sempre.
      </p>
    </div>
  </div>

  {/* 🐾 Seja Voluntário */}
  <div className={styles.card}>
    {/* Pessoa com gato */}
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="16" r="8" fill="#333"/>
      <path fill="#333" d="M16 56v-8a12 12 0 0112-12h8a12 12 0 0112 12v8H16z"/>
      <path fill="#333" d="M45 30c2-2 4-2 6 0s2 4 0 6-4 2-6 0-2-4 0-6z"/>
    </svg>
    <div className={styles.card__content}>
      <p className={styles.card__title}>Seja Voluntário</p>
      <p className={styles.card__description}>
        Ajude nos resgates, feiras e redes. Faça parte!
      </p>
    </div>
  </div>

</div>





      {/* ===== FOOTER ===== */}
      <footer className={styles.rodape}>
        <div className={styles.containerRodape}>
          <div className={styles.coluna}>
            <h3>Contato</h3>
            <p>contato@resgatinhos.com.br</p>
            <p>(47) 99909-9909</p>
          </div>

          <div className={styles.coluna}>
            <h3>Parcerias</h3>
            <ul>
              <li>@bia.blumenau</li>
              <li>@petamigomeu</li>
              <li>@larfelizgatos</li>
            </ul>
          </div>

          <div className={styles.colunaFinal}>
            <p className={styles.frase}>“Amor se adota. Cada lar transforma uma vida.”</p>
            <img
              src="/gato-rodape.png"
              alt="Gatinho rodapé"
              onClick={playSound}
              className={styles.gato}
            />
            <audio id="meow-som">
              <source src="/meow.mp3" type="audio/mpeg" />
            </audio>
          </div>
        </div>
        <div className={styles.copy}>
          <p>© 2025 ResGatinhos — Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  );
}
