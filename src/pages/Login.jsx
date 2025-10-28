import React from 'react';

function Login({ onLogin }) { 
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>Página de Login (Em Construção)</h1>

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