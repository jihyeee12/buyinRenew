import React from 'react';
import Slider from "react-slick";
import styles from '../modal.module.css';
import styled, {css} from 'styled-components';
import { useState } from 'react';


const HotelFullViewModal = ({imgData}) => {
    const [index, setIndex] = useState("0");
    const [clickImg, setClickImg] = useState("0");
    console.log(imgData);
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
            <img className={styles.bigImg} src={imgData[index].lodgement_img_url} alt="bigRoom" />
            
            <StyledSlider {...settings}>
                {imgData.map((room, i) => (
                    <img idx={i} onClick={() => imgClick(i)} 
                    key={room.id} 
                    className={[styles.hotelList , clickImg === i && styles.selectImg].join(" ")} 
                    src={room.lodgement_img_url} 
                    alt="smallRoom" />
                ))}
            </StyledSlider>
            
        </div>
    );
};

export default HotelFullViewModal;