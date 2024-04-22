import { NavLink } from "react-router-dom";

export const Tab = ({ children, path }) => {
  return <NavLink to={path}>{children}</NavLink>;
};
