import React, { useState, useEffect } from "react";
import TimeFormat from "hh-mm-ss";

const Timer = props => {
  let mainTime;

  const [seconds, setSeconds] = useState(props.time);
  useEffect(() => {
    startTime();
    return () => {
      stopTimer();
    };
  });

  const startTime = () => {
    if (seconds && seconds > 0) {
      mainTime = setInterval(tick, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(mainTime);
  };

  const tick = () => {
    setSeconds(seconds => {
      const updatedSeconds = seconds - 1;
      if (updatedSeconds < 1) {
        stopTimer();
        setTimeout(props.displayQuestion(), 2000);
      }
      return updatedSeconds;
    });
  };

  const display = TimeFormat.fromS(seconds, "hh:mm:ss");
  const [h, m, s] = display.split(":");
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <span className="text-white" style={{ fontWeight: "bold" }}>
        {h}
      </span>
      <span className="px-2 text-white">:</span>
      <span className="text-white" style={{ fontWeight: "bold" }}>
        {m}
      </span>
      <span className="px-2 text-white">:</span>
      <span className="text-white" style={{ fontWeight: "bold" }}>
        {s}
      </span>
    </div>
  );
};
export default Timer;
