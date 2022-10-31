import React from 'react';
import styles from './roomCard.module.css';
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';

    const RoomCard = () => {
        const navigate = useNavigate();

        const linkRoom = () =>{
            navigate('/lodgement');
        }
        
        const roomData = [
            {dc_rate: "66.7",
            is_ambassadr: false,
            is_wished: false,
            landmark: "근린공원",
            list_price: 90000,
            lodge_dc_rate: "66.7",
            lodge_list_price: 90000,
            lodge_sale_price: 30000,
            lodgement_id: 256,
            lodgement_img_url: "https://www.buyinhotel.co.kr/images/lodgements/hillmotel/hillmotel_99_000_2022-09-27-17_12_02.jpg",
            lodgement_name: "광주 하남 힐 모텔",
            rent_dc_rate: "50.0",
            rent_list_price: 30000,
            rent_sale_price: 15000,
            review_num: 0,
            sale_price: 30000,
            wish_num: 0},

            {dc_rate: "65.0",
            is_ambassadr: false,
            is_wished: false,
            landmark: "국립아시아문화전당",
            list_price: 100000,
            lodge_dc_rate: "65.0",
            lodge_list_price: 100000,
            lodge_sale_price: 35000,
            lodgement_id: 257,
            lodgement_img_url: "https://www.buyinhotel.co.kr/images/lodgements/grang/grang_99_000_2022-09-28-17_51_45.jpg",
            lodgement_name: "광주 더그랑 모텔",
            rent_dc_rate: "40.0",
            rent_list_price: 25000,
            rent_sale_price: 15000,
            review_num: 0,
            sale_price: 35000,
            wish_num: 5
            },
            {
            dc_rate: "50.0",
            is_ambassadr: false,
            is_wished: false,
            landmark: "광주시청",
            list_price: 160000,
            lodge_dc_rate: "50.0",
            lodge_list_price: 160000,
            lodge_sale_price: 80000,
            lodgement_id: 258,
            lodgement_img_url: "https://www.buyinhotel.co.kr/images/lodgements/hotelb/hotelb_99_000_2022-10-01-12_02_33.jpg",
            lodgement_name: "광주 호텔 B",
            rent_list_price: null,
            rent_sale_price: null,
            review_num: 0,
            sale_price: 80000,
            wish_num: 2
            },
            {
            dc_rate: "43.8",
            is_ambassadr: false,
            is_wished: false,
            landmark: "갓바위 공원",
            list_price: 80000,
            lodge_dc_rate: "43.8",
            lodge_list_price: 80000,
            lodge_sale_price: 45000,
            lodgement_id: 259,
            lodgement_img_url: "https://www.buyinhotel.co.kr/images/lodgements/viphotel/viphotel_99_000_2022-10-04-17_18_26.jpg",
            lodgement_name: "목포 VIP 호텔 ",
            rent_list_price: null,
            rent_sale_price: null,
            review_num: 0,
            sale_price: 45000,
            wish_num: 2
            }
        ]
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
                        <img className={styles.roomImg} onClick={linkRoom} src={v.lodgement_img_url} alt='roomImg' />
                        <img className={styles.wish} key={v.lodgement_id} src={(v.lodgement_id === clickedNum  ? "/img/icon/wishOkIcon.png" : "/img/icon/wish.png")}onClick={() => {setClickedNum(v.lodgement_id)}} alt='wish' />
                        <div className={styles.roomInfo} onClick={linkRoom} >
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
                    </div>
                </div>
            ))}
        </Slider>
        </>
        )
    };
    

export default RoomCard;