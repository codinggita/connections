// ************************************List Of Features:***************************************
// SignUp and Login
// Filter Option
// Search Option
// Device Gallery access and Image selection feature

//*********************************************************************************************

const express = require("express");
const app = express();
//port number
const port = 3000;
// Middleware to parse JSON body in requests
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

//Search results
app.get('/search/:id', (req, res) => {
    res.send(`Here are the search results for your search: ${req.params.id}`);
});

// Filter option
app.get('/filter/:id', (req, res) => {
  res.send(`Here are the search results for your chosen filters: ${req.params.id}`);
});

//My profile
app.get('/myprofile', (req, res) => {
    res.send('This is your profile.');
});

// Pictures uploading page
app.get('/my_pictures', (req, res) => {
    res.send('You can upload your pictures here!');
});

// ***********************************Pic upload
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

// ***********************************

//Accessing other profiles
app.get('/profilebrowsing', (req, res) => {
  res.send('This is the profile browsing section!');
});

// Route for accessing one person's profile
app.get("/profile/:id", (req, res) => {
  res.send(`This is ${req.params.id}'s Profile`);
});

// ***********************************Sending a match request
var sender;
let match = {req:[
  sender
]};

//proof of working
app.get("/match", (req, res) => {
  res.send(match.req);
});

// Route to upload pictures
app.post('/match', (req, res) => {
  match.req.push(req.body);
  res.send("Match request sent successfully.");
});
// ***********************************

//Receiving a match request/notifications if any
app.get("/noti",(req,res)=>{
  res.send("You can view your notifications here.")
})

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

// PUT - Modify information of a course
app.put("/chat/:sender", (req, res) => {
  var index = chat.new.findIndex(
    (c) => c.sender === req.params.sender
  );
  if (index === -1) {
    res.status(404).send("sender not found");
  } else {
    chat.new[index] = { ...chat.new[index], ...req.body };
    res.send("Details updated");
  }
});

// ***********************************

// ***********************************Quiz

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
// ***********************************

// ***********************************Video Call

var sender;
var recipient;
let vc = {videoc:[
  sender,
  recipient
]};

//proof of working
/*app.get("/vc", (req, res) => {
  res.send(vc.videoc);
});*/

// Route to videocall
app.post('/vc', (req, res) => {
  vc.videoc.push(req.body);
  res.send("Video call initiation successful.");
});

// ***********************************

// Learn more -> Connect BFF
app.get('/learnmore/connect_bff', (req, res) => {
  res.send('All about Connect BFF');
});

// Learn more -> Connect Date
app.get('/learnmore/connect_date', (req, res) => {
  res.send('All about Connect Date');
});

// Empty Route
app.get('/*', (req, res) => {
  res.send('The route does not exist');
});

//Get 
//post
//put
//patch
//delete







