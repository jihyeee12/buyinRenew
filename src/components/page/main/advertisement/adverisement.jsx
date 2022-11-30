import React from 'react';
import styles from './ad.module.css';

const Adverisement = () => {
    const adData = [
        {id: 1, title: "BUY IN HOTEL APP", img_src: "/img/roomImg/app.png"},
        {id: 2, title: "BUY IN ARA", img_src: "/img/roomImg/app.png"},
    ]
    return (
       <>
       {adData.map(ad => (
        <div className={styles.adBox} key={ad.id}>
            <h3 className={styles.adTitle}>{ad.title}</h3>
            <img className={styles.adImg} src={ad.img_src} alt="app" />
        </div>
       ))}
       </>
        
    );
};

export default Adverisement;