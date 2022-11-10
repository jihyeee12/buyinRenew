import React from 'react';
import styles from './recommandHotel.module.css';

const RecommandHotel = ({state}) => {
    
    return (
        <>
            {state.map(v => (
                <div className={styles.recommandItem} key={v.lodgement_id}>
                    <img className={styles.lodgement_img} src={v.lodgement_img_url} alt="lodgement_img" />
                    <p className={styles.lodgement_name}>{v.lodgement_name}</p>
                    <div className={styles.infoBox}>
                        <div className={styles.countBox}>
                            <p className={styles.Count}><span className={styles.countTitle}>관심 </span>{v.wish_num}</p>
                            <p className={styles.Count}><span className={styles.countTitle}>리뷰 </span>{v.review_num}</p>
                        </div>
                        <div className={styles.priceBox}>
                            {v.rent_list_price !== null ? <div className={styles.rentBox}>
                                <p className={styles.dcRate}>{v.rent_dc_rate}%&nbsp; <span className={styles.priceTxt}>{String(v.rent_list_price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</span></p>
                                <p className={styles.salePrice}>대실 {String(v.rent_sale_price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
                            </div>
                            :<><br/><br/></>
                            }
                            <div className={styles.lodgeBox}>
                                <p className={styles.dcRate}>{v.lodge_dc_rate}%&nbsp; <span className={styles.priceTxt}>{String(v.lodge_list_price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</span></p>
                                <p className={styles.salePrice}>숙박 {String(v.lodge_sale_price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default RecommandHotel;