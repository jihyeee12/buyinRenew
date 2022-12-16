import React from 'react';
import styles from './rooms.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState ,useEffect } from 'react';
import styled, {css} from 'styled-components';
import Slider from "react-slick";
import Modal from '../../modal/modal';
import Calendar from '../../date/date';
// import BusinessBox from '../../reservation/roomprice/businessBox/businessBox';
import Get from '../../../service/api/url/Get';

const Rooms = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const roomId = location.state.id;
    
    const [modalOpen, setModalOpen] = useState(false);
    const [cancelModal, setCancelModal] = useState(false);
    const [roomModal, setRoomModal] = useState(false);
    // const [businessModal, setBusinessModal] = useState(false);
    const [index, setIndex] = useState("0");
    const [clickImg, setClickImg] = useState("0");
    
    const linkOption = (roomType) => {
        navigate('/roomoption',{
            state:{
                roomType: roomType
            }
        });
    }
    const [roomInfo, setroomInfo] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const checkin = '2022.12.24';
    const checkout = '2022.12.25';

    useEffect(() => {
      
    const fetchroomInfo = async () => {

        Get.getRoomDetails(roomId,checkin,checkout)
        .then(function (response) {
            setroomInfo(response);
        })
        .catch(error => {
            setError(error);
        })
        setLoading(false);
        };
        fetchroomInfo();
    
    }, [roomId]);
    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!roomInfo) return null;
    
    console.log(roomInfo);


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
    
    return(
        <>
        <div className={styles.rooms}>
            <div className={styles.roomImgs}>
                    <img className={styles.bigRoom} src={roomInfo.room_images[index].room_img_url} alt="bigRoom" />
                <div className={styles.chagneImg}>
                    <div className={styles.roomchange}>     
                        <StyledSlider {...settings}>
                            {roomInfo.room_images.map((room, i) => (
                                <img idx={i} onClick={() => imgClick(i)} key={room.id} className={[styles.smallRoom , clickImg === i && styles.selectImg].join(" ")} src={room.room_img_url} alt="smallRoom" />
                            ))}
                        </StyledSlider>
                    </div>
                    
                </div>
            </div>
            <div className={styles.roomInfo}>
                <div className={styles.roomName}>
                    <h4>{roomInfo.room_name}</h4>
                    <button type='button' className={styles.standard}><p>기준 {roomInfo.people_num}명/ 최대 {roomInfo.max_people_num}명</p></button>
                    <p>{roomInfo.room_service.replaceAll("\n", ", ")}</p>
                </div>
                <div className={styles.date}>
                    <Calendar />    
                </div>
                <div className={styles.rentType}>
                    <div className={styles.rent}>
                        <div>
                            <p className={styles.typeName}>대실</p>
                            <span className={styles.availTime}>최대 3시간</span>
                        </div>
                        <div className={styles.kinds}>
                            <p className={styles.discount}><span className={styles.percent}>50%</span><span className={styles.listPrice}>40,000원</span></p>
                            <p className={styles.salePrice}><span className={styles.hotelSalePrice}>20,000</span>원</p>
                        </div>
                    </div>
                    <div className={styles.lodge}>
                        <div>
                            <p className={styles.typeName}>숙박</p>
                            <span className={styles.availTime}>18:00부터</span>
                        </div>
                        <div className={styles.kinds}>
                            <p className={styles.discount}><span className={styles.percent}>50%</span><span className={styles.listPrice}>40,000원</span></p>
                            <p className={styles.salePrice}><span className={styles.hotelSalePrice}>35,000</span>원</p>
                        </div>
                    </div>
                    {/* <BusinessBox/> */}
                </div>
                <div className={styles.roomInfoDetail}>
                    <h4 className={styles.detailTitle}>객실정보 <span className={styles.detailPop} onClick={() => setRoomModal(!roomModal)}>상세정보&nbsp;<img src="/img/icon/rightArrow.png" alt="right" /></span></h4>
                    {roomModal && <Modal type={"room"} amenity={roomInfo.room_amenity} notice={roomInfo.room_notice} setRoomModal = {() => setRoomModal(!roomModal)}/>}
                    <div className={styles.infoIconBox}>
                        {roomInfo.room_services.map(service => (
                            <div className={styles.infoIcon}>
                                <img src={service.service_icon_url} className={styles.serviceImg} alt="serviceIcon" />
                                <p className={styles.serviceName}>{service.service_name}</p>
                            </div>
                        ))}
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
                    <button type='button' className={styles.rentBtn} onClick={() => linkOption(0)}>대실예약</button>
                    <button type='button' className={styles.lodgeBtn} onClick={() => linkOption(1)}>숙박예약</button>
                    {/* 기업회원가가 없는 객실일때
                     onClick={() => setBusinessModal(!businessModal)}
                    {businessModal && <Modal type={"business"} setBusinessModal = {() => setBusinessModal(!businessModal)}/>} */}
                </div>
            </div>
        </div>
        </>
    )
   
            
};

export default Rooms;