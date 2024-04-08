import { UserButtons } from "../user-butons/component";
import { ThemeToggle } from "../theme-toggle/component";

export const Header = () => {
  return (
    <header>
      <ThemeToggle />
      <UserButtons />
    </header>
  );
};
