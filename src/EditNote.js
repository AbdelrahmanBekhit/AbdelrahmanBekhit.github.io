import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function EditNote({ notes, activeNote, onNoteChange, onDeleteNote }) {
  const [note, setNote] = useState(notes.find((note) => note.id === activeNote));
  const navigate = useNavigate();
  const { noteId } = useParams();
  const [date, setDate] = useState(new Date().toISOString().slice(0, 19));

  useEffect(() => {
    setNote(notes.find((note) => note.id === activeNote));
  }, [activeNote, notes]);

  function handleSaveButton() {
    onNoteChange(note);
    navigate(`/${noteId}`);
  }

  function handleDeleteButton() {
    const answer = window.confirm("Are you sure?");
    if (answer) {
      onDeleteNote(activeNote);
      navigate('/');
    }
  }

  function handleTitleChange(value) {
    setNote({ ...note, title: value});
  }

  const handleDateChange = (e) => {
    setDate(e.target.value);
    setNote({ ...note, lastModified: e.target.value});
  };
 
  function handleNoteChange(value) {
    setNote({ ...note, body: value});
  }

  return (
    <div className="note-page">
      <div className="note-head">
        <div className="temp" style={{ display: "flex", flexDirection: "column" }}>
          {activeNote && (
            <input type="text" id="title" name="title" value={note.title} onChange={(event) => handleTitleChange(event.target.value)} style={{ border: "none", outline: "none" }} />
          )}
          <small>
            <div>
              <label htmlFor="date-input"></label>
              <input
                id="date-input"
                type="datetime-local"
                style={{ border: "none", outline: "none", paddingLeft: "11px",}}
                value={date}
                onChange={handleDateChange}
              />
            </div>
          </small>
        </div>
        <div>
          <button id="SaveButton" onClick={handleSaveButton}>Save</button>
          <button id="deleteButton" onClick={handleDeleteButton}>Delete</button>
        </div>
      </div>
      <div className="note-body">
        <ReactQuill 
          value={note.body} 
          onChange={handleNoteChange} 
          modules={{
            toolbar: [
              [{'font': []}],
              [{size: []}],
              ['bold', 'italic', 'underline',],
              ['link'],
              [{'list': 'ordered'}, {'list': 'bullet'}],
              ['clean']]
          }}
          placeholder={note.body ? <i>Your note here</i> : "Your note here"}
        />
      </div>
    </div>
  );
}

export default EditNote;
