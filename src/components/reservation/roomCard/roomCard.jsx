import React from 'react';
import styles from './roomCard.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled, {css} from 'styled-components';

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

         const [clickedNumArr, setClickedNumArr] = useState([]);
        const handleClickToggleBtn = (id) => {
            setClickedNumArr((arr) => {
              let newArr = [];
              arr.map((item) => newArr.push(item));
        
              if (newArr.includes(id)) {
                newArr.splice(newArr.indexOf(id), 1);
              } else {
                newArr.push(id);
              }
              console.log(clickedNumArr);
              return newArr;
            });
          };
        

    return( 
        <>
        {slider === true ? 
        <StyledSlider {...settings}>
            {roomData.map((v) => (
                <div className={styles.roomCardArea} key={v.lodgement_id}>
                    <div className={styles.roomCard} >
                        <Link className={styles.link} to={`/lodgement/${v.lodgement_id}`}><img className={styles.roomImg} src={v.lodgement_img_url} alt='roomImg' /></Link>
                        <button type='button' className={styles.wishBtn} key={v.lodgement_id} onClick={() => {handleClickToggleBtn(v.lodgement_id)}}> 
                            <img className={styles.wish} src={(clickedNumArr.includes(v.lodgement_id)  ? "/img/icon/wishOkIcon.png" : "/img/icon/wish.png")} alt='wish' />
                        </button>
                        <Link className={styles.link} to={`/lodgement/${v.lodgement_id}`}>
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
            </StyledSlider>
            :<>
            {roomData.map((v) => (
                <div className={styles.roomCardArea} key={v.lodgement_id}>
                    <div className={styles.roomCard} >
                        <Link className={styles.link} to={`/lodgement/${v.lodgement_id}`}><img className={styles.roomImg} src={v.lodgement_img_url} alt='roomImg' /></Link>
                        <button type='button' className={styles.wishBtn} key={v.lodgement_id} onClick={() => {handleClickToggleBtn(v.lodgement_id)}}> 
                            <img className={styles.wish} src={(clickedNumArr.includes(v.lodgement_id)  ? "/img/icon/wishOkIcon.png" : "/img/icon/wish.png")} alt='wish' />
                        </button>
                        <Link className={styles.link} to={`/lodgement/${v.lodgement_id}`}>
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
            </>}
        </>
        )
    };
    

export default RoomCard;