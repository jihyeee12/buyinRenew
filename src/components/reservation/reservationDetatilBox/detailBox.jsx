import React from 'react';
import styles from './detailBox.module.css';
import { useEffect ,useState } from 'react';
import Get from '../../../service/api/url/Get';
import Modal from '../../modal/modal';
import ReservationInfo from '../reservationInfo/reservationInfo';

const DetailBox = ({type,id,refund,changeReason}) => {
    const [cancelModal, setCancelModal] = useState(false);
    
    const [detail, setdetail] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    
    useEffect(() => {
        
    const fetchdetail = async () => {
        Get.getReservationDetail(type,id)
        .then(function (response) {
            setdetail(response);
        })
        .catch(error => {
            setError(error);
        })
        setLoading(false);
        };
        fetchdetail();
    
    }, [type]);
    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!detail) return null;
    
    console.log(detail);
    
    return(
        <>
            <div className={styles.detailBox}>
                {type === "cancel" && <p className={styles.cancelState}>{detail.state}</p>}
                <div className={styles.hotelBox}>
                    <p className={styles.hotelName}>{detail.lodgement_name}</p>
                    <p className={styles.reservationDate}>예약일 : {type !=="cancel"? detail.reservation_date.split(" ")[0] : detail.cancelation_date.split(" ")[0]}</p>
                    <p className={styles.reservationNum}>주문번호 : {detail.OID}</p>
                </div>
                <div className={styles.reservationBox}>
                    {detail.rooms.map(room => (
                        <ReservationInfo room={room}/>
                    ))}
                </div>
                <div className={styles.userInfo}>
                    <p className={styles.title}>예약자 정보</p>
                    <table className={styles.userTable}>
                        <tbody>
                            <tr>
                                <td>성명</td>
                                <td>{detail.user_info.name}</td>
                            </tr>
                            <tr>
                                <td>연락처</td>
                                <td>{detail.user_info.tel.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`)}</td>
                            </tr>
                            <tr>
                                <td>이메일</td>
                                <td>{detail.user_info.email}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                { (type === "cancel" || type ==="reservationCancel") && <div className={styles.cancelReasonBox}>
                    <p className={styles.title}>취소사유</p>
                    {type==="cancel" && <input type="text" className={styles.cancel_reason} disabled defaultValue={detail.cancel_reason} />}
                    {type==="reservationCancel" && <select name="cancel" id="cancelReason" onChange={changeReason} className={styles.reasonBox}>
                        <option value="단순변심">단순변심</option>
                        <option value="예약일 변경">예약일 변경</option>
                        <option value="룸타입 변경">룸타입 변경</option>
                    </select>}
                </div> }
              
                 {type !== "cancel" && <div className={styles.cancelBox}>
                    <p className={styles.title}>금액 정보 {type !== "reservation" &&<span className={styles.cancelRegulation} onClick={()=> setCancelModal(!cancelModal)}>취소규정 〉</span>}</p>
                    {cancelModal && <Modal type={"cancel"} setCancelModal={() => setCancelModal(!cancelModal)} />}
                    <table className={styles.cancelTable}>
                        <tbody>
                            <tr>
                                <td>예약금액</td>
                                <td>{detail.total_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</td>
                            </tr>
                            <tr>
                                <td>바이룸 사용</td>
                                <td>{detail.gift_charge.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</td>
                            </tr>
                            <tr>
                                <td>기프트카드 사용</td>
                                <td>- {detail.giftcard_charge.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</td>
                            </tr>
                            <tr>
                                <td>포인트 사용</td>
                                <td>- {detail.point_charge.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</td>
                            </tr>
                            <tr>
                                <td>쿠폰 사용</td>
                                <td>- {detail.coupon_charge.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</td>
                            </tr>
                        </tbody>
                    </table>
                </div>}
                 
                <div className={styles.totalPrice}>
                    
                    {(type === "cancel" || type === "reservationCancel") ? <div className={styles.refundPrice}>
                        <p>환불금액</p>
                        <p>{type === "cancel" ? detail.refund_charge.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','): refund.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
                    </div> :<div>
                        <p>총 결제금액</p>
                        <p>{detail.payment_charge.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
                    </div>}
                </div>
            </div>
        </>
    )
};

export default DetailBox;