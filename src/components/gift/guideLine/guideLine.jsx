import React from 'react';
import { useState } from 'react';
import styles from './guideLine.module.css';

const GuideLine = (props) => {
    const [isCheck, setCheck] = useState(false);
    const [checked, setChecked] = useState(false);

    return(
        <>
        <div className={styles.userInformation}>
            <p>이용안내</p>
            <button className={styles.toggleBtn} onClick={() => {
                setCheck((e) => !e);
            }}>
                {isCheck ? <img src='../../../img/icon/oneUp.png' alt='upIcon' /> : <img src='../../../img/icon/oneDown.png' alt='downIcon' />}
            </button>
        </div>
        {isCheck && (
            <div className={styles.informationList}>
                <ul>
                    <li>정식 판매처 외의 경로를 통하여 구매하거나 불법 또는 부정한 방법 등으로 보유하신 e카드 교환권은 정상적인 사용
                        (환불, 재전송 등 포함)이 제한될 수 있으며, 사용 중 발생된 문제에 대해 지원이 어려울 수 있습니다.
                    </li>
                    <li>기프트카드는 온라인 상품으로 매장에서 실물 카드로 교환되지 않습니다.</li>
                    <li>선물 받은 기프트카드는 선물함에서 확인하실 수 있습니다.</li>
                    <li>기프트카드는 결제수단이 아니므로, 매장에서 결제 및 카드 교환이 불가능합니다. 반드시 전용 앱이나 전용 홈페이지에서
                        기프트카드로 예약 후 매장에서 예약 확인해 주시길 바랍니다.
                    </li>
                    <li>사용 완료된 선물 기록은 6개월 동안 보관합니다.</li>
                    <li>기타 이용 시 유의사항은 바이인 호텔 홈페이지에서 확인해 주시기 바랍니다.</li>
                    <li>본 기프트카드의 구매/발송 관련 문의는 사이트 내 고객센터 메뉴의 '카카오톡으로 상담하기'로 상담이 가능합니다.</li>
                    <li>본 상품페이지에 포함된 콘텐츠(상표, 썸네일, 이미지)는 (주) 바이인 호텔의 자산입니다. 허가 없이 무단 복제 및 상업적 용도로
                        게재 및 재배포, 판매 시 반드시 법적 책임을 묻습니다.
                    </li>
                </ul>
            </div>
        )}

        <div className={styles.userInformation}>
            <p>환불/취소 정책 및 방법</p>
            <button className={styles.toggleBtn} onClick={() => {
                setChecked((e) => !e);
            }}>
                {checked ? <img src='../../../img/icon/oneUp.png' alt='upIcon' /> : <img src='../../../img/icon/oneDown.png' alt='downIcon' />}
            </button>
        </div>
        {checked && (
            <div className={styles.refundList}>
                <ul>
                    <li>최초 유효기간 이내에는 구매자가 [선물함 〉 보낸 선물 〉 상세 보기] 에서 결제 취소 또는 결제 금액의 100%에 대한
                        환불을 요청할 수 있으며 환불금액은 포인트로 전환합니다.
                    </li>
                    <li>
                        최초 유효기간 이후에는 수신자가 [선물함 〉 받은 선물 〉 상세 보기] 에서 결제 금액의 90%에 대한 환불을 요청할 수 있으며 환불금액은 포인트로 전환됩니다.<br/>
                        - 유효기간 이내일 경우 : 구매자에게 환불<br/>
                        - 유효기간 이후일 경우 : 수신자에게 환불
                    </li>
                    <li>수신자는 고객센터 및 선물함을 통해서 교환권의 수신 거절을 요청할 수 있으며, 이 경우 구매자에게 취소 및 환불에 대한 안내가 이루어집니다.</li>
                    <li>결제 취소 또는 환불 요청은 미사용 교환권에 대해서만 가능하며, 사용한 교환권에 대해서는 불가능합니다.</li>
                    <li>일부 금액 사용 후 즉시 잔여 금액은 포인트로 전환됩니다.</li>
                    <li>미성년자인 회원이 서비스를 이용하여 상품 등을 구매 시 법정대리인이 해당 계약에 대하여 동의를 하여야 정상적인 상품 등의 구매계약이 체결될 수 있습니다. 만약,
                        미성년자인 회원이 법정대리인의 동의 없이 상품 등을 구매하는 경우 본인 또는 법정대리인이 이를 취소할 수 있습니다.
                    </li>
                </ul>
            </div>
        )}
        </>
    )
};

export default GuideLine;