import React, { FC, MouseEvent, useState } from 'react';
import {IDeck} from '../../types/types';
import styles from './DeckCard.module.scss'
import DropDownMore from '../DropDownMore/DropDownMore'

interface DeckCardProps{
    deck: IDeck;
}

const DeckCard: FC<DeckCardProps>= ({deck}) => {


    const [clicked, setClicked] = useState<boolean>(false);
    

    const MoreButton: FC = ({children}) => {
        const [showMore, setShowMore] = useState<boolean>(false);

        return(
            <>
                <svg onClick={ (e: MouseEvent<SVGSVGElement>) => {e.stopPropagation(); setShowMore(!showMore) }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5V5.01V5ZM12 12V12.01V12ZM12 19V19.01V19ZM12 6C11.7348 6 11.4804 5.89464 11.2929 5.70711C11.1054 5.51957 11 5.26522 11 5C11 4.73478 11.1054 4.48043 11.2929 4.29289C11.4804 4.10536 11.7348 4 12 4C12.2652 4 12.5196 4.10536 12.7071 4.29289C12.8946 4.48043 13 4.73478 13 5C13 5.26522 12.8946 5.51957 12.7071 5.70711C12.5196 5.89464 12.2652 6 12 6ZM12 13C11.7348 13 11.4804 12.8946 11.2929 12.7071C11.1054 12.5196 11 12.2652 11 12C11 11.7348 11.1054 11.4804 11.2929 11.2929C11.4804 11.1054 11.7348 11 12 11C12.2652 11 12.5196 11.1054 12.7071 11.2929C12.8946 11.4804 13 11.7348 13 12C13 12.2652 12.8946 12.5196 12.7071 12.7071C12.5196 12.8946 12.2652 13 12 13ZM12 20C11.7348 20 11.4804 19.8946 11.2929 19.7071C11.1054 19.5196 11 19.2652 11 19C11 18.7348 11.1054 18.4804 11.2929 18.2929C11.4804 18.1054 11.7348 18 12 18C12.2652 18 12.5196 18.1054 12.7071 18.2929C12.8946 18.4804 13 18.7348 13 19C13 19.2652 12.8946 19.5196 12.7071 19.7071C12.5196 19.8946 12.2652 20 12 20Z" stroke="#EDEDED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

                {showMore && children}

            </>
        )
    }

    

    return (
        <div className={styles.wrapper} key={deck.uid}  data-clicked={clicked}>
            <div className={styles.background} onClick={() => setClicked(!clicked)}>
                {deck.deckName}
                
                <MoreButton>
                    <DropDownMore></DropDownMore>
                </MoreButton>

            </div>

            <div className={styles.clickSection}>
                <button>
                    Browse
                </button>
                <svg width="2" height="37" viewBox="0 0 2 37" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 0V37" stroke="#EBEBEB"/>
</svg>

                    <button>
                        Train
                    </button>
            </div>
        </div>

    );
};

export default DeckCard;