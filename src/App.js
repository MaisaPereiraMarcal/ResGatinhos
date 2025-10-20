import React, { useState } from 'react'; 
// Importar BrowserRouter aqui só é necessário se você NÃO o colocou no index.js
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'; // Caminho corrigido para o Header
import Home from './pages/Home/Home'; // Caminho corrigido
import SejaVoluntario from './pages/SejaVoluntario/SejaVoluntario'; // Caminho corrigido
import ComoAjudar from './pages/ComoAjudar/ComoAjudar'; // Caminho corrigido
import Adote from './pages/Adote/Adote'; // Caminho corrigido
import Contato from './pages/Contato/Contato'; // Caminho corrigido
import Login from './pages/Entrar/Entrar'; // Caminho corrigido (assumindo que "Entrar" é o nome da pasta)
import Cadastro from './pages/Cadastro/Cadastro'; // Caminho corrigido
import Conta from './pages/Conta/Conta'; // Caminho corrigido

function App() {
    // Lógica de autenticação (precisa estar aqui para ser passada ao Header)
    const [isLoggedIn, setIsLoggedIn] = useState(false); 
    const handleLogout = () => { setIsLoggedIn(false); };
    const handleLogin = () => { setIsLoggedIn(true); };

    return (
        <>
            {/* O Header agora recebe o estado de login */}
            <Header 
                isLoggedIn={isLoggedIn} 
                onLogout={handleLogout} 
            />
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/seja-voluntario" element={<SejaVoluntario />} />
                <Route path="/como-ajudar" element={<ComoAjudar />} />
                <Route path="/adote" element={<Adote />} />
                <Route path="/contato" element={<Contato />} />
                {/* Passando a função de login para o componente de Login */}
                <Route path="/entrar" element={<Login onLogin={handleLogin} />} />
                <Route path="/cadastrar" element={<Cadastro />} />
                <Route path="/conta" element={<Conta />} />
            </Routes>
        </>
    );
}

export default App;