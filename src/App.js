import { useState } from "react";
import Display from "./components/Display";
import Footer from "./components/Footer";
function App() {
  const [quote, setQuote] = useState({
    author: "Marilyn Monroe",
    text: "I'm here to be tested as a quote",
  });
  const [appColor, setAppColor] = useState("red");
  const quotes = [
    {
      author: "Marilyn Monroe",
      text:
        "I'm here to be tested as a quoteI'm here to be tested as a quoteI'm here to be tested as a quoteI'm here to be tested as a quoteI'm here to be tested as a quoteI'm here to be tested as a quote",
    },
    {
      author: "Carrie Hung",
      text: "What a disaster",
    },
    {
      author: "Monica Ran",
      text: "uwu",
    },
  ];

  const getRandom = () => {
    // 16777215 (decimal) == ffffff in hexidecimal
    var newColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setAppColor(newColor);
  };

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
    getRandom();
  };
  return (
    <div
      className="container"
      style={{ color: appColor, background: appColor }}
    >
      <div id="quote-box" style={{ background: "white" }}>
        {quote && <Display quote={quote} />}
        <Footer color={appColor} onclick={generateQuote} />
      </div>
    </div>
  );
}

export default App;
