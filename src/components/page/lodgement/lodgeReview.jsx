import React from 'react';
import styles from './lodgement.module.css';

const LodgeReview = () => {
    return (
        <div className={styles.userReview}>
            <img src='../../../img/icon/bestIcon.png'/>
            <h4>바이인호텔님</h4>
            <h4>2022.01.01</h4>
            <h4>스탠다드</h4>
            <p className={styles.userContents}>내부 깔끔했어요 우선 거울이 여기저기 많구 큼직해서 좋았어용 ㅎㅎ 컴터 두대에 좋아보였어요 
                게임하시는 분들한테는 좋을듯용 전 휴식차원에서 가서 조용하게 잘 쉬다 왔어요 화장실 문이 문이 문이 문의 문의 두대 두대 화장실
                좀 빡빡한거외에 좋았습니다
            </p>
            <img src="/img/roomImg/reviewImg.png" alt="reviewimg" />
            <p className={styles.likeNum}><img src="/img/icon/likeBtn.png" alt="likeBtn" />&nbsp;100</p>
        </div>
    );
};

export default LodgeReview;