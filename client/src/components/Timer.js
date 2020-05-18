import React, { useState, useEffect } from "react";
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

  const currentDate = Date.now();


  // watering-time 1 day = 86400;
  // daysDuration = 86400 / 86400 = 1

  const [timerState, setTimerState] = useState({
    stratTime: currentDate,
    endTime: currentDate + props.wateringTime * 24 * 60 * 60,
    remainingTime: props.wateringTime * 24 * 60 * 60,
    daysDuration: null
  });


  // const [stratTime, setStratTime] = useState(Date.now());
  // const [endTime, setEndtime] = useState(Date.now() + props.wateringTime * 24 * 60 * 60);
  // const [remainingTime, setRemainingTime] = useState(endTime - stratTime);
  // const [daysDuration, setDaysDuration] = useState(null);

  useEffect(() => {

    // const endTime = stratTime + props.wateringTime * 24 * 60 * 60; // use UNIX timestamp in seconds
    // const remainingTime = endTime - stratTime;
    // setRemainingTime(endTime - stratTime);
    const days = Math.ceil(timerState.remainingTime / daySeconds);  //4

    console.log("DAYS:", days, "remainingTime:", timerState.remainingTime);

    // const daysDuration = days * daySeconds;
    setTimerState({
      ...timerState,
      daysDuration: days * daySeconds //4 *  86400
    })


  }, [])


  function resetTime() {

    const currentTime = Date.now();
    // setStratTime(prev => currentTime);
    // setEndTime(prev => )

  }


  // stratTime = resetTime(); // use UNIX timestamp in seconds

  // duration={timerState.daysDuration}
  // initialRemainingTime={timerState.remainingTime}


  return (
    <>
      <button onClick={() => resetTime()}>Reset</button>
      <div className="App">
        <CountdownCircleTimer
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
