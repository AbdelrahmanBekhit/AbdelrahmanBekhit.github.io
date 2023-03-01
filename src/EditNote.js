import Typing from "./Typing";
import React, { useState } from "react";
import CalendarSelector from "./CalendarSelector";

function EditNote({activeNote, setActiveNote}) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  function handleDateChange(date) {
    setSelectedDate(date);
  }
  return (  
    <div className="note-page">
      <div className="note-head">
        <div style={{ display: "flex", flexDirection: "column"}}>
          <input type="text" id="title" value={activeNote.title} style={{ border: "none", outline: "none" }} />
          <small>
            <CalendarSelector selectedDate={selectedDate} handleDateChange={handleDateChange} />
          </small>
        </div>
        <div>
          <button id="SaveButton">Save</button>
          <button id="deleteButton">Delete</button>
        </div>
      </div>
      <div className="note-body">
        <Typing />
      </div>
    </div>
  );
}
//value={activeNote.body} 
export default EditNote;