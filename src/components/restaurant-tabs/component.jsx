import { Fragment } from "react";

export const RestaurantTabs = ({ restaurantIds, renderTab }) => {
  return (
    <div>
      {restaurantIds.map((restaurantId) => (
        <Fragment key={restaurantId}>{renderTab(restaurantId)}</Fragment>
      ))}
    </div>
  );
};
