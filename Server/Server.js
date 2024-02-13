const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
//const multer = require('multer');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const path = require ('path')
const app = express();
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
  app.use(cors());
  app.use(bodyParser.json());
  mongoose.connect('mongodb://localhost:5000/idk', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
/**********************************************************************************************************/

//GET REQUEST -> HOME
app.get('/home', (req, res) => {
  res.send('This is home.');
});
app.get('/', (req, res) => {
  res.send('This is HOME.');
});

//GET REQUEST -> ABOUT
app.get('/about', (req, res) => {
  res.send('This is the abouts page');
});

//GET REQUEST -> CONNECT BFF
app.get('/bff', (req, res) => {
  res.send('This is Connect BFF.');
});

//GET REQUEST -> SUCCESSFUL SUBSCRIPTION
app.get('/subscription', (req, res) => {
  res.send('You will be able to view this page when you subscribe to CONNECT BFF.');
});

//GET REQUEST -> CONNECT DATE
app.get('/date', (req, res) => {
  res.send('This is CONNECT DATE.');
});

//GET REQUEST -> HERE'S HOW
app.get('/how', (req, res) => {
  res.send("HERE'S HOW");
});

//GET REQUEST -> MY ACCOUNT
app.get('/myaccount', (req, res) => {
  res.send('This is your account.');
});

//GET REQUEST -> MY PROFILE
app.get('/myprofile', (req, res) => {
  res.send('This is your profile.');
});

//GET REQUEST -> LOGIN
app.get('/login', (req, res) => {
  res.send('This is login page.');
});

//GET REQUEST -> SIGNUP
app.get('/signup', (req, res) => {
  res.send('This is the signup page.');
});

//GET REQUEST -> SIGNUP_1
app.get('/signup_1', (req, res) => {
  res.send('This is signup_1 page, takes your names.');
});

//GET REQUEST -> HOBBIES
app.get('/hobbies', (req, res) => {
  res.send('This is th ehobbies page, to know you more, we coollect your interests and some info about you which is not mandatory to be filled.');
});

//GET REQUEST -> PIC
app.get('/pic', (req, res) => {
  res.send('This is where you can upload your pictures.');
});

//GET REQUEST -> UPDATE PSSWORD
app.get('/update', (req, res) => {
  res.send('You can update your account password');
});

//GET REQUEST -> QUIZ
app.get('/quiz', (req, res) => {
  res.send('This is the quiz section.');
});

//GET REQUEST -> CHAT
app.get('/chat', (req, res) => {
  res.send('This is the chat section.');
});

//GET REQUEST -> DELETE USER
app.get('/deluser', (req, res) => {
  res.send('You can delete your profile in case you decide to remove your account');
});

//GET REQUEST -> CONFIRMATION OF DELETION
app.get('/sure', (req, res) => {
  res.send('You can choose to confirm or cancel the deletion request for your account.');
});

//GET REQUEST -> MATCH REQUEST
app.get('/match', (req, res) => {
  res.send('You can view profiles of anybody who has sent a match request');
});

/**********************************************************************************************************/
const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required:true },
  password: { type: String, required:true }
});
const User = mongoose.model('User', userSchema, 'users');


  // POST REQUEST -> SIGNUP

app.post('/signup', async (req, res) => {
  const { email, password, confirmPassword } = req.body;
  if (password !== confirmPassword) {
    return res.status(400).json({ error: 'Passwords do not match' });
  }
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email is already registered' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

/**********************************************************************************************************/

// POST REQUEST =>LOGIN

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user) {
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
        res.status(200).json({ message: 'Login successful', user });
      } else {
        res.status(401).json({ error: 'Invalid credentials' });
      }
    } else {
      res.status(401).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

/**********************************************************************************************************/

//DELETE REQUEST => DELETE A USER ACCOUNT 

app.delete('/deleteUser', async (req, res) => {
  const { email } = req.body;

  try {
    // Find and remove the user from the database using Mongoose
    const deletedUser = await User.findOneAndDelete({ email });

    if (deletedUser) {
      console.log('User deleted successfully:', deletedUser);
      res.status(200).json({ deletedUser });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

/**********************************************************************************************************/

//NAMES SAVING IN DATABASE

const nameSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

const Name = mongoose.model('Name', nameSchema, 'names');

//POST REQUEST => SIGNUP1/ NAMES

app.post('/signup_1', async (req, res) => {
  const { firstName, lastName } = req.body;
  try {
    const newName = new Name({ firstName, lastName }); // Use the 'Name' model
    await newName.save();
    res.status(201).json({ message: 'Name saved successfully' });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

//GET REQUEST => NAMES
  app.get('/get-name', async (req, res) => {
    try {
      const names = await Name.find();
      res.status(200).json(names);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  })

  /**********************************************************************************************************/

const interestSchema = new mongoose.Schema({
  interest: { type: String },
  info: { type: String },
});

const Interest = mongoose.model('Interest', interestSchema, 'hobbies');

//POST REQUEST -> HOBBIES

app.post('/hobbies', async (req, res) => {
  const { interest, info } = req.body;
  try {
    // Allow saving data even if fields are empty
    const newInterest = new Interest({ interest, info });
    await newInterest.save();
    res.status(201).json({ message: 'Interest created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

/**********************************************************************************************************/

//POST REQUEST -> PICTURE UPLOADING
















/**********************************************************************************************************/

//PATCH REQUEST ->  UPDATION OF PASSWORD



app.post('/updatepwd', async (req, res) => {
  const { currentPassword, newPassword, confirmPassword } = req.body;
  const isPasswordMatch = await bcrypt.compare(currentPassword, User.password);
  if (!isPasswordMatch) {
    return res.status(400).json({ error: 'Incorrect current password' });
  }

  // Check if the new password and confirm password match
  if (newPassword !== confirmPassword) {
    return res.status(400).json({ error: 'New password and confirm password do not match' });
  }

  // Hash the new password
  const hashedPassword = await bcrypt.hash(newPassword, 10);

  // Update the user's password in the database
  user.password = hashedPassword;
  await user.save();

  res.status(200).json({ message: 'Password updated successfully' });
});


















/**********************************************************************************************************/

// POST REQUEST -> SUCCESSFUL SUBSCRIPTION
const subSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true }
});

const Sub = mongoose.model('Sub', subSchema, 'subscriptions');

app.post('/bff', async (req, res) => {
  const { email, firstName, lastName } = req.body;
  if (firstName === lastName) {
    return res.status(400).json({ error: 'First name and last name cannot be the same' });
  }
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error });
    }
    const newSub = new Sub({ email, firstName, lastName });
    await newSub.save(); // Fix here: Use newSub instead of newUser
    res.status(201).json({ message: 'Subscription Successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});




/**********************************************************************************************************/

//GET REQUEST -> LOGOUT
app.get("/myProfile", (req, res) => {
  res.send('Logged out');
});

/**********************************************************************************************************/

// Empty Route
app.get('/*', (req, res) => {
  res.send('The route does not exist');
});

/**********************************************************************************************************/