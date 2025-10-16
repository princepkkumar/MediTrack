// src/components/ReminderList.js

import React from 'react';

function ReminderList({ reminders, onDeleteReminder }) {
  if (reminders.length === 0) {
    return <p className="no-reminders">No reminders set yet. Add one above! ✨</p>;
  }

  return (
    <div className="reminder-list">
      <h2>Your Reminders</h2>
      {reminders.map((reminder) => (
        <div key={reminder.id} className="reminder-item">
          <div className="reminder-details">
            <p className="reminder-time">{reminder.time}</p>
            <div>
              <p className="reminder-name">{reminder.name}</p>
              {reminder.dosage && <p className="reminder-dosage">{reminder.dosage}</p>}
            </div>
          </div>
          <button
            className="btn-delete"
            onClick={() => onDeleteReminder(reminder.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default ReminderList;