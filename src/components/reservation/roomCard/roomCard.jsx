import React from 'react';
import styles from './roomCard.module.css';
import { Link, useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';

    const RoomCard = ({state}) => {
        const navigate = useNavigate();

        const linkRoom = () =>{
            navigate('/lodgement');
        }
        
         const roomData = state;
        
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3
        }
        
        const [clickedNum, setClickedNum] = useState();
        
    return( 
        <>
        <Slider {...settings}>
            {roomData.map((v) => (
                <div className={styles.roomCardArea}>
                    <div className={styles.roomCard} >
                        <Link to={`/lodgement/${v.lodgement_id}`}><img className={styles.roomImg} src={v.lodgement_img_url} alt='roomImg' /></Link>
                        <img className={styles.wish} key={v.lodgement_id} src={(v.lodgement_id === clickedNum  ? "/img/icon/wishOkIcon.png" : "/img/icon/wish.png")}onClick={() => {setClickedNum(v.lodgement_id)}} alt='wish' />
                        <Link to={`/lodgement/${v.lodgement_id}`}>
                        <div className={styles.roomInfo} >
                            <p className={styles.HotelName}>{v.lodgement_name}</p>
                            <p className={styles.Location}><img className={styles.wishIcon} src='/img/icon/location.png' alt='mapIcon'/> {v.landmark}</p>
                            <div className={styles.hotelPrice}>
                                <div className={styles.interestZone}>
                                    <p className={styles.interest}>관심 <span className={styles.interestCount}>{v.wish_num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></p>
                                    <p className={styles.interest}>리뷰 <span className={styles.interestCount}>{v.review_num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></p>
                                </div>
                                <div className={styles.priceZone}>
                                    {v.rent_list_price === null ? <><br/><br/></>: <><p className={styles.discounts}><span className={styles.discount}>{v.rent_dc_rate}%</span><span className={styles.discountPrice}>{v.rent_list_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</span></p>
                                    <p className={styles.roomPrice}>대실 {v.rent_sale_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p></>}
                                    
                                    <p className={styles.discounts}><span className={styles.discount}>{v.lodge_dc_rate}%</span><span className={styles.discountPrice}>{v.lodge_list_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</span></p>
                                    <p className={styles.roomPrice}>숙박 {v.lodge_sale_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
                                </div>
                            </div>
                        </div>
                        </Link>
                    </div>
                </div>
            ))}
        </Slider>
        </>
        )
    };
    

export default RoomCard;