const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const pokemonRoutes = require('./routes/pokemonRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

mongoose.connect('mongodb://localhost:27017/pokedex', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a la base de datos'))
  .catch(err => console.log(err));

app.use(cors());
app.use(express.json());

app.use('/pokemon', pokemonRoutes);
app.use('/users', userRoutes);

app.listen(3000, () => {
  console.log('El servidor está corriendo en http://localhost:3000');
});