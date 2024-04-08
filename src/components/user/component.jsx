import { useSelector } from "react-redux";

export const User = ({ userId }) => {
  const user = useSelector((state) => state.user.entities[userId]);
  return <div>{user.name}</div>;
};
