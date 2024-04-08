import { useCurrentTheme } from "../../contexts/theme";

export const Button = ({ onClick, disabled, children }) => {
  const { theme } = useCurrentTheme();
  return (
    <button onClick={onClick} disabled={disabled}>
      {theme}
      {children}
    </button>
  );
};
