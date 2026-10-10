import './Button.scss';

function Button({
  type = 'button', children, onClick,
}) {
  return (
    <button
      type={type}
      className="button button_accent"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
