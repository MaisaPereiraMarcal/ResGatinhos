import React, { useEffect } from 'react';

function Contato() {
    // Garante que a página role para o topo ao ser carregada/acessada
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);

    return (
        <div style={{ 
            padding: '100px', 
            textAlign: 'center', 
            minHeight: '80vh',
            backgroundColor: '#e6e6fa', // Cor suave para diferenciar
            color: '#333'
        }}>
            <h2>Página Contato (Em Construção)</h2>
            <p>Esta seção será preenchida com o formulário de contato e informações úteis.</p>
            <p>Você pode testar a navegação e o scroll para o topo nesta página.</p>
            <img src="/logo.png" alt="Logo" style={{ width: '100px', margin: '30px', opacity: '0.6' }} />
        </div>
    );
}

export default Contato;