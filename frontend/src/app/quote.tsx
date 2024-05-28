import React from "react";

const Quote = () => {
  const quote =
    "How far that little candle throws his beams! So shines a good deed in a weary world. William Shakespeare";

  const displayQuote = () => {
    return quote;
  };

  return <div>{displayQuote()}</div>;
};

export default Quote;
