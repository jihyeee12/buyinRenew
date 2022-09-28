import React from 'react';
import Banner from '../../../banner/banner';
import SideMenu from '../sideMenu/sideMenu';
import styles from './point.module.css';

const Point = (props) => {

    return(
        <>
        <Banner name={"마이페이지"}/>
        <div className="mypage">
            <SideMenu type={'my'}/>
            <div className="pageBox">
                <section className="reservation">
                    <ul className="tabMenu">
                        <li className="selectTab">포인트</li>
                        <li>쿠폰</li>
                    </ul>
                    <div className="tabContent">
                        <div className={styles.point}>
                            <div className={styles.pointBox}>
                                <div>
                                    <p>사용가능포인트</p>
                                    <p>300,000P</p>
                                </div>
                                <div>
                                    <p>소멸예정포인트</p>
                                    <p>0P</p>
                                </div>
                            </div>
                            <p className={styles.pointTitle}>포인트내역</p>
                            <div className={styles.pointList}>
                                <table className={styles.pointTable}>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <p className={styles.pointName}>숙소 예약 사용</p>
                                                <p className={styles.pointHotel}>평택 이끌림 클래식 호텔 / vip</p>
                                            </td>
                                            <td>
                                                <p className={styles.pointUsed}>-300P</p>
                                                <p className={styles.pointDate}>2022.01.01</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p className={styles.pointName}>숙소 예약 사용</p>
                                                <p className={styles.pointHotel}>평택 이끌림 클래식 호텔 / vip</p>
                                            </td>
                                            <td>
                                                <p className={styles.pointUsed}>-300P</p>
                                                <p className={styles.pointDate}>2022.01.01</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className={styles.coupon}>
                            <p className={styles.couponTitle}>쿠폰내역</p>
                            <div className={styles.couponList}>
                                <table className={styles.couponTable}>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <p className={styles.couponName}>회원가입 감사쿠폰</p>
                                                <p className={styles.couponDate}>2022.01.01 ~ 2023.01.01</p>
                                            </td>
                                            <td>
                                                <p className={styles.couponPercent}>10%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p className={styles.couponName}>회원가입 감사쿠폰</p>
                                                <p className={styles.couponDate}>2022.01.01 ~ 2023.01.01</p>
                                            </td>
                                            <td>
                                                <p className={styles.couponPercent}>10%</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        </>
    )

};

export default Point;