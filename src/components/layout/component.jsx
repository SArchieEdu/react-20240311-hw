import { Outlet } from "react-router-dom";
import { Footer } from "../footer/component";
import { Header } from "../header/component";

export const Layout = () => {
  return (
    <div>
      <div id="modal-container" />
      <div id="popover-container" />
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};
