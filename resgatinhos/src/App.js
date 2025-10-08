import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Adotar from "./Adotar/page-adotar";
import Contato from "./Contato/page-contato";
import QueroAdotar from "./Quero-adotar/page-quero-adotar";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/contato" element={<Contato />} />
          <Route path="/adotar" element={<Adotar />} />
          <Route path="/quero-adotar" element={<QueroAdotar />} />

      </Routes>
    </Router>
  );
}
