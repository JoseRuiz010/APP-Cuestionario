const userModel = require("../models/user");
const { Encode, ComparePass } = require("../utils/EncodeBcrypt");

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
  const { username, password, ...rest } = req.body
  const encodePass = await Encode(password)
  const newUser = userModel({
    username,
    password: encodePass,
    ...rest
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
  const { username, password, ...rest } = req.body
  const user = await userModel.findByIdAndUpdate(id, {
    username, password, ...rest
  })
  res.send(user)
}

const check_email_password = async ({ username, password }) => {
  const user = await userModel.findOne({ username })
  const isValid = ComparePass(password, user?.password)
  if (user && isValid) return user
  return null
}

module.exports = {
  getAll, get, post, del, update, check_email_password
}