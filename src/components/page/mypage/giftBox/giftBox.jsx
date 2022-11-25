import React from 'react';
import Banner from '../../../banner/banner';
import SideMenu from '../../../sideMenu/sideMenu';
import styles from './giftBox.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const GiftBox = () => {
    const navigate = useNavigate();

    const giftDetail = (giftId, giftType,giftStatus) =>{
        navigate('/giftDetail',{
            state: {
                giftId: giftId,
                giftType : giftType,
                giftStatus : giftStatus
            }
        });
    }
    const [index, setIndex] = useState(0);

    const tablist = [
        {id: 0, title: "보낸선물"},
        {id: 1, title: "받은 선물"}
    ]

    const [gifts, setgifts] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    

    useEffect(() => {
    const fetchgifts = async () => {
        try {
            // 요청이 시작 할 때에는 error 와 gifts 를 초기화하고
            setError(null);
            setgifts(null);
            // loading 상태를 true 로 바꿉니다.
            setLoading(true);
            const response = await axios.get(
                '/gifts',{headers:{'Contents-type': 'application/json','user': 'AppIDEtest'}}); //get은 data 넣을 자리 필요없으니까 안넣어도 됨
            setgifts(response.data.data); // 데이터는 response.data 안에 들어있습니다.
            
        } catch (e) {
            setError(e);
        }
        setLoading(false);
        };
        fetchgifts();
    
    }, []);
    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!gifts) return null;
    
    console.log(gifts);

    const sendGift = gifts.gift_sends;
    const receiveGift = gifts.gift_receives;


    return(
        <>
        <Banner name={"마이페이지"}/>
        <div className="mypage">
            <SideMenu type={'my'}/>
            <div className="pageBox">
            <section className="reservation">
                    <ul className="tabMenu">
                        {tablist.map(item => (
                            <li
                                key={item.id}
                                className={index === item.id? "selectTab": null}
                                onClick={()=> setIndex(item.id)}
                            >{item.title}</li>
                            ))
                        }
                        
                    </ul>
                    <div className={"tabContent " + styles.giftBox}>
                        {tablist.filter(item => index === item.id).map(item => {
                            if(item.id === 0){
                                return <>
                                {sendGift.map(send => (
                                <div className={styles.giftCard} key={send.gift_id} type={send.gift_type} onClick={() => giftDetail(send.gift_id, send.gift_type, "send")}>
                                    <div className={styles.giftSend}>
                                        <p className={styles.senderName}>TO. {send.gift_receiver}님</p>
                                    </div>
                                    <div className={styles.giftCardInfo}>
                                        <div className={styles.giftImg}>
                                            <img className={styles.cardImg} src={send.gift_img_url} alt='cardImg' />
                                        </div>
                                        <div className={styles.giftInfo}>
                                            <p>{send.gift_name}</p>
                                            <p className={styles.giftPrice}>{send.gift_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
                                            <div className={styles.giftPeriod}>
                                                <p>{send.gift_valid_date}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                ))}
                                
                            </>
                            } else if(item.id === 1){
                                return <>
                                {receiveGift.map(receive => (
                                    <div className={styles.giftCard} key={receive.gift_id}  type={receive.gift_type} onClick={() => giftDetail(receive.gift_id, receive.gift_type, "receive")}>
                                        <div className={styles.giftSend}>
                                            <p className={styles.senderName}>FROM. {receive.gift_sender}님 <span 
                                            className={styles.giftState}
                                            style={{color: receive.gift_state === "사용 전" ? "#3399FF" : "#DB2D2D"}}
                                            >{receive.gift_state}</span></p>
                                        </div>
                                        <div className={styles.giftCardInfo}>
                                            <div className={styles.giftImg}>
                                                <img className={styles.cardImg} src={receive.gift_img_url} alt='cardImg' />
                                            </div>
                                            <div className={styles.giftInfo}>
                                                <p>{receive.gift_name}</p>
                                                <p className={styles.giftPrice}>{receive.gift_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
                                                <div className={styles.giftPeriod}>
                                                    <p>{receive.gift_valid_date}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                
                                </>
                            }
                        })}
                        
                    </div>
            </section>
        </div>
        </div>
        </>
    )
};

export default GiftBox;