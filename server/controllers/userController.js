require("../models/database");

const Note = require("../models/note");

exports.getNote = async (req, res) => {
  const note = new Note(req.body);
  await note.save();
  res.json(note);
};

exports.postNote = async (req, res) => {
  const note = new Note(req.body);
  await note.save();
  res.json(note);
};

exports.patchNote = async (req, res) => {
  const note = await Note.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(note);
};

exports.deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
};

exports.GetEndpoint = async (req, res) => {
  const note = await Note.findById(req.params.id);
  res.json(note);
};
