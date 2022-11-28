import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import styles from './basket.module.css';
import Baskethotel from '../../baskethotel/baskethotel';
import Get from '../../../service/api/url/Get';

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
        
        Get.getBasket()
        .then(function (response) {
            setbasket(response);
        })
        .catch(error => {
            setError(error);
        })

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