const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const imageDownloader = require('image-downloader');
const bcrypt = require('bcrypt');
const User = require('./models/User.js'); // Ensure the User model is correctly defined
const fs = require('fs');
require('dotenv').config();

const app = express();
app.use(cookieParser());

app.use('/uploads', express.static(__dirname + '/uploads'));

const bcryptSaltRounds = 10; // Number of salt rounds for bcrypt
const jwtSecret = process.env.JWT_SECRET || 'your_jwt_secret'; // JWT secret from environment variable or fallback

const allowedOrigins = ['http://localhost:5173', 'http://127.0.0.1:5173'];

// Connect to MongoDB
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});

app.use(cors({
  credentials: true,
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));
app.use(bodyParser.json());

// Test endpoint
app.get('/test', (req, res) => {
  res.json('test ok');
});

// Registration endpoint
app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = bcrypt.hashSync(password, bcryptSaltRounds);
    const userDoc = await User.create({ name, email, password: hashedPassword });
    res.json({ user: userDoc });
  } catch (e) {
    res.status(422).json(e);
  }
});

// Login endpoint
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const userDoc = await User.findOne({ email });
    if (!userDoc) {
      return res.status(404).json({ message: 'User not found' });
    }

    const passOK = bcrypt.compareSync(password, userDoc.password);
    if (passOK) {
      jwt.sign(
        { email: userDoc.email, id: userDoc._id },
        jwtSecret,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie('token', token, { httpOnly: true }).json({ user: userDoc, token });
        }
      );
    } else {
      res.status(422).json({ message: 'Incorrect password' });
    }
  } catch (e) {
    res.status(500).json(e);
  }
});

app.get('/profile', (req, res) => {
  const { token } = req.cookies;

  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err;
      const { name, email, _id } = await User.findById(userData.id);

      res.json({ name, email, _id });
    });
  } else {
    res.json(null);
  }
});

app.post('/logout', (req, res) => {
  res.cookie('token', '').json(true);
});

console.log({ __dirname });

app.post('/upload-by-link', async (req, res) => {
  const { link } = req.body;
  const newName = 'photos' + Date.now() + '.jpg';
  const dest = __dirname + '/uploads/' + newName;

  // Ensure the /uploads directory exists
  fs.mkdirSync(__dirname + '/uploads', { recursive: true });

  try {
    await imageDownloader.image({
      url: link,
      dest: dest,
    });
    res.json(newName);
  } catch (error) {
    console.error('Error downloading image:', error);
    res.status(500).json({ error: 'Error downloading image' });
  }
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});