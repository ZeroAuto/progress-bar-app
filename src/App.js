import React, { useState } from 'react';

import './App.css';
import ProgressBar from './ProgressBar.js'

const App = () => {
  const [progressBars, setProgressBars] = useState([true]);

  const addProgressBar = () => {
    setProgressBars([
      ...progressBars,
      true,
    ]);
  }

  return (
    <div className="App">
      {progressBars.map((bar, index) =>
        <div className="progress-bar-container">
          <ProgressBar key={index} active={bar} />
        </div>
      )}
      <button onClick={addProgressBar}>Add Progress Bar</button>
    </div>
  );
}

export default App;
