// ************************************List Of Features:***************************************
// SignUp and Login
// Filter Option
// Search Option
// Device Gallery access and Image selection feature

//*********************************************************************************************

const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

app.listen(port,()=>{
    console.log(`Server is Running on  http://localhost:${port}`);
})

// ***********************************List of Possible Routes*********************************

//Route for Home Page
app.get("/home",(req,res)=>{
  res.send("This is the Home Page")
});

//Route for About Page
app.get("/about",(req,res)=>{
  res.send("This is the abouts Page")
});

// Connect BFF
app.get('/bff', (req, res) => {
  res.send('All about Connect BFF');
});

// Connect Date
app.get('/date', (req, res) => {
  res.send('All about Connect Date');
});

//Route for Here's How page
app.get('/how', (req, res) => {
  res.send("This is here's how page.");
});

//My profile
app.get('/myprofile', (req, res) => {
    res.send('This is your profile.');
});

//Route for SignUp Page
app.get("/signup",(req,res)=>{
  res.send("This is the signup Page")
});

//Signup
app.post('/signup', async (req, res) => {
  try {
    const { username, password,confirmpwd } = req.body;
    // Check if username is already taken
    if (users.some(user => user.username === username)) {
      return res.status(400).json({ error: 'Username already taken' });
    }

    if (users.some(password != confirmpwd)) {
      return res.status(400).json({ error: 'Password does not match.' });
    }
    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);
    // Save the user to the in-memory database (you would typically use a database here)
    users.push({ username, password: hashedPassword });
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get("/signup1",(req,res)=>{
  res.send("This is the signup Page-2")
});

//Signup_1
app.post('/signup', async (req, res) => {
  try {
    const { firstName, lastName } = req.body;
    if (firstName === lastName) {
      return res.status(400).json({ error: 'Your firstname cannot be the same as your last name' });
    }
    users.push({ firstName, lastName });
    res.status(201).json({ message: 'saved successfully' });
  } catch (error) {
    console.error('Error during signing up: ', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get("/hobbies",(req,res)=>{
  res.send("This is the signup Page-3")
});

//Hobbies
app.post('/hobbies', async (req, res) => {
  try {
    const { interests, info_u } = req.body;
    users.push({ interests, info_u});
    res.status(201).json({ message: 'saved successfully' });
  } catch (error) {
    console.error('Error during signing up: ', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Pictures uploading page
app.get('/my_pictures', (req, res) => {
  res.send('You can upload your pictures here!');
});

var sender;
let pic = {ture:[
sender
]};

//proof of working
/*app.get("/pic", (req, res) => {
res.send(pic.ture);
});*/

// Route to upload pictures
app.post('/pic', (req, res) => {
pic.ture.push(req.body);
res.send("Picture uploaded successfully.");
});

//Route for Login Page
app.get("/login",(req,res)=>{
  res.send("This is the login Page")
});
//post request for opening acc

//My Account
app.get('/myprofile', (req, res) => {
  res.send('This is your profile.');
});

// Sending a match request
var sender;
let match = {req:[
  sender
]};
/*proof of working
app.get("/match", (req, res) => {
  res.send(match.req);
});*/
app.post('/match', (req, res) => {
  match.req.push(req.body);
  res.send("Match request sent successfully.");
});


//

//Accessing other profiles
app.get('/profilebrowsing', (req, res) => {
  res.send('This is the profile browsing section!');
});

// Route for accessing one person's profile
app.get("/profile/:id", (req, res) => {
  res.send(`This is ${req.params.id}'s Profile`);
});

// ***********************************Chat
var sender;
var recipient;
let chat = {new:[
  sender,
  recipient,
]};

//proof of working
app.get("/chat", (req, res) => {
  res.send(chat.new);
});

// Route to chat/text
app.post('/chat', (req, res) => {
  chat.new.push(req.body);
  res.send("Chat initiated successfully.");
});

//Quiz
var sender;
var recipient;
var ques;
let quiz = {text:[
  sender,
  recipient,
  ques
]};

//proof of working
/*app.get("/quiz", (req, res) => {
  res.send(quiz.text);
});*/

// Route to chat/text
app.post('/quiz', (req, res) => {
  quiz.text.push(req.body);
  res.send("Quiz question sent successfully.");
});


// put request to edit info of mine
const authenticateuser = (req, res, next) => {
  next();
};

app.put('/myProfile/:id', authenticateuser, async (req, res) => {
  const userId = req.params.id;
  const { username, password, otherInfo } = req.body;
  // Find the user by ID
  const user = users.find(user => user.id === userId);
  // Update the username if provided
  if (username) {
    // Check if the new username already exists
    if (users.some(u => u.username === username && u.id !== userId)) {
      return res.status(400).json({ error: 'Username already exists' });
    }
    user.username = username;
  }
  // Update the password if provided
  if (password) {
    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
  }
  // Update other information if provided
  if (otherInfo) {
    user.otherInfo = otherInfo;
  }
  res.json({ message: 'User information updated successfully', user });
});



//Deleting profile
const authenticateUser = (req, res, next) => {
  // Implement your authentication logic here, for example, using JWTs or session tokens
  // For simplicity, this example assumes a user is always authenticated
  next();
};
app.delete('/user/:id', authenticateUser, (req, res) => {
  const userId = req.params.id;
  // Find the user index by ID
  const userIndex = users.findIndex(user => user.id === userId);
  // Remove the user from the array
  users.splice(userIndex, 1);
  res.json({ message: 'User account deleted successfully' });
});

//Logout
app.get("/myProfile", (req, res) => {
  res.send('Logged out');
});
// ***********************************



// Empty Route
app.get('/*', (req, res) => {
  res.send('The route does not exist');
});

//Get 
//post
//put
//patch
//delete







