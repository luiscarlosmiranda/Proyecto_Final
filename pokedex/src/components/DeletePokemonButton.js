import React from 'react';
import axios from 'axios';

function DeletePokemonButton({ pokemon }) {
  const handleClick = async () => {
    await axios.delete(`http://localhost:3000/pokemon/${pokemon._id}`);
    // Redirect to home page or refresh the page here
  };

  return (
    <button onClick={handleClick}>Delete</button>
  );
}

export default DeletePokemonButton;