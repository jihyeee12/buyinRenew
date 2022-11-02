import React from 'react';
import styles from '../modal.module.css';

const ProductInfoModal = () => {
   

    return (
        <table className={styles.productTable}>
            <tbody>
                <tr>
                    <td>발행자</td>
                    <td>㈜바이인호텔</td>
                </tr>
                <tr>
                    <td>유효기간</td>
                    <td>30일</td>
                </tr>
                <tr>
                    <td>교환권 공급자</td>
                    <td>㈜바이인호텔</td>
                </tr>
                <tr>
                    <td>이용조건</td>
                    <td>유효기간은 연장가능하며, 최초유효기간 만료 후 결제금액 90% 환불이 가능합니다.</td>
                </tr>
                <tr>
                    <td>이용가능 매장</td>
                    <td>바이인호텔 앱, 웹페이지에 노출된 전 매장</td>
                </tr>
                <tr>
                    <td>환불조건 및 방법</td>
                    <td>유효기간 이내에는 구매자가 취소/환불을 결제금액의 100%에 대해서 요청가능하며, 
                        최초 유효기간 만료 후에는 수신자가 결제금액의 90%에 대해 환불요청이 가능합니다. 
                        취소/환불은 선물함에서 직접 신청 하실 수 있으며, 환불금액은 포인트로 전환됩니다.</td>
                </tr>
                <tr>
                    <td>소비자 상담 관련 전화번호</td>
                    <td>1533-3152</td>
                </tr>
            </tbody>
        </table>
    );
};

export default ProductInfoModal;