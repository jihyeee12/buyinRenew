import React from 'react';
import styles from './point.module.css';

const PointTabBox = ({point, index}) => {
    console.log(index);
    return (
        <>
        {index === 0 ? <div className={styles.point}>
            <div className={styles.pointBox}>
                <div>
                    <p>사용가능포인트</p>
                    <p>{point.current_point.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}P</p>
                </div>
                <div>
                    <p>소멸예정포인트</p>
                    <p>{point.will_destroy.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}P</p>
                </div>
            </div>
            <p className={styles.pointTitle}>포인트내역</p>
            <div className={styles.pointList}>
                <table className={styles.pointTable}>
                    <tbody>
                        {point.point_usages.map(v => (
                        <tr>
                            <td>
                                <p className={styles.pointName}>{v.usage_name}</p>
                                <p className={styles.pointHotel}>{v.usage_contents}</p>
                            </td>
                            <td>
                                <p className={styles.pointUsed} style={{color: v.is_usage === "true" ? "#FF5F5F" : "#477696"}}>{v.is_usage === "true" ? "-" : "+"} {v.point_value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}P</p>
                                <p className={styles.pointDate}>{v.point_date.split(" ")[0]}</p>
                            </td>
                        </tr>
                        ))}
                        </tbody>
                </table>
            </div>
        </div>: index === 1 ?<div className={styles.coupon}>
            <p className={styles.couponTitle}>쿠폰내역</p>
            <div className={styles.couponList}>
                <table className={styles.couponTable}>
                    <tbody>
                        {point.map(coupon => (
                        <tr>
                            <td>
                                <p className={styles.couponName}>{coupon.coupon_name}</p>
                                <p className={styles.couponDate}>{coupon.valid_date.split(" ")[0]}</p>
                            </td>
                            <td>
                                <p className={styles.couponPercent}>{coupon.is_percent === "true"? coupon.coupon_charge + "%" : coupon.coupon_charge.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') +"원"}</p>
                            </td>
                        </tr>
                        ))}
                        
                    </tbody>
                </table>
            </div>
        </div>:<></>}
            
        </>
    );
};

export default PointTabBox;