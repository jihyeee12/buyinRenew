import React from 'react';
import styles from './giftresult.module.css';
import { useNavigate } from 'react-router-dom';

const Giftresult = () => {
    const navigate = useNavigate();

    const linkMain = () =>{
        navigate('/');
    }

    return(
        <>
        <div className={styles.giftBox}>
            <div className={styles.giftComplete}>
                <img src="/img/icon/giftComplete.png" alt="gift" />
                <h4>선물이 완료되었습니다.</h4>
                <p>결제내역은 [마이페이지 - 선물함]에서 확인하실 수 있습니다.</p>
            </div>
            <div className={styles.giftCard}>
                <img src="/img/roomImg/roomPrice.png" alt="roomImg" />
                <div>
                    <p className={styles.giftcardName}>바이룸_충장 이끌림호텔(스탠다드_숙박_주말)</p>
                    <p className={styles.giftcardPrice}>30,000원</p>
                </div>
            </div>
            <div className={styles.purchaseInfo}>
                <p className={styles.title}>구매정보</p>
                <table className={styles.purchaseTable}>
                    <tbody>
                        <tr>
                            <td>구매번호</td>
                            <td>00000000</td>
                        </tr>
                        <tr>
                            <td>선물구매일</td>
                            <td>2022.01.01</td>
                        </tr>
                        <tr>
                            <td>결제수단</td>
                            <td>신용카드</td>
                        </tr>
                        <tr>
                            <td>총결제금액</td>
                            <td>30,000원</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={styles.giftInfo}>
                <div className={styles.sender}>
                    <p className={styles.title}>보내는 분</p>
                    <table className={styles.giftTable}>
                        <tbody>
                            <tr>
                                <td>이름</td>
                                <td>김바이</td>
                            </tr>
                            <tr>
                                <td>연락처</td>
                                <td>010-1111-1111</td>
                            </tr>
                            <tr>
                                <td>이메일</td>
                                <td>-</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={styles.receive}>
                    <p className={styles.title}>받는 분</p>
                    <table className={styles.giftTable}>
                        <tbody>
                            <tr>
                                <td>이름</td>
                                <td>김호텔</td>
                            </tr>
                            <tr>
                                <td>연락처</td>
                                <td>010-1111-1111</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>     
        </div>
        <div className={styles.giftBtn}>
            <button type='button' className={styles.giftboxBtn}>선물함으로</button>
            <button type='button' className={styles.mainBtn} onClick={linkMain}>메인으로</button>
        </div>
        </>
    )
};

export default Giftresult;