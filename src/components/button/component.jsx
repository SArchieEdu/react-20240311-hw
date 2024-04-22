import { forwardRef } from "react";

export const Button = forwardRef(function Button(
  { onClick, disabled, children },
  ref
) {
  return (
    <button ref={ref} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
});
