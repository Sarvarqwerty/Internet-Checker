// src/InternetChecker.js
import React, { useState, useEffect } from 'react';

function InternetChecker() {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  useEffect(() => {
    const updateOnlineStatus = () => {
      setIsOnline(window.navigator.onLine);
    };

    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);

    return () => {
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
    };
  }, []);

  return (
    <div>
      {isOnline ? (
        <p>You are connected to the internet.</p>
      ) : (
        <p>You are not connected to the internet. Please check your network connection.</p>
      )}
    </div>
  );
}

export default InternetChecker;
