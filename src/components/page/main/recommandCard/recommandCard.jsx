import React from 'react';
import styles from './recommandCard.module.css';

const RecommandCard = ({state}) => {
    return (
        <>
        {state.map(v => (
            <div className={styles.giftcardItem}>
                <div className={styles.giftcardBack}>
                    <img className={styles.giftcardImg} src={v.giftcard_img_url} alt="giftcardImg" />
                </div>
                <p className={styles.giftcardTitle}>[기프트카드]</p>
                <p className={styles.giftcardName}>{v.giftcard_name.split("]")[1]}</p>
                <p className={styles.giftcardPrice}>{String(v.giftcard_price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
            </div>
        ))}
        </>
        
    );
};

export default RecommandCard;