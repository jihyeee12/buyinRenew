import React from 'react';
import styles from './businessBox.module.css';

const BusinessBox = ({roomData}) => {
    console.log(roomData);
    // return (
    //     <div className={styles.businessBox}>
    //         {roomData.can_reserve_lodge === true ? <>
    //         <div>
    //             <p className={styles.businessTitle}>기업숙박</p>
    //             <p className={styles.businessTime}>{roomData.lodge_begin}부터</p>
    //         </div>
    //         <div className={styles.right}>
    //             {roomData.business_dc_rate > 0 && <p><span className={styles.businessRate}>{roomData.business_dc_rate}%</span><span className={styles.businessListPrice}>{roomData.business_list_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</span></p>}
    //             <p className={styles.businessSalePrcie}><span className={styles.hotelPrice}>{roomData.business_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>원</p>
    //         </div>
    //         </>:<>
    //         <div>
    //             <p className={styles.businessTitle}>기업숙박</p>
    //         </div>
    //         <div className={styles.right}>
    //             <p className={styles.businessSalePrcie}>예약마감</p>
    //         </div>
    //         </>}
            
    //     </div>
    // );
};

export default BusinessBox;