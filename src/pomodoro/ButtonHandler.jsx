import React, { useState } from "react";


export default function ButtonHandler({type,className, dataTestid, className2,timerObject, setTimerObject} )
{
    
       const incrementHandler = () => {
           if(dataTestid.includes("increase"))
           {
               if(dataTestid.includes("focus"))
               {
                    if(timerObject.focusDuration < (timerObject.focusMax))
                    {
                        timerObject.focusDuration += timerObject.focusIncrement;
                    }
               }
               else
               {
                if(timerObject.breakDuration < (timerObject.breakMax))
                    {
                        timerObject.breakDuration += timerObject.breakIncrement;
                    }
               }
           }
           else
           {
            if(dataTestid.includes("focus"))
            {
                if(timerObject.focusDuration > (timerObject.focusMin))
                    {
                        timerObject.focusDuration -= timerObject.focusIncrement;
                    }
                    
            }
            else
            {
                if(timerObject.breakDuration > (timerObject.breakMin))
                    {
                        timerObject.breakDuration -= timerObject.breakIncrement;
                    }
            }
           }
           setTimerObject(() => {
            return {
              ...timerObject,
              focusSeconds: timerObject.focusDuration*60,
              breakSeconds: timerObject.breakDuration*60,
            };
          });
          // setTimerObject({...timerObject});
       }
       if(timerObject.state == "stop")
       {
        return(
            <button
            type={type}
            className={className}
            data-testid={dataTestid}
            onClick={incrementHandler}
          >
           <span className={className2} />
          </button>
        )
       }
       else
       {
        return(
            <button
            type={type}
            className={className}
            data-testid={dataTestid}
           disabled={true}
          >
           <span className={className2} />
          </button>
        )
       }
        
}