import React from 'react';
import styles from './ComoAjudar.module.css';
import { Link } from 'react-router-dom';

const BANNER_IMAGE = '/banner-ajuda.png';
const CAT_EATING_IMAGE = 'https://animais.culturamix.com/blog/wp-content/uploads/2020/11/Gato-se-Alimentando.jpg';


function ComoAjudar() {
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
            // URL original adaptada para um ícone de transporte
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
        
        {/* === SEÇÃO 1: DOAÇÃO DE ITENS - MAIS CRIATIVO === */}
        <section className={styles.donationSection}>
            <h3 className={styles.sectionTitle}>Mimos e Itens Essenciais</h3>
            <div className={styles.sectionContent}>
                
                <div className={styles.itemList}>
                    <p className={styles.sectionDescription}>
                        Nossos gatinhos precisam de itens de primeira necessidade para crescerem 
                        fortes e saudáveis. Sua doação de itens faz uma diferença enorme no dia 
                        a dia do abrigo.
                    </p>
                    
                    <div className={styles.creativeGrid}>
                        {donationItems.map((item, index) => (
                            <div key={index} className={styles.creativeItem}>
                                {/* Renderizando como IMG em vez de SPAN */}
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

      </div> 
    </div>
    );
}

export default ComoAjudar;
