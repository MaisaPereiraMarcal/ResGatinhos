import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./page-entrar.module.css";

export default function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    fetch("http://localhost:3001/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, senha })
    })
      .then(res => res.json())
      .then(data => {
        if (!data.error) {
          setUser(data);
          navigate("/");
        } else {
          alert(data.error);
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div className={style.paginaAdotar}>
      <h1 className={style.topo}>Login</h1>
      <div className={style.container}>
        <div className={`${style.card} ${style.formulario}`}>
          <h2>Bem-vindo de volta!</h2>
          <form onSubmit={handleLogin}>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Digite seu email cadastrado"
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

            <div className={style.botoes}>
              <button type="submit" className={style.btn}>Entrar</button>
              <button
                type="button"
                className={`${style.btn} ${style.botaoReset}`}
                onClick={() => navigate("/criar-conta")}
              >
                Criar Conta
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
