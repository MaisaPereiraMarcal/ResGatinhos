import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const Home = lazy(() => import("./Home/page-home"));
const QueroAdotar = lazy(() => import("./Quero-adotar/page-quero-adotar"));
const Adotar = lazy(() => import("./Adotar/page-adotar"));
const Contato = lazy(() => import("./Contato/page-contato"));
const Loading = lazy(() => import("./loading/page-loading"));
const PageError = lazy(() => import("./Erro/page-erro"));

function App() {
  return (
    <Router>
      {/* Suspense mostra um loading enquanto a página carrega */}
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quero-adotar" element={<QueroAdotar />} />
          <Route path="/adotar" element={<Adotar />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/*" element={<PageError />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
