// src/components/NotificationHandler.js

import { useEffect } from 'react';

function NotificationHandler({ reminders }) {
  useEffect(() => {
    // Set up an interval to check the time every minute
    const interval = setInterval(() => {
      const now = new Date();
      const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

      reminders.forEach((reminder) => {
        if (reminder.time === currentTime) {
          // Time to send a notification!
          new Notification('Time for your medicine! 💊', {
            body: `Don't forget to take ${reminder.name} (${reminder.dosage || ''})`,
          });
        }
      });
    }, 60000); // 60000 ms = 1 minute

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [reminders]); // Rerun effect if reminders change

  return null; // This component does not render anything
}

export default NotificationHandler;