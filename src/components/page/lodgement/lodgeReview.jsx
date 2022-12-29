import React from 'react';
import { useState } from 'react';
import Delete from 'service/api/url/Delete';
import Post from 'service/api/url/Post';
import styled from 'styled-components';
import styles from './lodgement.module.css';

const LodgeReview = ({reviewData}) => {
    console.log(reviewData)
    const [clickedNumArr, setClickedNumArr] = useState([]);
    const likeNumber = reviewData.map(review => review.like_num);
    const [like, setLike] = useState(likeNumber);
    const [error, setError] = useState(null);
    const user_id = 'AppIDEtest';
    
    const deleteReview = (id) => {
        const fetchDeleteReview = async () => {
            Delete.deleteReview(id)
                .then(function (response) {
                    console.log(response);
                })
                .catch(error => {
                    setError(error);
                    console.log(error);
                })
            };
                fetchDeleteReview();
    }

    const likeReview = (id, user_id) => {
        const fetchLikeReview = async () => {
            Post.likeReview(id, user_id)
                .then(function (response) {
                    console.log(response);
                })
                .catch(error => {
                    setError(error);
                    console.log(error);
                })
            };
        fetchLikeReview();
    }

    if (error) return <div>에러가 발생했습니다</div>;


    const handleClickLikeBtn = (id, index, user_id) => {
        setClickedNumArr((arr) => {
            let newArr = [];
            arr.map((item) => newArr.push(item));
            let likeCnt = [...like];
            //arr 사용하지 말고 새로고침?
            //데이터 넣고 빼는것만 set사용해서 실행
        if (newArr.includes(id)){
            newArr.splice(newArr.indexOf(id), 1);
            likeCnt[index] -= 1;
            setLike(likeCnt);
            deleteReview(id);
        } else {
            newArr.push(id);
            likeCnt[index]+= 1;
            setLike(likeCnt);
            likeReview(id, user_id);
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
            <LikeBtn 
                onClick={() => handleClickLikeBtn(review.review_id, index, user_id)} 
                src={(review.is_liked === true || clickedNumArr.includes(review.review_id)) ? "/img/icon/likeOk.png" : "/img/icon/likeBtn.png"} 
                alt="likeBtn" />
                &nbsp;{like[index]}
            </p>
        </div>
    ))}
        </>
    );
};

export default LodgeReview;