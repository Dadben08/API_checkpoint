const asyncHandler = require("express-async-handler")
const User = require("../model/userModel")

// Get all users
const getUsers = asyncHandler(async (req, res) => {
    const Users = await User.find()
    res.status(200).json(Users)
})

// Get a single user
const getUser = asyncHandler(async (req, res) => {
    const Users = await User.findById(req.params.id)
    res.status(200).json(Users)
})



// Create a user
const postUser = asyncHandler(async (req, res) => {
  const { name, email, age } = req.body;

  if (!name || !email || !age) {
    res.status(400);
    throw new Error("Name, email, and age are required");
  }

  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    age: req.body.age
  });

  res.status(201).json(user);
});

module.exports = { postUser };



// Update a user

const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  // Update the user and return the new version
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true, // Ensure the update respects the schema
  });

  res.status(200).json(updatedUser);
});



// Delete a user

const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  await User.findByIdAndDelete(req.params.id);
  res.status(200).json({ id: req.params.id });
});




module.exports = {
    getUser,
    getUsers,
    postUser,
    updateUser,
    deleteUser
}   