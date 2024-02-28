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
    <div className="container mx-auto py-8">
      <div className="max-w-md mx-auto">
        <div className="space-y-4">
          {progressBarIndices.map(idx =>
            <div
              key={idx}
              className="flex-items-center"
            >
              <ProgressBar
                activeIndex={activeIndex}
                completeEvent={handleCompleteEvent}
                idx={idx}
              />
            </div>
          )}
        </div>
        <div className="flex justify-start mt-4">
          <button
            className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={addProgressBar}
          >Add Progress Bar</button>
        </div>
      </div>
    </div>
  );
}

export default App;
