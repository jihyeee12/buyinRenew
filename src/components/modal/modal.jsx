import React from 'react';
import styles from './modal.module.css';
import AllReviewModal from './modal/AllReviewModal';
import AmenityModal from './modal/amenityModal';
import BuyroomModal from './modal/buyroomModal';
import CancelModal from './modal/cancelModal';
import CouponModal from './modal/couponModal';
import DeleteModal from './modal/deleteModal';
import HotelFullViewModal from './modal/hotelFullViewModal';
import PhotoReviewModal from './modal/photoReviewModal';
import ProductInfoModal from './modal/productInfoModal';
import RefundModal from './modal/refundModal';
import RoominfoModal from './modal/roominfoModal';

const Modal = ({setModalOpen, type,setcouponOpen, setrefundOpen, setAllReview, setPhotoOpen,setHotelOpen, lodgement}) => {
    console.log(lodgement)
    const closeModal = () => {
        {if(type === "coupon"){
            return setcouponOpen(false);
        } else if(type ==="refund"){
            return setrefundOpen(false);
        } else if(type === "allReview"){
            return setAllReview(false);
        }else if(type === "photoReview"){
            return setPhotoOpen(false);
        } else if(type === "hotelPhoto"){
            return setHotelOpen(false);
        } else{
            return setModalOpen(false);
        }
    }
        // {type === "coupon"?setcouponOpen(false):
        // type === "refund"?setrefundOpen(false):
        // type === "allRevie"? setAllReview(false):
        // setModalOpen(false)}              
    }
    console.log(type);
    return (
        <div className={styles.Modal}>
                
                <div className={styles.modalBody}>
                    
                    <div className={styles.modalTitle}>
                        <div>
                        <p className={styles.popTitle}>
                        {type === "buyRoom"? "바이룸 선택":
                        type === "coupon"? "쿠폰받기":
                        type ==="productInfo"? "상품정보고시":
                        type === "refund"? "환불정책 및 방법":
                        type === "roominfo"? "숙소상세정보":
                        type === "cancel"? "취소규정":
                        type === "allReview"? "포토리뷰 전체보기":
                        type === "photoReview"? "포토리뷰":
                        type === "hotelPhoto"? "숙소사진 전체보기":
                        type === "amenity"? "어메니티 옵션":
                        null
                        }
                        </p>
                        </div>
                        <div>
                            <button className={styles.modalCloseBtn} onClick={closeModal}>
                                <img src='../../../img/icon/modalClose.png' />
                            </button>
                        </div>
                    </div>
                    <div className={styles.modalContent}>
                        {type === "buyRoom"? <BuyroomModal/>:
                        type === "coupon"? <CouponModal/>:
                        type ==="productInfo"? <ProductInfoModal/>:
                        type === "refund"? <RefundModal/>:
                        type === "roominfo"?<RoominfoModal lodgement={lodgement}/>:
                        type === "cancel"? <CancelModal/>:
                        type === "delete"? <DeleteModal/>:
                        type === "allReview"? <AllReviewModal/>:
                        type === "photoReview"? <PhotoReviewModal/>:
                        type === "hotelPhoto"? <HotelFullViewModal/>:
                        type === "amenity"? <AmenityModal/>:
                        null
                        }
                   </div>
                    
               </div>      
            </div>
    );
};

export default Modal;