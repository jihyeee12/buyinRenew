import React from 'react';
import Banner from '../../banner/banner';
import SideMenu from '../../sideMenu/sideMenu';
import styles from './writeReview.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';


const WriteReview = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const reservation_id = location.state.reservation_id;
    
    const review = () =>{
        navigate('/review');
    }

    const [writeReview, setwriteReview] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
      
        
    const fetchwriteReview = async () => {
        try {
            // 요청이 시작 할 때에는 error 와 writeReview 를 초기화하고
            setError(null);
            setwriteReview(null);
            // loading 상태를 true 로 바꿉니다.
            setLoading(true);
            const response = await axios.get(
                `/review-basic-info?reservation=${reservation_id}`,{headers:{'Contents-type': 'application/json','user': 'AppIDEtest'}}); //get은 data 넣을 자리 필요없으니까 안넣어도 됨
            setwriteReview(response.data.data); // 데이터는 response.data 안에 들어있습니다.
        } catch (e) {
            setError(e);
        }
        setLoading(false);
        };
        fetchwriteReview();
    
    }, []);
    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!writeReview) return null;
    
    console.log(writeReview);

    return(
        <>
        <Banner name={"마이페이지"}/>
        <div className="mypage">
            <SideMenu type={"my"}/>
            <div className="pageBox">
                <div className={styles.writeBox}>
                    <div className={styles.hotelInfo}>
                        <div>
                            <img className={styles.hotelImg} src={writeReview.lodgement_img_url} alt='hotelImg' />
                        </div>
                        <div className={styles.Txt}>
                            <p>{writeReview.lodgement_name}</p>
                            <p>{writeReview.room_name}</p>
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
                    <button type='button' key={writeReview.review_id} onClick={review}>작성완료</button>
                </div>
            </div>
        </div>
        </>
    )
};

export default WriteReview;