import React, { useState, useEffect } from 'react';
import api from './services/api'

import './App.css';

function App() {
  
  const [currentTime, setCurrentTime] = useState(0);
  const [currentDate, setCurrentDate] = useState(0);
  
  useEffect(() => {
    api.get('/').then(response => {
      const data = response.data;
      setCurrentTime(data.time);
      setCurrentDate(data.date)
    })
    .catch(error => {
      console.log(error);
    })

  // fetch(' http://0.0.0.0:8000/').then(res => res.json()).then(data => {
  //     setCurrentTime(data.time);
  //     setCurrentDate(data.date)
  //   });
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
      <p>The date is {currentDate} and the time is {currentTime}.</p> <br/>

      </header>
    </div>
  );
}


export default App;
