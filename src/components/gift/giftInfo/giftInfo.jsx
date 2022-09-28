import React from 'react';
import { useState } from 'react';
import styles from './giftInfo.module.css';

const GiftInfo = (props) => {
    const [visible, setVisible] = useState(false);

    return(
        <>
        <div className={styles.giftInfoBox}>
            {/* 보낸선물 상세보기일때 */}
            <div className={styles.giftInfo}>
                <p className={styles.title}>선물정보</p>
                <table className={styles.receiveTable}>
                    <tbody>
                        <tr>
                            <td>받는분</td>
                            <td>ㅇㅇㅇ</td>
                        </tr>
                        <tr>
                            <td>받는분번호</td>
                            <td>010-0000-0000</td>
                        </tr>
                        <tr>
                            <td>유효기간</td>
                            <td>2022.01.01</td>
                        </tr>
                        <tr>
                            <td>선물상태</td>
                            <td>
                                <button className={styles.cancelBtn} onClick={() => {setVisible(!visible)}} type='button'>선물취소</button>
                                <span className={visible? (styles.complateState) : (styles.giftState)} >{visible ? "사용완료" : "사용전"}</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={styles.perchaseInfo}>
                <p className={styles.title}>구매정보</p>
                <table className={styles.perchaseTable}>
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
                            <td className={styles.totalPrice}>0원</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        
        {/* 받은선물 상세보기일때 */}
        {/* <div className={styles.giftInfoBox}>
            <div className={styles.giftInfo}>
                <p className={styles.title}>선물정보</p>
                <table className={styles.receiveTable}>
                    <tbody>
                        <tr>
                            <td>받는분</td>
                            <td>ㅇㅇㅇ</td>
                        </tr>
                        <tr>
                            <td>선물금액</td>
                            <td className={styles.giftPrice}>0원</td>
                        </tr>
                        <tr>
                            <td>유효기간</td>
                            <td>2022.01.01</td>
                        </tr>
                        <tr>
                            <td>사용처</td>
                            <td>온라인(전용앱, 전용 홈페이지)</td>
                        </tr>
                        <tr>
                            <td>선물상태</td>
                            <td>
                                <button className={styles.cancelBtn} onClick={() => {setVisible(!visible)}} type='button'>선물취소</button>
                                <span className={visible? (styles.complateState) : (styles.giftState)} >{visible ? "사용완료" : "사용전"}</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div> */}
        </>
    )
}

export default GiftInfo;