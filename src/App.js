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

  const handleCompleteEvent = (progressBarIndex) => {
    console.log(`index completed ${progressBarIndex}`);
  }

  return (
    <div className="App">
      {progressBars.map((bar, index) =>
        <div className="progress-bar-container">
          <ProgressBar
            key={index}
            active={bar}
            index={index}
            completeEvent={handleCompleteEvent}
          />
        </div>
      )}
      <button onClick={addProgressBar}>Add Progress Bar</button>
    </div>
  );
}

export default App;
