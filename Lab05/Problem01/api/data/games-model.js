const mongoose = require("mongoose");

const publisherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  established: {
    type: Date,
    required: true,
  },
  location: {
    address: String,
    coordingates: [Number],
  }
});

const gameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  year : Date,
  price: Number,
  designers: [String],
  minPlayers: {
    type: Number,
    min: 1,
    max: 10,
  },
  maxPlayers: {
    type: Number,
    min: 1,
    max: 10,
  },
  rate: {
    type: [Number],
    min: 1,
    max: 10,
    default: 1,
  },
  //publisher: publisherSchema,
  reviews:{
    type:[Number],
    required: true
  },
  minAge:{
    type:[Number],
    required: true
  }
});

mongoose.model("Game",gameSchema,"games");