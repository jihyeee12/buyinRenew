import React from 'react';
import { useState } from 'react';
import styles from './giftInfo.module.css';

const GiftInfo = ({giftInfo ,giftReceiveInfo}) => {
    const [visible, setVisible] = useState(false);
    
    console.log(giftReceiveInfo);
    return(
        <>
        <div className={styles.giftInfoBox}>
            {giftInfo.gift_status === "send"? 
            <>
            <div className={styles.giftInfo}>
                <p className={styles.title}>선물정보</p>
                <table className={styles.receiveTable}>
                    <tbody>
                        <tr>
                            <td>받는분</td>
                            <td>{giftInfo.gift_receiver}</td>
                        </tr>
                        <tr>
                            <td>선물금액</td>
                            <td className={styles.giftPrice}>{giftInfo.gift_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</td>
                        </tr>
                        <tr>
                            <td>유효기간</td>
                            <td>{giftInfo.valid_date}</td>
                        </tr>
                        <tr>
                            <td>사용처</td>
                            <td>온라인(전용앱, 전용 홈페이지)</td>
                        </tr>
                        <tr>
                            <td>선물상태</td>
                            <td>
                                
                                {/* <button className={styles.cancelBtn} onClick={() => {setVisible(!visible)}} type='button'>선물취소</button>*/}
                                <span className={giftInfo.gift_state === "사용 불가"? (styles.complateState) : (styles.giftState)} >{giftInfo.gift_state}</span> 
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
                            <td>{giftInfo.purchase_id}</td>
                        </tr>
                        <tr>
                            <td>선물구매일</td>
                            <td>{giftInfo.purchase_date}</td>
                        </tr>
                        <tr>
                            <td>결제수단</td>
                            <td>{giftInfo.purchase_method}</td>
                        </tr>
                        <tr>
                            <td>총결제금액</td>
                            <td className={styles.totalPrice}>{giftInfo.purchase_charge.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </>
        :<div className={styles.giftInfo}>
            <p className={styles.title}>선물정보</p>
            <table className={styles.receiveTable}>
                <tbody>
                    <tr>
                        <td>받는분</td>
                        <td>{giftReceiveInfo.gift_sender}</td>
                    </tr>
                    <tr>
                        <td>선물금액</td>
                        <td>{giftReceiveInfo.gift_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                    </tr>
                    <tr>
                        <td>유효기간</td>
                        <td>{giftReceiveInfo.valid_date}</td>
                    </tr>
                    <tr>
                        <td>사용처</td>
                        <td>{giftReceiveInfo.gift_usage}</td>
                    </tr>
                    <tr>
                        <td>선물상태</td>
                        <td>
                            {/* <button className={styles.cancelBtn} onClick={() => {setVisible(!visible)}} type='button'>선물취소</button>
                            <span className={visible? (styles.complateState) : (styles.giftState)} >{visible ? "사용완료" : "사용전"}</span> */}
                            <span className={giftReceiveInfo.gift_state === "사용 불가"  ? (styles.complateState) : (styles.giftState)} >{giftReceiveInfo.gift_state}</span> 
                        </td>
                    </tr>
                </tbody>
            </table>
        </div> }
        </div>
        </>
    )
}

export default GiftInfo;