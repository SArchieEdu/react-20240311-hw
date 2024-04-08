import { Button } from "../button/component";

export const Counter = ({ value, onChange, min = 0, max = 5 }) => {
  return (
    <div>
      <Button onClick={() => onChange(value - 1)} disabled={value <= min}>
        -
      </Button>
      {value}
      <Button onClick={() => onChange(value + 1)} disabled={value >= max}>
        +
      </Button>
    </div>
  );
};
