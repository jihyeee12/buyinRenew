import React from 'react';
import { useState ,useEffect } from 'react';
import styles from './point.module.css';
import Banner from '../../../banner/banner';
import SideMenu from '../../../sideMenu/sideMenu';
import Get from '../../../../service/api/url/Get';

const Point = () => {
    const [index, setIndex] = useState(0);
    const tabList = [
        {id: 0, title : "포인트"},
        {id: 1, title : "쿠폰"}
    ]

    const [point, setPoint] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
      
    const fetchPoint = async () => {

        Get.getPoint(index)
        .then(function (response) {
            setPoint(response);
        })
        .catch(error => {
            setError(error);
        })
        setLoading(false);
        };
        fetchPoint();
    
    }, [index]);
    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!point) return null;
    
    console.log(point);
    console.log(index);
    return(
        <>
        <Banner name={"마이페이지"}/>
        <div className="mypage">
            <SideMenu type={'my'}/>
            <div className="pageBox">
                <section className="reservation">
                    <ul className="tabMenu">
                        {tabList.map(item => (
                            <li
                                key={item.id}
                                className={index === item.id? "selectTab": null}
                                onClick={() => setIndex(item.id)}
                            >{item.title}</li>
                        ))}
                        
                    </ul>
                    <div className="tabContent">
                        {tabList.filter(item => index === item.id).map((item) => {
                            if(item.id === 0){
                                return <div className={styles.point}>
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
                            </div>
                            } else if(item.id === 1){
                                return <div className={styles.coupon}>
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
                            </div>
                            }
                            }
                        )}
                        </div>
                </section>
            </div>
        </div>
        </>
    )

};

export default Point;