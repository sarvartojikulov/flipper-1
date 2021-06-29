import React, { useEffect } from "react";
import { useState } from "react";
import { FC } from "react";
import styles from "./DropDownMore.module.scss";
import DropDownMoreItem from "../DropDownMoreItem/DropDownMoreItem";
import PencilSVG from "../../icons/PencilSVG";
import ManageAccessSvg from "../../icons/ManageAccessSVG";
import PinSVG from "../../icons/PinSVG";
import DeleteSVG from "../../icons/DeleteSVG";

interface DropDownMoreProps {
  closePanel?: () => void;
  dataShowMore?: boolean;
}

const DropDownMore: FC<DropDownMoreProps> = ({ closePanel, dataShowMore }) => {
  const [close, setClose] = useState<boolean>(false);


  return (
    <div>
      <div
        className={styles.wrapper}
        onClick={() => {
          closePanel();
        }}
      ></div>

      <div className={styles.body} data-showmore={dataShowMore || close}>
        <DropDownMoreItem text="Edit" onClickHandle={() => {}}>
          <PencilSVG />
        </DropDownMoreItem>
        <DropDownMoreItem text="Manage Access" onClickHandle={() => {}}>
          <ManageAccessSvg />
        </DropDownMoreItem>
        <DropDownMoreItem text="Pin" onClickHandle={() => {}}>
          <PinSVG />
        </DropDownMoreItem>
        <DropDownMoreItem text="Delete" onClickHandle={() => {}}>
          <DeleteSVG />
        </DropDownMoreItem>
      </div>
    </div>
  );
};

export default DropDownMore;
