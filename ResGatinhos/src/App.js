import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./Home/page-home"));
const QueroAdotar = lazy(() => import("./Quero-adotar/page-quero-adotar"));
const Adotar = lazy(() => import("./Adotar/page-adotar"));
const Contato = lazy(() => import("./Contato/page-contato"));

function App() {
  return (
    <Router>
      
      <Suspense fallback={<div className="loading">Carregando...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quero-adotar" element={<QueroAdotar />} />
          <Route path="/adotar" element={<Adotar />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
