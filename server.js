// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const User = require('./models/User');
const MapData = require('./models/MapData');

const app = express();

app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb://localhost/amazonexplore', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('AmazonExplore API');
});
    // Endpoint for data submission
app.post('/submit-data', async (req, res) => {
    const { title, description, location } = req.body;
    // create a new MapData instance and save it

    // temporarily im just sending back what we receive
    res.status(201).json({ title, description, location });
});

// Endpoint for data retrieval
app.get('/get-data', async (req, res) => {
    // Logic to fetch data from the database
    // const data = await MapData.find();
    // res.json(data);
    // Example for now I guess
    res.json([{ title: "Sample Data", description: "Description", location: { latitude: -3.4653, longitude: -62.2159 } }]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
