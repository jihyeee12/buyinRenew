import React from 'react';
import Banner from '../../../banner/banner';
import SideMenu from '../sideMenu/sideMenu';
import styles from './review.module.css';


const Review = () => {

    return(
        <>
        <Banner/>
        <div className="mypage">
            <SideMenu/>
            <div className="pageBox">
                <section className="reservation">
                    <ul className="tabMenu">
                        <li className="selectTab">작성한 리뷰</li>
                        <li>작성 가능 리뷰</li>
                    </ul>
                    <div className="tabContent">
                        <p className={styles.reviewCount}>작성리뷰 <span className={styles.reviewCount}>2</span></p>
                        {/* <div className={styles.reviewBox}>
                            <table className={styles.reviewTitle}>
                                <tbody>
                                    <tr>
                                        <td>2022.01.01</td>
                                        <td>
                                            <span>수정</span>
                                            <span className={styles.deleteBtn}>삭제</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className={styles.hotelInfoBox}>
                                <div>
                                    <img src='../../../img/roomImg/giftRoom.png' alt='호텔이미지' className={styles.hotelImg} />
                                </div>
                                <div className={styles.hotelInfo}>
                                    <p>이끌림호텔 충장점</p>
                                    <p>스탠다드</p>
                                </div>
                            </div>
                            <p className={styles.reviewTxt}>dddddd</p>
                            <div className={styles.reviewImgBox}>
                                <img className={styles.reviewImg} src="../../../img/roomImg/giftRoom.png" alt="리뷰이미지" />
                            </div>
                            <div className={styles.likeBox}>
                                <img src="../../../img/icon/likeBtn.png" alt="좋아요" />
                                <span className={styles.likeCount}>100</span>
                            </div>
                        </div> */}
                        <div className={styles.reviewAbleBox}>
                            <table className={styles.reviewAbleTable}>
                                <tbody>
                                    <tr>
                                        <td>2022.01.01 <span>이용완료</span></td>
                                        <td>리뷰작성</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className={styles.reviewAbleHotel}>
                                <div>
                                    <img src='../../../img/roomImg/giftRoom.png' alt='호텔이미지' className={styles.hotelImg} />
                                </div>
                                <div className={styles.reviewAbleInfo}>
                                    <p>이끌림호텔 충장점</p>
                                    <p>스탠다드</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        
        </>
    )
};

export default Review;