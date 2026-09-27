import { useState } from 'react';
import './Button.scss';

function Button() {
  const [text, setText] = useState('Сохранить');

  const onClick = (e) => {
    console.log(e);
    setText('Сохранено');
  };

  return (
    <button
      type="button"
      className="button button_accent"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
