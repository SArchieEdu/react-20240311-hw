import { withAuthorize } from "../../hocs/with-authorize";
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

export const CounterWithAuthorizeCheck = withAuthorize({
  Authorized: Counter,
  Unauthorized: () => <div>Authorize pls</div>,
});
