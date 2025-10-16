// src/App.js

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import AddMedicineForm from './components/AddMedicineForm';
import ReminderList from './components/ReminderList';
import NotificationHandler from './components/NotificationHandler';
import { getReminders, saveReminders } from './utils/storage';
import './styles/App.css';
import './styles/components.css';

function App() {
  const [reminders, setReminders] = useState([]);

  // Load reminders from localStorage on initial render
  useEffect(() => {
    setReminders(getReminders());

    // Ask for notification permission when the app loads
    if (Notification.permission !== 'granted') {
      Notification.requestPermission();
    }
  }, []);

  // Save reminders to localStorage whenever they change
  useEffect(() => {
    saveReminders(reminders);
  }, [reminders]);

  const handleAddReminder = (newReminder) => {
    setReminders([...reminders, newReminder]);
  };

  const handleDeleteReminder = (id) => {
    setReminders(reminders.filter((reminder) => reminder.id !== id));
  };

  return (
    <div className="app-container">
      <Header />
      <main>
        <AddMedicineForm onAddReminder={handleAddReminder} />
        <ReminderList reminders={reminders} onDeleteReminder={handleDeleteReminder} />
      </main>
      <NotificationHandler reminders={reminders} />
    </div>
  );
}

export default App;