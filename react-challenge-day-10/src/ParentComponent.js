import React, { useState } from 'react';

function ParentComponent() {
  const [text, setText] = useState('');

  return (
    <>
      <InputComponent text={text} setText={setText} />
      <DisplayComponent text={text} />
    </>
  );
}

function InputComponent({ text, setText }) {
  return <input value={text} onChange={(e) => setText(e.target.value)} />;
}

function DisplayComponent({ text }) {
  return <p>{text}</p>;
}

export default ParentComponent;
