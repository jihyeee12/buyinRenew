import React from 'react';
import styles from './modal.module.css';
import BuyroomModal from './modal/buyroomModal';
import CancelModal from './modal/cancelModal';
import CouponModal from './modal/couponModal';
import DeleteModal from './modal/deleteModal';
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
                    
                    <div className={styles.modalTitle}>
                        <div>

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
                        type === "roominfo"?<RoominfoModal/>:
                        type === "cancel"? <CancelModal/>:
                        type === "delete"? <DeleteModal/>:
                        null
                        }
                   </div>
                    
               </div>      
            </div>
    );
};

export default Modal;