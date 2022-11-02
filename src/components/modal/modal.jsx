import React from 'react';
import styles from './modal.module.css';
import BuyroomModal from './modal/buyroomModal';
import CouponModal from './modal/couponModal';
import ProductInfoModal from './modal/productInfoModal';
import RefundModal from './modal/refundModal';
import RoominfoModal from './modal/roominfoModal';

const Modal = ({setModalOpen, type,setcouponOpen, setrefundOpen}) => {
    const closeModal = () => {
        {type === "coupon"?setcouponOpen(false):
        type === "refund"?setrefundOpen(false):
        setModalOpen(false)}              
    }
    console.log(type);
    return (
        <div className={styles.Modal}>
                <div className={styles.modalBody}>
                    <button className={styles.modalCloseBtn} onClick={closeModal}>
                        <img src='../../../img/icon/modalClose.png' />
                    </button>
                   {type === "buyRoom"? <BuyroomModal/>:
                   type === "coupon"? <CouponModal/>:
                   type ==="productInfo"? <ProductInfoModal/>:
                   type === "refund"? <RefundModal/>:
                   type === "roominfo"?<RoominfoModal/>:null}
                    
                    
               </div>      
            </div>
    );
};

export default Modal;