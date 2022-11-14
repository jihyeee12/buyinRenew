import React from 'react';
import { useState } from 'react';
import Modal from '../../modal/modal';
import ReservationInfo from '../reservationInfo/reservationInfo';
import styles from './detailBox.module.css';

const DetailBox = ({type}) => {
    const [cancelModal, setCancelModal] = useState(false);
    
    return(
        <>
            <div className={styles.detailBox}>
                {type === "cancel" && <p className={styles.cancelState}>취소완료</p>}
                <div className={styles.hotelBox}>
                    <p className={styles.hotelName}>이끌림호텔 충장점</p>
                    <p className={styles.reservationDate}>예약일 : 2022.01.01</p>
                    <p className={styles.reservationNum}>주문번호 : 00000000</p>
                </div>
                <div className={styles.reservationBox}>
                    <ReservationInfo/>
                    <ReservationInfo/>
                </div>
                <div className={styles.userInfo}>
                    <p className={styles.title}>예약자 정보</p>
                    <table className={styles.userTable}>
                        <tbody>
                            <tr>
                                <td>성명</td>
                                <td>김바이</td>
                            </tr>
                            <tr>
                                <td>연락처</td>
                                <td>010-0000-0000</td>
                            </tr>
                            <tr>
                                <td>이메일</td>
                                <td>1111@22222</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                { type === "cancel" && <div className={styles.cancelReasonBox}>
                    <p className={styles.title}>취소사유</p>
                    <select name="cancel" id="cancelReason" className={styles.reasonBox}>
                        <option value="0">단순변심</option>
                        <option value="1">예약일 변경</option>
                        <option value="2">룸타입 변경</option>
                    </select>
                </div> }
                <div className={styles.payInfo}>
                    <p className={styles.title}>금액 정보</p>
                    <table className={styles.payTable}>
                        <tbody>
                            <tr>
                                <td>성명</td>
                                <td>김바이</td>
                            </tr>
                            <tr>
                                <td>연락처</td>
                                <td>010-0000-0000</td>
                            </tr>
                            <tr>
                                <td>이메일</td>
                                <td>1111@22222</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                 <div className={styles.cancelBox}>
                    <p className={styles.title}>금액 정보 {type !== "reservation" &&<span className={styles.cancelRegulation} onClick={()=> setCancelModal(!cancelModal)}>취소규정 〉</span>}</p>
                    {cancelModal && <Modal type={"cancel"} setCancelModal={() => setCancelModal(!cancelModal)} />}
                    <table className={styles.cancelTable}>
                        <tbody>
                            <tr>
                                <td>예약금액</td>
                                <td>90,000원</td>
                            </tr>
                            <tr>
                                <td>바이룸 사용</td>
                                <td>바이룸</td>
                            </tr>
                            <tr>
                                <td>포인트 사용</td>
                                <td>- 0원</td>
                            </tr>
                            <tr>
                                <td>쿠폰 사용</td>
                                <td>- 0원</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={styles.totalPrice}>
                    <div>
                        <p>총 결제금액</p>
                        <p>90,000원</p>
                    </div>
                    {type === "cancel" && <div className={styles.refundPrice}>
                        <p>환불금액</p>
                        <p>90,000원</p>
                    </div>}
                </div>
            </div>
        </>
    )
};

export default DetailBox;