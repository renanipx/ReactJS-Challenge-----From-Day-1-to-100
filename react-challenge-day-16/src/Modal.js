import React from 'react';

function Modal({ onClose }) {
  const handleOuterClick = () => {
    onClose(); // Clicou fora do modal
  };

  const handleInnerClick = (e) => {
    e.stopPropagation(); 
  };

  return (
    <div
      onClick={handleOuterClick}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        onClick={handleInnerClick}
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "8px",
        }}
      >
        <h2>🪟 Modal</h2>
        <p>Esse é o conteúdo do modal.</p>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
}

export default Modal;
