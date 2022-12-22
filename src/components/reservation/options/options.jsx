import React from 'react';
import styles from './options.module.css';
import { useRef ,useState } from 'react';
import Modal from '../../modal/modal';
import { useEffect } from 'react';
import RoomOption from './optionComponents/roomOption';
import AmenityOption from './optionComponents/amenityOption';
import TicketOption from './optionComponents/ticketOption';

const Options = ({basket}) => {
    const optionData = basket.room_options;
    const amenityData = basket.amenities;
    
    
    return(
    <>
    <div className={styles.options}>
        <div className={styles.roomOptions}>
            <TicketOption basket={basket}/>
        </div>
        <div className={styles.roomOptions}>
            <RoomOption optionData={optionData}/>
        </div>
        <div className={styles.amenityOption}>
            <AmenityOption amenityData={amenityData}/>
        </div>
    </div>
    </>     
    );
}

export default Options;