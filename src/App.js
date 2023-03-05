import { useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EditNote from './EditNote';
import Layout from './Layout';
import Note from './Note';
import NoteList from './NoteList';

function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(null);

  function handleAddNote() {
    const newNote = {
      id: Date.now(),
      title: 'Untitled Note',
      body: '',
      lastModified: new Date().toLocaleString(),
    };
    setNotes([newNote, ...notes]);
    setActiveNote(newNote.id);
  }

  function handleDeleteNote(id) {
    setNotes(notes.filter((note) => note.id !== id));
    setActiveNote(null);
  }

  function handleNoteClick(id) {
    setActiveNote(id);
  }

  function handleNoteChange(id, updatedNote) {
    const updatedNotes = notes.map((note) => (note.id === id ? updatedNote : note));
    setNotes(updatedNotes);
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<NoteList notes={notes} onAddNote={handleAddNote} activeNote={activeNote} onNoteClick={handleNoteClick} />} />
          <Route path="/:noteId" element={<Note notes={notes} onDeleteNote={handleDeleteNote} activeNote={activeNote} onNoteChange={handleNoteChange} />} />
          <Route path="/:noteId/edit" element={<EditNote notes={notes} activeNote={activeNote} onNoteChange={handleNoteChange} onDeleteNote={handleDeleteNote} />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
