import React from 'react';
import styles from './payresult.module.css';
import { useNavigate } from 'react-router-dom';

const Payresult = () => {
    const navigate = useNavigate();

    const linkMain = () =>{
        navigate('/');
    }

    return(
        <>
        <div className={styles.resultBox}>
            <div className={styles.resultMessage}>
                <img src="/img/icon/complete.png" alt="completeIcon" />
                <h4>숙소 예약이 완료되었습니다.</h4>
                <p>예약내역은 [마이페이지 - 예약내역]에서 확인하실 수 있습니다.</p>
            </div>
            <div className={styles.reservationInfo}>
                <h4>이끌림호텔 충장점</h4>
                <p>예약일 : 2022.01.01</p>
                <p>주문번호 : 00000000</p>
            </div>
            <div className={styles.hotelBox}>
                <div className={styles.hotelInfo}>
                    <div className={styles.roomInfo}>
                        <img src="/img/roomImg/roomPrice.png" alt="roomprice" />
                        <div className={styles.roomName}>
                            <h4>스탠다드</h4>
                            <p>예약금액</p>
                            <p>0원</p>
                        </div>
                    </div>
                    <table className={styles.totalpriceTable}>
                        <tbody>
                            <tr>
                                <td>체크인</td>
                                <td>2022.01.01(토) 18:00</td>
                            </tr>
                            <tr>
                                <td>체크아웃</td>
                                <td>2022.01.02(일) 12:00</td>
                            </tr>
                            <tr>
                                <td>객실옵션 (+0)</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>어메니티 옵션(+0)</td>
                                <td>-</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={styles.hotelInfo}>
                    <div className={styles.roomInfo}>
                        <img src="/img/roomImg/roomPrice.png" alt="roomprice" />
                        <div className={styles.roomName}>
                            <h4>스탠다드</h4>
                            <p>예약금액</p>
                            <p>0원</p>
                        </div>
                    </div>
                    <table className={styles.totalpriceTable}>
                        <tbody>
                            <tr>
                                <td>체크인</td>
                                <td>2022.01.01(토) 18:00</td>
                            </tr>
                            <tr>
                                <td>체크아웃</td>
                                <td>2022.01.02(일) 12:00</td>
                            </tr>
                            <tr>
                                <td>객실옵션 (+0)</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>어메니티 옵션(+0)</td>
                                <td>-</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className={styles.userInfo}>
                <h4>예약자정보</h4>
                <table className={styles.userTable}>
                    <tbody>
                        <tr>
                            <td>성명</td>
                            <td>김바이</td>
                        </tr>
                        <tr>
                            <td>연락처</td>
                            <td>010-0150-1051</td>
                        </tr>
                        <tr>
                            <td>이메일</td>
                            <td>buyin123@naver.com</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={styles.priceInfo}>
                <h4>금액정보</h4>
                <table className={styles.priceTable}>
                    <tbody>
                        <tr>
                            <td>예약금액</td>
                            <td>0원</td>
                        </tr>
                        <tr>
                            <td>바이룸사용</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>포인트사용</td>
                            <td>-0원</td>
                        </tr>
                        <tr>
                            <td>쿠폰사용</td>
                            <td>-0원</td>
                        </tr>
                        <tr>
                            <td>총 결제금액</td>
                            <td>0원</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div className={styles.resultBtn}>
            <button type='button' className={styles.reservation}>예약내역확인</button>
            <button type='button' className={styles.main} onClick={linkMain}>메인으로</button>
        </div>
        </>
    )
};

export default Payresult;