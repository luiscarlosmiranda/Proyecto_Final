import React, { useState } from 'react';
import axios from 'axios';

function CreatePokemonForm() {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [stats, setStats] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newPokemon = { name, type, stats };
    await axios.post('http://localhost:3000/pokemon', newPokemon);

    setName('');
    setType('');
    setStats({});
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
      <button type="submit">Create</button>
    </form>
  );
}

export default CreatePokemonForm;