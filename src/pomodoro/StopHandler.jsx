import React, { useState } from "react";

export default function StopHandler({timerObject, setTimerObject,isTimerRunning, setIsTimerRunning})
{
    const stopClick = () => {
        setTimerObject(() => {
            return {
                ...timerObject,
                state:"stop",
                breakSeconds: timerObject.breakDuration*60,
                focusSeconds: timerObject.focusDuration*60,
            }  
        })
        setIsTimerRunning(false);
    }
    if(timerObject.state != "stop")
    {
        return(
        
            <button
                  type="button"
                  className="btn btn-secondary"
                  title="Stop the session"
                  onClick={stopClick}
                >
                  <span className="oi oi-media-stop" />
                </button>
        )
    }
    else
    {
        return(
        
            <button
                  type="button"
                  className="btn btn-secondary"
                  title="Stop the session"
                  disabled={true}
                >
                  <span className="oi oi-media-stop" />
                </button>
        )
    }
   
}