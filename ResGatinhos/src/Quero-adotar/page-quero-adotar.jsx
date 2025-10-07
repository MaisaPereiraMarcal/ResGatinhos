import React, { useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import styles from "./page-quero-adotar.module.css";

export default function QueroAdotar() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const gatoSelecionado = params.get("gato");

  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    pais: "",
    estado: "",
    cidade: "",
    motivo: "",
    experiencia: "",
    renda: "",
  });

  // 🗺️ Dados de localização (mantidos com useMemo para performance)
  const dadosLocalizacao = useMemo(
    () => ({
      Brasil: {
        Acre: ["Rio Branco", "Cruzeiro do Sul", "Sena Madureira"],
        Alagoas: ["Maceió", "Arapiraca", "Palmeira dos Índios"],
        Amapá: ["Macapá", "Santana", "Laranjal do Jari"],
        Amazonas: ["Manaus", "Parintins", "Itacoatiara"],
        Bahia: ["Salvador", "Feira de Santana", "Ilhéus"],
        Ceará: ["Fortaleza", "Juazeiro do Norte", "Sobral"],
        "Distrito Federal": ["Brasília", "Taguatinga", "Ceilândia"],
        "Espírito Santo": ["Vitória", "Vila Velha", "Serra"],
        Goiás: ["Goiânia", "Anápolis", "Aparecida de Goiânia"],
        Maranhão: ["São Luís", "Imperatriz", "Caxias"],
        "Mato Grosso": ["Cuiabá", "Várzea Grande", "Rondonópolis"],
        "Mato Grosso do Sul": ["Campo Grande", "Dourados", "Três Lagoas"],
        "Minas Gerais": ["Belo Horizonte", "Uberlândia", "Juiz de Fora"],
        Pará: ["Belém", "Santarém", "Ananindeua"],
        Paraíba: ["João Pessoa", "Campina Grande", "Patos"],
        Paraná: ["Curitiba", "Londrina", "Maringá"],
        Pernambuco: ["Recife", "Olinda", "Caruaru"],
        Piauí: ["Teresina", "Parnaíba", "Picos"],
        "Rio de Janeiro": [
          "Rio de Janeiro",
          "Niterói",
          "Campos dos Goytacazes",
        ],
        "Rio Grande do Norte": ["Natal", "Mossoró", "Parnamirim"],
        "Rio Grande do Sul": ["Porto Alegre", "Caxias do Sul", "Pelotas"],
        Rondônia: ["Porto Velho", "Ji-Paraná", "Ariquemes"],
        Roraima: ["Boa Vista", "Pacaraima", "Rorainópolis"],
        "Santa Catarina": ["Florianópolis", "Blumenau", "Joinville", "Rodeio"],
        "São Paulo": ["São Paulo", "Campinas", "Santos", "Ribeirão Preto"],
        Sergipe: ["Aracaju", "Nossa Senhora do Socorro", "Lagarto"],
        Tocantins: ["Palmas", "Araguaína", "Gurupi"],
      },
      Argentina: {
        BuenosAires: ["Buenos Aires", "La Plata"],
        Córdoba: ["Córdoba", "Villa Carlos Paz"],
      },
    }),
    []
  );

  // 🧠 Handlers de formulário
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handlePaisChange = (e) =>
    setForm({ ...form, pais: e.target.value, estado: "", cidade: "" });

  const handleEstadoChange = (e) =>
    setForm({ ...form, estado: e.target.value, cidade: "" });

  const handleReset = () =>
    setForm({
      nome: "",
      email: "",
      telefone: "",
      pais: "",
      estado: "",
      cidade: "",
      motivo: "",
      experiencia: "",
      renda: "",
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("🎉 Formulário enviado com sucesso!");
    handleReset();
  };

  return (
    <div className={styles.paginaAdotar}>
      <header className={styles.topo}>
        <h1>Quero Adotar</h1>
        <p>Dê uma nova chance a um gatinho! Preencha o formulário abaixo 🐾</p>
      </header>

      <main className={styles.container}>
        <div className={styles.card}>
          <form className={styles.formulario} onSubmit={handleSubmit}>
            <h2>Formulário de Adoção</h2>

            {gatoSelecionado && (
              <div className={styles.infoGatoSelecionado}>
                <p>
                  Você está adotando: <strong>{gatoSelecionado}</strong>
                </p>
              </div>
            )}

            <label htmlFor="nome">Nome completo</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Seu nome"
              value={form.nome}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="exemplo@email.com"
              value={form.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="telefone">Telefone</label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              placeholder="(xx) xxxxx-xxxx"
              value={form.telefone}
              onChange={handleChange}
              required
            />

            <label htmlFor="pais">País</label>
            <select
              id="pais"
              name="pais"
              value={form.pais}
              onChange={handlePaisChange}
              required
            >
              <option value="">Selecione um país</option>
              {Object.keys(dadosLocalizacao).map((pais) => (
                <option key={pais} value={pais}>
                  {pais}
                </option>
              ))}
            </select>

            {form.pais && (
              <>
                <label htmlFor="estado">Estado</label>
                <select
                  id="estado"
                  name="estado"
                  value={form.estado}
                  onChange={handleEstadoChange}
                  required
                >
                  <option value="">Selecione um estado</option>
                  {Object.keys(dadosLocalizacao[form.pais]).map((estado) => (
                    <option key={estado} value={estado}>
                      {estado}
                    </option>
                  ))}
                </select>
              </>
            )}

            {form.estado && (
              <>
                <label htmlFor="cidade">Cidade</label>
                <select
                  id="cidade"
                  name="cidade"
                  value={form.cidade}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecione uma cidade</option>
                  {dadosLocalizacao[form.pais][form.estado].map((cidade) => (
                    <option key={cidade} value={cidade}>
                      {cidade}
                    </option>
                  ))}
                </select>
              </>
            )}

            <label htmlFor="motivo">Por que deseja adotar?</label>
            <textarea
              id="motivo"
              name="motivo"
              rows="4"
              placeholder="Conte um pouco..."
              value={form.motivo}
              onChange={handleChange}
              maxLength={200}
              required
            />
            <p className={styles.contador}>
              {form.motivo.length} / 200 caracteres
            </p>

            <label htmlFor="experiencia">Você já teve animais antes?</label>
            <select
              id="experiencia"
              name="experiencia"
              value={form.experiencia}
              onChange={handleChange}
              required
            >
              <option value="">Selecione</option>
              <option value="sim">Sim</option>
              <option value="nao">Não</option>
            </select>

            <label htmlFor="renda">Renda Mensal</label>
            <input
              type="number"
              id="renda"
              name="renda"
              placeholder="R$ 4100"
              value={form.renda}
              onChange={handleChange}
            />

            <div className={styles.botoes}>
              <button type="submit">Enviar Solicitação</button>
              <button
                type="button"
                onClick={handleReset}
                className={styles.botaoReset}
              >
                Limpar
              </button>
            </div>
          </form>
        </div>
      </main>

      <footer className={styles.rodape}>
        © 2025 ResGatinhos — Amor que transforma vidas
      </footer>
    </div>
  );
}
