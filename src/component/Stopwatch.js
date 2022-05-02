import React, { useEffect, useState } from "react";

function Stopwatch() {
  const [counter, setCounter] = useState(0);
  const [stop, setStop] = useState(false);

  // stop and start button ........
  const handlestop = () => {
    setStop(!stop);
    // setStop(false);
  };

  // functionality of reset button........

  const handlreset = () => {
    setCounter(0);
    setStop(false);
  };

  useEffect(() => {
    let interval = null;
    if (stop === false) {
      interval = setTimeout(() => {
        setCounter((counter) => counter + 1);
      }, 1000);
    } else {
      clearTimeout(interval);
    }
    return () => clearTimeout(interval); //it's for component  did unmount
  });

  return (
    <>
      <div className="head">
        <h1 className="heading">Number Increment</h1>
        <div className="button-frame">
          <button className="ui labeled icon button" onClick={handlestop}>
            <i className="pause icon"></i>
            {stop ? "Resume" : "Stop"}
          </button>
          <h1>{counter}</h1>
          <button className="ui  labeled icon button" onClick={handlreset}>
            <i className="left arrow icon"></i>
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default Stopwatch;
