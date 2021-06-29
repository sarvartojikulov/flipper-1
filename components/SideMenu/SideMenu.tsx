import React, {FC} from "react";
import styles from "./SideMenu.module.scss"
import { useState } from "react";
import BurgerSVG from "../../icons/BurgerSVG";

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