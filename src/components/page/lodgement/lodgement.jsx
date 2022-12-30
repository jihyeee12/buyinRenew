import React from 'react';
import styles from './lodgement.module.css';
import { useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import Roomprice from '../../reservation/roomprice/roomprice';
import Modal from '../../modal/modal';
import HotelMaps from './map/hotelMaps';
import LodgeReview from './lodgeReview';
import { useEffect } from 'react';
import Get from '../../../service/api/url/Get';
import Delete from 'service/api/url/Delete';
import Post from 'service/api/url/Post';
import DateInfo from '../../date/date';


const Lodgement = () => {
    const [searchParam, setSearchParam] = useSearchParams();
    const [modalOpen, setModalOpen] = useState(false);
    const [couponOpen, setcouponOpen] = useState(false);
    const [allReview, setAllReview] = useState(false);
    const [photoOpen, setPhotoOpen] = useState(false);
    const [hotelOpen, setHotelOpen] = useState(false);
    const [imgId, setImgId] = useState("");
    const {lodgement} = useParams();
    const [wish, setWish] = useState(false);
    const [hotelInfo, setHotelInfo] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const checkin = searchParam.get("checkin");
    const checkout = searchParam.get("checkout");

    const period = {checkin, checkout};
    const user_id = 'AppIDEtest'
    
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

    const wishDelete = (id) => {
        const fetchDeleteWish = async () => {
            Delete.deleteWish(id)
                .then(function (response) {
                    console.log(response);
                })
                .catch(error => {
                    setError(error);
                    console.log(error);
                })
            };
                fetchDeleteWish();
    }

    const wishPlus = (id, user_id) => {
        const fetchLikeWish = async () => {
            Post.selectWish(id, user_id)
                .then(function (response) {
                    console.log(response);
                })
                .catch(error => {
                    setError(error);
                    console.log(error);
                })
            };
        fetchLikeWish();
    }

    if (error) return <div>에러가 발생했습니다</div>;
    
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
    const fiveReviewData = allReviewData.slice(0, 5);
    const oneReviewData = allReviewData.filter(img => img.review_id === imgId);
    

    const wishClick = (id) => {
        if(hotelInfo.is_wished ===  true){
            setWish();
            wishDelete(id);
        } else{
            setWish(!wish);
            wishPlus(id, user_id);
        }
    }

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
                    <div className={styles.titleBox}>
                        <div className={styles.titleTxt}>
                            <h4>{hotelInfo.lodgement_name}</h4>
                            <p className={styles.hotelLocation}><img className={styles.locationImg} src="/img/icon/location.png" alt="location" /> {hotelInfo.landmark}</p>
                        </div>
                        <div className={styles.likeBtn}>
                            <img className={styles.shareIcon} onClick={() => wishClick(hotelInfo.lodgement_id, user_id)} src={((wish || hotelInfo.is_wished === true)? "/img/icon/wishLikeIcon.png" : "/img/icon/wishIcon.png")} alt="wishIcon" />
                            <img className={styles.shareIcon} onClick={clip} src="/img/icon/share.png" alt="shareIcon" />
                        </div>
                    </div>
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
                        ))}
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
                        {fiveReviewData.map((review) => (
                            <img className={styles.photoReviews} onClick={(id) => ImgClick(review.review_id)} src={review.review_img_url} alt="reviewimg" />
                        ))}
                        {allReviewData.length > 5 && (<div className={styles.reviewPlus} onClick={()=> setAllReview(!allReview)}>
                            <p>+ {allReviewData.length -5}</p>
                        </div>)}
                        {photoOpen && <Modal type={"photoReview"} review={allReviewData} reviewImg={oneReviewData} setPhotoOpen={() => setPhotoOpen(!photoOpen)} setAllReview = {setAllReview} allReview = {allReview}/>}
                        {allReview && <Modal type={"allReview"} review={allReviewData} setAllReview={() => setAllReview(!allReview)} setPhotoOpen = {setPhotoOpen} photoOpen = {photoOpen} setImgId = {setImgId} imgId = {imgId}/>}
                    </div>
                    <div className={styles.reviewText}>
                        <LodgeReview reviewData={reviewData}/>
                        {reviewData.length !== 0 && <button type='button' className={styles.reviewBtn}>리뷰 더보기</button>}
                        
                    </div>
                </div>
            </div>
            <div className={styles.roomSelect}>
                <DateInfo period={period} />
                <Roomprice period={period} roomData={hotelInfo.rooms}/>
            </div>
        </div>
    </div>
    </>
    )
    
};

export default Lodgement;