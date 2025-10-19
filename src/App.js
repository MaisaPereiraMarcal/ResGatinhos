import React, { useState } from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import SejaVoluntario from './pages/SejaVoluntario';
import ComoAjudar from './pages/ComoAjudar';
import Adote from './pages/Adote';
import Contato from './pages/Contato';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Conta from './pages/Conta';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <BrowserRouter>

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
                <Route path="/entrar" element={<Login onLogin={handleLogin} />} />
                <Route path="/cadastrar" element={<Cadastro />} />
                <Route path="/conta" element={<Conta />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;