import React from 'react';
import Banner from '../../../banner/banner';
import SideMenu from '../../../sideMenu/sideMenu';
import styles from './giftBox.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const GiftBox = (props) => {
    const navigate = useNavigate();

    const giftDetail = () =>{
        navigate('/giftDetail');
    }
    const [index, setIndex] = useState(0);

    const tablist = [
        {id: 0, title: "보낸선물"},
        {id: 1, title: "받은 선물"}
    ]

    const sendGift = [
        {   gift_id: 0, 
            gifttype: 0,
            gift_img_url: null,
            gift_receiver:"강지혜",
            gift_name: "[기프트카드] 기프트카드 30,000원권",
            gift_price: 30000,
            gift_valid_date: "2022.01.01~ 2022.01.02"
        },
        {   gift_id: 0, 
            gifttype: 0,
            gift_img_url: null,
            gift_receiver:"강지혜",
            gift_name: "[기프트카드] 기프트카드 10,000원권",
            gift_price: 10000,
            gift_valid_date: "2022.01.01~ 2022.01.02"
        }
    ]
    const receiveGift = [
        {   gift_id: 0, 
            gifttype: 0,
            gift_img_url: null,
            gift_receiver:"강지혜",
            gift_name: "[기프트카드] 기프트카드 50,000원권",
            gift_state: "사용 전",
            gift_price: 50000,
            gift_valid_date: "2022.01.01~ 2022.01.02"
        },
        {   gift_id: 0, 
            gifttype: 0,
            gift_img_url: null,
            gift_receiver:"강지혜",
            gift_name: "[기프트카드] 기프트카드 30,000원권",
            gift_state: "사용 완료",
            gift_price: 30000,
            gift_valid_date: "2022.01.01~ 2022.01.02"
        }
    ]

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
                                <div className={styles.giftCard} onClick={giftDetail}>
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
                                    <div className={styles.giftCard} onClick={giftDetail}>
                                        <div className={styles.giftSend}>
                                            <p className={styles.senderName}>FROM. {receive.gift_receiver}님 <span 
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