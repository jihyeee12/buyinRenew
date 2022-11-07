import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from '../modal.module.css';

const RoominfoModal = ({lodgement}) => {
    const [roomInfo, setroomInfo] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchroomInfo = async () => {
        try {
            // 요청이 시작 할 때에는 error 와 roomInfo 를 초기화하고
            setError(null);
            setroomInfo(null);
            // loading 상태를 true 로 바꿉니다.
            setLoading(true);
            const response = await axios.get(
            `/lodgement-detail?lodgement=${lodgement}`
            );
            setroomInfo(response.data.data); // 데이터는 response.data 안에 들어있습니다.
        } catch (e) {
            setError(e);
        }
        setLoading(false);
        };

        fetchroomInfo();
    }, []);

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!roomInfo) return null;
    
    
        
    return (
        <>
        <div className={styles.infoBox} key={roomInfo.lodgement_id}>
                    <h3 className={styles.infoTitle}>숙소정보</h3>
                    <table className={styles.roomInfoTable}>
                        <tbody>
                            <tr>
                                <td>위치</td>
                                <td>{roomInfo.lodgement_address}</td>
                            </tr>
                            <tr>
                                <td>대표번호</td>
                                <td>{roomInfo.lodgement_tel.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`)}</td>
                            </tr>
                            <tr>
                                <td>객실수</td>
                                <td>{roomInfo.room_count}</td>
                            </tr>
                            <tr>
                                <td>객실타입</td>
                                <td>{roomInfo.room_infos.map(v => (
                                    v.room_name + "/ "
                                ))}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={styles.infoBox}>
                    <h3 className={styles.infoTitle}>객실별 어메니티</h3>
                    <table className={styles.roomsTable}>
                        <tbody>
                            {roomInfo.room_infos.map(info => (
                                <tr>
                                    <td>{info.room_name}</td>
                                    <td>{info.room_amenity}</td>
                                </tr>
                            ))}
                            
                        </tbody>
                    </table>
                </div>
                <div className={styles.NoteBox}>
                    <h3 className={styles.infoTitle}>객실별 특이사항</h3>
                        <table className={styles.roomsTable}>
                            <tbody>
                            {roomInfo.room_infos.map(info => (
                                <tr>
                                    <td>{info.room_name}</td>
                                    <td>{info.room_notice}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
        </>
                
              
    );
};

export default RoominfoModal;