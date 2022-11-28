import React, { useEffect, useState } from 'react';
import styles from './giftcardDetail.module.css';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Modal from '../../../../modal/modal';
import axios from 'axios';
import Get from '../../../../../service/api/url/Get';


const GiftcardDetail = () => {
    const {giftcard_id} = useParams();
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false);
    const [refundOpen, setrefundOpen] = useState(false);
    
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            
        Get.getGiftcardInfo(giftcard_id)
        .then(function (response) {
            setUsers(response);
        })
        .catch(error => {
            setError(error);
        })
        setLoading(false);
        };

        fetchUsers();
    }, []);

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!users) return null;
 
console.log(users);

    const gift = (giftCard_Id,name) =>{
        navigate('/gift',{
            state: {
                giftCard_Id: giftCard_Id,
                name: name,
            }
        });
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
                            <img src={users.giftcard_img_url} />
                        </div>
                        <div className={styles.cardInfoArea}>
                            <div className={styles.cardTitle}>
                                <p className={styles.title}>BUYINHOTEL</p>
                                <p className={styles.cardName}>{users.giftcard_name}</p>
                                <p className={styles.cardPrice}>{users.giftcard_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
                            </div>
                            <div className={styles.cardInfo}>
                                <p className={styles.infoTxt}>유효기간 : {users.valid_period}</p>
                                <p className={styles.infoTxt}>사용처 : {users.giftcard_usage}</p>
                                <div className={styles.popBtn}>
                                    <button type='button' className={styles.productBtn} onClick={()=> setModalOpen(!modalOpen)}>상품정보고시</button>
                                    {modalOpen && <Modal type={"productInfo"} setModalOpen={() => setModalOpen(!modalOpen)} />}
                                    <button type='button' className={styles.refundBtn} onClick={()=> setrefundOpen(!refundOpen)}>환불정책 및 방법</button>
                                    {refundOpen && <Modal type={"refund"} setrefundOpen={() => setrefundOpen(!refundOpen)} />}
                                </div>
                                <button type='button' className={styles.shareBtn} onClick={clip}>공유하기&nbsp;<img src='../img/icon/shareicon.png' /></button>
                            </div>
                        </div>  
                    </div>
                    
                    <div className={styles.cardDetailBox}>
                        <img src={users.giftcard_detail_img_url} alt="giftcardImg" />
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
                    <p className={styles.payment}>결제금액 <span className={styles.payPrice}>{users.giftcard_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</span></p>
                    <button type='button' key={users.giftcard_id} className={styles.giftBtn} onClick={() => gift(users.giftcard_id, "giftcard")}>선물하기</button>
                </div>
            </div>
        </>
    )
}

export default GiftcardDetail;