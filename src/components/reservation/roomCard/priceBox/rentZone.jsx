import React from 'react';
import styles from '../roomCard.module.css';

const RentZone = ({priceInfo}) => {
    
    return (
        <>
        {(priceInfo.rent_list_price != null && priceInfo.rent_dc_rate > 0) ? <><p className={styles.discounts}><span className={styles.discount}>{priceInfo.rent_dc_rate}% &nbsp;</span><span className={styles.discountPrice}>{priceInfo.rent_list_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</span></p>
        <p className={styles.roomPrice}>대실 <span className={styles.salePrice}>{priceInfo.rent_sale_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>원</p></>
        :((priceInfo.rent_list_price === null ? <p className={styles.roomPrice}>대실 <span className={styles.close}>예약마감</span></p>: <p className={styles.roomPrice}>대실 <span className={styles.salePrice}>{priceInfo.rent_sale_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>원</p>))}
        
        </>
    );
};

export default RentZone;