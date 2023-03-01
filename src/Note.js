import React, { useState } from "react";
//import CalendarSelector from "./CalendarSelector";
//import Typing from "./Typing";

function Note({ activeNote}) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  function handleDateChange(date) {
    setSelectedDate(date);
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
          <button id="EditButton">Edit</button>
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
//<input type="text" id="title" placeholder="Untitled" style={{ border: "none", outline: "none" }} />
//<CalendarSelector selectedDate={selectedDate} handleDateChange={handleDateChange} />
export default Note;
