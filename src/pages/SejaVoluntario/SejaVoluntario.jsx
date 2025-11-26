import React from 'react';
// Importe os estilos se você criar um arquivo SejaVoluntario.module.css
// import styles from './SejaVoluntario.module.css'; 

function SejaVoluntario() {
  return (
    // Recomenda-se usar o nome da classe ou estilos para que o conteúdo não fique "colado" no Header
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      <h1>Seja Voluntário</h1>
      <p>
        Junte-se à nossa missão! Os voluntários são o coração do ResGatinhos. 
        Se você tem tempo e amor para dar, ajude-nos a cuidar, resgatar e 
        encontrar lares para os nossos felinos. Entre em contato para saber 
        como você pode fazer a diferença na vida de um gatinho.
      </p>

      {/* Você pode adicionar um formulário de contato ou mais informações aqui */}
      
    </div>
  );
}

export default SejaVoluntario;