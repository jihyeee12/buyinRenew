import React from 'react';
import styles from '../modal.module.css';

const AmenityModal = ({targetAmenity, setAmenityName,closeModal}) => {
    
    const handleOptClick = (id) => {
        let amenityNames = '';
        targetAmenity.amenity_options.map(option => {
            if(option.amenity_option_id === id){
                amenityNames = option.amenity_option_name;
            }
        })
        setAmenityName(amenityNames);
        closeModal(id);
    };

   return (
        <div className={styles.amenityBox}>
            <table className={styles.amenityTable}>
                <tbody>
                {targetAmenity.amenity_options.map(option => (
                    <tr key={option.amenity_option_id} 
                    className={styles.amenityList}>
                        <td>{option.amenity_option_name}(+{option.amenity_option_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')})</td>
                        <td value={option.amenity_option_id} className={styles.amenitySelect} onClick={() => handleOptClick(option.amenity_option_id)}>선택</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default AmenityModal;