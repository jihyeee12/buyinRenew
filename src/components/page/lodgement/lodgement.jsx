import React from 'react';
import styles from './lodgement.module.css';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Roomprice from '../../reservation/roomprice/roomprice';
import Modal from '../../modal/modal';
import Date from '../../date/date';
import HotelMaps from './map/hotelMaps';
import LodgeReview from './lodgeReview';


const Lodgement = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [couponOpen, setcouponOpen] = useState(false);
    const [allReview, setAllReview] = useState(false);
    const [photoOpen, setPhotoOpen] = useState(false);
    const [hotelOpen, setHotelOpen] = useState(false);
    const [imgId, setImgId] = useState("");
    const {lodgement} = useParams();

    
    const serviceData = [
        {id: 0, img_src :'/img/icon/service.png', service_name: "와이파이"},
        {id: 1, img_src :'/img/icon/service.png', service_name: "와이파이"},
    ]
    
    const hotelImg = [
        {hotel_id: 0, hotel_img : "/img/roomImg/bigRoom.png"},
        {hotel_id: 1, hotel_img : "/img/roomImg/room1.png"},
        {hotel_id: 2, hotel_img : "/img/roomImg/room1.png"},
        {hotel_id: 3, hotel_img : "/img/roomImg/room1.png"},
        {hotel_id: 4, hotel_img : "/img/roomImg/room1.png"},
    ]

    const clip = () => {
        var url = "";
        var textarea = document.createElement("textarea");
        document.body.appendChild(textarea);
        url = window.document.location.href;
        textarea.value = url;
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);

        alert("url을 복사했습니다.");
    }

    const ImgClick = (id) => {
        setImgId(id);
        setPhotoOpen(!photoOpen);
    }

    return(
        <>
    <div className={styles.container}>
        <div className={styles.RoomImgs}>
            <img src={hotelImg[0].hotel_img} alt="bigRoom" />
            <div className={styles.smallImgs}>
                <img className={styles.hotelSmall} src={hotelImg[1].hotel_img} alt="smallRoom" />
                <img className={styles.hotelSmall} src={hotelImg[2].hotel_img} alt="smallRoom" />
                <img className={styles.hotelSmall} src={hotelImg[3].hotel_img} alt="smallRoom" />
                <img className={styles.hotelSmall} src={hotelImg[4].hotel_img} onClick={()=> setHotelOpen(!hotelOpen)} alt="smallRoom" /> 
                <div className={styles.roomPlus} >
                    <p>+8</p>
                </div>   
                {hotelOpen && <Modal type={"hotelPhoto"} setHotelOpen={() => setHotelOpen(!hotelOpen)} />}        
            </div>
        </div>
        <div className={styles.hotelGrid}>
            <div className={styles.hotelInfo}>
                <div className={styles.hotelTitle}>
                    <h4>이끌림호텔 충장점 <img className={styles.shareIcon} onClick={clip} src="/img/icon/share.png" alt="shareIcon" /></h4>
                    <p className={styles.hotelLocation}><img className={styles.locationImg} src="/img/icon/location.png" alt="location" /> 충장로, 구시청, 아시아문화전당역</p>
                    <button type='button' className={styles.couponBtn} onClick={()=> setcouponOpen(!couponOpen)}>최대 10,000원 쿠폰받기<img src='/img/icon/downloadIcon.png'/></button>
                    {couponOpen && <Modal type={"coupon"} setcouponOpen={() => setcouponOpen(!couponOpen)} />}
                </div>
                <div className={styles.service}>
                    <h4 className={styles.title}>편의 시설 및 서비스</h4>
                    <div className={styles.serviceIcons}>
                            {serviceData.map(v => (
                                <div className={styles.serviceIcon}>
                                    <img src={v.img_src} alt="serviceIcon" />
                                    <p>{v.service_name}</p>
                                </div>    
                            ))
                            }
                    </div>
                </div>
                <div className={styles.introduce}>
                    <h4 className={styles.title}>
                        숙소소개 <span className={styles.introSpan} onClick={()=> setModalOpen(!modalOpen)}>상세정보 &nbsp;<img src="/img/icon/rightArrow.png" alt="right" /></span>
                    </h4>
                    {modalOpen && <Modal type={"roominfo"} lodgement={lodgement} setModalOpen={() => setModalOpen(!modalOpen)} />}
                    <p className={styles.introText}>
                        이끌림호텔 신안점은
                        고객들이 가장 필요로 하는 핵심적인 서비스와 시설에 초점을 맞춤으로써, 스마트한 고객님들의 니즈를 충족하고 비즈니스 호텔과는
                        차별화된 따뜻하고 감성적이면서 세련된 공간을 제공합니다. 광주 전남대학교에 인접해있어 활기찬 대학가 젊은 감성을 느끼실 수 있고
                        도보 5분거리에 먹자골목이 있습니다.
                    </p>
                    <div className={styles.map}>
                        <HotelMaps/>
                    </div>
                </div>
                <div className={styles.review}>     
                    <h4 className={styles.title}>리뷰 &nbsp;<span className={styles.reviewCount}>100</span></h4>
                    <div className={styles.reviewImgs}>
                        <img className={styles.photoReviews} onClick={(id) => ImgClick(1)} src="/img/roomImg/reviewImg.png" alt="reviewimg" />
                        <img className={styles.photoReviews} src="/img/roomImg/reviewImg.png" alt="reviewimg" />
                        <img className={styles.photoReviews} src="/img/roomImg/reviewImg.png" alt="reviewimg" />
                        <img className={styles.photoReviews} src="/img/roomImg/reviewImg.png" alt="reviewimg" />
                        <img className={styles.photoReviews} src="/img/roomImg/reviewImg.png" alt="reviewimg" />
                        <div className={styles.reviewPlus} onClick={()=> setAllReview(!allReview)}>
                            <p>+5</p>
                        </div>
                    {allReview && <Modal type={"allReview"} setAllReview={() => setAllReview(!allReview)} />}
                    {photoOpen && <Modal type={"photoReview"} img_id={imgId} setPhotoOpen={() => setPhotoOpen(!photoOpen)} />}
                    </div>
                    <div className={styles.reviewText}>
                        <LodgeReview/>
                        <button type='button' className={styles.reviewBtn}>리뷰 더보기</button>
                    </div>
                </div>
            </div>
            <div className={styles.roomSelect}>
                <Date />
                <Roomprice />
            </div>
        </div>

    </div>
    </>
    )
    
};

export default Lodgement;