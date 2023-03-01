import React from 'react';
import NoteList from './NoteList';
import Note from './Note';
import { useState } from 'react';
import uuid from 'react-uuid';

function App() {

  const [notes, setNotes] = useState([]);
  const onAddNote = () => {
    const NewNote = {
      id: uuid(),
      title: "Untitled",
      body: "...",
      lastModified: null,
    }
    setNotes([NewNote, ...notes]);
  }

  const [activeNote, setActiveNote] = useState(false);

  const getActiveNote = () => {
    return notes.find(({ id }) => id === activeNote);
  }
  
  return <div className='container'>
    <div className='top'>
      <div className='button'>
        <button id="list">≡</button>
      </div>
      <div className='name'>
        <h1>Lotion</h1>
        <small>Like Notion, but worse.</small>
      </div>
    </div>
    <div className='page'>
      <div className='list'>
        <NoteList 
          notes={notes} 
          onAddNote={onAddNote}
          activeNote={activeNote}
          setActiveNote={setActiveNote}
        />
      </div>
      <Note activeNote={getActiveNote()} />
    </div>
  </div>;
}

export default App;   
