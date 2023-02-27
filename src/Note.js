import React, { useState } from "react";
import CalendarSelector from "./CalendarSelector";

function Note() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  function handleDateChange(date) {
    setSelectedDate(date);
  }

  function handleTodayButtonClick() {
    setSelectedDate(new Date());
  }

  return (
    <div className="note-page">
      <div className="note-head">
        <input type="text" id="title" placeholder="Untitled" style={{ border: "none", outline: "none" }} />
        <br />
        <CalendarSelector selectedDate={selectedDate} handleDateChange={handleDateChange} handleTodayButtonClick={handleTodayButtonClick} />
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
