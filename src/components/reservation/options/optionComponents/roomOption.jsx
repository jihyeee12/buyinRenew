import React from 'react';
import { useEffect , useState } from 'react';
import styles from '../options.module.css';

const RoomOption = ({optionData}) => {
    
    const [options, setOptions] = useState([]);
    useEffect(()=> {
        setOptions(optionData);
    },[]);
    
    const onPlus = (optionId) => {
        const addOpt = options.map(product => {
            if(optionId === product.option_id){
                return {...product, option_count: product.option_count +1}
            } else return product;
        })
        setOptions(addOpt);
    };


    const onMinus = (optionId) => {
        const minusOpt = options.map(product => {
            if(optionId === product.option_id && product.option_count > 0){
                return {...product, option_count: product.option_count -1 };
            } else return product;
        })
        setOptions(minusOpt);
    } 

    const optionPrice = options.map(price => {
        return Object.values(price)[1] * price.option_count;
    });
    const totalOptionPrice = optionPrice.reduce((a,b) => a+b, 0);
    
    return (
        <table className={styles.roomOptionTable}>
            <thead>
                <tr>
                    <td><h4 className={styles.optionTitle}>객실 옵션</h4></td>
                    <td><span className={styles.roomTotal}>+ {totalOptionPrice.toLocaleString()}원</span></td>
                </tr>
            </thead>
            <tbody>
                {options.map((room) => (
                    <tr>
                        <td>
                            <span className={styles.plusTitle}>{room.option_name}</span>&nbsp;<span className={styles.plusPrice}>({room.option_price.toLocaleString()}원)</span></td>
                        <td><button type='button' className={styles.minus} onClick={() => onMinus(room.option_id)}>―</button>
                            <input name={room.option_id} className={styles.count} type="text" value={room.option_count} disabled/>
                            <button type='button' className={styles.plus} onClick={() => onPlus(room.option_id)}>+</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default RoomOption;