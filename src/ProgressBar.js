import React, { useState, useEffect } from 'react';

const ProgressBar = ({active}) => {
  const [totalProgress, setTotalProgress] = useState(0);

  useEffect(() => {
    if (active) {
      const progressInterval = setInterval(() => {
        setTotalProgress((prevTotal) => {
          if (prevTotal < 100) {
            return prevTotal + 5;
          } else {
            clearInterval(progressInterval);
            return prevTotal;
          }
        })
      }, 250);

      return () => clearInterval(progressInterval);
    }
  }, [active]);

  return (
    <div>
      <p>Progress: {totalProgress}</p>
      <div className="progress-bar-container">
        <div style={{ width: `${totalProgress}%`, height: '20px', backgroundColor: 'lightblue' }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
