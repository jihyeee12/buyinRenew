import React from 'react';
import styles from './banner.module.css';

const Banner = ({name}) => (
    <div className={styles.banner}>
        <p className={styles.bannerTxt}>{name}</p>
    </div>    
    );

export default Banner;