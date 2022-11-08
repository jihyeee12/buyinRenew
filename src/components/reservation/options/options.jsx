import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import Modal from '../../modal/modal';
import styles from './options.module.css';

const Options = () => {
    const [counter, setCounter] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);

    const personAdd = useRef();
    const bedRoomAdd = useRef();

    const onPlus = () => setCounter((prev) => prev +1);
    const onMinus = () => {
        if(counter < 1){
            return
        }
        setCounter((prev) => prev -1);
    }
    return(
    <>
    <div className={styles.options}>
        <div className={styles.roomOptions}>
            <table className={styles.roomOptionTable}>
                <thead>
                    <tr>
                        <td><h4 className={styles.optionTitle}>객실 옵션</h4></td>
                        <td><span className={styles.roomTotal}>+0원</span></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><span className={styles.plusTitle}>인원추가</span>&nbsp;<span className={styles.plusPrice}>(10,000원)</span></td>
                        <td><button type='button' className={styles.minus} onClick={onMinus}>―</button>
                            <input className={styles.count} ref={personAdd} type="text" value={counter} disabled/>
                            <button type='button' className={styles.plus} onClick={onPlus}>+</button>
                        </td>
                    </tr>
                    <tr>
                        <td><span className={styles.plusTitle}>침구류 추가</span>&nbsp;<span className={styles.plusPrice}>(10,000원)</span></td>
                        <td>
                            <button type='button' className={styles.minus} onClick={onMinus}>―</button>
                            <input className={styles.count} ref={bedRoomAdd} type="text" value={counter} disabled/>
                            <button type='button' className={styles.plus}  onClick={onPlus}>+</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className={styles.amenityOption}>
            <h4 className={styles.optionTitle}>어메니티 옵션 <span className={styles.amenityTotal}>+0원</span></h4>
            <div className={styles.amenities}>
                <p className={styles.amenityType}>생수</p>
                <div className={styles.selectAmenity}>
                    <input type="text" className={styles.amenityText} readOnly defaultValue={0} />
                    <button type='button' className={styles.selectBtn} onClick={()=> setModalOpen(!modalOpen)}>선택</button>
                </div>
            </div>
        </div>
        {modalOpen && <Modal type={"amenity"}  setModalOpen={() => setModalOpen(!modalOpen)} />}
    </div>
    </>     
    );
}

export default Options;