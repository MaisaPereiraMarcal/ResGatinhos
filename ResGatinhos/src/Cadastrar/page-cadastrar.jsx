import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./page-cadastrar.module.css";

export default function CriarConta({ setUser }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [foto, setFoto] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome || !email || !senha) return alert("Preencha todos os campos!");

    fetch("http://localhost:3001/cadastrar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, email, senha })
    })
      .then(res => res.json())
      .then(data => {
        if (!data.error) {
          const novoUser = { ...data, foto: foto || "/perfil.jpg" };
          setUser(novoUser);
          navigate("/");
        } else {
          alert(data.error);
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div className={style.paginaAdotar}>
      <h1 className={style.topo}>🐾 Criar Conta</h1>
      <div className={style.container}>
        <div className={`${style.card} ${style.formulario}`}>
          <h2>Bem-vindo!</h2>
          <form onSubmit={handleSubmit}>
            <label>Nome:</label>
            <input
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              placeholder="Digite seu nome"
              className={style.input}
            />

            <label>Email:</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Digite seu email"
              className={style.input}
            />

            <label>Senha:</label>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
              placeholder="Digite sua senha"
              className={style.input}
            />

            <label>Foto (URL):</label>
            <input
              value={foto}
              onChange={(e) => setFoto(e.target.value)}
              placeholder="URL da foto (opcional)"
              className={style.input}
            />

            <div className={style.botoes}>
              <button type="submit" className={style.btn}>Criar Conta</button>
              <button
                type="button"
                className={`${style.btn} ${style.botaoReset}`}
                onClick={() => navigate("/")}
              >
                Voltar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
