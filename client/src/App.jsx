import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    // Note: The Express server is expected to run on port 3000.
    fetch('http://localhost:3000/api/message')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setMessage(data.message);
      })
      .catch(error => {
        console.error('Fetch error:', error);
        setMessage('Error fetching message: ' + error.message);
      });
  }, []);

  return (
    <>
      <div className="card">
        <h1>Server Message</h1>
        <p>
          {message}
        </p>
      </div>
    </>
  )
}

export default App
