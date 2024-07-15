const fs = require("fs");

// To add a new note run in command line run: node app.js --title="NoteName" --body="Note Content"
function addNote(title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push({
      id: notes.length + 1,
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log("new note added");
  } else {
    console.log("note title taken");
  }
}

// To remove a note run in command line run: node app.js --id=NoteID (NoteID is a number)

function removeNote(id) {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.id !== id);

  if (notes.length > notesToKeep.length) {
    console.log(`note ${id} successfully removed`);
    saveNotes(notesToKeep);
  } else {
    console.log("note not found");
  }
}

function listNotes() {
  const notes = loadNotes();
  console.log("your notes \n", notes);
}

function readNote(title) {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);

  if (note) {
    console.log(note.title);
    console.log(note.body);
  } else {
    console.log("note not found");
  }
}

function saveNotes(notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
}

function loadNotes() {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
}

module.exports = {
  addNote,
  removeNote,
  listNotes,
  readNote,
};
