import React from 'react';
import styles from './gift.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState ,useEffect } from 'react';
import Paymethod from '../../paymethod/paymethod';
import Userinfo from '../../reservation/userinfo/userinfo';
import Get from '../../../service/api/url/Get';

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
    const giftCardName = locationHref.name;
    const giftCardId = locationHref.giftCard_Id;
    
    useEffect(() => {
    const fetchUsers = async () => {
    
        Get.getGiftBasicInfo(giftCardName, giftCardId)
        .then(function (response) {
            setUsers(response);
        })
        .catch(error => {
            setError(error);
        })

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
                <Userinfo users = {users}/>
                <Paymethod name={"gift"}/>
            </div>
            <div>
                <div className={styles.giftName}>
                    <img src={users.gift_img_url} alt="giftRoom" />
                    <h4>{users.gift_name} </h4>
                    <p>{ users.gift_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
                </div>
                <label className={styles.agreeBox}><input type="checkbox" /> <span className={styles.agreeTxt}>주문정보 및 서비스 이용약관 동의</span>&nbsp;<span className={styles.blue}>(필수)</span></label>
                <button type='button' className={styles.reservationBtn} key={users.gift_type_id} onClick={linkgift}>{users.gift_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원 결제하기</button>
                <p className={styles.notice}>발행일로부터 1년 이내 수신자에게 90% 환불 가능하며, 판매가 중단되거나 판매가 변경된 상품의 경우 기간연장이 불가하여 환불처리됩니다.</p>
            </div>
        </div>
        </>
    )
};

export default Gift;