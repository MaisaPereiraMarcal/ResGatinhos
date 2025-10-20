// /pages/Login.jsx (Componente Temporário)

import React from 'react';

// Se o seu App.js espera a prop onLogin (como configuramos),
// é bom aceitá-la, mesmo que você não a use ainda.
function Login({ onLogin }) { 
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>Página de Login (Em Construção)</h1>
      
      {/* Para TESTAR a troca do botão na Navbar:
        Você pode adicionar um botão que simula o login, chamando a prop onLogin.
      */}
      <button 
        onClick={onLogin} 
        style={{ padding: '10px', background: 'green', color: 'white', border: 'none' }}
      >
        Simular Login
      </button>
    </div>
  );
}

export default Login;