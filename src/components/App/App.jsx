import "./App.css";
import { useTimeout } from "../../utils/useTimeout";
import { useCallback, useState } from "react";

function App() {
  const [pause, setPause] = useState();

  const myCallback = useCallback(() => {
    console.log("Done!");
  }, []);

  const { timeLeftInSeconds, reset, togglePause } = useTimeout(myCallback, 5);

  return (
    <div className="App">
      <div className="Timer">
        <div className="TimeLeftInSeconds">
          <h1>{timeLeftInSeconds}</h1>
        </div>
        <div
          className="Start"
          onClick={() => {
            togglePause();
            setPause(!pause);
          }}
        >
          <h2>{pause ? "Start" : "Pause"}</h2>
        </div>
        <div
          className="Reset"
          onClick={() => {
            reset();
          }}
        >
          <h2>Reset</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
