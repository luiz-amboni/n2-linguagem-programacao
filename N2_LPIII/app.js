const express = require("express");
const mongoose = require("mongoose");

const User = require("./model/user");
const Room = require("./model/room");

require("dotenv/config");

const app = express();

app.use(express.json());

//lista de usuarios
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.json({ message: err });
  }
});

//criacao de usuario
app.post("/users", async (req, res) => {
  const user = new User({
    nome: req.body.nome,
    sobrenome: req.body.sobrenome,
  });

  try {
    const saveduser = await user.save();
    res.json(saveduser);
  } catch (err) {
    res.json({ message: err });
  }
});

//especificacao do nome
app.get("/users/:userName", async (req, res) => {
  try {
    const user = await User.findOne({ nome: req.params.userName });
    res.json(user);
  } catch (err) {
    res.json({ message: err });
  }
});

//excluir usuario
app.delete("/users/:userId", async (req, res) => {
  try {
    const removeUser = await User.remove({ _id: req.params.userId });
    res.json(removeUser);
  } catch (err) {
    res.json({ message: err });
  }
});

//SALAS
app.get("/rooms", async (req, res) => {
  try {
    const rooms = await Room.find();
    res.json(rooms);
  } catch (err) {
    res.json({ message: err });
  }
});

//criacao da sala
app.post("/rooms", async (req, res) => {
  const room = new Room({
    nome: req.body.nome,
    lotacao: req.body.lotacao,
  });

  try {
    const savedroom = await room.save();
    res.json(savedroom);
  } catch (err) {
    res.json({ message: err });
  }
});

//especificacao da sala
app.get("/rooms/:roomId", async (req, res) => {
  try {
    const room = await Room.findById(req.params.roomId);
    res.json(room);
  } catch (err) {
    res.json({ message: err });
  }
});

//atualizacao da sala
app.patch("/rooms/:roomId", async (req, res) => {
  try {
    const updatedRoom = await Room.updateOne(
      { _id: req.params.roomId },
      { $set: { nome: req.body.nome, lotacao: req.body.lotacao } }
    );
    res.json(updatedRoom);
  } catch (err) {
    res.json({ message: err });
  }
});

mongoose.connect(
  process.env.DB_CONNECTION_STRING,
  { useUnifiedTopology: true, useNewUrlParser: true },
  (req, res) => {
    console.log("connected to database");
  }
);

app.listen(3000, () => {
  console.log("listening to 3000");
});
