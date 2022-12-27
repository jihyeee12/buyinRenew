import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from '../options.module.css';

const TicketOption = ({basket}) => {
    console.log(basket);
    const [ticketOpt, setTicketOption] = useState(basket);
    useEffect(() => {
        setTicketOption(basket);
    },[]);
    
    const plusCount = (index) => {
        const addCount = () => {
            if(index === 1){
                if(ticketOpt.weekday_using_gift < ticketOpt.weekday_gift_count){
                    return {...ticketOpt, weekday_using_gift : ticketOpt.weekday_using_gift + 1}
                } else return ticketOpt;
            } else{
                if(ticketOpt.weekend_using_gift < ticketOpt.weekend_gift_count){
                    return {...ticketOpt, weekend_using_gift : ticketOpt.weekend_using_gift + 1}
                } else return ticketOpt;
            }
        }
        setTicketOption(addCount);
    }
    const minusCount = (index) => {
        const minusOpt = () => {
            if(index === 1) {
                if(ticketOpt.weekday_using_gift > 0){
                    return {...ticketOpt, weekday_using_gift: ticketOpt.weekday_using_gift -1 };
                } else return ticketOpt;
            } else{
                if(ticketOpt.weekend_using_gift > 0){
                    return {...ticketOpt, weekend_using_gift: ticketOpt.weekend_using_gift -1 };
                } else return ticketOpt;
            }
        }
        setTicketOption(minusOpt);
    }
    const weekDayPrice = ticketOpt.weekday_gift_price * ticketOpt.weekday_using_gift;
    const weekendDayPrice = ticketOpt.weekend_gift_price * ticketOpt.weekend_using_gift;
    const totalOptionPrice = weekDayPrice + weekendDayPrice;
    
    return (
        <>
        <table className={styles.roomOptionTable}>
                <thead>
                    <tr>
                        <td><h4 className={styles.optionTitle}>숙박권 사용</h4></td>
                        <td><span className={styles.roomTotal}>- {totalOptionPrice.toLocaleString()}원</span></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <p><span className={styles.plusTitle}>평일권</span>&nbsp;<span className={styles.plusPrice}>({ticketOpt.weekday_gift_price.toLocaleString()}원)</span></p>
                            <p className={styles.AvailableCount}>{ticketOpt.weekday_gift_count} 개 사용가능</p>
                        </td>
                        <td><button type='button' className={styles.minus} onClick={() => minusCount(1)}>―</button>
                            <input className={styles.count} type="text" value={ticketOpt.weekday_using_gift} disabled/>
                            <button type='button' className={styles.plus} onClick={() => plusCount(1)}>+</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p><span className={styles.plusTitle}>주말권</span>&nbsp;<span className={styles.plusPrice}>({ticketOpt.weekend_gift_price.toLocaleString()}원)</span></p>
                            <p className={styles.AvailableCount}>{ticketOpt.weekend_gift_count} 개 사용가능</p>
                        </td>
                        <td>
                            <button type='button' className={styles.minus} onClick={() => minusCount(2)} >―</button>
                            <input className={styles.count} type="text" value={ticketOpt.weekend_using_gift} disabled/>
                            <button type='button' className={styles.plus} onClick={() => plusCount(2)}>+</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default TicketOption;