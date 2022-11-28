import React from 'react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './giftDetail.module.css';
import Get from '../../../../service/api/url/Get';
import Banner from '../../../banner/banner';
import CardInfo from '../../../gift/cardInfo/cardInfo';
import GiftInfo from '../../../gift/giftInfo/giftInfo';
import GuideLine from '../../../gift/guideLine/guideLine';
import SideMenu from '../../../sideMenu/sideMenu';

const GiftDetail = () => {
    const location = useLocation().state;
    const gift_id = location.giftId;
    const gift_type = location.giftType;
    const gift_status = location.giftStatus;

    const [gifts, setgifts] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        
        
    const fetchgifts = async () => {
     
        Get.getGiftDetail(gift_id, gift_type,gift_status)
        .then(function (response) {
            setgifts(response);
        })
        .catch(error => {
            setError(error);
        })

        setLoading(false);
        };
        fetchgifts();
    
    }, []);
    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!gifts) return null;
    
    console.log(gifts);

    const cardInfo = {
        gift_id : gifts.gift_id,
        gift_img : gifts.gift_img_url,
        gift_name: gifts.gift_name,
        gift_price: gifts.gift_price,
        gift_receiver : gifts.gift_receiver,
        gift_status: gift_status,
        gift_sender: gifts.gift_sender

        }
    const giftInfo = 
    {   gift_receiver: gifts.gift_receiver,
        receiver_tel : gifts.gift_receiver_tel,
        valid_date: gifts.gift_valid_date,
        gift_state : gifts.gift_state,
        gift_price: gifts.gift_price,
        purchase_id: gifts.purchase_id,
        purchase_date: gifts.purchase_date,
        purchase_method: gifts.purchase_method,
        purchase_charge: gifts.purchase_charge,
        gift_id: gifts.gift_id,
        gift_status: gift_status
    }

    const giftReceiveInfo = {
        gift_sender: gifts.gift_sender,
        gift_price: gifts.gift_price,
        valid_date: gifts.gift_valid_date,
        gift_usage: gifts.gift_usage,
        gift_state: gifts.gift_state,
        gift_status: gift_status
    }
    

    return(
        <>
        <Banner name={"마이페이지"}/>
        <div className="mypage">
            <SideMenu type={"my"}/>
            <div className="pageBox">
                <div className={styles.card}>
                    <CardInfo cardInfo = {cardInfo}/>
                </div>
                <div className={styles.gift}>
                    <GiftInfo giftInfo ={giftInfo} giftReceiveInfo = {giftReceiveInfo}/>
                </div>
                <div className={styles.guideLine}>
                    <GuideLine/>
                </div>
            </div>
        </div>
        </>
    )
};

export default GiftDetail;