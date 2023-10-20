import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:3000/pokemon');
      setPokemon(result.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {pokemon.map(p => (
        <div key={p._id}>
          <h2>{p.name}</h2>
          <p>{p.type}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
