import React from 'react';
import styles from './rooms.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styled, {css} from 'styled-components';
import Slider from "react-slick";
import Modal from '../../modal/modal';
import Calendar from '../../date/date';

const Rooms = () => {
    const navigate = useNavigate();

    const linkOption = () => {
        navigate('/roomoption');
    }
    const [modalOpen, setModalOpen] = useState(false);
    const [cancelModal, setCancelModal] = useState(false);
    const [roomModal, setRoomModal] = useState(false);
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

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
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
    
    const roomImgs = [
        {   "room_image_id": 12328,
            "room_img_url": "https://www.buyinhotel.co.kr/images/lodgements/aurahotel/aurahotel_02_000_2022-09-08-17_44_22.jpg",
            "items": []},
        {   "room_image_id": 13197,
            "room_img_url": "https://www.buyinhotel.co.kr/images/lodgements/aurahotel/aurahotel_02_024_2022-09-08-17_44_22.jpg",
            "items": []},
        {   "room_image_id": 13198,
            "room_img_url": "https://www.buyinhotel.co.kr/images/lodgements/aurahotel/aurahotel_02_025_2022-09-08-17_44_22.jpg",
            "items": []},
        {   "room_image_id": 13199,
            "room_img_url": "https://www.buyinhotel.co.kr/images/lodgements/aurahotel/aurahotel_02_026_2022-09-08-17_44_22.jpg",
            "items": []},
        {   "room_image_id": 13200,
            "room_img_url": "https://www.buyinhotel.co.kr/images/lodgements/aurahotel/aurahotel_02_027_2022-09-08-17_44_22.jpg",
            "items": []},
        {   "room_image_id": 13201,
            "room_img_url": "https://www.buyinhotel.co.kr/images/lodgements/aurahotel/aurahotel_02_028_2022-09-08-17_44_22.jpg",
            "items": []},
        {   "room_image_id": 13202,
            "room_img_url": "https://www.buyinhotel.co.kr/images/lodgements/aurahotel/aurahotel_02_029_2022-09-08-17_44_22.jpg",
            "items": []},
        {   "room_image_id": 13203,
            "room_img_url": "https://www.buyinhotel.co.kr/images/lodgements/aurahotel/aurahotel_02_030_2022-09-08-17_44_22.jpg",
            "items": []},
        {   "room_image_id": 13204,
            "room_img_url": "https://www.buyinhotel.co.kr/images/lodgements/aurahotel/aurahotel_02_034_2022-09-08-17_44_22.jpg",
            "items": []}
    ]

    return(
        <>
        <div className={styles.rooms}>
            <div className={styles.roomImgs}>
                    <img className={styles.bigRoom} src={roomImgs[index].room_img_url} alt="bigRoom" />
                <div className={styles.chagneImg}>
                    <div className={styles.roomchange}>     
                        <StyledSlider {...settings}>
                            {roomImgs.map((room, i) => (
                                <img idx={i} onClick={() => imgClick(i)} key={room.room_image_id} className={[styles.smallRoom , clickImg === i && styles.selectImg].join(" ")} src={room.room_img_url} alt="smallRoom" />
                            ))}
                        </StyledSlider>
                    </div>
                    
                </div>
            </div>
            <div className={styles.roomInfo}>
                <div className={styles.roomName}>
                    <h4>스탠다드</h4>
                    <p>기준 2명/ 최대 2명</p>
                    <p>넷플릭스 이용가능</p>
                </div>
                <div className={styles.date}>
                    <Calendar />    
                </div>
                <div className={styles.rentType}>
                    <div className={styles.rent}>
                        <p className={styles.discount}><span className={styles.percent}>50%</span><span className={styles.listPrice}>40,000원</span></p>
                        <div className={styles.kinds}>
                            <p className={styles.typeName}>대실<span className={styles.availTime}>최대 3시간 이용가능</span></p>
                            <p className={styles.salePrice}>20,000원</p>
                        </div>
                    </div>
                    <div className={styles.lodge}>
                        <p className={styles.discount}><span className={styles.percent}>50%</span><span className={styles.listPrice}>40,000원</span></p>
                        <div className={styles.kinds}>
                            <p className={styles.typeName}>숙박<span className={styles.availTime}>18:00부터 12:00까지</span></p>
                            <p className={styles.salePrice}>35,000원</p>
                        </div>
                    </div>
                </div>
                <div className={styles.roomInfoDetail}>
                    <h4 className={styles.detailTitle}>객실정보 <span className={styles.detailPop} onClick={() => setRoomModal(!roomModal)}>상세정보&nbsp;<img src="/img/icon/rightArrow.png" alt="right" /></span></h4>
                    {roomModal && <Modal type={"room"} setRoomModal = {() => setRoomModal(!roomModal)}/>}
                    <div className={styles.infoIconBox}>
                        <div className={styles.infoIcon}>
                            <img src="/img/icon/parking.png" alt="parking" />
                            <p>주차가능</p>
                        </div>
                        <div className={styles.infoIcon}>
                            <img src="/img/icon/parking.png" alt="parking" />
                            <p>주차가능</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.userInfo}>
                <div className={styles.infoText}>
                    <p className={styles.infoTitle}>예약공지</p>
                    <ul className={styles.infoList}>
                        <li>객실요금은 2인 입실 기준이며, 인원 추가시 프론트로 문의 후 현장에서 추가결제 부탁드립니다.</li>
                        <li>미성년자의 입실 가능 여부는 직접 제휴점에 확인 후 예약 진행해주시기 바랍니다.</li>
                        <li>미성년자 혼숙예약으로 인해 발생하는 입실 거부에 대해서는 취소/환불이 불가합니다.</li>
                        <li>제휴점 사정에 의한 취소 발생 시 100% 환불 처리됩니다.</li>
                        <li>제휴점 사정으로 객실 정보가 변경될 수 있습니다. 이로인한 불이익은 당사가 책임지지 않습니다.</li>
                    </ul>
                    <p className={styles.infoTitle}>취소규정 <span className={styles.detailPop} onClick={() => setCancelModal(!cancelModal)}>상세보기&nbsp;<img src="/img/icon/rightArrow.png" alt="right" /></span></p>
                    {cancelModal && <Modal type={"cancel"} setCancelModal={() => setCancelModal(!cancelModal)} />}
                    <ul className={styles.infoList}>
                        <li>모텔의 경우 예약완료 시각으로부터 1시간 이내인 경우 바이인호텔 앱을 통해 전액취소가 가능합니다. 단, 1시간 이내라도 시간 경과시 취소 불가합니다.</li>
                        <li>상세한 취소 규정은 [상세보기]에서 확인하실 수 있습니다.</li>
                    </ul>
                </div>
                <div className={styles.reservationBtn}>
                    <img src="/img/icon/giftBtn.png" alt="giftBtn" onClick={()=> setModalOpen(!modalOpen)}/>
                    {modalOpen && <Modal type={"buyRoom"} setModalOpen={() => setModalOpen(!modalOpen)} />}
                    <button type='button' className={styles.rentBtn}>대실예약</button>
                    <button type='button' className={styles.lodgeBtn} onClick={linkOption}>숙박예약</button>
                </div>
            </div>
        </div>
        </>
    )
   
            
};

export default Rooms;