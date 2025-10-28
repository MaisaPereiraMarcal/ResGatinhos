import React, { useEffect } from 'react';

function Adote() {
  useEffect(() => {
      window.scrollTo(0, 0); 
  }, []);

  return (
    <div style={{ padding: '100px', textAlign: 'center', height: '80vh', backgroundColor: '#fff8e1' }}>
      <h2>Página Adote</h2>
      <p>Conteúdo temporário da seção de adoção de gatinhos.</p>
      <img src="/gatinho.png" alt="Gatinho" style={{ width: '200px', margin: '20px' }} />
    </div>
  );
}

export default Adote;