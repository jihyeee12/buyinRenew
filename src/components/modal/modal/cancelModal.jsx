import React from 'react';
import styles from '../modal.module.css';

const CancelModal = () => {
    return (
        <div className={styles.cancelBox}>
            <ul className={styles.cancelList}>
                <li>숙박 및 대실 완료 후 10분 이내 당일취소 및 변경 가능합니다.</li>
                <li>숙박 환불기준</li>
                <table className={styles.cancelTable}>
                    <tbody>
                        <tr>
                            <td>유형</td>
                            <td>환불기준</td>
                        </tr>
                        <tr>
                            <td>체크인 10일 전</td>
                            <td>총 결제금액 중 100% 환불</td>
                        </tr>
                        <tr>
                            <td>체크인 9-7일 전</td>
                            <td>총 결제금액 중 70% 환불</td>
                        </tr>
                        <tr>
                            <td>체크인 6-5일 전</td>
                            <td>총 결제금액 중 50% 환불</td>
                        </tr>
                        <tr>
                            <td>체크인 4-3일 전</td>
                            <td>총 결제금액 중 30% 환불</td>
                        </tr>
                        <tr>
                            <td>체크인 2-1일 전</td>
                            <td>총 결제금액 중 10% 환불</td>
                        </tr>
                        <tr>
                            <td>당일취소 및 노쇼</td>
                            <td>환불불가</td>
                        </tr>
                    </tbody>
                </table>
                
                <li>대실 환불기준</li>
                <table className={styles.cancelTable}>
                    <tbody>
                        <tr>
                            <td>유형</td>
                            <td>환불기준</td>
                        </tr>
                        <tr>
                            <td>체크인 1일 전</td>
                            <td>무료취소 가능</td>
                        </tr>
                        <tr>
                            <td>당일취소 및 노쇼</td>
                            <td>환불 불가</td>
                        </tr>
                    </tbody>
                </table>
            </ul>
        </div>
    );
};

export default CancelModal;