import React from 'react';
import { Link } from 'react-router-dom';
import BusinessCard from '../../../reservation/roomCard/businessCard';
import styles from './recommandHotel.module.css';

const RecommandHotel = ({state}) => {
    
    return (
        <>
            {state.map(v => (
                
                <div className={styles.recommandItem} key={v.lodgement_id}>
                    <Link className='link' to={`/lodgement/${v.lodgement_id}`}>
                    <div className={styles.recommandBox}>
                        <img className={styles.lodgement_img} src={v.lodgement_img_url} alt="lodgement_img" />
                        <div className={styles.priceInfoBox}>
                            <p className={styles.lodgement_name}>{v.lodgement_name}</p>
                            <div className={styles.infoBox}>
                                <div className={styles.countBox}>
                                    <p className={styles.Count}>관심 {v.wish_num}</p>
                                    <p className={styles.Count}>리뷰 {v.review_num}</p>
                                </div>
                                <div className={styles.priceBox}>
                                    {v.rent_list_price !== null ? <div className={styles.rentBox}>
                                        <p className={styles.dcRate}>{v.rent_dc_rate}%&nbsp; <span className={styles.priceTxt}>{String(v.rent_list_price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</span></p>
                                        <p className={styles.salePrice}>대실 <span className={styles.roomSalePrice}>{String(v.rent_sale_price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>원</p>
                                    </div>
                                    :<><br/><br/></>
                                    }
                                    <div className={styles.lodgeBox}>
                                        <p className={styles.dcRate}>{v.lodge_dc_rate}%&nbsp; <span className={styles.priceTxt}>{String(v.lodge_list_price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</span></p>
                                        <p className={styles.salePrice}>숙박 <span className={styles.roomSalePrice}>{String(v.lodge_sale_price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>원</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Link>
                    <BusinessCard/>
                </div>
                
            ))}
        </>
    );
};

export default RecommandHotel;