import React, { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Button from './Button';
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

  const currentDate = Date.now();

  // watering-time 1 day = 86400;
  // daysDuration = 86400 / 86400 = 1

  const [timerState, setTimerState] = useState({
    stratTime: currentDate,
    endTime: currentDate + props.wateringTime * 24 * 60 * 60,
    remainingTime: props.wateringTime * 24 * 60 * 60,
    keyDays: Math.floor(Math.random() * 1000 + 1),
    keyHours: Math.floor(Math.random() * 1000 + 1),
    keyMinutes: Math.floor(Math.random() * 1000 + 1),
    keySeconds: Math.floor(Math.random() * 1000 + 1),
  });

  function resetTime() {

    setTimerState({
      ...timerState,
      keyDays: timerState.keyDays + 1,
      keyHours: timerState.keyHours + 1,
      keyMinutes: timerState.keyMinutes + 1,
      keySeconds: timerState.keySeconds + 1,
    });

  }

  return (
    <>
      <Button name="Reset" onclick={() => resetTime()}>Reset</Button>
      <div className="App">
        <CountdownCircleTimer
          key={timerState.keyDays}
          {...timerProps}
          colors={[["#7E2E84"]]}
          duration={timerState.daysDuration}
          initialRemainingTime={0}
        >
          {({ elapsedTime }) =>
            renderTime("days", getTimeDays(timerState.daysDuration - elapsedTime / 1000))
          }
        </CountdownCircleTimer>
        <CountdownCircleTimer
          key={timerState.keyHours}
          {...timerProps}
          colors={[["#D14081"]]}
          duration={daySeconds}
          initialRemainingTime={timerState.remainingTime % daySeconds}
          onComplete={totalElapsedTime => [
            timerState.remainingTime - totalElapsedTime > hourSeconds
          ]}
        >
          {({ elapsedTime }) =>
            renderTime("hrs", getTimeHours(daySeconds - elapsedTime / 1000))
          }
        </CountdownCircleTimer>
        <CountdownCircleTimer
          key={timerState.keyMinutes}
          {...timerProps}
          colors={[["#EF798A"]]}
          duration={hourSeconds}
          initialRemainingTime={timerState.remainingTime % hourSeconds}
          onComplete={totalElapsedTime => [
            timerState.remainingTime - totalElapsedTime > minuteSeconds
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
          key={timerState.keySeconds}
          {...timerProps}
          colors={[["#218380"]]}
          duration={minuteSeconds}
          initialRemainingTime={timerState.remainingTime % minuteSeconds}
          onComplete={totalElapsedTime => [timerState.remainingTime - totalElapsedTime > 0]}
        >
          {({ elapsedTime }) =>
            renderTime("sec", getTimeSeconds(elapsedTime))
          }
        </CountdownCircleTimer>
      </div>

    </>
  );
}
