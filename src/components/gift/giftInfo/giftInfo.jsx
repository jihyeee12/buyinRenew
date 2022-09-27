import React from 'react';
import styles from './giftInfo.module.css';

const GiftInfo = (props) => {

    return(
        <div className={styles.giftInfoBox}>
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
                                <button className={styles.cancelBtn} type='button'>선물취소</button>
                                <span className={styles.giftState}>사용전</span>
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
                            <td>0원</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default GiftInfo;