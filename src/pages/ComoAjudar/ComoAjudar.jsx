import React, { useState } from 'react';
import styles from './ComoAjudar.module.css';
import { Link } from 'react-router-dom';

const BANNER_IMAGE = '/banner-ajuda.png';
const CAT_EATING_IMAGE = 'https://animais.culturamix.com/blog/wp-content/uploads/2020/11/Gato-se-Alimentando.jpg';
const APADRINHAMENTO_IMAGE = 'https://cdn0.peritoanimal.com.br/pt/posts/5/8/0/os_gatos_reconhecem_as_pessoas_24085_600.jpg';
const LAR_TEMPORARIO_IMAGE = 'https://img.freepik.com/fotos-premium/mulher-segurando-gato-brincando-em-casa-com-amor-por-gatos-o-sorriso-brilha-em-seu-vinculo-com-seu-gato-fofo-de-estimacao-a-relacao-entre-pessoas-e-gatos-donos-de-gatos-gatos-domesticos-gatos-gordos_24883-5022.jpg';
const DIVULGACAO_IMAGE = 'https://i2-prod.mirror.co.uk/incoming/article11890336.ece/ALTERNATES/s615b/Screen-Shot-2018-01-21-at-122505JPG.jpg';
const PARCERIA_IMAGE = 'https://blog-static.petlove.com.br/wp-content/uploads/2022/05/meu-gato-no-vet-Petlove.jpg';

const helpCards = [
  {
    headline: "Apadrinhe um amigo de quatro patas!",
    description: "Escolha um gatinho para ajudar mensalmente. Você pode contribuir com vacinas, alimentação ou cuidados veterinários - e ainda acompanhar de perto o progresso do seu afilhado.",
    imageSrc: APADRINHAMENTO_IMAGE,
    bgColor: "purple",
  },
  {
    headline: "Ofereça abrigo, ofereça esperança.",
    description: "Seja um lar temporário e acolha um animal até que ele encontre sua família definitiva. Ideal para quem ama animais, mas não pode adotar em definitivo.",
    imageSrc: LAR_TEMPORARIO_IMAGE,
    bgColor: "yellow",
  },
  {
    headline: "Use suas redes para espalhar amor.",
    description: "Compartilhe as fotos dos animais disponíveis, as campanhas e eventos do projeto. Quanto mais gente souber, mais chances de adoção!",
    imageSrc: DIVULGACAO_IMAGE,
    bgColor: "yellow",
  },
  {
    headline: "Juntos, negócios e corações transformam o mundo.",
    description: "Pet shops, clínicas veterinárias e comércios locais podem colaborar com doações, descontos e apoio a campanhas.",
    imageSrc: PARCERIA_IMAGE,
    bgColor: "purple",
  },
];

function ComoAjudar() {

  const playSound = () => {
    const audio = new Audio('/meow.mp3');
    audio.currentTime = 0;
    audio.play().catch(error => {
      console.warn("Erro ao tentar tocar o áudio.", error);
    });
  };

  const donationItems = [
    {
      name: "Ração",
      desc: "Seca, úmida, patês e sachês.",
      src: "https://cdn-icons-png.flaticon.com/512/1145/1145697.png"
    },
    {
      name: "Areia e Higiene",
      desc: "Areia higiênica e caixas novas.",
      src: "https://img.icons8.com/?size=100&id=ZKAK_hw7x9Dv&format=png&color=000000"
    },
    {
      name: "Farmácia",
      desc: "Medicamentos, vitaminas, vermífugos.",
      src: "https://cdn-icons-png.flaticon.com/512/528/528302.png"
    },
    {
      name: "Limpeza",
      desc: "Sabão, água sanitária e desinfetantes.",
      src: "https://img.icons8.com/?size=100&id=qPLRjLU77DtL&format=png&color=000000"
    },
    {
      name: "Conforto",
      desc: "Cobertores, toalhas e caminhas.",
      src: "https://cdn-icons-png.flaticon.com/512/11361/11361052.png"
    },
    {
      name: "Transporte",
      desc: "Caixas de transporte e comedouros.",
      src: "https://img.icons8.com/?size=100&id=w09NL61Lg27t&format=png&color=000000"
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.bannerSection}>
        <img
          src={BANNER_IMAGE}
          alt="Sua Ajuda Salva Vidas! Contribua com o cuidado e a adoção dos nossos animais."
          className={styles.bannerImage}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://placehold.co/1200x400/C0A7D8/FFFFFF?text=Banner+Ajuda';
          }}
        />
      </div>

      <div className={styles.contentWrapper}>
        <h2 className={styles.mainTitle}>Formas de Ajudar</h2>

        <section className={styles.donationSection}>
          <h3 className={styles.sectionTitle}>Mimos e Itens Essenciais</h3>
          <div className={styles.sectionContent}>
            <div className={styles.itemList}>
              <p className={styles.sectionDescription}>
                Nossos gatinhos precisam de itens para crescerem fortes e saudáveis.
                Sua doação de itens faz uma diferença enorme no dia a dia do abrigo.
              </p>

              <div className={styles.creativeGrid}>
                {donationItems.map((item, index) => (
                  <div key={index} className={styles.creativeItem}>
                    <img src={item.src} alt={item.name} className={styles.itemIconImage} />
                    <div className={styles.itemText}>
                      <h4 className={styles.listTitle}>{item.name}</h4>
                      <p className={styles.itemDesc}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/contato" className={`${styles.contactButton} ${styles.primaryBtn}`}>
                Combinar Entrega de Itens
              </Link>
            </div>

            <div className={styles.itemImageContainer}>
              <img
                src={CAT_EATING_IMAGE}
                alt="Gatinho comendo ração"
                className={styles.itemImage}
              />
            </div>
          </div>
        </section>

        <section className={styles.cardsSection}>
          {helpCards.map((card, index) => (
            <div key={index} className={`${styles.helpCard} ${styles[`card-${card.bgColor}`]}`}>
              <div className={styles.cardContent}>
                <div className={styles.cardImageContainer}>
                  <img
                    src={card.imageSrc}
                    alt={`Imagem de ${card.headline}`}
                    className={styles.cardImage}
                  />
                </div>
                <div className={styles.cardText}>
                  <h4 className={styles.cardHeadline}>{card.headline}</h4>
                  <p className={styles.cardDescription}>{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </section>
        <footer className={styles.rodape}>
          <div className={styles.containerRodape}>

            <div className={styles.coluna}>
              <h3>Contato</h3>
              <p>E-mail: contato@resgatinhosblumenau.com.br</p>
              <p>(47) 99999-9999</p>
            </div>

            <div className={styles.coluna}>
              <h3>Parcerias</h3>
              <ul>
                <li>@fa.blumenau</li>
                <li>@petgramnatural</li>
                <li>@fangpetstore</li>
              </ul>
            </div>

            <div className={styles.colunaFinal}>
              <p className={styles.catMessage}>
                "Amor se adota. Cada lar transforma uma vida."
              </p>
              <img
                src="/gatinho.png"
                alt="Gatinho fofo"
                onClick={playSound}
                className={styles.gato}
              />
            </div>
          </div>
          <p className={styles.copy}>
            © 2025 ResGatinhos – Todos os direitos reservados
          </p>
        </footer>
      </div>
    </div>
  );
}

export default ComoAjudar;
