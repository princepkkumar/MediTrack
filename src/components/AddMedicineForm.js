// src/components/AddMedicineForm.js

import React, { useState } from 'react';

function AddMedicineForm({ onAddReminder }) {
  const [medicineName, setMedicineName] = useState('');
  const [dosage, setDosage] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!medicineName || !time) {
      alert('Please fill in the medicine name and time.');
      return;
    }

    // Create a new reminder object
    const newReminder = {
      id: Date.now(), // Unique ID based on timestamp
      name: medicineName,
      dosage: dosage,
      time: time,
      completed: false, // Not completed by default
    };

    onAddReminder(newReminder);

    // Clear the form fields
    setMedicineName('');
    setDosage('');
    setTime('');
  };

  return (
    <form className="add-medicine-form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label>Medicine Name</label>
        <input
          type="text"
          placeholder="e.g., Paracetamol"
          value={medicineName}
          onChange={(e) => setMedicineName(e.target.value)}
          required
        />
      </div>
      <div className="form-control">
        <label>Dosage (optional)</label>
        <input
          type="text"
          placeholder="e.g., 1 tablet"
          value={dosage}
          onChange={(e) => setDosage(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Time</label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn-submit">Add Reminder</button>
    </form>
  );
}

export default AddMedicineForm;