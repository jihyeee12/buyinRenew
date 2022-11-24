import React from 'react';
import Slider from "react-slick";
import styles from '../modal.module.css';
import styled, {css} from 'styled-components';
import { useState } from 'react';


const HotelFullViewModal = () => {
    const [index, setIndex] = useState("0");
    const [clickImg, setClickImg] = useState("0");
    
    const imgClick = (i) => {
        setIndex(i);
        setClickImg(i);
    }
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
        left: -3%;
    `
    const Next = styled.div`
        ${arrowBtn}
        right: -3%;
    `
    const hotelImg = [
        {
            "id": 4170,
            "lodgement_img_url": "https://www.buyinhotel.co.kr/images/lodgements/ekklim031/ekklim031_99_000_2022-08-19-17_57_27.jpg"
        },
        {
            "id": 4171,
            "lodgement_img_url": "https://www.buyinhotel.co.kr/images/lodgements/ekklim031/ekklim031_99_069_2022-08-19-17_57_27.jpg"
        },
        {
            "id": 4172,
            "lodgement_img_url": "https://www.buyinhotel.co.kr/images/lodgements/ekklim031/ekklim031_99_070_2022-08-19-17_57_27.jpg"
        },
        {
            "id": 4173,
            "lodgement_img_url": "https://www.buyinhotel.co.kr/images/lodgements/ekklim031/ekklim031_99_075_2022-08-19-17_57_27.jpg"
        },
        {
            "id": 4174,
            "lodgement_img_url": "https://www.buyinhotel.co.kr/images/lodgements/ekklim031/ekklim031_99_076_2022-08-19-17_57_27.jpg"
        },
        {
            "id": 4175,
            "lodgement_img_url": "https://www.buyinhotel.co.kr/images/lodgements/ekklim031/ekklim031_99_077_2022-08-19-17_57_27.jpg"
        },
        {
            "id": 4176,
            "lodgement_img_url": "https://www.buyinhotel.co.kr/images/lodgements/ekklim031/ekklim031_99_078_2022-08-19-17_57_27.jpg"
        },
        {
            "id": 4184,
            "lodgement_img_url": "https://www.buyinhotel.co.kr/images/lodgements/ekklim031/ekklim031_99_086_2022-08-19-17_57_28.jpg"
        }
  ]

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 7,
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
    };

    return (
        <div className={styles.hotelImgBox}>
            <img className={styles.bigImg} src={hotelImg[index].lodgement_img_url} alt="bigRoom" />
            
            <StyledSlider {...settings}>
                {hotelImg.map((room, i) => (
                    <img idx={i} onClick={() => imgClick(i)} key={room.id} className={[styles.hotelList , clickImg === i && styles.selectImg].join(" ")} src={room.lodgement_img_url} alt="smallRoom" />
                ))}
            </StyledSlider>
            
        </div>
    );
};

export default HotelFullViewModal;