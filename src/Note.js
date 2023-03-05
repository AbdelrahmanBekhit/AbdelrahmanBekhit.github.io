import React from 'react';
import { useNavigate } from 'react-router-dom';

function Note({ notes, onDeleteNote, activeNote }) {
  const navigate = useNavigate();
  const note = notes.find((note) => note.id === activeNote);
  
  function handleEditClick() {
    navigate(`/${activeNote}/edit`);
  }

  function handleDeleteClick() {
    const answer = window.confirm("Are you sure?");
    if (answer) {
      onDeleteNote(activeNote);
      navigate('/');
    }
  }

  const lastModified = new Date(note.lastModified).toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  function createMarkup() {
    return { __html: note.body };
  }

  return (
    <div className="note-page">
      <div className="note-head">
        <div className='temp' style={{ display: "flex", flexDirection: "column"}}>
          <div id="title">{note.title}</div>
          <small className='save-date'>
            {lastModified}
          </small>
        </div>
        <div>
          <button id="editButton" onClick={handleEditClick}>Edit</button>
          <button id="deleteButton" onClick={handleDeleteClick}>Delete</button>
        </div>
      </div>
      <div className='body' dangerouslySetInnerHTML={createMarkup()} style={{padding: "10px"}}></div>
    </div>
  );
}

export default Note;
