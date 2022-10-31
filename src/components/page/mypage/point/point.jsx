import React from 'react';
import { useState } from 'react';
import Banner from '../../../banner/banner';
import SideMenu from '../sideMenu/sideMenu';
import styles from './point.module.css';

const Point = () => {
    const tabList = [
        {id: 0, title : "포인트"},
        {id: 1, title : "쿠폰"}
    ]
    const data = 
        {current_point: 3000,
            point_usages:[
                {
                    "point_value": 10000,
                    "point_date": "2022-05-17 10:29:53",
                    "is_usage": "false",
                    "usage_name": "회원가입 이벤트",
                    "usage_contents": "회원가입 이벤트 10,000 포인트 적립"
                },
                {
                    "point_value": 100,
                    "point_date": "2022-06-03 15:10:59",
                    "is_usage": "false",
                    "usage_name": "출석 체크",
                    "usage_contents": "1번째 출석"
                },
                {
                    "point_value": 100,
                    "point_date": "2022-06-21 15:29:42",
                    "is_usage": "false",
                    "usage_name": "출석 체크",
                    "usage_contents": "1번째 출석"
                },
                {
                    "point_value": 100,
                    "point_date": "2022-09-29 11:49:03",
                    "is_usage": "false",
                    "usage_name": "출석 체크",
                    "usage_contents": "1번째 출석"
                },
                {
                    "point_value": 10400,
                    "point_date": "2022-09-30 23:25:03",
                    "is_usage": "true",
                    "usage_name": "숙박 예약",
                    "usage_contents": "하남 이끌림비지니스호텔 "
                },
                {
                    "point_value": 3000,
                    "point_date": "2022-09-30 18:00:00",
                    "is_usage": "false",
                    "usage_name": "앰버서더 호텔 예약",
                    "usage_contents": "하남 이끌림비지니스호텔 "
                }
            ],
            will_destroy: 0
        }

        const couponData = [
                {
                    "coupon_id": 5,
                    "coupon_name": "20,000원 할인 쿠폰(평일 사용 가능)",
                    "is_percent": "false",
                    "coupon_charge": 20000,
                    "valid_date": "2022-08-19 16:49:56",
                    "is_valid": "false"
                },
                {
                    "coupon_id": 5,
                    "coupon_name": "20,000원 할인 쿠폰(평일 사용 가능)",
                    "is_percent": "true",
                    "coupon_charge": 20,
                    "valid_date": "2022-09-01 09:59:22",
                    "is_valid": "false"
                }
            ]
        
    const [index, setIndex] = useState(0);
        
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
                        {tabList.filter(item => index === item.id).map(item => {
                            if(item.id === 0){
                                return <div className={styles.point}>
                                <div className={styles.pointBox}>
                                    <div>
                                        <p>사용가능포인트</p>
                                        <p>{data.current_point.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}P</p>
                                    </div>
                                    <div>
                                        <p>소멸예정포인트</p>
                                        <p>{data.will_destroy.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}P</p>
                                    </div>
                                </div>
                                <p className={styles.pointTitle}>포인트내역</p>
                                <div className={styles.pointList}>
                                    <table className={styles.pointTable}>
                                        <tbody>
                                            {data.point_usages.map(v => (
                                            <tr>
                                                <td>
                                                    <p className={styles.pointName}>{v.usage_name}</p>
                                                    <p className={styles.pointHotel}>{v.usage_contents}</p>
                                                </td>
                                                <td>
                                                    <p className={styles.pointUsed} style={{color: v.is_usage === "true" ? "#FF5F5F" : "#477696"}}>{v.is_usage === "true" ? "-" : "+"} {v.point_value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}P</p>
                                                    <p className={styles.pointDate}>{v.point_date}</p>
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
                                            {couponData.map(coupon => (
                                            <tr>
                                                <td>
                                                    <p className={styles.couponName}>{coupon.coupon_name}</p>
                                                    <p className={styles.couponDate}>{coupon.valid_date}</p>
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