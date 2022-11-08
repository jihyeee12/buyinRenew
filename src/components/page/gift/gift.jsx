import React from 'react';
import Paymethod from '../../paymethod/paymethod';
import Userinfo from '../../reservation/userinfo/userinfo';
import styles from './gift.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const Gift = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const linkgift = () =>{
        navigate('/giftResult');
    }
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const locationHref= location.state;
    
    useEffect(() => {
        const giftUrl= () => {
            if(locationHref.name === "giftcard"){
                return `/gift-basic-info?giftcard=${locationHref.giftCard_Id}`
            } else if(locationHref.name === "room"){
                return `/gift-basic-info?giftcard=${locationHref.giftCard_Id}`
            };
        }
        console.log(giftUrl());
        const fetchUsers = async () => {
        try {
            // 요청이 시작 할 때에는 error 와 users 를 초기화하고
            setError(null);
            setUsers(null);
            // loading 상태를 true 로 바꿉니다.
            setLoading(true);
            const response = await axios.get(
                giftUrl(),null,{params:{isGiftcard: "true", room: "null", isWeekend: "null" }},{headers:{'Contents-type': 'application/json',user: "AppIDEtest"}});
            setUsers(response.data.data); // 데이터는 response.data 안에 들어있습니다.
            console.log(response);
        } catch (e) {
            setError(e);
        }
        setLoading(false);
        };
        fetchUsers();
    
    }, []);
    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!users) return null;
    
    console.log(users);
      
    return(
        <>
        <div className={styles.giftBox}>
            <div>
                <Userinfo/>
                <Paymethod/>
            </div>
            <div>
                <div className={styles.giftName}>
                    <img src={users.gift_img_url} alt="giftRoom" />
                    <h4>{users.gift_name} </h4>
                    <p>{ users.gift_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
                </div>
                <label className={styles.agreeBox}><input type="checkbox" /> <span className={styles.agreeTxt}>주문정보 및 서비스 이용약관 동의</span>&nbsp;<span className={styles.blue}>(필수)</span></label>
                <button type='button' className={styles.reservationBtn} onClick={linkgift}>{users.gift_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원 결제하기</button>
                <p className={styles.notice}>발행일로부터 1년 이내 수신자에게 90% 환불 가능하며, 판매가 중단되거나 판매가 변경된 상품의 경우 기간연장이 불가하여 환불처리됩니다.</p>
            </div>
        </div>
        </>
    )
};

export default Gift;