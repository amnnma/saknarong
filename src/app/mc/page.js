"use client";

import { useState, useEffect } from 'react';

export default function MinecraftStatus() {
  const [serverStatus, setServerStatus] = useState(null);
  const [error, setError] = useState(null);

  const fetchServerStatus = async () => {
    try {
      const response = await fetch('/api/server-status');
      if (!response.ok) {
        throw new Error('Failed to fetch server status');
      }
      const data = await response.json();
      setServerStatus(data);
      setError(null); // Clear previous errors
    } catch (err) {
      setError(err.message);
      setServerStatus(null);
    }
  };

  useEffect(() => {
    // Fetch initial status
    fetchServerStatus();
    
    // Set up interval to fetch server status every 5 minutes
    const interval = setInterval(fetchServerStatus, 5 * 60 * 1000);
    
    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl mb-4">Minecraft Server Status</h1>
      
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : serverStatus ? (
        <div>
          <p>Server is {serverStatus.online ? 'Online' : 'Offline'}</p>
          {serverStatus.online && (
            <>
              <p>Players: {serverStatus.players.online}/{serverStatus.players.max}</p>
              <p>Version: {serverStatus.version}</p>
            </>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
