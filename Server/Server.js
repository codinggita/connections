
const express = require ('express');
const app = express();
const port = 3000;
app.listen(port,() => {
    console.log(`Server running at http://localhost:${port}/`);
})
app.get('/profile__browsing_section', (req, res) => {
    res.send('This is the profile browsing section!');
  });

app.get('/search', (req, res) => {
    res.send('Searchthe name of your choice!');
  });

app.get('/my_profile', (req, res) => {
    res.send('create your profile section!');
  });

app.get('/my_pictures', (req, res) => {
    res.send('You can upload your pictures here!');
  });

app.get('/filter', (req, res) => {
    res.send('Filter the ones that are not your type!');
  });

app.get('/chat', (req, res) => {
    res.send('chit-chat here!');
  });

app.get('/videocall', (req, res) => {
    res.send('Get goofy on videocalls!');
  });

