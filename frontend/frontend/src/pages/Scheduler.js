import React from "react";
import "./Page.css";

const CreateSchedule = () => {
  return (
    <div className="page-container">
      <h1>Create a New Schedule</h1>
      <form className="page-form">
        <input type="text" placeholder="Subject or Topic" required />
        <input type="date" required />
        <input type="time" required />
        <button type="submit">Add Session</button>
      </form>
    </div>
  );
};

export default CreateSchedule;