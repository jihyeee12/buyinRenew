import React from 'react';
import styles from './reservationBox.module.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const ReservationBox = ({index, gifts}) => {
    const navigate = useNavigate();
    
    const reservationDetail = (name, reservaion_id) => {
        navigate('/reservationDetail',{
            state:{
                name: name,
                reservation_id : reservaion_id
            }
        });
    }
    
    return (
        <>
        {index === 0 ? <>
        {gifts.map(reservation => (<div className={styles.reservationInfo}>
            <p className={styles.reservationDate}>{reservation.reservation_date}  예약</p>
            <div className={styles.reservationBox} onClick={()=> reservationDetail("reservation", reservation.reservation_id)}>
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
        :index === 1?<> 
        {gifts.map(cancel => (
          <div className={styles.reservationInfo}>
            <p className={styles.reservationDate}><span className={styles.cancelState}>{cancel.state}</span>{cancel.cancel_date}  예약</p>
            <div className={styles.reservationBox} key={cancel.cancel_id} onClick={()=> reservationDetail("cancel", cancel.cancel_id)}>
                <div className={styles.reservationImg}>
                    <img src={cancel.lodgement_img_url} alt="호텔사진" />
                </div>
                <div className={styles.reservationTxt}>
                    <p className={styles.reservationHotel}>{cancel.lodgement_name}</p>
                    <p className={styles.reservationRoom}>{cancel.room_name}</p>
                </div>
                <div className={styles.reservationCheck}>
                    <table className={styles.reservationTable}>
                        <tbody>
                            <tr>
                                <td>체크인</td>
                                <td>{cancel.check_in}</td>
                            </tr>
                            <tr>
                                <td>체크아웃</td>
                                <td>{cancel.check_out}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>  
        ))}
        
    </>:null} 
        
        </>
        
    );
};

export default ReservationBox;