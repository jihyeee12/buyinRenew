import React from 'react';
import styles from './roomList.module.css';
import { useNavigate } from 'react-router-dom';
import RoomCard from '../roomCard/roomCard';



const RoomList = ({state}) => {
    const navigate = useNavigate();

    const popularHotel = (state) => {
        navigate('/popularHotel',{
            state: {
                state: state,
            }
        });
    }
   
   return(
        <>
        <h2 className={styles.popular}>인기숙소 <img className={styles.seemore} onClick={() => popularHotel({state})} src='/img/icon/seemore.png' alt='seeMore'/></h2>
            <div>
                <RoomCard state={state} slider={true}/>
            </div>
        </>
    )
};

export default RoomList;