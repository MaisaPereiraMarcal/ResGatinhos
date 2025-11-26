import React, { Suspense, lazy, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./Home/page-home"));
const QueroAdotar = lazy(() => import("./Quero-adotar/page-quero-adotar"));
const Adotar = lazy(() => import("./Adotar/page-adotar"));
const Contato = lazy(() => import("./Contato/page-contato"));
const Loading = lazy(() => import("./loading/page-loading"));
const PageError = lazy(() => import("./Erro/page-erro"));
const CriarConta = lazy(() => import("./Cadastrar/page-cadastrar"));
const Login = lazy(() => import("./Entrar/page-entrar"));
const Conta = lazy(() => import("./Conta/page-conta"));
const ConfiguracoesConta = lazy(() => import("./Configuracao/page-config"));
const PageMatch = lazy(() => import("./Mech/page-match"));

/* === ADMIN IMPORTS === */
const AdminDashboard = lazy(() => import("./Admin/AdminDashboard"));
const EventsPage = lazy(() => import("./Events/Events"));
const EventDetails = lazy(() => import("./Events/EventDetails"));

/* === BLOG IMPORTS === */
const Blog = lazy(() => import("./Blog/Blog"));
const BlogPost = lazy(() => import("./Blog/BlogPost"));
const Editor = lazy(() => import("./Blog/Editor"));

function App() {
  const [user, setUser] = useState({
    nome: "Miguel",
    email: "1@1",
    senha: "1",
  });

  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    if (darkMode) document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  }, [darkMode]);

  const handleLogout = () => setUser(null);

  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>

          {/* PRINCIPAIS */}
          <Route path="/" element={<Home user={user} setUser={setUser} />} />
          <Route path="/quero-adotar" element={<QueroAdotar />} />
          <Route path="/adotar" element={<Adotar />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/criar-conta" element={<CriarConta setUser={setUser} />} />
          <Route path="/match" element={<PageMatch />} />
          <Route path="/login" element={<Login setUser={setUser} />} />

          <Route
            path="/conta"
            element={
              <Conta
                user={user}
                onLogout={handleLogout}
                toggleDarkMode={toggleDarkMode}
                darkMode={darkMode}
              />
            }
          />

          <Route
            path="/configuracoes"
            element={
              <ConfiguracoesConta
                user={user}
                setUser={setUser}
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
              />
            }
          />

          {/* === ADMIN === */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/eventos" element={<EventsPage />} />
          <Route path="/admin/eventos/:id" element={<EventDetails />} />

          {/* === BLOG === */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/post/:id" element={<BlogPost />} />
          <Route path="/blog/editor" element={<Editor />} />

          {/* ERROR */}
          <Route path="/*" element={<PageError />} />

        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
