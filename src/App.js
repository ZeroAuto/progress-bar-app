import React, { useEffect, useState } from 'react';

import './App.css';
import ProgressBar from './ProgressBar.js'

const App = () => {
  const [progressBarIndices, setProgressBarIndices] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const addProgressBar = () => {
    const newIndex = 
    setProgressBarIndices([
      ...progressBarIndices,
      progressBarIndices.length,
    ]);
  }

  return (
    <div className="App">
      {progressBarIndices.map(idx =>
        <div
          key={idx}
          className="progress-bar-container"
        >
          <ProgressBar
            activeIndex={activeIndex}
            idx={idx}
            setActiveIndex={setActiveIndex}
          />
        </div>
      )}
      <button onClick={addProgressBar}>Add Progress Bar</button>
    </div>
  );
}

export default App;
