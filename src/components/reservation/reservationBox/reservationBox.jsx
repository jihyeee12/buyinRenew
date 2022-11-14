import React from 'react';
import styles from './reservationBox.module.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const ReservationBox = ({type}) => {
    const navigate = useNavigate();
    
    const reservationDetail = (name) => {
        navigate('/reservationDetail',{
            state:{
                name: name,
            }
        });
    }

    const [gifts, setgifts] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const listUrl = () => {
            if(type === "reservation"){
                return '/v2/reservations'
            } else if(type === "cancel"){
                return '/v2/cancelations'
            }
        }
        
    const fetchgifts = async () => {
        try {
            // 요청이 시작 할 때에는 error 와 gifts 를 초기화하고
            setError(null);
            setgifts(null);
            // loading 상태를 true 로 바꿉니다.
            setLoading(true);
            const response = await axios.get(
                listUrl(),{headers:{'Contents-type': 'application/json','user': 'AppIDEtest'}}); //get은 data 넣을 자리 필요없으니까 안넣어도 됨
            setgifts(response.data.data); // 데이터는 response.data 안에 들어있습니다.
            
        } catch (e) {
            setError(e);
        }
        setLoading(false);
        };
        fetchgifts();
    
    }, []);
    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!gifts) return null;
    
    console.log(gifts);


    return (
        <>
        {type === 'reservation' ? <>
        {gifts.map(reservation => (<div className={styles.reservationInfo}>
            <p className={styles.reservationDate}>{reservation.reservation_date}  예약</p>
            <div className={styles.reservationBox} onClick={()=> reservationDetail("reservation")}>
                <div className={styles.reservationImg}>
                    <img src={reservation.lodgement_img_url} alt="호텔사진" />
                </div>
                <div className={styles.reservationTxt}>
                    <p className={styles.reservationHotel}>{reservation.lodgement_name}</p>
                    <p className={styles.reservationRoom}>{reservation.room_name}</p>
                </div>
                <div className={styles.reservationCheck}>
                    <table className={styles.reservationTable}>
                        <tbody>
                            <tr>
                                <td>체크인</td>
                                <td>{reservation.check_in}</td>
                            </tr>
                            <tr>
                                <td>체크아웃</td>
                                <td>{reservation.check_out}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>))}
        </>
        :type === "cancel"? <div className={styles.reservationInfo}>
        <p className={styles.reservationDate}><span className={styles.cancelState}>취소완료</span>2022.01.01  예약</p>
        <div className={styles.reservationBox} onClick={()=> reservationDetail("cancel")}>
            <div className={styles.reservationImg}>
                <img src="../img/roomImg/bigRoom.png" alt="호텔사진" />
            </div>
            <div className={styles.reservationTxt}>
                <p className={styles.reservationHotel}>이끌림호텔 충장점</p>
                <p className={styles.reservationRoom}>스탠다드 외 1</p>
            </div>
            <div className={styles.reservationCheck}>
                <table className={styles.reservationTable}>
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
        </div>
    </div>:null} 
        
        </>
        
    );
};

export default ReservationBox;