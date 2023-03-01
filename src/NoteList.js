import React from 'react';

function NoteList({notes, onAddNote, activeNote, setActiveNote}) {
  const truncateText = (text, maxLength) => {
    if (!text) return '...';
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
  };

  return (
    <div className='notebar'>
      <div className='list-top'>
        <h2>Notes</h2>
        <button className="add" onClick={onAddNote}>+</button>
      </div>
      <div className='list-notes'>
        {notes.map((note) => (
          <div className={`list-note ${note.id === activeNote && "active"}`}onClick={() => setActiveNote(note.id)} >
            <div className='note-title'>
              <strong>{note.title}</strong> <br></br>
              <small>{note.lastModified}</small>
            </div>
            <p>{truncateText(note.body, 100)}</p> 
          </div>
        ))}
      </div>
    </div>
  );
}

export default NoteList;
