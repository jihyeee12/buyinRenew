import React from 'react';
import Banner from '../../banner/banner';
import SideMenu from '../mypage/sideMenu/sideMenu';
import styles from './writeReview.module.css';
import { useNavigate } from 'react-router-dom';


const WriteReview = (props) => {
    const navigate = useNavigate();

    const review = () =>{
        navigate('/review');
    }

    return(
        <>
        <Banner name={"마이페이지"}/>
        <div className="mypage">
            <SideMenu type={"my"}/>
            <div className="pageBox">
                <div className={styles.writeBox}>
                    <div className={styles.hotelInfo}>
                        <div>
                            <img className={styles.hotelImg} src='../../../img/roomImg/bigRoom.png' alt='hotelImg' />
                        </div>
                        <div className={styles.Txt}>
                            <p>이끌림호텔 충장점</p>
                            <p>스탠다드</p>
                        </div>
                    </div>
                    <div className={styles.writeArea}>
                        <p>이용해보신 숙소는 어떠셨나요?</p>
                        <p>리뷰를 작성해 주세요.</p>
                        <textarea className={styles.reviewWrite} name="reviewTxt" id="review" cols="30" rows="10" placeholder='자세하고 솔직한 리뷰는 다른 고객에게 큰 도움이 됩니다. (최소 20자 이상)' />
                        <img className={styles.photoImg} src="../../../img/icon/photoIcon.png" alt="사진추가" />
                    </div>
                </div>
                <div className={styles.writeBtn}>
                    <button type='button' onClick={review}>작성완료</button>
                </div>
            </div>
        </div>
        </>
    )
};

export default WriteReview;