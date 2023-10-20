const express = require('express');
const { Pokemon } = require('../models');

const router = express.Router();

router.get('/', async (req, res) => {
  const pokemon = await Pokemon.find();
  res.json(pokemon);
});

router.post('/', async (req, res) => {
  const pokemon = new Pokemon(req.body);
  await pokemon.save();
  res.json(pokemon);
});

router.get('/search', async (req, res) => {
  const pokemon = await Pokemon.find({ name: new RegExp(req.query.name, 'i') });
  res.json(pokemon);
});

router.get('/:id', async (req, res) => {
  const pokemon = await Pokemon.findById(req.params.id);
  res.json(pokemon);
});

router.put('/:id', async (req, res) => {
  const pokemon = await Pokemon.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(pokemon);
});

router.delete('/:id', async (req, res) => {
  await Pokemon.findByIdAndDelete(req.params.id);
  res.json({ message: 'Pokémon deleted' });
});

module.exports = router;