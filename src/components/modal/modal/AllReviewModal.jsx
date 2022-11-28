import React from 'react';
import { useState } from 'react';
import Modal from '../modal';
import styles from '../modal.module.css';

const AllReviewModal = () => {
    
    const imgData = [
        {id: 1, img_url: "../../img/roomImg/room1.png"},
        {id: 2, img_url: "../../img/roomImg/room2.png"},
        {id: 3, img_url: "../../img/roomImg/room3.png"},
        {id: 4, img_url: "../../img/roomImg/bigRoom.png"},
    ]
    const [photoOpen, setPhotoOpen] = useState(false);
    
    return (
        <div className={styles.reviewImgBox}>
            {imgData.map(img => (
                <img className={styles.reviewImg} key={img.id} value={img.id} onClick={() => setPhotoOpen(!photoOpen)} src={img.img_url} alt="roomImg" />
            ))}
                {photoOpen && <Modal type={"photoReview"} setPhotoOpen={() => setPhotoOpen(!photoOpen)} />}
            
        </div>
    );
};

export default AllReviewModal;