import React from 'react';
import { useState } from 'react';
import Modal from '../../../modal/modal';
import styles from '../options.module.css';

const AmenityOption = ({amenityData}) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [amenityName, setAmenityName] = useState("");
    const [targetAmenity, setTargetAmenity] = useState({});
    const [Amenity, setAmenity] = useState({});
    const [optId, setOptId] = useState();
    
    const handleModalOpen = (e) => {
        let clickedAmenity = {}
        amenityData.map(item => {
        return `${item.amenity_id}` === e.target.value ? (clickedAmenity = item) : ""
    })
        setTargetAmenity(clickedAmenity);
        setModalOpen(!modalOpen);
        setOptId(e.target.value);
    }

    const selectOpt = () => {

    }

    return (
        <>
            <h4 className={styles.optionTitle}>어메니티 옵션 <span className={styles.amenityTotal}>+0원</span></h4>
            {amenityData.map(amenity => (
                <div className={styles.amenities}>
                    <p className={styles.amenityType}>{amenity.amenity_name}</p>
                    <div className={styles.selectAmenity}>
                        <input 
                            type="text" 
                            className={styles.amenityText} 
                            id={amenity.amenity_id} 
                            defaultValue ={amenityName} readOnly />
                        <button type='button' 
                            className={styles.selectBtn} 
                            value={amenity.amenity_id} 
                            onClick={ e=> handleModalOpen(e)}>
                            선택</button>
                    </div>
                </div>
            ))}
                {modalOpen && <Modal 
                    type={"amenity"} 
                    targetAmenity={targetAmenity} 
                    setAmenityName={setAmenityName}  
                    setModalOpen={() => setModalOpen(!modalOpen)} />}
        </>
    );
};

export default AmenityOption;