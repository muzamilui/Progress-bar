import ProgressBar from "./components/ProgressBar";
import "./styles.css";
import { useState, useEffect } from "react";
export default function App() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    setInterval(() => {
      console.log("runninf");
      setValue((prev) => prev + 1);
    }, 100);
  }, []);
  return (
    <div className="app">
      <ProgressBar value={value} />
    </div>
  );
}
