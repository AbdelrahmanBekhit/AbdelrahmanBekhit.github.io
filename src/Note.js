import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Note({activeNote}) {
  const navigate = useNavigate();

  function handleEditClick() {
    navigate.push('/edit');
  }
  return (  
    <div className="note-page">
      <div className="note-head">
        <div style={{ display: "flex", flexDirection: "column"}}>
          <p id="title">{activeNote.title}</p>
          <small>
            {activeNote.lastModified}
          </small>
        </div>
        <div>
          <button id="EditButton" onClick={handleEditClick}>Edit</button>
          <button id="deleteButton">Delete</button>
        </div>
      </div>
      <div className="note-body">
        {activeNote.body}
      </div>
    </div>
  );
}
// at 28:12
export default Note;
