import React, { FC } from "react";
import styles from "./NavBar.module.scss";
import SideMenu from "../SideMenu/SideMenu";
import BurgerSVG from "../../icons/BurgerSVG";
import { useState } from "react";

const NavBar: FC = () => {
  // const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <div className={styles.wrapper}>
      <span className="text-xl font-semibold">Your Decks</span>

      {/* <BurgerSVG onClick={() => setShowMenu(!showMenu)} /> */}

      <SideMenu />
    </div>
  );
};

export default NavBar;
