import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PokemonDetails({ match }) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`http://localhost:3000/pokemon/${match.params.id}`);
      setPokemon(result.data);
    };

    fetchData();
  }, [match.params.id]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{pokemon.name}</h2>
      <p>{pokemon.type}</p>
      {/* Display other details here */}
    </div>
  );
}

export default PokemonDetails;