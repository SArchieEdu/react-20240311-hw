import { Outlet } from "react-router-dom";
import { Tab } from "../tab/component";

/* eslint-disable react/jsx-key */
export const Restaurant = ({ restaurant }) => {
  return (
    <div>
      <h2>{restaurant.name}</h2>
      <div>
        <Tab path="./menu">Menu</Tab>
        <Tab path="./reviews">Reviews</Tab>
      </div>
      <Outlet />
    </div>
  );
};
