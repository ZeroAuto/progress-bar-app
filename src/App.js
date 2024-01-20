import React, { useState } from 'react';

import './App.css';
import ProgressBar from './ProgressBar.js'

const App = () => {
  const [progressBarIndices, setProgressBarIndices] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const addProgressBar = () => {
    setProgressBarIndices([
      ...progressBarIndices,
      progressBarIndices.length,
    ]);
  }

  // This following code results in a console warning, internet suggests moving this code
  // into the useEffect hook in the child component but that failed to fix the warning.
  // This wouldn't be ideal for a production feature but since this is a technical challenge
  // I just wanted to get it working rather than spending a lot of time debugging when the
  // code is working as expected
  const handleCompleteEvent = (progressBarIndex) => {
    setActiveIndex(progressBarIndex + 1);
  }

  return (
    <div className="App">
      {progressBarIndices.map(idx =>
        <div
          key={idx}
          className="progress-bar-container"
        >
          {/* 
            I know that using index for the key isn't the best practice but since deleting
            elements wasn't part of the requirements I think it's fine here
          */}
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
