import React from 'react';
// IMPORTAÇÃO ESSENCIAL PARA O ROTEAMENTO
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 1. IMPORTAR OS COMPONENTES DE PÁGINA
import Header from './components/Header'; 

// Crie estes componentes de página em uma pasta separada (ex: src/pages)
import Home from './pages/Home'; 
import SejaVoluntario from './pages/SejaVoluntario';
import ComoAjudar from './pages/ComoAjudar';
import Adote from './pages/Adote';
import Login from './pages/Login';      
import Cadastro from './pages/Cadastro'; 
import Conta from './pages/Conta';

function App() {
  return (

    <BrowserRouter>
      <Header /> 
      <Routes>
        
        {/* Rota 1: Página Inicial */}
        <Route path="/" element={<Home />} />
        
        {/* Rota 2: Seja Voluntário */}
        <Route path="/voluntario" element={<SejaVoluntario />} />
        
        {/* Rota 3: Como Ajudar */}
        <Route path="/como-ajudar" element={<ComoAjudar />} />
        
        {/* Rota 4: Adote */}
        <Route path="/adote" element={<Adote />} />

        {/* Rota 5: Entrar (Login) */}
        <Route path="/entrar" element={<Login />} />
        
        {/* Rota 6: Cadastrar */}
        <Route path="/cadastrar" element={<Cadastro />} />

        {/* Rota 7: Conta do Usuário */}
        <Route path="/perfil" element={<Conta />} />

        {/* Opcional: Rota de Erro (404) */}
        <Route path="*" element={<h1>Página Não Encontrada (404)</h1>} />
        
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;