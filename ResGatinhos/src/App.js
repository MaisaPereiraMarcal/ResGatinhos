import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Lazy loading das páginas
const Home = lazy(() => import("./Home/page-home"));
const QueroAdotar = lazy(() => import("./Quero-adotar/page-quero-adotar"));
const Adotar = lazy(() => import("./Adotar/page-adotar"));
const Contato = lazy(() => import("./Contato/page-contato"));
const PageError = lazy(() => import("./Erro/page-erro"));

// Lazy loading do componente de Loading
const Loading = lazy(() => import("./loading/page-loading"));

function App() {
  return (
    <Router>
      {/* Suspense mostra fallback enquanto as páginas carregam */}
      <Suspense fallback={<div style={{ textAlign: "center", marginTop: "50px" }}>Carregando...</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Carregando Home...</div>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/quero-adotar"
            element={
              <Suspense fallback={<Loading />}>
                <QueroAdotar />
              </Suspense>
            }
          />
          <Route
            path="/adotar"
            element={
              <Suspense fallback={<Loading />}>
                <Adotar />
              </Suspense>
            }
          />
          <Route
            path="/contato"
            element={
              <Suspense fallback={<Loading />}>
                <Contato />
              </Suspense>
            }
          />
          <Route
            path="/*"
            element={
              <Suspense fallback={<Loading />}>
                <PageError />
              </Suspense>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
