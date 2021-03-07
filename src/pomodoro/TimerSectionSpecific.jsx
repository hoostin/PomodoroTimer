import React, { useState } from "react";


export default function TimerSectionSpecific({durationString,timeString,width,pause})
{   if (!pause)
    {
        return (
            <div>
                {/* TODO: This area should show only when a focus or break session is running or pauses */}
                <div className="row mb-2">
                    <div className="col">
                    {/* TODO: Update message below to include current session (Focusing or On Break) and total duration */}
                    <h2 data-testid="session-title">
                    {durationString}
                    </h2>
                    {/* TODO: Update message below to include time remaining in the current session */}
                 <p className="lead" data-testid="session-sub-title">
                 {timeString}
                </p>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col">
                <div className="progress" style={{ height: "20px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-valuenow={`${width}`} // TODO: Increase aria-valuenow as elapsed time increases
                    style={{ width: `${width}%` }} // TODO: Increase width % as elapsed time increases
                  />
                </div>
              </div>
            </div>
          </div>
        )
    }
    else{
        return (
            <div>
                {/* TODO: This area should show only when a focus or break session is running or pauses */}
                <div className="row mb-2">
                    <div className="col">
                    {/* TODO: Update message below to include current session (Focusing or On Break) and total duration */}
                    <h2 data-testid="session-title">
                    {durationString}
                    </h2>
                    {/* TODO: Update message below to include time remaining in the current session */}
                 <p className="lead" data-testid="session-sub-title">
                 {timeString}
                </p>
                <h2>PAUSED</h2>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col">
                <div className="progress" style={{ height: "20px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-valuenow="0" // TODO: Increase aria-valuenow as elapsed time increases
                    style={{ width: `${width}%` }} // TODO: Increase width % as elapsed time increases
                  />
                </div>
              </div>
            </div>
          </div>
        )
    }
  
}