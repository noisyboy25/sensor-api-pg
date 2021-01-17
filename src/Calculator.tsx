import React, { useState } from "react";
import "./Calculator.css";

export const Calculator = () => {
  const [expression, setExpression] = useState("");

  const vibrate = () => {
    window.navigator.vibrate(10);
  };
  const numpadKeyDown = (
    event: React.TouchEvent | React.MouseEvent,
    keyCode: string
  ) => {
    event.preventDefault();
    vibrate();
    if (keyCode === "clear") {
      setExpression("");
      return;
    }
    setExpression(expression + keyCode);
  };
  const numpadKeyUp = (event: React.TouchEvent) => {
    event.preventDefault();
    vibrate();
  };

  return (
    <div className="calculator">
      <textarea value={expression} disabled></textarea>
      <div className="numpad">
        <button
          onTouchStart={(event) => numpadKeyDown(event, "7")}
          onMouseDown={(event) => numpadKeyDown(event, "7")}
          onTouchEnd={numpadKeyUp}
        >
          7
        </button>
        <button
          onTouchStart={(event) => numpadKeyDown(event, "8")}
          onMouseDown={(event) => numpadKeyDown(event, "8")}
          onTouchEnd={numpadKeyUp}
        >
          8
        </button>
        <button
          onTouchStart={(event) => numpadKeyDown(event, "9")}
          onMouseDown={(event) => numpadKeyDown(event, "9")}
          onTouchEnd={numpadKeyUp}
        >
          9
        </button>
        <button
          onTouchStart={(event) => numpadKeyDown(event, "4")}
          onMouseDown={(event) => numpadKeyDown(event, "4")}
          onTouchEnd={numpadKeyUp}
        >
          4
        </button>
        <button
          onTouchStart={(event) => numpadKeyDown(event, "5")}
          onMouseDown={(event) => numpadKeyDown(event, "5")}
          onTouchEnd={numpadKeyUp}
        >
          5
        </button>
        <button
          onTouchStart={(event) => numpadKeyDown(event, "6")}
          onMouseDown={(event) => numpadKeyDown(event, "6")}
          onTouchEnd={numpadKeyUp}
        >
          6
        </button>
        <button
          onTouchStart={(event) => numpadKeyDown(event, "1")}
          onMouseDown={(event) => numpadKeyDown(event, "1")}
          onTouchEnd={numpadKeyUp}
        >
          1
        </button>
        <button
          onTouchStart={(event) => numpadKeyDown(event, "2")}
          onMouseDown={(event) => numpadKeyDown(event, "2")}
          onTouchEnd={numpadKeyUp}
        >
          2
        </button>
        <button
          onTouchStart={(event) => numpadKeyDown(event, "3")}
          onMouseDown={(event) => numpadKeyDown(event, "3")}
          onTouchEnd={numpadKeyUp}
        >
          3
        </button>
        <button
          onTouchStart={(event) => numpadKeyDown(event, "clear")}
          onMouseDown={(event) => numpadKeyDown(event, "clear")}
          onTouchEnd={numpadKeyUp}
        >
          Clear
        </button>
        <button
          onTouchStart={(event) => numpadKeyDown(event, "0")}
          onMouseDown={(event) => numpadKeyDown(event, "0")}
          onTouchEnd={numpadKeyUp}
        >
          0
        </button>
      </div>
    </div>
  );
};
