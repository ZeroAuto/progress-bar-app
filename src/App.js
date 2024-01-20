import React, { useEffect, useState } from 'react';

import './App.css';
import ProgressBar from './ProgressBar.js'

const App = () => {
  const [progressBars, setProgressBars] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const addProgressBar = () => {
    const newIndex = 
    setProgressBars([
      ...progressBars,
      progressBars.length,
    ]);
  }

  const handleCompleteEvent = (progressBarIndex) => {
    setActiveIndex(progressBarIndex + 1);
  }

  return (
    <div className="App">
      {progressBars.map(idx =>
        <div
          key={idx}
          className="progress-bar-container"
        >
          <ProgressBar
            activeIndex={activeIndex}
            completeEvent={handleCompleteEvent}
            idx={idx}
          />
        </div>
      )}
      <button onClick={addProgressBar}>Add Progress Bar</button>
    </div>
  );
}

export default App;
