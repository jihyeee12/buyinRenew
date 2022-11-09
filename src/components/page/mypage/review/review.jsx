import React from 'react';
import Banner from '../../../banner/banner';
import SideMenu from '../../../sideMenu/sideMenu';
import styles from './review.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Modal from '../../../modal/modal';


const Review = () => {
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false);

    const writeReview = () =>{
        navigate('/writeReview');
    }
    const [index, setIndex] = useState(0);

    const reviewList = [
        {id: 0, title: "작성한 리뷰"},
        {id: 1, title: "작성 가능 리뷰"},
    ]
    const reviewData = [
            {
                "review_id": 56,
                "reservation_id": 263,
                "lodgement_id": 78,
                "lodgement_name": "신안동 이끌림(테스트용)",
                "lodgement_img_url": "https://www.buyinhotel.co.kr/images/lodgements/test0325/test0325_99_000_2022-03-30-17_56_09.jpg",
                "review_date": "2022.05.17",
                "room_id": 70,
                "room_name": "비즈니스 더블",
                "like_num": 0,
                "review_text": "좋아요 굿 좋아요 굿 좋아요 굿 좋아요 굿 굿굿",
                "review_img_url": null
            }
        ]
    const reviewAbleData = [
        {
            "reservation_id": 194,
            "room_name": "비즈니스 더블",
            "lodgement_name": "신안동 이끌림",
            "date_string": "2022.04.19 (화) 19:00 ~ 2022.04.30 (수) 11:00"
        }
    ]

    return(
        <>
        <Banner name={"마이페이지"}/>
        <div className="mypage">
            <SideMenu type={'my'}/>
            <div className="pageBox">
                <section className="reservation">
                    <ul className="tabMenu">
                        {reviewList.map(item => (
                            <li key={item.id}
                                className={index === item.id? "selectTab": null}
                                onClick={() => setIndex(item.id)}
                            >{item.title}</li>
                        ))}
                        
                    </ul>
                    <div className="tabContent">
                        {reviewList.filter(item => index === item.id).map(item => {
                            if(item.id === 0){
                                return <>
                                <p className={styles.reviewCount}>작성리뷰 <span className={styles.reviewCount}>2</span></p>
                                {reviewData.map(review => (
                                    <div className={styles.reviewBox}>
                                        <table className={styles.reviewTitle}>
                                            <tbody>
                                                <tr>
                                                    <td>{review.review_date}</td>
                                                    <td>
                                                        <span key={review.review_id} onClick={writeReview}>수정</span>
                                                        <span key={review.review_id} className={styles.deleteBtn} onClick={()=> setModalOpen(!modalOpen)}>삭제</span>
                                                        {modalOpen && <Modal type={"delete"} setModalOpen={() => setModalOpen(!modalOpen)} />}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className={styles.hotelInfoBox}>
                                            <div>
                                                <img src={review.lodgement_img_url} alt='호텔이미지' className={styles.hotelImg} />
                                            </div>
                                            <div className={styles.hotelInfo}>
                                                <p>{review.lodgement_name}</p>
                                                <p>{review.room_name}</p>
                                            </div>
                                        </div>
                                        <p className={styles.reviewTxt}>{review.review_text}</p>
                                        <div className={styles.reviewImgBox}>
                                            <img className={styles.reviewImg} src={review.review_img_url} style={{display: review.review_img_url === null ? "none": "block"}} alt="리뷰이미지" />
                                        </div>
                                        <div className={styles.likeBox}>
                                            <img src="../../../img/icon/likeBtn.png" alt="좋아요" />
                                            <span className={styles.likeCount}>{review.like_num}</span>
                                        </div>
                                    </div>
                                ))}
                                
                                </>
                            } else if(item.id === 1){
                                return <>
                                <p className={styles.reviewCount}>작성리뷰 <span className={styles.reviewCount}>2</span></p>
                                <div className={styles.contentBox}>
                                {reviewAbleData.map(able => (
                                    <div className={styles.reviewAbleBox}>
                                        <table className={styles.reviewAbleTable}>
                                            <tbody>
                                                <tr>
                                                    <td>{able.date_string.split(" ~ ")[1]} <span>이용완료</span></td>
                                                    <td className={styles.reviewBtn} key={able.reservation_id} onClick={writeReview}>리뷰작성</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className={styles.reviewAbleHotel}>
                                            <div>
                                                <img src='../../../img/roomImg/giftRoom.png' alt='호텔이미지' className={styles.ableHotelImg} />
                                            </div>
                                            <div className={styles.reviewAbleInfo}>
                                                <p>{able.lodgement_name}</p>
                                                <p>{able.room_name}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                
                                </div>
                                </>
                            }
                        })}
                        </div>
                </section>
            </div>
        </div>
        
        </>
    )
};

export default Review;