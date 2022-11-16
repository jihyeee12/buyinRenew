import React, { useState } from 'react';
import Baskethotel from '../../baskethotel/baskethotel';
import styles from './basket.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

const Basket = () => {
    const navigate = useNavigate();

    const linkpay = () => {
        navigate('/payment');
    }
    const [basket, setbasket] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

 
    useEffect(() => {
        
    const fetchbasket = async () => {
        try {
            // 요청이 시작 할 때에는 error 와 basket 를 초기화하고
            setError(null);
            setbasket(null);
            // loading 상태를 true 로 바꿉니다.
            setLoading(true);
            const response = await axios.get(
               `/shopbaskets`,{headers:{'Contents-type': 'application/json','user': 'AppIDEtest'}}); //get은 data 넣을 자리 필요없으니까 안넣어도 됨
            setbasket(response.data.data); // 데이터는 response.data 안에 들어있습니다.
            
        } catch (e) {
            setError(e);
        }
        setLoading(false);
        };
        fetchbasket();
    
    }, []);
    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!basket) return null;
    
    console.log(basket);

    return(
        <>
            <div className="titleBar">
                <p>장바구니</p>
            </div>
            <div className="container">
                <div className={styles.hotelInfo}>
                    <img className={styles.hotelImg} src={basket.lodgement_img_url} alt="hotelImg" />
                    <h4 className={styles.hotelName}>{basket.lodgement_name}</h4>
                </div>
                <Baskethotel date = {basket.date_string} shopbaskets = {basket.shopbaskets}/>
                <div className={styles.payBtns}>
                    <button type='button' className={styles.payBtn} onClick={linkpay}>1,000원 결제하기</button>
                </div>
            </div>
        </>
    )
};

export default Basket;