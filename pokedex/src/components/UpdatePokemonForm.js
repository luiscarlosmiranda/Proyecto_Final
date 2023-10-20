import React, { useState } from 'react';
import axios from 'axios';

function UpdatePokemonForm({ pokemon }) {
  const [name, setName] = useState(pokemon.name);
  const [type, setType] = useState(pokemon.type);
  const [stats, setStats] = useState(pokemon.stats);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const updatedPokemon = { name, type, stats };
    await axios.put(`http://localhost:3000/pokemon/${pokemon._id}`, updatedPokemon);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </label>
      <label>
        Type:
        <input type="text" value={type} onChange={e => setType(e.target.value)} />
      </label>
      {/* Add inputs for stats here */}
      <button type="submit">Update</button>
    </form>
  );
}

export default UpdatePokemonForm;