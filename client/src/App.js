import React, { useState, useEffect } from 'react';
import './App.css'
import Quote from './components/Quote';

function App() {

  const [quote, SetQuote] = useState({});

  useEffect(() => {
    consultarAPI()
  }, []);

  const consultarAPI = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const quote = await api.json()
    SetQuote(quote[0])
  }

  return (
    <div className="container">
      <Quote
        quote={quote}
      />
      <button onClick={consultarAPI} >
        New Quote
      </button>
    </div>
  );
}

export default App;
