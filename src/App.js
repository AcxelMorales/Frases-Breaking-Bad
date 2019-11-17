import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Frase from './components/Frase';

function App() {
  const [frase, setFrase] = useState({});

  const consultarAPI = async () => {
    const resultado = await axios.get('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    setFrase(resultado.data[0]);
  };

  useEffect(() => {
    consultarAPI();
  }, []);

  return (
    <div className="contenedor">
      <Frase
        frase={frase}
      />
      <button
        onClick={consultarAPI}
      >
        Generar Nueva
      </button>
    </div>
  );
}

export default App;
