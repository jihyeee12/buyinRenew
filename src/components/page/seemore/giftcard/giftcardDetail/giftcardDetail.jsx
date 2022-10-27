import React from 'react';
import styles from './giftcardDetail.module.css';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

const GiftcardDetail = () => {
    const navigate = useNavigate();

    const gift = () =>{
        navigate('/gift');
    }

    const cardDetail = 
        {
            giftcard_detail_img_url: "https://www.buyinhotel.co.kr/images/giftcard/giftcard_detail.png",
            giftcard_img_url: "https://www.buyinhotel.co.kr/images/giftcard/giftcard_100,000.png",
            giftcard_id: 3,
            giftcard_name: "[기프트카드] 100,000원권 기프트카드",
            giftcard_price: 100000,
            valid_date: "30일",
            giftcard_usage: "온라인"
        }
        const clip = () => {
            var url = "";
            var textarea = document.createElement("textarea");
            document.body.appendChild(textarea);
            url = window.document.location.href;
            textarea.value = url;
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
            
            alert("url을 복사했습니다.");
        }
    
    return(
        <>
            <div className={styles.detailBox}>
                <div>
                    <div className={styles.cardInfoBox}>
                        <div className={styles.cardImgBox}>
                            <img src={cardDetail.giftcard_img_url} />
                        </div>
                        <div className={styles.cardInfoArea}>
                            <div className={styles.cardTitle}>
                                <p className={styles.title}>BUYINHOTEL</p>
                                <p className={styles.cardName}>{cardDetail.giftcard_name}</p>
                                <p className={styles.cardPrice}>{cardDetail.giftcard_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
                            </div>
                            <div className={styles.cardInfo}>
                                <p className={styles.infoTxt}>유효기간 : {cardDetail.valid_date}</p>
                                <p className={styles.infoTxt}>사용처 : {cardDetail.giftcard_usage}</p>
                                <div className={styles.popBtn}>
                                    <button type='button' className={styles.productBtn}>상품정보고시</button>
                                    <button type='button' className={styles.refundBtn}>환불정책 및 방법</button>
                                </div>
                                <button type='button' className={styles.shareBtn} onClick={clip}>공유하기&nbsp;<img src='../img/icon/shareicon.png' /></button>
                            </div>
                        </div>  
                    </div>
                    
                    <div className={styles.cardDetailBox}>
                        <img src={cardDetail.giftcard_detail_img_url} alt="" />
                        <p className={styles.informationTitle}>이용안내</p>
                        <ul className={styles.informationList}>
                            <li>정식 판매처 외의 경로를 통하여 구매하거나 불법 또는 부정한 방법 등으로 보유하신 e카드 교환권은 정상적인 사용(환불, 재전송 등 포함)이 제한될 수 있으며,
                                사용중 발생한 문제에 대해 지원이 어려울 수 있습니다.
                            </li>
                            <li>기프트카드는 온라인 상품으로 매장에서 실물 카드로 교환되지 않습니다.</li>
                            <li>선물받은 기프트카드는 선물함에서 확인하실 수 있습니다.</li>
                            <li>기프트카드는 결제수단이 아니므로, 매장에서 결제 및 카드 교환이 불가능합니다. 반드시 전용 앱이나 전용 홈페이지에서 기프트카드로 예약 후 매장에서 예약 확인해주시길 바랍니다.</li>
                            <li>사용완료된 선물기록은 6개월동안 보관합니다.</li>
                            <li>기타 이용 시 유의사항은 바이인호텔 홈페이지에서 확인해주시기 바랍니다.</li>
                            <li>본 기프트카드의 구매/발송 관련 문의는 사이트 내 고객센터 메뉴의 '카카오톡으로 상담하기'로 상담이 가능합니다.</li>
                            <li>본 상품페이지에 포함된 콘텐츠(상표,썸네일, 이미지)는 ㈜바이인호텔의 자산입니다. 허가없이 무단 복제 및 상업적 용도로 게재 및 재배포, 판매 시 반드시 법적 책임을 묻습니다.</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.payBox}>
                    <p className={styles.payment}>결제금액 <span className={styles.payPrice}>{cardDetail.giftcard_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</span></p>
                    <button type='button' className={styles.giftBtn} onClick={gift}>선물하기</button>
                </div>
            </div>
        </>
    )
}

export default GiftcardDetail;