const mongoose = require("mongoose");

const User = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  sobrenome: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("user", User);
