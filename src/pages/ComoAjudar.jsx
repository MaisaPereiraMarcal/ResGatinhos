import React, { useEffect } from 'react';

function ComoAjudar() {
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);

    return (
        <div style={{ padding: '100px', textAlign: 'center', minHeight: '80vh' }}>
            <h2>Página Como Ajudar</h2>
            <p>Opções de doação e outras formas de suporte ao projeto.</p>
        </div>
    );
}

export default ComoAjudar;