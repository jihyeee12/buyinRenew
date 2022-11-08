import React from 'react';
import styles from '../modal.module.css';

const AmenityModal = () => {
    const option = [
        {option_id: 0, name: "기본드라이기" , price: "기본"},
        {option_id: 1, name: "다이슨" , price: "1,000"},
        {option_id: 2, name: "유닉스" , price: "500"},
    ]

    return (
        <div className={styles.amenityBox}>
            <table className={styles.amenityTable}>
                <tbody>
                {option.map(option => (
                    <tr className={styles.amenityList}>
                        <td>{option.name}({option.price})</td>
                        <td className={styles.amenitySelect}>선택</td>
                    </tr>
                ))}
                </tbody>
            </table>
            
        </div>
    );
};

export default AmenityModal;