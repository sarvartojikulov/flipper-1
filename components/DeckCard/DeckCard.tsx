import React, { FC, MouseEvent, useState } from "react";
import { IDeck } from "../../types/types";
import styles from "./DeckCard.module.scss";
import DropDownMore from "../DropDownMore/DropDownMore";
import { CSSTransition } from "react-transition-group";
import MoreSVG from "../../icons/MoreSVG"
import PipeSVG from "../../icons/PipeSVG"

interface DeckCardProps {
  deck: IDeck;
}

const DeckCard: FC<DeckCardProps> = ({ deck }) => {
  const [clicked, setClicked] = useState<boolean>(false);
  const [showMore, setShowMore] = useState<boolean>(false);

  let animations = {
    enter: styles.showmorePaneEnter,
    enterActive: styles.showmorePaneEnterActive,
    exit: styles.showmorePaneExit,
    exitActive: styles.showmorePaneExitActive
}

    let moreButtonOnClickHandle = (e: React.MouseEvent<SVGSVGElement>) => {
        e.stopPropagation();
        setShowMore(!showMore);
    }

  return (
    <>
      <div className={styles.wrapper} key={deck.uid} data-clicked={clicked}>
        <div className={styles.background} onClick={() => setClicked(!clicked)}>
          {deck.deckName}
          <MoreSVG onClick={(e: React.MouseEvent<SVGSVGElement>) => moreButtonOnClickHandle(e) }/>
        </div>

        <div className={styles.clickSection}>
          <button>Browse</button>
          <PipeSVG/>

          <button>Train</button>
        </div>

        <CSSTransition in={showMore} timeout={300} unmountOnExit classNames={{...animations}}>
            <DropDownMore closePanel={() => setShowMore(false)} dataShowMore={showMore}/>

        </CSSTransition>
      </div>
    </>
  );
};

export default DeckCard;
