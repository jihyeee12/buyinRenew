import React from 'react';
import styles from './roomCard.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled, {css} from 'styled-components';
import BusinessCard from './businessCard';
import RentZone from './priceBox/rentZone';
import LodgeZone from './priceBox/lodgeZone';
import Delete from 'service/api/url/Delete';
import Post from 'service/api/url/Post';

    const RoomCard = ({state, slider}) => {
        const roomData = state;
        const StyledSlider = styled(Slider)`
            width: 100%;
            height: 100%;
            position: relative;
            .slick-prev::before,
            .slick-next::before{
                opacity: 0;
                display: none;
            }
        `;
        const arrowBtn = css`
            width: 3rem;
            height: 3rem;
            border: none;
            background-color: transparent;
            position: absolute;
            z-index: 1;
        `

        const Pre = styled.div`
            ${arrowBtn}
            left: -4%;
        `
        const Next = styled.div`
            ${arrowBtn}
            right: -4%;
        `

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            autoplay: false,
            focusOnSelect : true,
            slidesToShow: 3,
            slidesToScroll: 3,
            prevArrow: (
                <Pre>
                    <img src="../img/icon/leftBtn.png" alt="" />
                </Pre>
            ),
            nextArrow: (
                <Next>
                    <img src="../img/icon/rightBtn.png" alt="" />
                </Next>
            )
        }
        
        

    return( 
        <>
        {slider === true ? 
        <StyledSlider {...settings}>
            {roomData.map((v) => (
                <div className={styles.roomCardArea} key={v.lodgement_id}>
                    <div className={styles.roomCard} >
                        <Link className={styles.link} to={`/lodgement/${v.lodgement_id}`}><img className={styles.roomImg} src={v.lodgement_img_url} alt='roomImg' /></Link>                      
                        <Link className={styles.link} to={`/lodgement/${v.lodgement_id}`}>
                        <div className={styles.roomInfo} >
                            <p className={styles.pointMark}><img src="../../../img/icon/pointMark.png" alt="ambassador" /> &nbsp;3,000P</p>
                            <p className={styles.HotelName}>{v.lodgement_name}</p>
                            <p className={styles.Location}>
                                <img className={styles.wishIcon} src='/img/icon/location.png' alt='mapIcon'/>
                                <span className={styles.landMark}>{v.landmark}</span></p>
                            <div className={styles.hotelPrice}>
                                <div className={styles.interestZone}>
                                    <p className={styles.interest}>관심 {v.wish_num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                                    <p className={styles.interest}>리뷰 {v.review_num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                                </div>
                                <div className={styles.priceZone}>
                                    <div className={styles.rentZone}>
                                        {v.is_rent && <RentZone priceInfo={v}/>}
                                    </div>
                                    <LodgeZone priceInfo={v}/>
                                </div>
                            </div>
                            {v.is_business === true && <BusinessCard priceInfo={v}/>} 
                        </div>
                        </Link>
                    </div>
                </div>
            ))}
            </StyledSlider>
            :<>
            {roomData.map((v) => (
                <div className={styles.roomCardArea} key={v.lodgement_id}>
                    <div className={styles.roomCard} >
                        <Link className={styles.link} to={`/lodgement/${v.lodgement_id}`}><img className={styles.roomImg} src={v.lodgement_img_url} alt='roomImg' /></Link>
                        <Link className={styles.link} to={`/lodgement/${v.lodgement_id}`}>
                        <div className={styles.roomInfo} >
                            <p className={styles.pointMark}><img src="../../../img/icon/pointMark.png" alt="ambassador" /> &nbsp;1,000P</p>
                            <p className={styles.HotelName}>{v.lodgement_name}</p>
                            <p className={styles.Location}>
                                <img className={styles.wishIcon} src='/img/icon/location.png' alt='mapIcon'/> 
                                <span className={styles.landMark}>{v.landmark}</span>
                            </p>
                            <div className={styles.hotelPrice}>
                                <div className={styles.interestZone}>
                                    <p className={styles.interest}>관심 <span className={styles.interestCount}>{v.wish_num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></p>
                                    <p className={styles.interest}>리뷰 <span className={styles.interestCount}>{v.review_num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></p>
                                </div>
                                <div className={styles.priceZone}>
                                    <div className={styles.rentZone}>
                                        {v.is_rent && <RentZone priceInfo={v}/>}
                                    </div>
                                    <LodgeZone priceInfo={v}/>
                                </div>
                            </div>
                            {v.is_business === true && <BusinessCard priceInfo={v}/>} 
                            
                        </div>
                        </Link>
                    </div>
                </div>
            ))}
            </>}
        </>
        )
    };
    

export default RoomCard;