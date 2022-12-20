import React from 'react';
import styles from './lodgement.module.css';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Roomprice from '../../reservation/roomprice/roomprice';
import Modal from '../../modal/modal';
import Date from '../../date/date';
import HotelMaps from './map/hotelMaps';
import LodgeReview from './lodgeReview';
import { useEffect } from 'react';
import Get from '../../../service/api/url/Get';


const Lodgement = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [couponOpen, setcouponOpen] = useState(false);
    const [allReview, setAllReview] = useState(false);
    const [photoOpen, setPhotoOpen] = useState(false);
    const [hotelOpen, setHotelOpen] = useState(false);
    const [imgId, setImgId] = useState("");
    const {lodgement} = useParams();

    const [hotelInfo, setHotelInfo] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const checkin = '2022.12.24';
    const checkout = '2022.12.25';

    useEffect(() => {
      
    const fetchhotelInfo = async () => {

        Get.getLodgementInfo(lodgement,checkin,checkout)
        .then(function (response) {
            setHotelInfo(response);
        })
        .catch(error => {
            setError(error);
        })
        setLoading(false);
        };
        fetchhotelInfo();
    
    }, []);
    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!hotelInfo) return null;
    
    console.log(hotelInfo);
    
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
    const reviewData = hotelInfo.reviews;
    const allReviewData = reviewData.filter(review => review.review_img_url !== undefined);
    const oneReviewData = allReviewData.filter(img => img.review_id === imgId);
    
    console.log(allReviewData.length);
    return(
        <>
    <div className={styles.container}>
        <div className={styles.RoomImgs}>
            <img className={styles.bigImg} src={hotelInfo.lodgement_images[0].lodgement_img_url} alt="bigRoom" />
            <div className={styles.smallImgs}>
                <img className={styles.hotelSmall} src={hotelInfo.lodgement_images[1].lodgement_img_url} alt="smallRoom" />
                <img className={styles.hotelSmall} src={hotelInfo.lodgement_images[2].lodgement_img_url} alt="smallRoom" />
                <img className={styles.hotelSmall} src={hotelInfo.lodgement_images[3].lodgement_img_url} alt="smallRoom" />
                <img className={styles.hotelSmall} src={hotelInfo.lodgement_images[4].lodgement_img_url} onClick={()=> setHotelOpen(!hotelOpen)} alt="smallRoom" /> 
                <div className={styles.roomPlus} >
                    <p>+{hotelInfo.lodgement_images.length -5}</p>
                </div>   
                {hotelOpen && <Modal type={"hotelPhoto"} imgData={hotelInfo.lodgement_images} setHotelOpen={() => setHotelOpen(!hotelOpen)} />}        
            </div>
        </div>
        <div className={styles.hotelGrid}>
            <div className={styles.hotelInfo}>
                <div className={styles.hotelTitle}>
                    <h4>{hotelInfo.lodgement_name} <img className={styles.shareIcon} onClick={clip} src="/img/icon/share.png" alt="shareIcon" /></h4>
                    <p className={styles.hotelLocation}><img className={styles.locationImg} src="/img/icon/location.png" alt="location" /> {hotelInfo.landmark}</p>
                    {hotelInfo.is_ambassadr !== false && <p className={styles.ambassadorBox}><img src='../../../img/icon/pointMark.png' alt='ambassador'/> <span className={styles.ambassadorPoint}>3,000P 적립</span></p>}
                    <button type='button' className={styles.couponBtn} onClick={()=> setcouponOpen(!couponOpen)}>최대 10,000원 쿠폰받기<img src='/img/icon/downloadIcon.png'/></button>
                    {couponOpen && <Modal type={"coupon"} setcouponOpen={() => setcouponOpen(!couponOpen)} />}
                </div>
                <div className={styles.service}>
                    <h4 className={styles.title}>편의 시설 및 서비스</h4>
                    <div className={styles.serviceIcons}>
                            {hotelInfo.lodgement_service.map(v => (
                                <div className={styles.serviceIcon}>
                                    <img src={v.service_icon_url} alt="serviceIcon" />
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
                        {hotelInfo.lodgement_detail}
                    </p>
                    <div className={styles.map}>
                        <HotelMaps lat={hotelInfo.lat} lng={hotelInfo.lng} address={hotelInfo.lodgement_address}/>
                    </div>                    
                    </div>
                <div className={styles.review}>     
                    <h4 className={styles.title}>리뷰 &nbsp;<span className={styles.reviewCount}>{reviewData.length.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></h4>
                    <div className={styles.reviewImgs}>
                        {reviewData.filter(review => review.review_img_url).map((review) => (
                            <img className={styles.photoReviews} onClick={(id) => ImgClick(review.review_id)} src={review.review_img_url} alt="reviewimg" />
                        ))}
                        {allReviewData.length == 5 && (<div className={styles.reviewPlus} onClick={()=> setAllReview(!allReview)}>
                            <p>+ {allReviewData.length -5}</p>
                        </div>)}
                        {photoOpen && <Modal type={"photoReview"} review={allReviewData} reviewImg={oneReviewData} setPhotoOpen={() => setPhotoOpen(!photoOpen)} />}
                        {allReview && <Modal type={"allReview"} review={allReviewData} setAllReview={() => setAllReview(!allReview)} />}
                    </div>
                    <div className={styles.reviewText}>
                        <LodgeReview reviewData={reviewData}/>
                        {reviewData.length !== 0 && <button type='button' className={styles.reviewBtn}>리뷰 더보기</button>}
                        
                    </div>
                </div>
            </div>
            <div className={styles.roomSelect}>
                <Date />
                <Roomprice roomData={hotelInfo.rooms}/>
            </div>
        </div>
    </div>
    </>
    )
    
};

export default Lodgement;