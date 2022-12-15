import React from 'react';
import styles from './roomprice.module.css';

const RentBox = ({roomData}) => {
    
    return (
        <div className={styles.kinds}>
            {roomData.can_reserve_rent !== false ? (<>
            <div>
                <p className={styles.typeName}>대실</p>
                <span className={styles.availTime}>최대 {roomData.lodge_begin}시간 이용가능</span>
            </div>
            <div>
                {roomData.rent_dc_rate > 0 && 
                    <p className={styles.discountBox}><span className={styles.discount}><span className={styles.percent}>{roomData.rent_dc_rate}%</span><span className={styles.listPrice}>{roomData.rent_list_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</span></span></p>
                }
                <p className={styles.salePrice}><span className={styles.hotelSalePrice}>{roomData.rent_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>원</p>
            </div>
            </>)
            :(<>
            <div>
                <p className={styles.typeName}>대실</p>
            </div>
            <div>
                
                <p className={styles.salePrice}>예약마감</p>
            </div>
            </>)}
            
        </div>
    );
};

export default RentBox;