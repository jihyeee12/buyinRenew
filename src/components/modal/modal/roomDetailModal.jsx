import React from 'react';
import styles from '../modal.module.css';

const RoomDetailModal = ({notice, amenity}) => {
    
    return (
        <div className={styles.roomBox}>
            <table className={styles.roomModal}>
                <tbody>
                    <tr>
                        <td>어메니티</td>
                        <td>{amenity}</td>
                    </tr>
                    <tr>
                        <td>특이사항</td>
                        <td>{notice}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default RoomDetailModal;