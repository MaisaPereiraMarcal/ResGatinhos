import React from "react";
import Slider from "react-slick";
import style from "./page-home.module.css";
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
    "/adotado1.jpg", "/adotado2.jpg", "/adotado3.jpg",
    "/adotado4.jpg", "/adotado5.jpg", "/adotado6.jpg",
    "/adotado7.jpg", "/adotado8.jpg","/adotado4.jpg",
	 "/adotado5.jpg", "/adotado6.jpg",
    "/adotado7.jpg", "/adotado8.jpg",
	 "/adotado5.jpg", "/adotado6.jpg",
    "/adotado7.jpg", "/adotado8.jpg",
	 "/adotado5.jpg", "/adotado6.jpg",
    "/adotado7.jpg", "/adotado8.jpg"
  ];

  const playSound = () => {
    const audio = document.getElementById("meow-som");
    if (audio) audio.play();
  };

  return (
    <>
      {/* NAVBAR */}
      <header className={style.navbar}>
        <div className={style.logo}>
          <img src="/logo2.ico" alt="Logo Peg Gatinhos" />
        </div>

        <nav className={style.menu}>
          <a href="#voluntario">Seja Voluntário</a>
          <a href="#ajudar">Como Ajudar</a>
          <a href="#adote">Adote</a>
          <a href="#contato">Contato</a>
        </nav>

        <div className={style.botoes}>
          <button className={`${style.btn} ${style.btnEntrar}`}>Entrar</button>
          <button className={`${style.btn} ${style.btnCadastrar}`}>Cadastrar</button>
        </div>
      </header>

      {/* CARROSSEL */}
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

      {/* ADOÇÃO */}
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
						// ♀ Fêmea
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<circle cx="12" cy="8" r="4" stroke="#FF1493" strokeWidth="2"/>
						<line x1="12" y1="12" x2="12" y2="20" stroke="#FF1493" strokeWidth="2"/>
						<line x1="8" y1="16" x2="16" y2="16" stroke="#FF1493" strokeWidth="2"/>
						</svg>
					) : (
						// ♂ Macho
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<circle cx="12" cy="12" r="6" stroke="#1E90FF" strokeWidth="2"/>
						<line x1="17" y1="7" x2="22" y2="2" stroke="#1E90FF" strokeWidth="2"/>
						</svg>
					)}
					</span>
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

      {/* GATINHOS ADOTADOS */}
      <section className={style.adotados}>
        <h2>Gatinhos Adotados</h2>
        <div className={style.galeria}>
          {adotados.map((src, i) => (
            <img key={i} src={src} alt={`Gato adotado ${i + 1}`} />
          ))}
        </div>
      </section>

      {/* SOBRE NÓS */}
      <section className={style.sobre}>
        <div className={style.sobreTexto}>
          <h2>Sobre Nós</h2>
          <p>
            Somos uma entidade privada de voluntários dedicada ao resgate e
            adoção de gatos. Trabalhamos com amor e responsabilidade, buscando
            lares que ofereçam carinho e segurança. Nossos gatinhos são
            vacinados, vermifugados e castrados. Acreditamos que cada adoção é
            uma nova chance de felicidade — tanto para o gato quanto para quem
            adota.
          </p>
        </div>
        <img src="/grupo-gato.png" alt="Grupo de gatos" />
      </section>

      {/* RODAPÉ */}
      <footer className={style.rodape}>
        <div className={style.contato}>
          <h3>Contato</h3>
          <p>E-mail: contato@gatinhosbememeow.com.br</p>
          <p>Telefone: (47) 99909-9909</p>
          <div className={style.icones}>
      <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
      <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 10h-2v2h2v6h3v-6h1.82l.18-2h-2v-.833c0-.478.096-.667.558-.667h1.442v-2.5h-2.404c-1.798 0-2.596.792-2.596 2.308v1.692z"/></svg></a>
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
