// Exemplo: /pages/Adote.jsx (Rota: /adote)

import React, { useEffect } from 'react';

function Adote() {
  // Adicione o useEffect para garantir que o scroll vá para o topo
  useEffect(() => {
      window.scrollTo(0, 0); 
  }, []);

  return (
    <div style={{ padding: '100px', textAlign: 'center', height: '80vh', backgroundColor: '#fff8e1' }}>
      <h2>Página Adote</h2>
      <p>Conteúdo temporário da seção de adoção de gatinhos.</p>
      {/* Teste outra imagem se houver */}
      <img src="/gatinho.png" alt="Gatinho" style={{ width: '200px', margin: '20px' }} />
    </div>
  );
}

export default Adote;