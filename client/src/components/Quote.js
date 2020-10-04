import React from 'react';
import './Quote.css'

function Quote({ quote }) {

  return (
    <div className="quoteContainer">
      <h1>{quote.quote} </h1>
      <p>- {quote.author} </p>
    </div>
  );
}

export default Quote;
