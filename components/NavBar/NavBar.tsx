import React, { FC } from "react";
import styles from "./NavBar.module.scss";
import SideMenu from "../SideMenu/SideMenu";

const NavBar: FC = () => {

  return (
    <div className={styles.wrapper}>
      <span className="text-xl font-semibold">Your Decks</span>


      <SideMenu />
    </div>
  );
};

export default NavBar;
