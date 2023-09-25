import { useState, useEffect } from "react";
import "./progress.css";

const ProgressBar = ({ value = 10 }) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setProgress(Math.min(100, Math.max(value, 0)));
  }, [value]);
  return (
    <div className="progress_container">
      <span
        style={{ color: progress > 49 ? "white" : "black" }}
        className="value"
      >
        {progress}
      </span>
      <div
        style={{ transform: `translateX(calc(${progress}% - 100%))` }}
        className="progress_bar"
      />
    </div>
  );
};

export default ProgressBar;
