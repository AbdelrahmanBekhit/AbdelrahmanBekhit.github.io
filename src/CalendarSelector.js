import React, { useState } from "react";

const CalendarSelector = () => {
  const localOffset = new Date().getTimezoneOffset() * 60000;
  const [date, setDate] = useState(new Date(Date.now() - localOffset).toISOString().slice(0, 19));

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  return (
    <div>
      <label htmlFor="date-input"></label>
      <input
        id="date-input"
        type="datetime-local"
        value={date}
        style={{ border: "none", outline: "none", paddingLeft: "11px" }}
        onChange={handleDateChange}
      />
    </div>
  );
};

export default CalendarSelector;