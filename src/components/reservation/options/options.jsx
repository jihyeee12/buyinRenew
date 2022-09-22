import React from 'react';
import styles from './options.module.css';

const Options = () => (
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
                        <td><button type='button' className={styles.minus}>―</button><input className={styles.count} type="text" defaultValue={0}/><button type='button' className={styles.plus}>+</button></td>
                    </tr>
                    <tr>
                        <td><span className={styles.plusTitle}>침구류 추가</span>&nbsp;<span className={styles.plusPrice}>(10,000원)</span></td>
                        <td><button type='button' className={styles.minus}>―</button><input className={styles.count} type="text" defaultValue={0} /><button type='button' className={styles.plus}>+</button></td>
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
                    <button type='button' className={styles.selectBtn}>선택</button>
                </div>
            </div>
        </div>
    </div>
    </>     
    );

export default Options;