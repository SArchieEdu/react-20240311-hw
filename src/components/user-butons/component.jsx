import { useCurrentUser } from "../../contexts/user";
import { Button } from "../button/component";

export const UserButtons = () => {
  const { user, login, logout } = useCurrentUser();

  const isAuthorized = !!user;

  return (
    <div>
      {!!user && <span>{user}</span>}
      <Button onClick={() => (isAuthorized ? logout() : login("Artem"))}>
        {isAuthorized ? "logout" : "login"}
      </Button>
    </div>
  );
};
