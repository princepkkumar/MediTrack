// src/utils/storage.js

/**
 * Retrieves reminders from localStorage.
 * @returns {Array} An array of reminder objects.
 */
export const getReminders = () => {
  const reminders = localStorage.getItem('meditrack-reminders');
  return reminders ? JSON.parse(reminders) : [];
};

/**
 * Saves reminders to localStorage.
 * @param {Array} reminders - The array of reminder objects to save.
 */
export const saveReminders = (reminders) => {
  localStorage.setItem('meditrack-reminders', JSON.stringify(reminders));
};