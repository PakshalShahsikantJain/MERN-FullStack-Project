const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/demo", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

connectDB();

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  date: {
    type : String ,
    required:true,
  },
  email:{
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  }
});

const User = mongoose.model('User', userSchema);

app.post('/register', async (req, res) => {
  try {
    const username = req.body.Name;
    const date = req.body.Date;
    const email = req.body.Email;
    const password = req.body.Password;

    // Check if the username already exists in the database
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ message: 'Username already exists' });
    }

    // Create a new user
    const newUser = new User({ username,date,email,password });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

app.post('/login', async (req, res) => {
  try {
    const username = req.body.Name;
    const password = req.body.Password;

    // Check if the username already exists in the database
    const UserName = await User.findOne({ username });
    const pass = await User.findOne({password});
  
    if(UserName && pass) {
      const data = await User.findOne({ username });
      console.log(data);
      return res.status(200).send({data});
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
  
});

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});