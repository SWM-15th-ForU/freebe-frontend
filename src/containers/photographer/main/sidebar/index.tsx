"use client";

import { useState } from "react";
import MenuList from "./menu-list";
import { menuStyles } from "./sidebar.css";
import ControlSidebar from "./control";

const PhotographerSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleClickControl() {
    setIsOpen((prev) => {
      return !prev;
    });
  }

  return (
    <div className={isOpen ? menuStyles.container : menuStyles.closedContainer}>
      <ControlSidebar onClick={handleClickControl} opened={isOpen} />
      {isOpen && <MenuList />}
    </div>
  );
};

export default PhotographerSidebar;
