const Display = ({ quote }) => {
  return (
    <div className="quote-display">
      <span id="text">"{quote.text}"</span>
      <br />
      <span id="author">-{quote.author}</span>
    </div>
  );
};

export default Display;
