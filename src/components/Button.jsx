const Button = ({ onClick, color }) => {
  return (
    <button
      style={{ color: "white", background: color }}
      id="new-quote"
      onClick={onClick}
      className="btn"
    >
      New quote
    </button>
  );
};

export default Button;
