import { useState, useEffect } from "react";

export function useTimeout(callback, initialTimeinSeconds) {
  const [timeLeftInSeconds, setTimeLeftInSeconds] =
    useState(initialTimeinSeconds);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    let interval = null;
    if (timeLeftInSeconds > 0 && !pause) {
      interval = setInterval(() => {
        setTimeLeftInSeconds(timeLeftInSeconds - 1);
      }, 1000);
    } else if (timeLeftInSeconds === 0) {
      callback();
    }
    return () => clearInterval(interval);
  }, [timeLeftInSeconds, pause, callback]);

  const reset = () => {
    setTimeLeftInSeconds(initialTimeinSeconds);
  };

  const togglePause = () => {
    setPause(!pause);
  };

  return {
    timeLeftInSeconds: timeLeftInSeconds,
    reset: reset,
    togglePause: togglePause,
  };
}
