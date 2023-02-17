const mongoose = require('mongoose')

// Define our note schema
const noteSchema = new mongoose.Schema({
    title: String,
    body: String,
    date: { type: Date, default: Date.now },
});
  
// Define our note model
const Note = mongoose.model('Note', noteSchema);

module.exports = Note;  

