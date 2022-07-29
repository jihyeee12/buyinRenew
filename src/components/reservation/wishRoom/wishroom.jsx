import React from 'react';
import styles from './wishroom.module.css';
import { useNavigate } from 'react-router-dom';

const Wishroom = (props) => {
    const navigate = useNavigate();
    const linkLodge = () =>{
        navigate('/lodgement')
    }

    return(
        <>
            <div className={styles.wishBox} onClick={linkLodge}>
                <img className={styles.wishImg} src="/img/roomImg/wishRoom.png" alt="roomImg" />
                <img className={styles.wishIcon} src="/img/icon/wishOkIcon.png" alt="wishIcon" />
                <div>
                    <table className={styles.wishTable}>
                        <tbody>
                            <tr>
                                <td className={styles.hotelName}>충장 이끌림호텔</td>
                                <td><span className={styles.percent}>44%</span> <span className={styles.discount}>80,000원</span></td>
                            </tr>
                            <tr>
                                <td className={styles.standard}>2인기준 / 1박</td>
                                <td className={styles.price}>45,000원</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
};

export default Wishroom;