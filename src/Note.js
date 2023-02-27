import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Note() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  function handleDateChange(date) {
    setSelectedDate(date);
  }

  return (
    <div className="note-page">
      <div className="note-head">
        <input type="text" id="title" placeholder="Untitled" style={{ border: "none", outline: "none" }} />
        <br></br>
        <small id="date">
          <DatePicker selected={selectedDate} onChange={handleDateChange} />
        </small>
      </div>
      <div className="note-buttons">
        <p>button</p>
      </div>
      <div className="note-body">
        <p>body</p>
      </div>
    </div>
  );
}

export default Note;
