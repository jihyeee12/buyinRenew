import React from 'react';
import styles from './roomprice.module.css';


const LodgeBox = ({roomData}) => {
    
    return (
        <div className={styles.kinds}>
            {roomData.can_reserve_lodge === true ? <>
            <div>
                <p className={styles.typeName}>숙박</p>
                <span className={styles.availTime}>{roomData.lodge_begin}부터</span>
            </div>
            <div>
                {roomData.lodge_dc_rate > 0 && <p className={styles.discountBox}><span className={styles.discount}><span className={styles.percent}>{roomData.lodge_dc_rate}%</span><span className={styles.listPrice}>{roomData.lodge_list_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</span></span></p>}
                <p className={styles.salePrice}><span className={styles.hotelSalePrice}>{roomData.lodge_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>원</p>
            </div>
            </>: <>
            <div>
                <p className={styles.typeName}>숙박</p>
                
            </div>
            <div>
                
                <p className={styles.salePrice}>예약마감</p>
            </div>
            </>}
            
        </div>
    );
};

export default LodgeBox;