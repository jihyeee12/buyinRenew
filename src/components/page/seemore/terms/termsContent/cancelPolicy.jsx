import React from 'react';
import styles from '../../terms/terms.module.css';
const CancelPolicy = () => {
    return (
        <div>
            <h3>취소규정</h3>
            <p className={styles.contentTxt}>
                * 숙박 및 대실 예약완료 후 10분 이내 당일취소 및 변경 가능합니다.</p>
                
                <div className={styles.refund}>
                <p className={styles.standard}>* 숙박 환불기준</p>
                <table className={styles.refundTable}>
                    <thead>
                    <tr className={styles.refundTitle}>
                        <th>유형</th>
                        <th>환불기준</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>체크인 10-9일전</td>
                            <td>총 결제금액 중 100% 환불</td>
                        </tr>
                        <tr>
                            <td>체크인 8-7일전</td>
                            <td>총 결제금액 중 70% 환불</td>
                        </tr>
                        <tr>
                            <td>체크인 6-5일전</td>
                            <td>총 결제금액 중 50% 환불</td>
                        </tr>
                        <tr>
                            <td>체크인 4-3일전</td>
                            <td>총 결제금액 중 30% 환불</td>
                        </tr>
                        <tr>
                            <td>체크인 2-1일전</td>
                            <td>총 결제금액 중 10% 환불</td>
                        </tr>
                        <tr>
                            <td>당일 취소 및 노쇼</td>
                            <td>환불불가</td>
                        </tr>
                    </tbody>
                </table>
                </div>
                <div className={styles.refund}>
                    <p className={styles.standard}>* 대실 환불기준</p>
                <table className={styles.refundTable}>
                    <thead>
                        <tr className={styles.refundTitle}>
                            <th>유형</th>
                            <th>환불기준</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>체크인 1일전</td>
                            <td>무료 취소 가능</td>
                        </tr>
                        <tr>
                            <td>당일 취소 및 노쇼</td>
                            <td>환불 불가</td>
                        </tr>
                    </tbody>
                </table>
                </div>
                <br/>
        </div>
    );
};

export default CancelPolicy;