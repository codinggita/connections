// //*********************************************************************************************

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const bcrypt = require('bcrypt');
// const path = require ('path')

// const app = express();
// const PORT = process.env.PORT || 8000;

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
//   });

//   app.use(cors());
//   app.use(bodyParser.json());
//   mongoose.connect('mongodb://localhost:5000/idk', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });


// // //***********************************List of Possible Routes*********************************

// //Route for Home Page
// app.get('/home', (req, res) => {
//   res.send('This is home.');
// });
// app.get('/', (req, res) => {
//   res.send('This is home.');
// });

// //Route for About Page
// app.get('/about', (req, res) => {
//   res.send('This is the abouts page');
// });

// // Connect BFF
// app.get('/bff', (req, res) => {
//   res.send('This is Connect BFF.');
// });

// // Connect Date
// app.get('/date', (req, res) => {
//   res.send('This is CONNECT DATE.');
// });

// //Route for Here's How page
// app.get('/hOW', (req, res) => {
//   res.send("HERE'S HOW");
// });

// //My profile
// app.get('/myprofile', (req, res) => {
//   res.send('This is your profile.');
// });


// /**********************************************************************************************************/
// // //Route for SignUp Page

// // Handle other routes by serving the React app
// app.get('/signup', (req, res) => {
//   res.send('This is SignUp page.');
// });

//   //Route for Login Page
//   app.get('/login', (req, res) => {
//     res.send('This is the Login page.');
//   });

// // POST REQUEST -> SIGNUP
// const userSchema = new mongoose.Schema({
//   email: { type: String, unique: true, required: true },
//   password: { type: String, required: true }
// });

// const User = mongoose.model('User', userSchema, 'users');

// // Endpoint for handling POST requests
// app.post('/signup', async (req, res) => {
//   const { email, password, confirmPassword } = req.body;

//   // Check if passwords match
//   if (password !== confirmPassword) {
//     return res.status(400).json({ error: 'Passwords do not match' });
//   }

//   try {
//     // Check if email is unique
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ error: 'Email is already registered' });
//     }

//     // Hash the password before saving
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create a new user with the hashed password
//     const newUser = new User({ email, password: hashedPassword });
//     await newUser.save();

//     // Respond with a success message or user data
//     res.status(201).json({ message: 'User created successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// //POST REQUEST-> LOGIN
//   app.post('/login', async (req, res) => {
//     const { email, password } = req.body;
//     try {
//       // Check if the email exists in the database
//       const user = await User.findOne({ email });
//       if (!user) {
//         return res.status(404).json({ error: 'Email not found' });
//       }
//       // Check if the provided password matches the hashed password in the database
//       const passwordMatch = await bcrypt.compare(password, user.password);
//       if (!passwordMatch) {
//         return res.status(401).json({ error: 'Incorrect password' });
//       }
//       // Login successful
//       res.status(200).json({ message: 'Login successful' });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   });

// //DELETE REQUEST-> DELETE USER
//   app.delete('/users/:email', async (req, res) => {
//     const { email } = req.params;
//     try {
//       // Find the user by email and delete it
//       const deletedUser = await User.findOneAndDelete({ email });
//       if (!deletedUser) {
//         return res.status(404).json({ error: 'User not found' });
//       }
//       res.status(200).json({ message: 'User deleted successfully' });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   });


//   //PATCH REQUEST -> UPDATE PASSWORD
//   app.patch('/users/:email', async (req, res) => {
//     const { email } = req.params;
//     const { newPassword } = req.body;
//     try {
//       // Find the user by email
//       const user = await User.findOne({ email });
//       if (!user) {
//         return res.status(404).json({ error: 'User not found' });
//       }
//       // Hash the new password
//       const hashedPassword = await bcrypt.hash(newPassword, 10);
//       // Update the user's password
//       user.password = hashedPassword;
//       await user.save();
//       res.status(200).json({ message: 'Password updated successfully' });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   });


//   //get user details
//   app.get('/get-users', async (req, res) => {
//     try {
//       const users = await User.find();
//       res.status(200).json(users);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   });

// /**********************************************************************************************************/
// app.get('/signup_1', (req, res) => {
//   res.send('This is SignUp-2 page.');
// });

// //Signup_1
// const nameSchema = new mongoose.Schema({
//     firstName: { type: String, required: true },
//     lastName: { type: String, required: true },
//   });
//   // Use 'Name' as the model name, and 'nameSchema' as the schema
//   // Use 'Name' as the model name, and 'nameSchema' as the schema
// const Name = mongoose.model('Name', nameSchema, 'names');

// // Assuming you have an 'app' instance defined somewhere
// app.post('/signup_1', async (req, res) => {
//   const { firstName, lastName } = req.body;
//   console.log(req.body)
//   try {
//     const newName = new Name({ firstName, lastName }); // Use the 'Name' model
//     await newName.save();
//     res.status(201).json({ message: 'Name saved successfully' });
//   } catch (error) {
//     console.log(error);
//     res.send(error);
//   }
// });
//   // get user details
//   app.get('/get-name', async (req, res) => {
//     try {
//       const names = await Name.find();
//       res.status(200).json(names);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   });
  

// /**********************************************************************************************************/
// //Hobbies
// app.get('/hobbies', (req, res) => {
//   res.send('This is SignUp-3 page.');
// });

// //Hobbies
// const HobSchema = new mongoose.Schema({
//     interests: { type: String, required: true },
//     info_on_u: { type: String, required: true },
//   });
//   // Define the Hobby model
//   const Hobby = mongoose.model('Hobby', HobSchema,'hobbies');
//   app.post('/hobbies', async (req, res) => {
//     const { interests, info_on_u } = req.body;
//     try {
//       // Create a new hobby with the provided data
//       const newHobby = new Hobby({ interests, info_on_u });
//       await newHobby.save();
//       res.status(201).json({ message: 'Hobbies saved successfully' });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   });
//   // get user details
//   app.get('/get-hobbies', async (req, res) => {
//     try {
//       const names = await Hobby.find();
//       res.status(200).json(names);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   });


// /**********************************************************************************************************/




// // Pictures uploading page
// app.get('/my_pictures', (req, res) => {
//   res.send('This is SignUp page.');
// });

// var sender;
// let pic = {ture:[
// sender
// ]};

// //proof of working
// /*app.get("/pic", (req, res) => {
// res.send(pic.ture);
// });*/

// // Route to upload pictures
// app.post('/pic', (req, res) => {
// pic.ture.push(req.body);
// res.send("Picture uploaded successfully.");
// });


// /**********************************************************************************************************/




// //My Account
// app.get('/myprofile', (req, res) => {
//   res.send('This is your profile.');
// });

// // Sending a match request
// var sender;
// let match = {req:[
//   sender
// ]};
// /*proof of working
// app.get("/match", (req, res) => {
//   res.send(match.req);
// });*/
// app.post('/match', (req, res) => {
//   match.req.push(req.body);
//   res.send("Match request sent successfully.");
// });


// //Accessing other profiles
// app.get('/profilebrowsing', (req, res) => {
//   res.send('This is the profile browsing section!');
// });

// // Route for accessing one person's profile
// app.get("/profile/:id", (req, res) => {
//   res.send(`This is ${req.params.id}'s Profile`);
// });

// // ***********************************Chat
// var sender;
// var recipient;
// let chat = {new:[
//   sender,
//   recipient,
// ]};

// //proof of working
// app.get("/chat", (req, res) => {
//   res.send(chat.new);
// });

// // Route to chat/text
// app.post('/chat', (req, res) => {
//   chat.new.push(req.body);
//   res.send("Chat initiated successfully.");
// });

// //Quiz
// var sender;
// var recipient;
// var ques;
// let quiz = {text:[
//   sender,
//   recipient,
//   ques
// ]};

// //proof of working
// /*app.get("/quiz", (req, res) => {
//   res.send(quiz.text);
// });*/

// // Route to chat/text
// app.post('/quiz', (req, res) => {
//   quiz.text.push(req.body);
//   res.send("Quiz question sent successfully.");
// });


// // put request to edit info of mine
// const authenticateuser = (req, res, next) => {
//   next();
// };

// app.put('/myProfile/:id', authenticateuser, async (req, res) => {
//   const userId = req.params.id;
//   const { username, password, otherInfo } = req.body;
//   // Find the user by ID
//   const user = users.find(user => user.id === userId);
//   // Update the username if provided
//   if (username) {
//     // Check if the new username already exists
//     if (users.some(u => u.username === username && u.id !== userId)) {
//       return res.status(400).json({ error: 'Username already exists' });
//     }
//     user.username = username;
//   }
//   // Update the password if provided
//   if (password) {
//     // Hash the new password
//     const hashedPassword = await bcrypt.hash(password, 10);
//     user.password = hashedPassword;
//   }
//   // Update other information if provided
//   if (otherInfo) {
//     user.otherInfo = otherInfo;
//   }
//   res.json({ message: 'User information updated successfully', user });
// });


// /**********************************************************************************************************/

// //Deleting profile
// const authenticateUser = (req, res, next) => {
//   // Implement your authentication logic here, for example, using JWTs or session tokens
//   // For simplicity, this example assumes a user is always authenticated
//   next();
// };
// app.delete('/user/:id', authenticateUser, (req, res) => {
//   const userId = req.params.id;
//   // Find the user index by ID
//   const userIndex = users.findIndex(user => user.id === userId);
//   // Remove the user from the array
//   users.splice(userIndex, 1);
//   res.json({ message: 'User account deleted successfully' });
// });

// //Logout
// app.get("/myProfile", (req, res) => {
//   res.send('Logged out');
// });
// // ***********************************


















const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
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


const interestSchema = new mongoose.Schema({
  interest: { type: String },
  info: { type: String },
});

const Interest = mongoose.model('Interest', interestSchema, 'hobbies');

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



const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Uploads directory
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});





const upload = multer({ storage: storage });
const picSchema = new mongoose.Schema({
  filename: String,
  path: String,
});
const Pic = mongoose.model('Pic', picSchema, 'pics');
app.post('/pic', upload.single('image'), async (req, res) => {
  try {
    console.log('Before processing image upload');
    const newPic = new Pic({
      filename: req.file.filename,
      path: req.file.path,
    });
    await newPic.save();
    res.status(201).json({ message: 'Image uploaded successfully' });
    console.log('After processing image upload');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//Logout
app.get("/myProfile", (req, res) => {
  res.send('Logged out');
});

// Empty Route
app.get('/*', (req, res) => {
  res.send('The route does not exist');
});



























