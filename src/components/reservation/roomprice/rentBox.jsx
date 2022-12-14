import React from 'react';
import styles from './roomprice.module.css';

const RentBox = ({roomData}) => {
    console.log(roomData);

    return (
        <div className={styles.kinds}>
            <div>
                <p className={styles.typeName}>대실</p>
                <span className={styles.availTime}>최대 {roomData.lodge_begin}시간 이용가능</span>
            </div>
            <div>
                <p className={styles.discountBox}><span className={styles.discount}><span className={styles.percent}>50%</span><span className={styles.listPrice}>40,000원</span></span></p>
                <p className={styles.salePrice}><span className={styles.hotelSalePrice}>20,000</span>원</p>
            </div>
        </div>
    );
};

export default RentBox;