import React from 'react';
import { useNavigate } from 'react-router-dom';

function NoteList({ notes, onAddNote, activeNote, onNoteClick }) {

  const truncateText = (text, maxLength) => {
    if (!text) return '...';
    const plainText = text.replace(/<[^>]*>?/gm, '');
    if (plainText.length <= maxLength) return plainText;
    return plainText.substr(0, maxLength) + '...';
  };

  const navigate = useNavigate();

  const formatDate = (dateString) => {
    const options = { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
    const date = new Date(dateString);
    return date.toLocaleString('en-US', options);
  };

  return (
    <div className='notebar'>
      <div className='list-top'>
        <h2>Notes</h2>
        <button className="add" onClick={onAddNote}>+</button>
      </div>
      <div className='list-notes'>
      {notes.map((note) => (
        <div
          key={note.id}
          className={`list-note ${note.id === activeNote && 'active'}`}
          onClick={() => {
            onNoteClick(note.id);
            navigate(`/${note.id}`);
          }}
        >
          <div className='note-title'>
            <strong>{note.title}</strong> <br></br>
            <small>{formatDate(note.lastModified)}</small>
          </div>
          <p>{truncateText(note.body, 100)}</p>
        </div>
      ))}
      </div>
    </div>
  );
}

export default NoteList;
