import React from 'react';
import styles from './review.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState ,useEffect } from 'react';
import Banner from '../../../banner/banner';
import SideMenu from '../../../sideMenu/sideMenu';
import Modal from '../../../modal/modal';
import Get from '../../../../service/api/url/Get';


const Review = () => {
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false);

    const writeReview = (reservation_id) =>{
        navigate('/writeReview',{
            state:{
                reservation_id: reservation_id
            }
        });
    }
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
                                return <>
                                <p className={styles.reviewCount}>작성리뷰 <span className={styles.reviewCount}>{review.length}개</span></p>
                                {review.map(review => (
                                    <div className={styles.reviewBox}>
                                        <table className={styles.reviewTitle}>
                                            <tbody>
                                                <tr>
                                                    <td>{review.review_date}</td>
                                                    <td>
                                                        <Link className='link' to={`/writeReview/${review.reservation_id}`}><span key={review.review_id}>수정</span></Link>
                                                        <span key={review.review_id} className={styles.deleteBtn} onClick={()=> setModalOpen(!modalOpen)}>삭제</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        {modalOpen && <Modal type={"delete"} setModalOpen={() => setModalOpen(!modalOpen)} />}
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
                                            {review.review_img_url && <img className={styles.reviewImg} src={review.review_img_url} alt="리뷰이미지" />}
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
                                <p className={styles.reviewCount}>작성리뷰 <span className={styles.reviewCount}>{review.length}개</span></p>
                                <div className={styles.contentBox}>
                                {review.map(able => (
                                    <div className={styles.reviewAbleBox}>
                                        <table className={styles.reviewAbleTable}>
                                            <tbody>
                                                <tr className={styles.writeBox}>
                                                    <td>{able.date_string} <span>이용완료</span></td>
                                                    <Link className='link' to={`/writeReview/${able.reservation_id}`}><td className={styles.reviewBtn} key={able.reservation_id}>리뷰작성</td></Link>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className={styles.reviewAbleHotel}>
                                            <div>
                                                <img src={able.lodgement_img_url} alt='호텔이미지' className={styles.ableHotelImg} />
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