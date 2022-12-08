import React from 'react';
import styles from './options.module.css';
import { useRef ,useState } from 'react';
import Modal from '../../modal/modal';

const Options = ({basket}) => {
    const [counter, setCounter] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
    const [amenityName, setAmenityName] = useState("");
    const [targetAmenity, setTargetAmenity] = useState({})

    console.log(basket)
    
    const handleModalOpen = e => {
        let clickedAmenity = {}
        basket.amenities.map(item => {
        return `${item.amenity_id}` === e.target.value ? (clickedAmenity = item) : ""
    })
    setTargetAmenity(clickedAmenity);
    setModalOpen(!modalOpen);
    }

    const changeAmenity = (amenityName) => {
        setAmenityName(amenityName);
    }

    const personAdd = useRef();
    const bedRoomAdd = useRef();

    const onPlus = (e) => {
        setCounter((e) => e +1)
    };

    const onMinus = (e) => {
        if(counter < 1){
            return
        }
        setCounter((e) => e -1);
    }
    return(
    <>
    <div className={styles.options}>
        <div className={styles.roomOptions}>
            <table className={styles.roomOptionTable}>
                <thead>
                    <tr>
                        <td><h4 className={styles.optionTitle}>숙박권 사용</h4></td>
                        <td><span className={styles.roomTotal}>+0원</span></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><span className={styles.plusTitle}>평일권</span>&nbsp;<span className={styles.plusPrice}>({basket.weekday_gift_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원)</span></td>
                        <td><button type='button' className={styles.minus} onClick={onMinus}>―</button>
                            <input className={styles.count} ref={personAdd} type="text" value={basket.weekday_gift_count} disabled/>
                            <button type='button' className={styles.plus} onClick={onPlus}>+</button>
                        </td>
                    </tr>
                    <tr>
                        <td><span className={styles.plusTitle}>주말권</span>&nbsp;<span className={styles.plusPrice}>({basket.weekend_gift_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원)</span></td>
                        <td>
                            <button type='button' className={styles.minus} onClick={onMinus}>―</button>
                            <input className={styles.count} ref={bedRoomAdd} type="text" value={basket.weekend_gift_count} disabled/>
                            <button type='button' className={styles.plus}  onClick={onPlus}>+</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className={styles.roomOptions}>
            <table className={styles.roomOptionTable}>
                <thead>
                    <tr>
                        <td><h4 className={styles.optionTitle}>객실 옵션</h4></td>
                        <td><span className={styles.roomTotal}>+0원</span></td>
                    </tr>
                </thead>
                <tbody>
                    {basket.room_options.map(room => (
                        <tr>
                            <td><span className={styles.plusTitle}>{room.option_name}</span>&nbsp;<span className={styles.plusPrice}>({room.option_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원)</span></td>
                            <td><button type='button' className={styles.minus} onClick={() => onMinus(room.option_count)}>―</button>
                                <input name={room.option_id} className={styles.count}  ref={personAdd} type="text" value={counter} disabled/>
                                <button type='button' className={styles.plus} onClick={() => onPlus(room.option_count)}>+</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <div className={styles.amenityOption}>
            <h4 className={styles.optionTitle}>어메니티 옵션 <span className={styles.amenityTotal}>+0원</span></h4>
            {basket.amenities.map(amenity => (
                <div className={styles.amenities}>
                    <p className={styles.amenityType}>{amenity.amenity_name}</p>
                    <div className={styles.selectAmenity}>
                        
                        <input type="text" className={styles.amenityText} onChange={changeAmenity} value={amenityName} readOnly />
                        <button type='button' className={styles.selectBtn} value={amenity.amenity_id} onClick={ e=> handleModalOpen(e)}>선택</button>
                    </div>
                </div>
            ))}
                {modalOpen && <Modal type={"amenity"} targetAmenity={targetAmenity} changeAmenity={changeAmenity}  setModalOpen={() => setModalOpen(!modalOpen)} />}
        </div>
    </div>
    </>     
    );
}

export default Options;