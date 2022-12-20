import React from 'react';
import styles from './roomCard.module.css';

const BusinessCard = ({priceInfo}) => {
    // return (
    //      <div className={styles.businessBox}>
    //          <p className={styles.businessTitle}>기업회원가</p>
    //          <div className={styles.businessPriceBox}>
    //            {(priceInfo.business_list_price !== null && priceInfo.business_dc_rate > 0) ?<>
    //                  <p><span className={styles.businessRate}>{priceInfo.business_dc_rate}% </span><span className={styles.businessPrice}>{priceInfo.business_list_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</span></p>
    //                  <p className={styles.businessTxt}>기업숙박 <span className={styles.businessSalePrice}>{priceInfo.business_sale_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>원</p>
    //              </> :(priceInfo.business_list_price === null ? <>
    //              <p className={styles.businessTxt}>기업숙박 <span className={styles.close}>예약마감</span></p>
    //              </>: <p className={styles.businessTxt}>기업숙박 <span className={styles.businessSalePrice}>{priceInfo.business_list_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>원</p>)}
    //          </div>
    //      </div>
    // );
};

export default BusinessCard;