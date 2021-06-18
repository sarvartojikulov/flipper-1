import React, {FC} from 'react';
import styles from './NavBar.module.scss'

const NavBar: FC = props => {
    return (
        <div className={styles.wrapper}>
            <span className="text-xl font-semibold">
            Your Decks

            </span>

            <svg width="29" height="17" viewBox="0 0 29 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 1H29M0 8.5H29M0 16H29" stroke="#1D2228" strokeWidth="2"/>
            </svg>

        </div>
            // <div className="h-14 px-6 flex justify-between items-center">
            //     <span className="text-xl font-semibold">
            //     Your Decks

            //     </span>

            //     <svg width="29" height="17" viewBox="0 0 29 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            //         <path d="M0 1H29M0 8.5H29M0 16H29" stroke="#1D2228" stroke-width="2"/>
            //     </svg>

            // </div>
    );
};


export default NavBar;