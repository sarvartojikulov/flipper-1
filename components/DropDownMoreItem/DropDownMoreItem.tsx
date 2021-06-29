import React, {FC} from "react";
import styles from "./DropDownMoreItem.module.scss";

interface DropDownMoreItemProps {
	text: string,
	onClickHandle: () => void
}

const DropDownMoreItem: FC<DropDownMoreItemProps> = ({text, children}) => {
  return (
    <div className={styles.main}>
		    {children}
      <span>{text}</span>
    </div>
  );
};

export default DropDownMoreItem;
