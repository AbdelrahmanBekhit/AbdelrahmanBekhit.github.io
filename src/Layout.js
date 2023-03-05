import React, { useState, useEffect } from 'react';
import NoteList from './NoteList';
import Note from './Note';
import EditNote from './EditNote';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Layout() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.notes) || []);
  const [activeNote, setActiveNote] = useState(null);
  const [counter, setCounter] = useState(1);
  const location = useLocation();
  const [isListVisible, setIsListVisible] = useState(true);
  const navigate = useNavigate();

  useEffect(() => { 
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function handleAddNote() {
    const newNote = {
      id: counter,
      title: 'Untitled',
      body: '',
      lastModified: new Date().toLocaleString(),
    };
    setNotes([newNote, ...notes]);
    setActiveNote(newNote.id);
    setCounter(counter + 1);
    navigate(`/${newNote.id}/edit`);
  }

  function handleDeleteNote(id) {
    setNotes(notes.filter((note) => note.id !== id));
    setActiveNote(null);
  }

  function handleNoteClick(id) {
    setActiveNote(id);
  }

  function handleNoteChange(updatedNote) {
    const updatedNotes = notes.map((note) =>
      note.id === updatedNote.id ? updatedNote : note
    );
    setNotes(updatedNotes);
  }

  const isEditing = location.pathname.endsWith('/edit');

  return (
    <div className='container'>
      <div className='top'>
        <div className='button'>
          <button id='list' onClick={() => setIsListVisible(!isListVisible)}>≡</button>
        </div>
        <div className='name'>
          <h1>Lotion</h1>
          <small>Like Notion, but worse.</small>
        </div>
      </div>
      <div className='page'>
        {isListVisible && (
          <div className='list'>
            <NoteList
              notes={notes}
              onAddNote={handleAddNote}
              activeNote={activeNote}
              onNoteClick={handleNoteClick}
            />
          </div>
        )}
        {activeNote ? (
          isEditing ? (
            <EditNote
              notes={notes}
              activeNote={activeNote}
              onNoteChange={handleNoteChange}
              onDeleteNote={handleDeleteNote}
            />
          ) : (
            <Note
              notes={notes}
              activeNote={activeNote}
              onDeleteNote={handleDeleteNote}
            />
          )
        ) : (
          <div className='no-note'>Select a note, or create a new one.</div>
        )}
      </div>
    </div>
  );
}

export default Layout;
