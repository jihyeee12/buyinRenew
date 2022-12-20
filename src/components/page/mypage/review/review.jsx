import React from 'react';
import styles from './review.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState ,useEffect } from 'react';
import Banner from '../../../banner/banner';
import SideMenu from '../../../sideMenu/sideMenu';
import Modal from '../../../modal/modal';
import Get from '../../../../service/api/url/Get';
import WrittenReview from './writtenReview';
import CanReview from './canReview';


const Review = () => {
    
    const [index, setIndex] = useState(0);
    const reviewList = [
        {id: 0, title: "작성한 리뷰"},
        {id: 1, title: "작성 가능 리뷰"},
    ]

    const [review, setreview] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
      
    const fetchreview = async () => {

        Get.getReview(index)
        .then(function (response) {
            setreview(response);
        })
        .catch(error => {
            setError(error);
        })
        setLoading(false);
        };
        fetchreview();
    
    }, [index]);
    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!review) return null;
    
    console.log(review);

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
                        {review.length === 0 ? 
                        <div className="noData">
                            <img src='../../../img/icon/listIcon.png' alt='noReview'/>
                            <p className="noDataTxt">리뷰내역이 없습니다.</p>
                        </div>
                        :<>{reviewList.filter(item => index === item.id).map(item => {
                            if(item.id === 0){
                                return <WrittenReview review={review}/>
                            } else if(item.id === 1){
                                return <CanReview review={review}/>
                            }
                        })}</>
                        }
                        </div>
                </section>
            </div>
        </div>
        
        </>
    )
};

export default Review;