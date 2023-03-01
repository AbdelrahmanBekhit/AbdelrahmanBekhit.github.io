import React, { useState } from "react";
import CalendarSelector from "./CalendarSelector";
import Typing from "./Typing";

function Note() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  function handleDateChange(date) {
    setSelectedDate(date);
  }
  return (  
    <div className="note-page">
      <div className="note-head">
        <div style={{ display: "flex", flexDirection: "column"}}>
          <input type="text" id="title" placeholder="Untitled" style={{ border: "none", outline: "none" }} />
          <small>
            <CalendarSelector selectedDate={selectedDate} handleDateChange={handleDateChange} />
          </small>
        </div>
        <div>
          <button id="saveButton">Save</button>
          <button id="deleteButton">Delete</button>
        </div>
      </div>
      <div className="note-body">
        <Typing />
      </div>
    </div>
  );
}

export default Note;