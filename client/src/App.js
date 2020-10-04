import React from 'react';
import './App.css'

function App() {


  const consultarAPI = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = await api.json()
    console.log(frase[0]);
  }

  return (
    <div className="container">
      <button onClick={consultarAPI} >
        New Quote
      </button>
    </div>
  );
}

export default App;
