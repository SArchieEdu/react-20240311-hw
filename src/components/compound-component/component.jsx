import { useMemo } from "react";
import { useCallback } from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const MenuContext = createContext();
const MenuGroupContext = createContext();

const useParentPath = () => {
  const parentPath = useContext(MenuGroupContext);

  return parentPath;
};

const checkIsOpen = (name, activeItem) => {
  return activeItem && activeItem.indexOf(name) !== -1;
};

const useMenu = (name) => {
  const { activeItem, setActiveItem } = useContext(MenuContext);
  const isOpened = checkIsOpen(name, activeItem);
  const toggle = useCallback(
    () => (isOpened ? setActiveItem(null) : setActiveItem(name)),
    [isOpened, name, setActiveItem]
  );

  return useMemo(() => ({ isOpened, toggle }), [isOpened, toggle]);
};

export const Menu = ({ children }) => {
  const [activeItem, setActiveItem] = useState();

  const value = useMemo(() => ({ activeItem, setActiveItem }), [activeItem]);

  return (
    <MenuContext.Provider value={value}>
      <div>{children}</div>
    </MenuContext.Provider>
  );
};

export const MenuGroup = ({ children, name }) => {
  const parentPath = useParentPath();
  const path = parentPath ? `${parentPath}.${name}` : name;
  const { isOpened, toggle } = useMenu(path);

  return (
    <div>
      <MenuGroupContext.Provider value={path}>
        <button onClick={toggle}>{name}</button>
        {isOpened && <div>{children}</div>}
      </MenuGroupContext.Provider>
    </div>
  );
};

export const MenuItem = ({ name }) => {
  return <div>{name}</div>;
};
