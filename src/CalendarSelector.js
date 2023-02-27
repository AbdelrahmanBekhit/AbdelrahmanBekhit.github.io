import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CalendarSelector({ selectedDate, handleDateChange, handleTodayButtonClick }) {
  return (
    <div>
      <small id="date">
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          showTimeSelect
          timeFormat="HH:mm:ss"
          timeIntervals={1}
          dateFormat="yyyy-MM-dd h:mm:ss aa" 
        />
      </small>
      <button onClick={handleTodayButtonClick}>Today</button>
    </div>
  );
}

export default CalendarSelector;
