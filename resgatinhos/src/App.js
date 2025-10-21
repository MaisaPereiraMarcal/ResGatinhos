import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./Home/page-home"));
const QueroAdotar = lazy(() => import("./Quero-adotar/page-quero-adotar"));
const Adotar = lazy(() => import("./Adotar/page-adotar"));
const Contato = lazy(() => import("./Contato/page-contato"));
const Loading = lazy(() => import("./loading/page-loading"));
const PageError = lazy(() => import("./Erro/page-erro"));
const CriarConta = lazy(() => import("./Cadastrar/page-cadastrar"));
const Login = lazy(() => import("./Entrar/page-entrar"));

function App() {
  const [user, setUser] = useState(null); // estado global

  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home user={user} setUser={setUser} />} />
          <Route path="/quero-adotar" element={<QueroAdotar />} />
          <Route path="/adotar" element={<Adotar />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/criar-conta" element={<CriarConta setUser={setUser} />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/*" element={<PageError />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
