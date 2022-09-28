import React from 'react';
import Banner from '../../../banner/banner';
import SideMenu from '../sideMenu/sideMenu';
import styles from './giftBox.module.css';
import { useNavigate } from 'react-router-dom';

const GiftBox = (props) => {
    const navigate = useNavigate();

    const giftDetail = () =>{
        navigate('/giftDetail');
    }

    return(
        <>
        <Banner name={"마이페이지"}/>
        <div className="mypage">
            <SideMenu type={'my'}/>
            <div className="pageBox">
            <section className="reservation">
                    <ul className="tabMenu">
                        <li className="selectTab">보낸선물</li>
                        <li>받은선물</li>
                    </ul>
                    <div className={"tabContent " + styles.giftBox}>

                        <div className={styles.giftCard} onClick={giftDetail}>
                            <div className={styles.giftSend}>
                                <p className={styles.senderName}>TO. 000님 <span className={styles.giftState}>사용전</span></p>
                            </div>
                            <div className={styles.giftCardInfo}>
                                <div className={styles.giftImg}>
                                    <img className={styles.cardImg} src='../../../img/roomImg/giftcard.png' alt='cardImg' />
                                </div>
                                <div className={styles.giftInfo}>
                                    <p>기프트카드 0원권</p>
                                    <p className={styles.giftPrice}>0원</p>
                                    <div className={styles.giftPeriod}>
                                        <p>2022.03.30</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        </div>
        </div>
        </>
    )
};

export default GiftBox;