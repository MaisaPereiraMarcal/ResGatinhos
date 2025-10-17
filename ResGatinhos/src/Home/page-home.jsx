import React from "react";
import Slider from "react-slick";
import style from "./page-home.module.css";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PageHome() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const gatinhos = [
    { nome: "Márcia", genero: "Fêmea", idade: "Filhote", imagem: "/gato1.jpg" },
    { nome: "Nino", genero: "Macho", idade: "Adulto", imagem: "/gato2.jpg" },
    { nome: "Léo", genero: "Macho", idade: "Filhote", imagem: "/gato3.jpg" },
    { nome: "Ted", genero: "Macho", idade: "Filhote", imagem: "/gato4.jpg" },
  ];

  const adotados = [
    "/adotado1.jpg",
    "/adotado2.jpg",
    "/adotado3.jpg",
    "/adotado4.jpg",
    "/adotado5.jpg",
    "/adotado6.jpg",
    "/adotado7.jpg",
    "/adotado8.jpg",
  ];

  const playSound = () => {
    const audio = document.getElementById("meow-som");
    if (audio) audio.play();
  };

  return (
    <>
      {/* ====== NAVBAR ====== */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
        <div className="container">
          {/* Logo */}
          <a className="navbar-brand" href="#">
            <img
              src="/logo3.ico"
              alt="Logo"
              width="70"
              height="70"
              className="d-inline-block align-text-top"
            />
          </a>

          {/* Toggle button (mobile) */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Links centrais */}
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 align-items-center">
              <li className="nav-item">
                <a
                  className="nav-link d-flex flex-column text-center active ms-3"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    viewBox="0 -960 960 960"
                    width="20px"
                    fill="#4d5154"
                  >
                    <path d="M264-216h96v-240h240v240h96v-348L480-726 264-564v348Zm-72 72v-456l288-216 288 216v456H528v-240h-96v240H192Zm288-327Z" />
                  </svg>
                  <span className="big">Inicial</span>
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link d-flex flex-column text-center ms-3"
                  href="#voluntario"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    viewBox="0 -960 960 960"
                    width="20px"
                    fill="#4d5154"
                  >
                    <path d="m636-457-94-86q-94-87-114-128.5T408-742q0-52 35.5-87t89.5-35q30.18 0 56.59 13Q616-838 636-816q19-23 46-35.5t57.24-12.5q51.99 0 88.37 36.46Q864-791.08 864-739q0 29-19 70T732-543l-96 86Z" />
                  </svg>
                  <span className="big">Seja Voluntário</span>
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link d-flex flex-column text-center ms-3"
                  href="#ajudar"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    viewBox="0 -960 960 960"
                    width="20px"
                    fill="#4d5154"
                  >
                    <path d="M48-96v-432h274q8 0 15 1.5t13.55 3.61L607-431q30 11 47.5 37.25T672-336h47q60.42 0 102.71 42Q864-252 864-192v24L553-72l-265-81v57H48Z" />
                  </svg>
                  <span className="big">Como Ajudar</span>
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link d-flex flex-column text-center ms-3"
                  href="#adote"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    viewBox="0 -960 960 960"
                    width="20px"
                    fill="#4d5154"
                  >
                    <path d="M192.23-480Q152-480 124-507.77q-28-27.78-28-68Q96-616 123.77-644q27.78-28 68-28Q232-672 260-644.23q28 27.78 28 68Q288-536 260.23-508q-27.78 28-68 28Z" />
                  </svg>
                  <span className="big">Adote</span>
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link d-flex flex-column text-center ms-3"
                  href="#contato"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    viewBox="0 -960 960 960"
                    width="20px"
                    fill="#4d5154"
                  >
                    <path d="M72-144q-29.7 0-50.85-21.15Q0-186.3 0-216v-528q0-29.7 21.15-50.85Q42.3-816 72-816h816q29.7 0 50.85 21.15Q960-773.7 960-744v528q0 29.7-21.15 50.85Q917.7-144 888-144H72Z" />
                  </svg>
                  <span className="big">Contato</span>
                </a>
              </li>

              {/* Dropdown perfil */}
              <li className="nav-item dropdown ms-3">
                <a
                  className="nav-link dropdown-toggle d-flex align-items-center"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                    className="rounded-circle"
                    height="50"
                    alt="profile"
                    loading="lazy"
                  />
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Meu perfil
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Entrar
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Crie uma conta
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* ====== CONTEÚDO PRINCIPAL ====== */}
      <main className={style.mainContent}>
        {/* ====== CARROSSEL ====== */}
        <section className={style.bannerSection}>
          <Slider {...settings}>
            <div className={style.bannerItem}>
              <img src="/banner1.jpg" alt="Banner 1" />
            </div>
            <div className={style.bannerItem}>
              <img src="/banner2.jpg" alt="Banner 2" />
            </div>
            <div className={style.bannerItem}>
              <img src="/banner3.jpg" alt="Banner 3" />
            </div>
          </Slider>
        </section>

        {/* ====== ADOÇÃO ====== */}
        <section className={style.adocao} id="adote">
          <h2>Adoção</h2>
          <div className={style.gridGatos}>
            {gatinhos.map((gato, i) => (
              <div key={i} className={style.cardGato}>
                <img src={gato.imagem} alt={gato.nome} />
                <h3>{gato.nome}</h3>

                <div className={style.infoGato}>
                  <div className={style.itemInfo}>
                    <span>
                      {gato.genero === "Fêmea" ? (
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="12"
                            cy="8"
                            r="4"
                            stroke="#FF1493"
                            strokeWidth="2"
                          />
                          <line
                            x1="12"
                            y1="12"
                            x2="12"
                            y2="20"
                            stroke="#FF1493"
                            strokeWidth="2"
                          />
                          <line
                            x1="8"
                            y1="16"
                            x2="16"
                            y2="16"
                            stroke="#FF1493"
                            strokeWidth="2"
                          />
                        </svg>
                      ) : (
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="6"
                            stroke="#1E90FF"
                            strokeWidth="2"
                          />
                          <line
                            x1="17"
                            y1="7"
                            x2="22"
                            y2="2"
                            stroke="#1E90FF"
                            strokeWidth="2"
                          />
                        </svg>
                      )}
                    </span>
                  </div>

                  <div className={style.itemInfo}>
                    <img
                      src="/calendar-days-svgrepo-com.svg"
                      alt="Idade"
                    />
                    <span>{gato.idade}</span>
                  </div>
                </div>

                <button className={style.btnAdotar}>Quero Adotar</button>
              </div>
            ))}
          </div>
          <button className={style.btnVerTodos}>Ver todos os gatinhos</button>
        </section>

        {/* ====== ADOTADOS ====== */}
        <section className={style.adotados}>
          <h2>Gatinhos Adotados</h2>
          <div className={style.galeria}>
            {adotados.map((src, i) => (
              <img key={i} src={src} alt={`Gato adotado ${i + 1}`} />
            ))}
          </div>
        </section>

        {/* ====== SOBRE NÓS ====== */}
        <section className={style.sobre}>
          <div className={style.sobreTexto}>
            <h2>Sobre Nós</h2>
            <p>
              Somos uma entidade privada de voluntários dedicada ao resgate e
              adoção de gatos. Trabalhamos com amor e responsabilidade,
              buscando lares que ofereçam carinho e segurança. Nossos gatinhos
              são vacinados, vermifugados e castrados. Acreditamos que cada
              adoção é uma nova chance de felicidade — tanto para o gato quanto
              para quem adota.
            </p>
          </div>
          <img src="/grupo-gato.png" alt="Grupo de gatos" />
        </section>
      </main>

      {/* ====== RODAPÉ ====== */}
      <footer className={style.rodape}>
        <div className={style.contato}>
          <h3>Contato</h3>
          <p>E-mail: contato@gatinhosbememeow.com.br</p>
          <p>Telefone: (47) 99909-9909</p>
          <div className={style.icones}>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07..." />
              </svg>
            </a>
          </div>
        </div>

        <div className={style.parcerias}>
          <h3>Parcerias</h3>
          <p>@bia.blumenau</p>
          <p>@petamigomeu</p>
          <p>@larfelizgatos</p>
        </div>

        <div className={style.fraseFinal}>
          <p>Nós merecemos um lar cheio de amor</p>
          <img
            src="/gato-rodape.png"
            alt="Gatinho rodapé"
            onClick={playSound}
            style={{ cursor: "pointer" }}
          />
          <audio id="meow-som">
            <source src="/meow.mp3" type="audio/mpeg" />
          </audio>
        </div>
      </footer>
    </>
  );
}
