import React from 'react';
import styles from '../modal.module.css';

const RoomDetailModal = () => {
    return (
        <div className={styles.roomBox}>
            <table className={styles.roomModal}>
                <tbody>
                    <tr>
                        <td>어메니티</td>
                        <td>치약, 칫솔,...아아아아아ㅏㅇ아ㅏ아아앙dddddddddddddddd아ㅏㅇ아ㅏㅏㅏㅏㅏㅏㅏㅏㅏfkfkfkfkfkkfㅏㅏㅏㅏㅏㅏ</td>
                    </tr>
                    <tr>
                        <td>특이사항</td>
                        <td>가가가가가가가가가ㅏ가가가가가ㅏfffffffffffffffffffffffㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default RoomDetailModal;