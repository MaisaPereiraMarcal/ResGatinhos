import React from "react";
import { useNavigate } from "react-router-dom";
import estilos from "./page-adotar.module.css";

export default function Adotar() {
  const navigate = useNavigate();

  const gatos = [
    {
      id: 1,
      nome: "Luna",
      idade: "2 anos",
      descricao: "Dócil e carinhosa, adora um colo e ronronar bastante.",
      imagem: "https://adoteumgatinho.org.br/media/uploads/cats/a5d4d5a7fb0ecd2e859a3f5de47d811e.jpg",
    },
    {
      id: 2,
      nome: "Tom",
      idade: "1 ano e meio",
      descricao: "Cheio de energia e muito brincalhão, ótimo com crianças.",
      imagem: "https://adoteumgatinho.org.br/media/uploads/cats/74e7697f4675dfee92a66159f4f62e82.jpg",
    },
    {
      id: 3,
      nome: "Mia",
      idade: "3 anos",
      descricao: "Calma e observadora, ama cochilar perto da janela.",
      imagem: "https://adoteumgatinho.org.br/media/uploads/cats/d3a147b5fd5f9e9a8185f190942533e9.jpg",
    },
    {
      id: 4,
      nome: "Nino",
      idade: "5 meses",
      descricao: "Filhote curioso e esperto, perfeito para quem quer companhia!",
      imagem: "https://adoteumgatinho.org.br/media/uploads/cats/6270092b1de1d8d7a147ebd63e6e6d1b.jpeg",
    },
    {
      id: 5,
      nome: "Mel",
      idade: "4 anos",
      descricao: "Carinhosa e sociável com outros gatos, já castrada e vacinada.",
      imagem: "https://www.whiskas.com.br/cdn-cgi/image/format=auto,q=90/sites/g/files/fnmzdf2156/files/2024-10/gato-siames.jpg",
    },
    {
      id: 6,
      nome: "Bento",
      idade: "1 ano",
      descricao: "Aventureiro e muito esperto! Ama explorar e subir em tudo.",
      imagem: "https://adoteumgatinho.org.br/media/uploads/cats/5b83facf0127ebdca4e644a9e38e3682.jpeg",
    },
       {
      id: 7,
      nome: "Joaquina",
      idade: "3 anos",
      descricao: "Aventureira e muito esperta! Ama explorar e subir em tudo.",
      imagem: "https://adoteumgatinho.org.br/media/uploads/cats/498e902b88c1276eda59a7288b82abfa.jpg",
    },
       {
      id: 8,
      nome: "Catarina",
      idade: "2 anos",
      descricao: "Dócil e carinhosa, adora um colo e ronronar bastante.",
      imagem: "https://adoteumgatinho.org.br/media/uploads/cats/0e661591e4ece91cea7a30671c982b06.jpg",
    },
  ];

  // 🔧 Corrigido: apenas UMA função handleAdotar
  const handleAdotar = (gato) => {
    // Leva para a página de formulário e envia o nome do gato na URL
    navigate(`/quero-adotar?gato=${encodeURIComponent(gato.nome)}`);
  };

  return (
    <div className={estilos.paginaAdotar}>
      <header className={estilos.topo}>
        <h1>Adote um Gatinho</h1>
        <p>Veja os gatinhos que estão esperando por um lar cheio de amor </p>
      </header>

      <main className={estilos.container}>
        <div className={estilos.gridGatos}>
          {gatos.map((gato) => (
            <div key={gato.id} className={estilos.cardGato}>
              <img src={gato.imagem} alt={gato.nome} className={estilos.imagemGato} />
              <div className={estilos.infoGato}>
                <h3>{gato.nome}</h3>
                <p className={estilos.idade}>{gato.idade}</p>
                <p className={estilos.descricao}>{gato.descricao}</p>
                <button
                  className={estilos.botaoAdotar}
                  onClick={() => handleAdotar(gato)}
                >
                  Quero Adotar
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className={estilos.rodape}>
        © 2025 ResGatinhos — Amor que transforma vidas
      </footer>
    </div>
  );
}
