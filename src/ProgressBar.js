import React, { useState, useEffect } from 'react';

const ProgressBar = ({activeIndex, idx, setActiveIndex}) => {
  const [totalProgress, setTotalProgress] = useState(0);

  useEffect(() => {
    if (activeIndex === idx) {
      const progressInterval = setInterval(() => {
        setTotalProgress((prevTotal) => {
          if (prevTotal < 100) {
            return prevTotal + 1;
          } else {
            setActiveIndex(idx + 1);
            clearInterval(progressInterval);
            return prevTotal;
          }
        })
      }, 50);

      return () => clearInterval(progressInterval);
    }
  }, [activeIndex]);

  return (
    <div>
      <div className="progress-bar">
        <div style={{ width: `${totalProgress}%`, height: '20px', backgroundColor: 'lightblue' }}></div>
        <div style={{ width: `${100 - totalProgress}%`, height: '20px', backgroundColor: 'pink'}}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
