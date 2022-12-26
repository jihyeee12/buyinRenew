import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from '../options.module.css';

const TicketOption = ({basket}) => {
    console.log(basket);
    const [ticketOpt, setTicketOption] = useState();
    useEffect(() => {
        setTicketOption(basket);
    },[]);
    
    console.log(ticketOpt);
    
    const plusCount = (index) => {
        let usingData = null;
        
            if(index === 1){
                usingData = ticketOpt.weekday_using_gift;
                
            } else{
                usingData = ticketOpt.weekend_using_gift;
                
            }
        
        const addCount = (
            {...ticketOpt, weekday_using_gift : usingData + 1}
        )
        setTicketOption(addCount);
        console.log(usingData);
    }
    
        // const addOpt = (index) =>{
        //     if(index === 1){
        //         // if(basket.weekday_using_gift > basket.weekday_gift_count){
        //             return {...basket, weekday_using_gift: basket.weekday_using_gift +1}
        //         //}
        //     } else {
        //         if(basket.weekend_using_gift > basket.weekend_gift_count){
        //             return {...basket, weekend_using_gift: basket.weekend_using_gift +1}
        //         }
        //     }
        // }
        
        const minusOpt = (index) => {
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
                        <td><span className={styles.roomTotal}>- 0원</span></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <p><span className={styles.plusTitle}>평일권</span>&nbsp;<span className={styles.plusPrice}>({ticketOpt.weekday_gift_price.toLocaleString()}원)</span></p>
                            <p className={styles.AvailableCount}>{ticketOpt.weekday_gift_count} 개 사용가능</p>
                        </td>
                        <td><button type='button' className={styles.minus} onClick={() => minusOpt(1)}>―</button>
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
                            <button type='button' className={styles.minus} onClick={() => minusOpt(2)} >―</button>
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