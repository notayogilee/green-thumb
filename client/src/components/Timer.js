import React, { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./TimerStyle.css";

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
  isPlaying: true,
  size: 60,
  strokeWidth: 3
};

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div>{dimension}</div>
    </div>
  );
};

const getTimeSeconds = time => (minuteSeconds - time / 1000) | 0;
const getTimeMinutes = time => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = time => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = time => (time / daySeconds) | 0;



export default function Timer(props) {

  const [stratTime, setStratTime] = useState(Date.now());

  function resetTime() {

    return setStratTime(Date.now());

  }


  // stratTime = resetTime(); // use UNIX timestamp in seconds
  const endTime = stratTime + props.wateringTime * 24 * 60 * 60; // use UNIX timestamp in seconds


  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;

  return (
    <>
      <button onClick={() => resetTime()}>Reset</button>
      <div className="App">
        <CountdownCircleTimer
          {...timerProps}
          colors={[["#7E2E84"]]}
          duration={daysDuration}
          initialRemainingTime={remainingTime}
        >
          {({ elapsedTime }) =>
            renderTime("days", getTimeDays(daysDuration - elapsedTime / 1000))
          }
        </CountdownCircleTimer>
        <CountdownCircleTimer
          {...timerProps}
          colors={[["#D14081"]]}
          duration={daySeconds}
          initialRemainingTime={remainingTime % daySeconds}
          onComplete={totalElapsedTime => [
            remainingTime - totalElapsedTime > hourSeconds
          ]}
        >
          {({ elapsedTime }) =>
            renderTime("hrs", getTimeHours(daySeconds - elapsedTime / 1000))
          }
        </CountdownCircleTimer>
        <CountdownCircleTimer
          {...timerProps}
          colors={[["#EF798A"]]}
          duration={hourSeconds}
          initialRemainingTime={remainingTime % hourSeconds}
          onComplete={totalElapsedTime => [
            remainingTime - totalElapsedTime > minuteSeconds
          ]}
        >
          {({ elapsedTime }) =>
            renderTime(
              "min",
              getTimeMinutes(hourSeconds - elapsedTime / 1000)
            )
          }
        </CountdownCircleTimer>
        <CountdownCircleTimer
          {...timerProps}
          colors={[["#218380"]]}
          duration={minuteSeconds}
          initialRemainingTime={remainingTime % minuteSeconds}
          onComplete={totalElapsedTime => [remainingTime - totalElapsedTime > 0]}
        >
          {({ elapsedTime }) =>
            renderTime("sec", getTimeSeconds(elapsedTime))
          }
        </CountdownCircleTimer>
      </div>

    </>
  );
}
