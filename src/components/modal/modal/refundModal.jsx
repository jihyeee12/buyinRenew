import React from 'react';
import styles from '../modal.module.css';

const RefundModal = () => {
    

    return (
        <div className={styles.refundBox}>
            <ul className={styles.refundList}>
                <li>최초 유효기간 이내에는 구매자가 [선물함 〉 보낸 선물 〉 상세 보기]에서 결제 취소 또는 결제 금액의 100%에 대한 환불을 요청할 수 있으며
                    환불 금액은 포인트로 전환합니다.
                </li>
                <li>최초 유효기간 이후에는 수신자가 [선물함 〉 받은 선물〉 상세 보기]에서 결제 금액의 90%에 대한 환불을 요청할 수 있으며
                    환불금액은 포인트로 전환됩니다.<br/>
                    - 유효기간 이내일 경우: 구매자에게 환불<br/>
                    - 유효기간 이후일 경우: 수신자에게 환불
                </li>
                <li>수신자는 고객센터 및 선물함을 통해서 교환권의 수신 거절을 요청할 수 있으며, 이 경우 구매자에게 취소 및 환불에 대한 안내가
                    이루어집니다.
                </li>
                <li>결제 취소 또는 환불 요청은 미사용 교환권에 대해서만 가능하며, 사용한 교환권에 대해서는 불가능합니다.</li>
                <li>일부 금액 사용 후 즉시 잔여금액은 포인트로 전환됩니다.</li>
                <li>미성년자인 회원이 서비스를 이용하여 상품 등을 구매 시 법정대리인이 해당 계약에 대하여 동의를 하여야 정상적인 상품 등의 구매계약이 체결될 수 있습니다.
                    만약, 미성년자인 회원이 법정대리인의 동의 없이 상품 등을 구매하는 경우 본인 또는 법정대리인이 이를 취소할 수 있습니다.
                </li>
            </ul>
        </div>
    );
};

export default RefundModal;