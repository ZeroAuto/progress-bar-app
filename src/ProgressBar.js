import React, { useEffect, useState } from 'react';

const ProgressBar = ({activeIndex, completeEvent, idx}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (activeIndex === idx) {
      const progressInterval = setInterval(() => {
        setProgress((prevTotal) => {
          if (prevTotal < 100) {
            return prevTotal + 1;
          } else {
            completeEvent(idx);
            clearInterval(progressInterval);
            return prevTotal;
          }
        })
      }, 50);

      return () => clearInterval(progressInterval);
    }
  }, [activeIndex]);

  return (
    <div className="w-full bg-pink-300 h-4 rounded-full">
      <div
        className="bg-blue-400 h-full rounded-full"
        style={{ width: `${progress}%`}}
      />
    </div>
  );
};

export default ProgressBar;
