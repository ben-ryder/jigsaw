import { JProse } from "../prose/prose.js";
import { useState } from "react";
import { JButton } from "../../01-atoms/button/button.js";

export interface CounterProps {
  title: string;
  body: string;
  initialCount?: number;
}

export function JCounter(props: CounterProps) {
  const [count, setCount] = useState<number>(props.initialCount || 0);

  return (
    <div className="j-counter">
      <h3 className="j-counter__title">{props.title}</h3>
      <p className="j-counter__description">{props.body}</p>
      <div className="j-counter__counter">
        <p className="j-counter__counter-label">Current Count:</p>
        <p className="j-counter__counter-number">{count}</p>
      </div>
      <div className="j-counter__controls">
        <JButton
          className="j-counter__reset"
          onClick={() => {
            setCount(0);
          }}
          variant="destructive"
        >
          Reset
        </JButton>
        <JButton
          className="j-counter__increment"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increment
        </JButton>
      </div>
    </div>
  );
}
