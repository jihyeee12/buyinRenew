import React from 'react';
import styles from '../modal.module.css';

const AmenityModal = ({targetAmenity, changeAmenity}) => {
    const amenityClick = e => {
        let clickAmenityInfo = {};
        targetAmenity.amenity_options.map(item => {
            return `${item.amenity_option_id}` === e.target.value ? (clickAmenityInfo = item): ""
        })
        changeAmenity(clickAmenityInfo);
    }
    console.log(targetAmenity);
    
   return (
        <div className={styles.amenityBox}>
            <table className={styles.amenityTable}>
                <tbody>
                {targetAmenity.amenity_options.map(option => (
                    <tr key={option.amenity_option_id} 
                    className={styles.amenityList}
                    isSelected = {option.isSelected}
                    >
                        <td>{option.amenity_option_name}(+{option.amenity_option_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')})</td>
                        <td value={option.amenity_option_id} className={styles.amenitySelect} onClick={e => amenityClick(e)}>선택</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default AmenityModal;