import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import styles from './lodgement.module.css';

const LodgeReview = ({reviewData}) => {
    console.log(reviewData)
    
    const [clickedNumArr, setClickedNumArr] = useState([]);
    const likeNumber = reviewData.map(review => review.like_num);
    
    const [like, setLike] = useState(likeNumber);
    console.log(like);
    
    const handleClickLikeBtn = (id, index) => {
        setClickedNumArr((arr) => {
            let newArr = [];
            arr.map((item) => newArr.push(item));
            let likeCnt = [...like];
        if (newArr.includes(id)) {
            newArr.splice(newArr.indexOf(id), 1);
            likeCnt[index]--;
            setLike(likeCnt);
        } else {
            newArr.push(id);
            likeCnt[index]++;
            setLike(likeCnt);
        }
        console.log(clickedNumArr);
        return newArr;
        });
    };
    const LikeBtn = styled.img`
        width: 1.25rem;
    `

    return (<>
    {reviewData.map((review, index) => (
        <div className={styles.userReview}>
            <img src='../../../img/icon/bestIcon.png'/>
            <h4>{review.review_writer_name}님</h4>
            <h4>{review.review_date}</h4>
            <h4>{review.room_name}</h4>
            <p className={styles.userContents}>{review.review_text}</p>
            {review.review_img_url &&<img className={styles.reviewTxtImg} src={review.review_img_url} alt="reviewimg" />}
            <p className={styles.likeNum}>
            <LikeBtn onClick={() => handleClickLikeBtn(review.review_id, index)} src={(review.is_liked === true || clickedNumArr.includes(review.review_id) ) ? "/img/icon/likeOk.png" : "/img/icon/likeBtn.png"} alt="likeBtn" />
                &nbsp;{like[index]}
            </p>
        </div>
    ))}
        </>
    );
};

export default LodgeReview;