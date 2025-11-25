import React, { useEffect } from 'react';

function Cadastro() {
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);

    return (
        <div style={{ padding: '100px', textAlign: 'center', minHeight: '80vh' }}>
            <h2>Página de Cadastro (Em Construção)</h2>
            <p>Em breve, o formulário de criação de conta estará disponível aqui.</p>
        </div>
    );
}

export default Cadastro;