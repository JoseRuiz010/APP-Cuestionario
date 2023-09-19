const userModel = require("../models/user");

const getAll = async (req, res) => {
  const users = await userModel.find({})
  res.send(users)
}


const get = async (req, res) => {
  const id = req.params.id;
  const user = await userModel.findById(id)
  res.send(user);
}


const post = async (req, res) => {
  const { username, password } = req.body
  const newUser = userModel({
    username,
    password
  });
  await newUser.save();
  res.send(newUser)
}


const del = async (req, res) => {
  const id = req.params.id;
  const user = await userModel.findByIdAndDelete(id)
  res.send(user)
}


const update = async (req, res) => {
  const id = req.params.id;
  const { username, password } = req.body
  const user = await userModel.findByIdAndUpdate(id, {
    username, password
  })
  res.send(user)
}



module.exports = {
  getAll, get, post, del, update
}