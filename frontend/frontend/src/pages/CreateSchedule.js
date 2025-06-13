import React, { useState } from "react";
import "./Page.css";

const CreateSchedule = () => {
  const [subject, setSubject] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newSchedule = { subject, date, time };

    try {
      const res = await fetch("http://localhost:5000/api/schedules", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newSchedule),
      });

      if (!res.ok) throw new Error("Failed to save schedule");

      alert("✅ Schedule created successfully!");
      setSubject("");
      setDate("");
      setTime("");
    } catch (error) {
      console.error(error);
      alert("Something went wrong while creating the schedule.");
    }
  };

  return (
    <div className="page-container">
      <h1>Create a New Schedule</h1>
      <form className="page-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Subject or Topic"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
        <button type="submit">Add Session</button>
      </form>
    </div>
  );
};

export default CreateSchedule;