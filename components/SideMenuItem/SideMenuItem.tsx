import React, { FC } from "react";
import styles from "./SideMenuItem.module.scss"

interface SideMenuItemProps {
  text: string;
}

const SideMenuItem: FC<SideMenuItemProps> = ({ text, children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.body}>
        {children}
        <span>{text}</span>
      </div>
      <svg
        width="261"
        height="2"
        viewBox="0 0 261 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1H260"
          stroke="#A3A3A3"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default SideMenuItem;
