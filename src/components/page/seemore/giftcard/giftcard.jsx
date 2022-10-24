import React from 'react';
import styles from './giftcard.module.css'
import { useNavigate } from 'react-router-dom';

const Giftcard = (props) => {
    const navigate = useNavigate();

    const cardDetail = () => {
        navigate('/giftcardDetail');
    }

    const giftcard = [
        {cardName: "삼만원권", 
        card_img_url: "../img/icon/card1.png",
        card_price: "30000",
        card_id: "1"
        },
        {cardName: "오만원권", 
        card_img_url: "../img/icon/card1.png",
        card_price: "50000",
        card_id: "2"
        }
    ]
    

    const giftList = giftcard.map(v => (
        <div id={v.card_id} className={styles.giftcard} onClick={cardDetail}>
        <div className={styles.cardImg}>
                <img src={v.card_img_url} alt="" />
            </div>
            <div className={styles.cardTxt}>
                <p className={styles.cardName}>{v.cardName}</p>
                <p className={styles.cardPrice}>{v.card_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
            </div>
        </div>
    ))
    return(
        <>
            <div className={styles.giftcardBox}>
                <img src="..\img\icon\giftCardMain.png" alt="giftcardTitle" />
                <div className={styles.cardList}>
                    {giftList}
                </div>
            </div>
        
        </>
    )
}

export default Giftcard;