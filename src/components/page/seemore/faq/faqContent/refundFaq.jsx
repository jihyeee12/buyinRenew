import React from 'react';
import { useState } from 'react';
import styles from "../../faq/faq.module.css"

const RefundFaq = () => {
    const data =[
        {id: 0, category: "변경·취소·환불", title: "예약 취소 시, 사용한 포인트도 환불 되나요?", answer: "- 예약 취소 시, 사용하신 포인트는 환불 어렵기 때문에 예약취소 시 신중한 선택 부탁드립니다.\n"
        +"포인트 정책에 대한 자세한 내용은 아래 방법을 통해 확인 가능합니다.\n"
        +"▶ 바이인 호텔 앱 > 내 정보 > 포인트·쿠폰"},
        {id: 1, category: "변경·취소·환불", title: "예약일정을 변경할 수 있나요?", answer: "- 예약 일정은 변경이 불가합니다.\n"
        +"예약 일정 변경을 원하시는 경우 예약 취소 후 재예약을 진행해야 합니다.\n"
        +"취소 시점에 따라 취소수수료가 부과될 수 있으며, 이용을 원하는 숙소의 재고가 소진되었을 수 있으니 주의를 부탁드립니다."},
        {id: 2, category: "변경·취소·환불", title: "결제수단(또는 결제카드)을 변경하고 싶습니다.", answer: "- 결제 이후에는 결제수단에 대한 어떤 변경도 불가능합니다.\n"
        +"취소 후에는 다시 결제가 가능하지만, 취소 시점에 따라 취소수수료가 부가되거나 동일 숙소의 잔여 객실이 남아있지 않을 수 있습니다.\n"
        +"신중히 취소 부탁드립니다."},
        {id: 3, category: "변경·취소·환불", title: "예약 취소 시 사용한 쿠폰은 돌려 받을 수 있나요?", answer: "- 고객님 소유의 쿠폰을 사용하신 후 예약 취소할 경우 쿠폰 재반환은 어렵습니다.\n"
        +"▶ 바이인 호텔 앱 > 내 정보 > 포인트·쿠폰"},
        {id: 4, category: "변경·취소·환불", title: "체크인 날짜를 잘못 예약했어요. 일정을 변경할 수 있나요?", answer: "보안등의 이유로 고객님의 예약 내역은 바이인 호텔에서 직접 변경하지 않도록 운영되고 있습니다.\n"
        +" - 예약 취소가 가능한 경우 (모텔 예약 후 1시간 이내, 호텔 예약 후 10분 이내), 기존 예약을 취소하시고 새로운 예약을 해주시면 됩니다.\n"
        +" - 예약 취소가 불가하거나 수수료가 발생하는 경우, 고객센터(1533-3152)로 문의 부탁드립니다."},
        {id: 5, category: "변경·취소·환불", title: "환불했는데 돈이 들어오지 않아요.", answer: "- 고객님께서 지불하신 결제수단에 따라 환불에 소요되는 기간이 달라질 수 있습니다. 평균적으로 영업일 기준 3~7일 이내에 환불 처리됩니다.\n"
        +"또한 환불금액이 0원인 경우에는 100% 수수료가 부과된 경우일 수 있습니다. 확인해 주세요.\n\n"
        +"▶ 시일이 걸리는 경우 다음과 같은 사유를 확인해 주세요.\n"
        +"- 카드 결제 : 카드사의 한도 복원이 필요한 경우\n"
        +"- 계좌이체 : 은행 계좌 입금에 시일이 소요되는 경우\n"
        +"- 휴대폰 소액결제 : 결제월과 환불월이 다른 경우\n\n"
        +"특히, 휴대폰 소액결제 취소 시 결제월과 환불월이 다른 경우에는 원 결제수단으로 환불이 불가능하므로 번거로우시겠지만 바이인 호텔 고객센터(1533-3152)로 문의해 주세요.\n\n"
        +"각 결제수단에서 정상적으로 취소되었는지 확인이 어려우신 경우에는 고객센터로 문의해 주시면 확인이 가능하며, 정상 취소 후에도 환불 및 입금이 지연되는 경우에는 각 카드사 및 은행으로의 문의가 필요하므로 이용에 참고해 주세요."},
        {id: 6, category: "변경·취소·환불", title: "'취소수수료' 규정에 대해 자세히 알고 싶어요.", answer: "- 취소 규정이 적용되는 기준일은 입실일입니다.\n"
        +"취소수수료는 판매금액을 기준으로 계산됩니다.\n\n"
        +"※ 취소수수료 유형\n"
        +"1. 사용자 과실로 인한 취소 유형\n"
        +"- 사용자에 의한 취소 유형으로 당일 예약 취소와 부분 취소에 대해 안내드리겠습니다.\n"
        +"부분 취소는 연박 예약 시에만 가능하며, 제휴점 취소 규정에 따라 일자별 수수료가 부과될 수 있습니다.\n"
        +"당일 예약 건은 원칙적으로 취소가 불가하며, 당일 예약 무료 취소 가능 제휴점에 한하여 취소 가능합니다.\n"
        +"당일 예약 무료 취소 가능 제휴점의 경우 다음 조건을 충족한 상태에서 상담사에게 문의하셔야만 취소가 가능합니다.\n\n"
        +"▶ 모텔 & 호텔\n"
        +"- 예약 완료 시점으로부터 1시간 이내 바이인 호텔 앱/웹을 통해 취소 시 전액 환불\n"
        +"- 단, 1시간 이내라도 입실시간 경과 시 취소 불가\n"
        +"- 입실시간 경과 후 발생한 예약에 한하여 모텔 15분 이내 고객센터를 통해 취소 가능\n"
        +"2. 제휴점 과실로 인한 취소 유형\n"
        +"- 오버부킹 취소 시, 별도의 취소수수료는 발생하지 않습니다.\n"
        +"다만, 전산상으로 자동 취소가 되지 않으므로 직접 취소를 진행할 경우 취소수수료가 부과될 수 있으니 상담사에게 문의하시면 안내해 드리겠습니다.\n"
        +"3. 천재지변으로 인한 취소 유형\n"
        +"- 천재지변으로 숙소 방문이 어려우신 경우 상담사에게 문의하시면 안내해 드리겠습니다.\n"
        +"단, 제휴점과의 마찰로 인한 조기 퇴실 및 일방적인 취소, 부분 취소는 어렵다는 점 양해 부탁드립니다\n"
        +"※ 취소수수료 계산 기준\n"
        +"- PG 사를 통한 현금 결제 금액 -> 포인트 사용금액 -> 쿠폰 또는 제휴사 포인트 할인금액 순으로 부과됩니다.\n"
        +"- 단, 취소수수료 금액이 실 결제금액(현금/PG 결제금액+포인트 사용금액) 을 초과 발생하는 경우, 초과되는 취소 수수료 금액에 대해서는 사용된 쿠폰 또는 제휴사 포인트 반환 정책을 따릅니다.\n\n"
        +"▶연박 예약 건의 취소 시, 취소 일시를 기준으로 일할 계산됩니다.\n\n"
        +"▶예약 정보 변경을 위한 결제 취소 시에도 취소수수료가 부과됩니다.\n\n"
        +"※ 제휴사 포인트 반환\n\n"
        +"통신사 멤버십 포인트를 사용한 할인 금액 중,\n"
        +"- 취소수수료로 부과되는 금액이 없는 경우: 사용 시 차감된 통신사 멤버십 포인트 전액 반환\n"
        +"- 일부만 취소수수료 부과되는 경우: 사용 시 차감된 통신사 멤버십 포인트 전액 반환\n"
        +"- 전액이 취소수수료로 부과되는 경우: 사용 시 차감된 통신사 멤버십 포인트 전액 비 반환\n"
        +"단, 통신사 멤버십 포인트 반환은 2~3일 정도 소요될 수 있습니다."},
        {id: 7, category: "변경·취소·환불", title: "예약한 상품을 취소하고 싶어요.", answer: "예약한 상품은 아래의 경로를 통해 취소 요청할 수 있습니다.\n"
        +"- 내 정보 > [예약 내역] 버튼 클릭 > 취소할 예약 내역 버튼 클릭 > 최하단 우측의 [예약취소] 버튼 클릭 > 취소할 상품 선택 후 취소 수수료 및 환불 금액 확인 > 약관 확인 및 동의 후 [예약취소] 버튼 클릭하여 취소 요청\n\n"
        +"※ 단, '이용 완료/취소 요청 중/취소 완료' 상태인 상품은 취소 요청이 불가합니다.\n"
        +"이미 이용이 완료된 상품을 취소 요청할 경우, 취소 요청 중 상태에서 이용 완료 상태로 변경될 수 있습니다."},

    ]
    const [isCheck, setCheck] = useState(false);
    
    return (
        <>
        {data.map(v => (
            <div className={styles.contentList}>
                <div className={styles.contentTitle}>
                    <div className={styles.title}>
                        <p>[{v.category}]</p>
                        <p key={v.id}>{v.title}</p>    
                    </div>
                    <button type='button' className={styles.toggleBtn} onClick={() => {
                        setCheck((e) => !e);}}>
                        {isCheck ? <img src='../../../img/icon/oneUp.png' alt='upIcon' /> : <img src='../../../img/icon/oneDown.png' alt='downIcon' />}
                    </button>
                </div>
                {isCheck && (
                    <div className={styles.answerBox}>
                        <p className={styles.answerTxt}>{v.answer}</p>
                    </div>
                )}
            </div> 
        ))}
        </>
    );
};

export default RefundFaq;