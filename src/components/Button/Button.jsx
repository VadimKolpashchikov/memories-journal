import './Button.scss';

function Button({ type = 'button', children }) {
  return (
    <button type={type} className="button button_accent">
      {children}
    </button>
  );
}

export default Button;
