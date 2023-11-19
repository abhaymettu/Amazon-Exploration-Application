// models/MapData.js
const mongoose = require('mongoose');

const MapDataSchema = new mongoose.Schema({
    title: String,
    description: String,
    location: {
        latitude: Number,
        longitude: Number
    },
    imageUrl: String, 
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Reference to the User model
});

module.exports = mongoose.model('MapData', MapDataSchema);
