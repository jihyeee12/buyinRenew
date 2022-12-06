import React from 'react';
import styles from './roomopion.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import Options from '../../reservation/options/options';

const Roomoption = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const locationState = location.state.roomType;
    console.log(locationState);

    const linkpay = () => {
        navigate('/payment');
    }
    // const basket = () => {
    //     navigate('/Basket');
    // }
    return(
        <>
        <div className={styles.roomoption}>
            <div className={styles.optionBox}>
                {locationState === 0 && <div>
                    <h4 className={styles.title}>이용시간 선택</h4>
                    <div>
                        <button type='button' className={styles.timeBtn}>18:00</button>
                    </div>
                    </div>}
                {/* <Options basket={basket}/> */}
            </div>
            <div>
                <div className={styles.reservationInfo}>
                    <div className={styles.roomInfo}>
                        <img src="/img/roomImg/roomPrice.png" alt="roomprice" />
                        <div className={styles.roomName}>
                            <h4>스탠다드</h4>
                            <p>예약금액</p>
                            <p>0원</p>
                        </div>
                    </div>
                    <table className={styles.totalpriceTable}>
                        <tbody>
                            <tr>
                                <td>체크인</td>
                                <td>2022.01.01(토) 18:00</td>
                            </tr>
                            <tr>
                                <td>체크아웃</td>
                                <td>2022.01.02(일) 12:00</td>
                            </tr>
                            <tr className={styles.totalPrice}>
                                <td>총 예약금액</td>
                                <td>45,000원</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={styles.moveBtn}>
                    {/* <button type='button' className={styles.basketBtn} onClick={basket}>장바구니 담기</button> */}
                    <button type='button' className={styles.payBtn} onClick={linkpay}>바로 결제하기</button>
                </div>
            </div>
        </div>
        </>
    )
};

export default Roomoption;