import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './payment.module.css';
import Paymethod from '../../paymethod/paymethod';
import Userinfo from '../../reservation/userinfo/userinfo';

const Payment = () => {
    const navigate = useNavigate();

    const linkComplete = () =>{
        navigate('/payResult');
    }

    return(
        <>
        <div className={styles.select}>
            <div>
                <Userinfo/>
                <div className={styles.discountBox}>
                    <h4 className={styles.discountTitle}>할인선택</h4>
                    <div className={styles.discount}>
                        <p className={styles.discountType}>바이룸<span className={styles.okTitle}>적용가능 <span className={styles.okCount}>1</span>장</span></p>
                        <div className={styles.selectBox}>
                            <input className={styles.selectTxt} type="text" value={"적용안함"} readOnly/>
                            <div className={styles.btnBox}>
                                <button className={styles.selectBtn} type='button'>선택</button>
                            </div>
                        </div>
                    </div>

                    <div className={styles.discount}>
                        <p className={styles.discountType}>포인트<span className={styles.okTitle}>보유포인트 <span className={styles.okCount}>1</span>P</span></p>
                        <div className={styles.selectBox}>
                            <input className={styles.selectTxt} type="text" value={"0P"} readOnly/>
                            <div className={styles.btnBox}>
                                <button className={styles.allPoint} type='button'>전액사용</button>
                            </div>
                        </div>
                    </div>

                    <div className={styles.discount}>
                        <p className={styles.discountType}>쿠폰<span className={styles.okTitle}>적용가능 <span className={styles.okCount}>1</span>장</span></p>
                        <div className={styles.selectBox}>
                            <input className={styles.selectTxt} type="text" value={"적용안함"} readOnly/>
                            <div className={styles.btnBox}>
                                <button className={styles.selectBtn} type='button'>선택</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Paymethod />
            </div>

            <div>
                <div className={styles.reservationInfo}>
                    <div className={styles.hotelInfo}>
                        <h4>이끌림호텔 충장점</h4>
                        <p>스탠다드 외 1</p>
                    </div>
                    <div className={styles.dataBox}>
                        <table className={styles.dateTable}>
                            <tbody>
                                <tr>
                                    <td>체크인</td>
                                    <td>2022.01.01(토) 18:00</td>
                                </tr>
                                <tr>
                                    <td>체크아웃</td>
                                    <td>2022.01.02(일) 12:00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={styles.payBox}>
                        <p className={styles.payTitle}>결제정보</p>
                        <table className={styles.payTable}>
                            <tr>
                                <td>예약금액</td>
                                <td>90,000원</td>
                            </tr>
                            <tr>
                                <td>바이룸사용</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>포인트사용</td>
                                <td>-0원</td>
                            </tr>
                            <tr>
                                <td>쿠폰사용</td>
                                <td>-0원</td>
                            </tr>
                            <tr>
                                <td>총 결제금액</td>
                                <td>90,000원</td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div className={styles.checkBox}>
                    <label className={styles.allChecks}><input type="checkbox" name='allCheck' />&nbsp;전체동의</label>
                    <hr className={styles.hr} />
                    <div className={styles.oneChecks}>
                        <label><input type="checkbox" name='oneCheck' />&nbsp;<span className={styles.agreeTxt}>개인정보 수집 및 이용 목적 동의</span> <span className={styles.blue}>(필수)</span></label>
                        <label><input type="checkbox" name='oneCheck' />&nbsp;<span className={styles.agreeTxt}>개인정보 제 3자 제공 동의</span> <span className={styles.blue}>(필수)</span></label>
                    </div>
                </div>
                <button type='button' className={styles.paybtn} onClick={linkComplete}>90,000원 결제하기</button>
                <p className={styles.infoTxt}>㈜바이인호텔은 통신판매 중개자로서, 통신판매의 당사자가 아니며 상품의 예약, 이용 및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.</p>
            </div>
        </div>
        </>

    )
};

export default Payment; 