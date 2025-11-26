import React, { useEffect } from 'react';

function Conta() {
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);

    return (
        <div style={{ padding: '100px', textAlign: 'center', minHeight: '80vh', backgroundColor: '#e8f5e9' }}>
            <h2>Seu Perfil / Minha Conta</h2>
            <p>Conteúdo da área logada (só visível após o login/simulação).</p>
            <p>Bem-vindo(a), Voluntário(a) Teste!</p>
        </div>
    );
}

export default Conta;