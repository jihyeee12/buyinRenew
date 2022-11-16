import React from 'react';
import styles from '../modal.module.css';

const AmenityModal = ({targetAmenity, changeAmenity, amenityName}) => {
    console.log(targetAmenity);

    const amenityClick = () => {
        changeAmenity(amenityName);
    }
    console.log(amenityName);
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
                        <td value={option.amenity_option_id} name={option.amenity_option_name} className={styles.amenitySelect} onClick={() => amenityClick(option.amenity_option_name)}>선택</td>
                    </tr>
                ))}
                </tbody>
            </table>
            
        </div>
    );
};

export default AmenityModal;