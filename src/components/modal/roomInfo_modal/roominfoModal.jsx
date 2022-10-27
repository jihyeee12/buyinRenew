import React from 'react';
import styles from '../modal.module.css';

const RoominfoModal = ({setModalOpen}) => {
    const closeModal = () => {
        setModalOpen(false);
    }
    
    return (
        <div className={styles.Modal} onClick={closeModal}>
            <div className={styles.modalBody}>
                <button className={styles.modalCloseBtn} onClick={closeModal}>
                    <img src='../../../img/icon/modalClose.png' />
                </button>
                <div className={styles.infoBox}>
                    <h3 className={styles.infoTitle}>숙소정보</h3>
                    <table className={styles.roomInfoTable}>
                        <tbody>
                            <tr>
                                <td>위치</td>
                                <td>광주 광역시</td>
                            </tr>
                            <tr>
                                <td>대표번호</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <td>객실수</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>객실타입</td>
                                <td>111/</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={styles.infoBox}>
                    <h3 className={styles.infoTitle}>객실별 어메니티</h3>
                    <table className={styles.roomsTable}>
                        <tbody>
                            <tr>
                                <td>스탠다드 더블</td>
                                <td>ㅇㅇㅇ</td>
                            </tr>
                            <tr>
                                <td>비즈니스 더블</td>
                                <td>칫솔, 치약, 샤워, 스펀지, 샴푸, 린스, 바디워시, 비누, 생수, 스킨, 로션, 가운, 폼클렌징, 면도기, 커피, 녹차, 슬리퍼, 레이디세트</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={styles.NoteBox}>
                    <h3 className={styles.infoTitle}>객실별 특이사항</h3>
                        <table className={styles.roomsTable}>
                            <tbody>
                                <tr>
                                    <td>스탠다드 더블</td>
                                    <td>더블베드, 티테이블, 커피포트,드라이기,고데기,냉장고,충전기,에어컨</td>
                                </tr>
                                <tr>
                                    <td>비즈니스 더블</td>
                                    <td>더블베드, 티테이블, 커피포트,드라이기,고데기,냉장고,충전기,에어컨, 2PC(모니터 32인치 본체 CPU i5-9400F,REM 16G RTX2060)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
        </div>
    );
};

export default RoominfoModal;