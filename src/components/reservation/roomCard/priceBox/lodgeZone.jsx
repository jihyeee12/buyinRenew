import React from 'react';
import styles from '../roomCard.module.css';

const LodgeZone = ({priceInfo}) => {
    
    return (
        <>
        {(priceInfo.lodge_list_price !== null && priceInfo.lodge_dc_rate > 0) ? <>
        <p className={styles.discounts}><span className={styles.discount}>{priceInfo.lodge_dc_rate}% &nbsp;</span><span className={styles.discountPrice}>{priceInfo.lodge_list_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</span></p>
        <p className={styles.roomPrice}>숙박 <span className={styles.salePrice}>{priceInfo.lodge_sale_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>원</p>
        </> :(priceInfo.lodge_list_price === null ?<>
            <p className={styles.roomPrice}>숙박 <span className={styles.close}>예약마감</span></p>
        </> : <>
        <p className={styles.roomPrice}>숙박 <span className={styles.salePrice}>{priceInfo.lodge_sale_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>원</p>
        </>)}
        </>
    );
};

export default LodgeZone;