import React, { useState } from "react";
import classNames from "../utils/class-names";
import useInterval from "../utils/useInterval";
import ButtonHandler from "./ButtonHandler";
import TimerSection from "./TimerSection";
import { minutesToDuration } from "../utils/duration";
import { secondsToDuration } from "../utils/duration";
import StopHandler from "./StopHandler";
function Pomodoro() {
  // Timer starts out paused
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timerObject, setTimerObject] = useState({
    focusDuration: 25,
    breakDuration: 5,
    focusMax: 60,
    focusMin: 5,
    focusIncrement: 5,
    focusSeconds: 25 * 60,
    breakMax: 15,
    breakMin: 1,
    breakIncrement: 1,
    breakSeconds: 5 * 60,
    state: "stop",
  });
  useInterval(
    () => {
      setTimerObject(() => {
        if (timerObject.state === "focus") {
          if (timerObject.focusSeconds > 0) {
            return {
              ...timerObject,
              focusSeconds: timerObject.focusSeconds - 1,
            };
          } else {
            new Audio(`https://bigsoundbank.com/UPLOAD/mp3/1482.mp3`).play();
            return {
              ...timerObject,
              state: "break",
            };
          }
        } else {
          if (timerObject.breakSeconds > 0) {
            return {
              ...timerObject,
              breakSeconds: timerObject.breakSeconds - 1,
            };
          } else {
            new Audio(`https://bigsoundbank.com/UPLOAD/mp3/1482.mp3`).play();
            return {
              ...timerObject,
              state: "focus",
              focusSeconds: timerObject.focusDuration * 60,
              breakSeconds: timerObject.breakDuration * 60,
            };
          }
        }
      });
      //console.log(secondsToDuration(timerObject.focusSeconds));
      // ToDo: Implement what should happen when the timer is running
    },
    isTimerRunning ? 1000 : null
  );

  function playPause() {
    setIsTimerRunning((prevState) => !prevState);
    if (timerObject.state === "stop") {
      setTimerObject(() => {
        return {
          ...timerObject,
          state: "focus",
        };
      });
    }
    // } else {
    //   setTimerObject(() => {
    //     return {
    //       ...timerObject,
    //       state: "stop",
    //     };
    //   });
    // }
  }

  return (
    <div className="pomodoro">
      <div className="row">
        <div className="col">
          <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-focus">
              {/* TODO: Update this text to display the current focus session duration */}
              Focus Duration: {minutesToDuration(timerObject.focusDuration)}
            </span>
            <div className="input-group-append">
              {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
              <ButtonHandler
                type="button"
                className="btn btn-secondary"
                dataTestid="decrease-focus"
                className2="oi oi-minus"
                timerObject={timerObject}
                setTimerObject={setTimerObject}
              />
              {/* TODO: Implement increasing focus duration  and disable during a focus or break session */}
              <ButtonHandler
                type="button"
                className="btn btn-secondary"
                dataTestid="increase-focus"
                className2="oi oi-plus"
                timerObject={timerObject}
                setTimerObject={setTimerObject}
              />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="float-right">
            <div className="input-group input-group-lg mb-2">
              <span className="input-group-text" data-testid="duration-break">
                {/* TODO: Update this text to display the current break session duration */}
                Break Duration: {minutesToDuration(timerObject.breakDuration)}
              </span>
              <div className="input-group-append">
                {/* TODO: Implement decreasing break duration and disable during a focus or break session*/}
                <ButtonHandler
                  type="button"
                  className="btn btn-secondary"
                  dataTestid="decrease-break"
                  className2="oi oi-minus"
                  timerObject={timerObject}
                  setTimerObject={setTimerObject}
                />
                {/* TODO: Implement increasing break duration and disable during a focus or break session*/}
                <ButtonHandler
                  type="button"
                  className="btn btn-secondary"
                  dataTestid="increase-break"
                  className2="oi oi-plus"
                  timerObject={timerObject}
                  setTimerObject={setTimerObject}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div
            className="btn-group btn-group-lg mb-2"
            role="group"
            aria-label="Timer controls"
          >
            <button
              type="button"
              className="btn btn-primary"
              data-testid="play-pause"
              title="Start or pause timer"
              onClick={playPause}
            >
              <span
                className={classNames({
                  oi: true,
                  "oi-media-play": !isTimerRunning,
                  "oi-media-pause": isTimerRunning,
                })}
              />
            </button>

            {/* TODO: Implement stopping the current focus or break session and disable when there is no active session */}
            {/* <button
              type="button"
              className="btn btn-secondary"
              title="Stop the session"
            >
              <span className="oi oi-media-stop" />
            </button> */}
            <StopHandler
              timerObject={timerObject}
              setTimerObject={setTimerObject}
              setIsTimerRunning={setIsTimerRunning}
              isTimerRunning={isTimerRunning}
            />
          </div>
          <TimerSection
            timerObject={timerObject}
            setTimerObject={setTimerObject}
            isTimerRunning={isTimerRunning}
          />
        </div>
      </div>
    </div>
  );
}

export default Pomodoro;
