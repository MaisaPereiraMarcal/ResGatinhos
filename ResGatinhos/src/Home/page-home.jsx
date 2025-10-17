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
    "/adotado1.jpg", "/adotado2.jpg", "/adotado3.jpg", "/adotado4.jpg",
    "/adotado5.jpg", "/adotado6.jpg", "/adotado7.jpg", "/adotado8.jpg",
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
            <img src="/logo3.ico" alt="Logo" width="70" height="70" className="d-inline-block align-text-top" />
          </a>

          {/* Search bar
          <form className="input-group d-none d-md-flex" style={{ width: "400px" }}>
            <input
              type="search"
              className="form-control"
              placeholder="Type query"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="button">
             Pesquisar
            </button>
          </form> */}

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
      <a className="nav-link d-flex flex-column text-center active ms-3" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#4d5154"><path d="M264-216h96v-240h240v240h96v-348L480-726 264-564v348Zm-72 72v-456l288-216 288 216v456H528v-240h-96v240H192Zm288-327Z"/></svg>
        <span className="big">Inicial</span>
      </a>
    </li>

    <li className="nav-item">
      <a className="nav-link d-flex flex-column text-center ms-3" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#4d5154"><path d="m636-457-94-86q-94-87-114-128.5T408-742q0-52 35.5-87t89.5-35q30.18 0 56.59 13Q616-838 636-816q19-23 46-35.5t57.24-12.5q51.99 0 88.37 36.46Q864-791.08 864-739q0 29-19 70T732-543l-96 86Zm0-97 47-41q62-54 85.5-89t23.5-55q0-22.42-15.29-37.71T739-792q-14 0-26.5 5.5T691-770l-55 64-55-64q-9-11-21.5-16.5T533-792q-22 0-37.5 15.29T480-739q0 14 18.5 44.5T592-595l44 41ZM288-228l264 81 235-72q-8-21-26.39-33-18.38-12-41.61-12H508q-17 0-34-2.5t-33-8.5l-68-26 22-69 70 26q11 4 21.5 6t21.5 2h92q0-10-5-17t-15-11l-256-92h-36v228ZM48-96v-432h274q8 0 15 1.5t13.55 3.61L607-431q30 11 47.5 37.25T672-336h47q60.42 0 102.71 42Q864-252 864-192v24L553-72l-265-81v57H48Zm72-72h96v-288h-96v288Zm516-541Z"/></svg>
        <span className="big">Seja Voluntário</span>
      </a>
    </li>

    <li className="nav-item">
      <a className="nav-link d-flex flex-column text-center ms-3" href="#">
      <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#4d5154"><path d="M48-48v-72h864v72H48Zm144-144v-216q-28-51-45.5-105T129-624q0-63.73 16.5-125.36Q162-811 180-873q5-17 19.9-28 14.89-11 33.1-11 22.73 0 38.87 16Q288-880 288-857v120q0 44 15 82t41.5 66.5q26.5 28.5 62.49 44.65t78.13 16.15q52.66 0 105.77 10.35t93.25 31.19q40.15 20.84 62 53Q768-401 768-355v163H192Zm72-72h432v-91q0-32-25.5-52T610-438q-35-11-70-14.5t-55-3.5q-57.15 0-106.08-21.5Q330-499 294-537t-57-89q-21-51-21-110-8 25-12 51t-4 52q0 55 19 106.5t45 99.5v163Zm216-312q-60 0-102-42t-42-102q0-60 42-102t102-42q60 0 102 42t42 102q0 60-42 102t-102 42Zm.21-72Q510-648 531-669.21t21-51Q552-750 530.79-771t-51-21Q450-792 429-770.79t-21 51Q408-690 429.21-669t51 21ZM347-192v-60q0-55 39-93.5t94-38.5h144v72H480q-25.5 0-42.75 17.71T420-252v60h-73Zm138-72Zm-5-456Z"/></svg>
        <span className="big">Como Ajudar</span>
      </a>
    </li>

    <li className="nav-item">
      <a className="nav-link d-flex flex-column text-center ms-3" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#4d5154"><path d="M192.23-480Q152-480 124-507.77q-28-27.78-28-68Q96-616 123.77-644q27.78-28 68-28Q232-672 260-644.23q28 27.78 28 68Q288-536 260.23-508q-27.78 28-68 28Zm168-144Q320-624 292-651.77q-28-27.78-28-68Q264-760 291.77-788q27.78-28 68-28Q400-816 428-788.23q28 27.78 28 68Q456-680 428.23-652q-27.78 28-68 28Zm240 0Q560-624 532-651.77q-28-27.78-28-68Q504-760 531.77-788q27.78-28 68-28Q640-816 668-788.23q28 27.78 28 68Q696-680 668.23-652q-27.78 28-68 28Zm168 144Q728-480 700-507.77q-28-27.78-28-68Q672-616 699.77-644q27.78-28 68-28Q808-672 836-644.23q28 27.78 28 68Q864-536 836.23-508q-27.78 28-68 28ZM285-95q-38 0-65-31t-27-76q0-47 32-81t63-69q26-30 46-61t43-62q20-26 45.5-39.5T480-528q32 0 58 13t45 39q23 31 43 61.5t46 61.5q30 36 63 69.5t33 81.82Q768-158 740.5-127 713-96 674-96q-50 0-97-12t-97-12q-50 0-97.5 12.5T285-95Z"/></svg>
        <span className="big">Adote</span>
      </a>
    </li>

    <li className="nav-item">
      <a className="nav-link d-flex flex-column text-center ms-3" href="#">
       <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#4d5154"><path d="M72-144q-29.7 0-50.85-21.15Q0-186.3 0-216v-528q0-29.7 21.15-50.85Q42.3-816 72-816h816q29.7 0 50.85 21.15Q960-773.7 960-744v528q0 29.7-21.15 50.85Q917.7-144 888-144H72Zm520.81-72H888v-528H72v528q52-56 120-88t143.5-32q75.5 0 141 32.5T592.81-216ZM336-384q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm400 144 80-79-48-65h-78q-8-23-13-47.14-5-24.13-5-48.86 0-24 5-48t13-47h78l48-65-80-80q-57 42-84.5 106T624-480q0 70 27.5 134T736-240Zm-551 24h299q-33-22-70.5-35t-78-13q-40.5 0-79.5 11.5T185-216Zm151-240q-20.4 0-34.2-13.8Q288-483.6 288-504q0-20.4 13.8-34.2Q315.6-552 336-552q20.4 0 34.2 13.8Q384-524.4 384-504q0 20.4-13.8 34.2Q356.4-456 336-456Zm144-24Z"/></svg>
        <span className="big">Contato</span>
      </a>
    </li>
  

  
 



            
              <li className="nav-item dropdown ms-3 ">
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
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item " href="#">Meu perfil
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#4d5154"><path d="M480-480q-60 0-102-42t-42-102q0-60 42-102t102-42q60 0 102 42t42 102q0 60-42 102t-102 42ZM192-192v-96q0-23 12.5-43.5T239-366q55-32 116.29-49 61.29-17 124.5-17t124.71 17Q666-398 721-366q22 13 34.5 34t12.5 44v96H192Zm72-72h432v-24q0-5.18-3.03-9.41-3.02-4.24-7.97-6.59-46-28-98-42t-107-14q-55 0-107 14t-98 42q-5 4-8 7.72-3 3.73-3 8.28v24Zm216.21-288Q510-552 531-573.21t21-51Q552-654 530.79-675t-51-21Q450-696 429-674.79t-21 51Q408-594 429.21-573t51 21Zm-.21-72Zm0 360Z"/></svg>
                    </a></li>
                  <li><a className="dropdown-item" href="#">Entrar
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#4d5154"><path d="M480-144v-72h264v-528H480v-72h264q29.7 0 50.85 21.15Q816-773.7 816-744v528q0 29.7-21.15 50.85Q773.7-144 744-144H480Zm-72-168-51-51 81-81H144v-72h294l-81-81 51-51 168 168-168 168Z"/></svg>
                  </a> </li>
                  <li><a className="dropdown-item" href="#">Crie uma conta 
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#4d5154"><path d="M708-432v-84h-84v-72h84v-84h72v84h84v72h-84v84h-72Zm-324-48q-60 0-102-42t-42-102q0-60 42-102t102-42q60 0 102 42t42 102q0 60-42 102t-102 42ZM96-192v-92q0-25.78 12.5-47.39T143-366q55-32 116-49t125-17q64 0 125 17t116 49q22 13 34.5 34.61T672-284v92H96Zm72-72h432v-20q0-6.47-3.03-11.76-3.02-5.3-7.97-8.24-47-27-99-41.5T384-360q-54 0-106 14.5T179-304q-4.95 2.94-7.98 8.24Q168-290.47 168-284v20Zm216.21-288Q414-552 435-573.21t21-51Q456-654 434.79-675t-51-21Q354-696 333-674.79t-21 51Q312-594 333.21-573t51 21Zm-.21-73Zm0 361Z"/></svg>
                    </a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    
      <main className={style.mainContent}>
       
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

        
        <section className={style.adocao} id="adote">
          <h2>Adoção</h2>
          <div className={style.gridGatos}>
            {gatinhos.map((gato, i) => (
              <div key={i} className={style.cardGato}>
                <img src={gato.imagem} alt={gato.nome} />
                <h3>{gato.nome}</h3>

                <div className={style.infoGato}>
                  <div className={style.itemInfo}>
                    {gato.genero === "Fêmea" ? (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="8" r="4" stroke="#FF1493" strokeWidth="2" />
                        <line x1="12" y1="12" x2="12" y2="20" stroke="#FF1493" strokeWidth="2" />
                        <line x1="8" y1="16" x2="16" y2="16" stroke="#FF1493" strokeWidth="2" />
                      </svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="6" stroke="#1E90FF" strokeWidth="2" />
                        <line x1="17" y1="7" x2="22" y2="2" stroke="#1E90FF" strokeWidth="2" />
                      </svg>
                    )}
                  </div>

                  <div className={style.itemInfo}>
                    <img src="/calendar-days-svgrepo-com.svg" alt="Idade" />
                    <span>{gato.idade}</span>
                  </div>
                </div>

                <button className={style.btnAdotar}>Quero Adotar</button>
              </div>
            ))}
          </div>
          <button className={style.btnVerTodos}>Ver todos os gatinhos</button>
        </section>

        
        <section className={style.adotados}>
          <h2>Gatinhos Adotados</h2>
          <div className={style.galeria}>
            {adotados.map((src, i) => (
              <img key={i} src={src} alt={`Gato adotado ${i + 1}`} />
            ))}
          </div>
        </section>

       
        <section className={style.sobre}>
          <div className={style.sobreTexto}>
            <h2>Sobre Nós</h2>
            <p>
              Somos uma entidade privada de voluntários dedicada ao resgate e adoção de gatos.
              Trabalhamos com amor e responsabilidade, buscando lares que ofereçam carinho e segurança.
              Nossos gatinhos são vacinados, vermifugados e castrados.
              Acreditamos que cada adoção é uma nova chance de felicidade — tanto para o gato quanto para quem adota.
            </p>
          </div>
          <img src="/grupo-gato.png" alt="Grupo de gatos" />
        </section>
      </main>

      
      <footer className={style.rodape}>
        <div className={style.contato}>
          <h3>Contato</h3>
          <p>E-mail: contato@gatinhosbememeow.com.br</p>
          <p>Telefone: (47) 99909-9909</p>
          <div className={style.icones}>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-facebook"></i>
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
