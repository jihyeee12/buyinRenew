import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from '../options.module.css';

const TicketOption = ({basket}) => {
    console.log(basket);
    
    const onWeekPlus = () => {
        const addOpt = () =>{
            if(basket.weekday_gift_count > basket.weekday_using_gift){
                return {...basket, weekday_gift_count: basket.weekday_gift_count +1}
            }
        }
        
    };


    const onWeekMinus = () => {
        const minusOpt = () => {
            if(basket.weekday_gift_count > 0){
                return {...basket, weekday_gift_count: basket.weekday_gift_count -1 };
            } else return basket;
        }
        
    } 

    // const optionPrice = ticket.map(price => {
    //     return Object.values(price)[7] * price.weekday_gift_count;
    // });
    // console.log(optionPrice)
    // const totalOptionPrice = optionPrice.reduce((a,b) => a+b, 0);
    return (
        <>
        <table className={styles.roomOptionTable}>
                <thead>
                    <tr>
                        <td><h4 className={styles.optionTitle}>숙박권 사용</h4></td>
                        <td><span className={styles.roomTotal}>+0원</span></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <p><span className={styles.plusTitle}>평일권</span>&nbsp;<span className={styles.plusPrice}>({basket.weekday_gift_price.toLocaleString()}원)</span></p>
                            <p className={styles.AvailableCount}>{basket.weekday_gift_count} 개 사용가능</p>
                        </td>
                        <td><button type='button' className={styles.minus} onClick={onWeekMinus}>―</button>
                            <input className={styles.count} type="text" value={basket.weekday_using_gift} disabled/>
                            <button type='button' className={styles.plus} onClick={onWeekPlus}>+</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p><span className={styles.plusTitle}>주말권</span>&nbsp;<span className={styles.plusPrice}>({basket.weekend_gift_price.toLocaleString()}원)</span></p>
                            <p className={styles.AvailableCount}>{basket.weekend_gift_count} 개 사용가능</p>
                        </td>
                        <td>
                            <button type='button' className={styles.minus}>―</button>
                            <input className={styles.count} type="text" value={basket.weekend_using_gift} disabled/>
                            <button type='button' className={styles.plus}>+</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default TicketOption;