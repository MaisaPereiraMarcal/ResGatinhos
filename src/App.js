import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home/Home';
import SejaVoluntario from './pages/SejaVoluntario/SejaVoluntario';
import ComoAjudar from './pages/ComoAjudar/ComoAjudar';
import Adote from './pages/Adote/Adote';
import Contato from './pages/Contato/Contato';
import Login from './pages/Entrar/Entrar';
import Cadastro from './pages/Cadastro/Cadastro';
import Conta from './pages/Conta/Conta';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    return (
        <>
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
        </>
    );
}

export default App;
