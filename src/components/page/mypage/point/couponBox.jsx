import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Get from '../../../../service/api/url/Get';
import styles from './point.module.css';

const CouponBox = () => {
    const [coupon, setCoupon] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
      
    const fetchCoupon = async () => {

        Get.getCoupon()
        .then(function (response) {
            setCoupon(response);
        })
        .catch(error => {
            setError(error);
        })
        setLoading(false);
        };
        fetchCoupon();
    
    }, []);
    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!coupon) return null;
    
    console.log(coupon);
    return (
        <div className={styles.coupon}>
            <p className={styles.couponTitle}>쿠폰내역</p>
            <div className={styles.couponList}>
                <table className={styles.couponTable}>
                    <tbody>
                        {coupon.map(coupon => (
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
        </div>
    );
};

export default CouponBox;