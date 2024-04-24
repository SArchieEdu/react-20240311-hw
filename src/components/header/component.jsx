import { UserButtons } from "../user-butons/component";
import { ThemeToggle } from "../theme-toggle/component";
import { Link } from "react-router-dom";
import { Button } from "../button/component";
import { createPortal } from "react-dom";
import { useState } from "react";
import { Popover } from "../popover/component";
import { useRef } from "react";
import { useCallback } from "react";
import { CartContainer } from "../cart/container";

export const Header = () => {
  const buttonRef = useRef();
  const [cartPosition, setCartPosition] = useState();
  const container = document.getElementById("modal-container");

  const openCart = () => {
    const { x, y, height, width } = buttonRef.current.getBoundingClientRect();
    setCartPosition({ x: x + width, y: y + height });
  };

  const onRender = useCallback((element) => console.log(element), []);

  return (
    <header ref={onRender}>
      <Link to="/">Home</Link>
      <Link to="/restaurants">Restaurants</Link>
      <ThemeToggle />
      <UserButtons />
      <Button ref={buttonRef} onClick={openCart}>
        Cart
      </Button>
      {cartPosition &&
        container &&
        createPortal(
          <Popover {...cartPosition} onClose={() => setCartPosition(null)}>
            <CartContainer />
          </Popover>,
          container
        )}
    </header>
  );
};
