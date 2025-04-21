import './App.css';
import React, { useState } from 'react';
import Modal from './Modal'; 

function App() {
  const [showModal, setShowModal] = useState(true);

  const handleOuterClick = () => {
    console.log("🔵 Div externa (bubbling)");
  };

  const handleOuterClickCapture = () => {
    console.log("🟡 Div externa (capturing)");
  };

  const handleInnerClick = (e) => {
    console.log("🟢 Botão clicado");
    e.stopPropagation(); 
  };

  return (
    <div
      onClick={handleOuterClick}
      onClickCapture={handleOuterClickCapture}
      style={{
        padding: "50px",
        backgroundColor: "#eef",
        border: "2px solid blue",
        minHeight: "100vh"
      }}
    >
      <button
        onClick={handleInnerClick}
        style={{
          padding: "20px",
          fontSize: "16px",
          backgroundColor: "#cfc",
          border: "2px solid green",
        }}
      >
        Clique Aqui
      </button>

      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default App;
