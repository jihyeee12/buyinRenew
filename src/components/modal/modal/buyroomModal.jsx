import React from 'react';
import styles from '../modal.module.css';
import { useNavigate } from 'react-router-dom';

const BuyroomModal = () => {
    const navigate = useNavigate();

    const linkgift = (buyRoom_Id,name,buyRoom_img,buyRoom_price,buyRoom_name) =>{
        navigate('/gift',{
            state: {
                buyRoom_Id: buyRoom_Id,
                name: name,
                buyRoom_img: buyRoom_img,
                buyRoom_price: buyRoom_price,
                buyRoom_name: buyRoom_name
            }
        });
    }

    return (
        <div className={styles.buyRoomBox}>
            <p className={styles.buyRoomtitle}>선물하실 숙박권을 선택해주세요</p>
            <div className={styles.buyRoomBtnList}>
                <button type="button" className={styles.buyRoomBtn} onClick={() => linkgift("room")}>평일권</button>
                <button type="button" className={styles.buyRoomBtn} onClick={() => linkgift("room")}>주말권</button>
            </div>
        </div>
    );
};

export default BuyroomModal;