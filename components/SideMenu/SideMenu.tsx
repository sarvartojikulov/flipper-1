import React, {FC} from "react";
import styles from "./SideMenu.module.scss"
import { useState } from "react";
import BurgerSVG from "../../icons/BurgerSVG";
<<<<<<< HEAD

const SideMenu: FC = () => {

	const [showMenu, setShowMenu] = useState<boolean>(false);

	return (
		<div>
			<BurgerSVG onClick={() => setShowMenu(!showMenu)} />

			{showMenu && (<div className={styles.hideMenu} onClick={() => setShowMenu(false)}></div>)}


			{showMenu && (<div className={styles.menuBody}></div>)}



		</div>
	)
}


export default SideMenu;
=======
import SideMenuItem from "../SideMenuItem/SideMenuItem";
import ProfileSVG from "../../icons/ProfileSVG";
import HomeSVG from "../../icons/HomeSVG";
import SettingsSVG from "../../icons/SettingsSVG";
import { CSSTransition } from "react-transition-group"

const SideMenu: FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);


   let animations = {
    enter: styles.sideMenuEnter,
    enterActive: styles.sideMenuEnterActive,
    exit: styles.sideMenuExit,
    exitActive: styles.sideMenuExitActive
}

 let animationsMask = {
    enter: styles.maskEnter,
    enterActive: styles.maskEnterActive,
    exit: styles.maskExit,
    exitActive: styles.maskExitActive
}

  return (
    <div>
      <BurgerSVG onClick={() => setShowMenu(!showMenu)} />


      <CSSTransition in={showMenu} timeout={300} unmountOnExit classNames={{...animationsMask}}>
        <div
          className={styles.hideMenu}
          onClick={() => setShowMenu(false)}
        ></div>

      </CSSTransition>

      <CSSTransition in={showMenu} timeout={300} unmountOnExit classNames={{...animations}}>
        <div className={styles.menuBody}>
          <div className={styles.menuHeader}>
            <div className={styles.avatar}></div>
            <span>Hey, sw_derek</span>
          </div>
          <svg
            width="268"
            height="2"
            viewBox="0 0 268 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L267 1"
              stroke="#A3A3A3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <SideMenuItem text="Profile">
            <ProfileSVG />
          </SideMenuItem>
          <SideMenuItem text="Home">
            <HomeSVG />
          </SideMenuItem>
          <SideMenuItem text="Settings">
            <SettingsSVG />
          </SideMenuItem>
        </div>


      </CSSTransition>
    </div>
  );
};

export default SideMenu;
>>>>>>> ef0f20d... feat: add transitions for sidemenu, refactor some code.
