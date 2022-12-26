import React from 'react';
import styles from './writeReview.module.css';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Banner from '../../banner/banner';
import SideMenu from '../../sideMenu/sideMenu';
import Get from '../../../service/api/url/Get';
import Post from 'service/api/url/Post';


const WriteReview = () => {
    const navigate = useNavigate();
    const reservation_id = useParams().reservation;
    const fileInput = React.createRef();
    const [imgUrl, setImgUrl] = useState("");
    let fileList ='';
    
   
    const fileBtnClick = () => {
        fileInput.current.click();
    }
    const fileChange = (e) => {
        fileList = e.target.files[0];
        const fileUrl = URL.createObjectURL(fileList);
        setImgUrl(fileUrl);        
    }
    const deleteFileImage = () =>{
        URL.revokeObjectURL(fileList);
        setImgUrl("");
      };
    
    const [writeReview, setwriteReview] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchwriteReview = async () => {
            Get.getWriteReview(reservation_id)
            .then(function (response) {
                setwriteReview(response);
            })
        .catch(error => {
            setError(error);
        })
        setLoading(false);
    };
    fetchwriteReview();
    
    }, []);
    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!writeReview) return null;

    console.log(writeReview);

    const onSubmit = async(e) => {
        e.preventDefault();
        e.persist();
        const formData = new FormData();
        formData.append('files', fileList);
        console.log(formData);
    }
    
// const review = (event) =>{
//     const fetchWriteReview = async () => {
//         const formData = new FormData();
//         formData.append('file', fileList);
        
//         Post.reviewWrite(formData)
//             .then(function (response) {
//                 console.log(response);
                
//                 if(document.getElementById('review').value.length() > 20){
//                     alert('리뷰작성이 완료되었습니다. 리뷰포인트 200P가 적립됩니다. 감사합니다.');
//                 } else{
//                     alert('최소 20자이상 작성해주세요.');
//                 }
//             })
//             .catch(error => {
//                 setError(error);
//                 console.log(error);
//             })
//             };
//             fetchWriteReview();
//     if (error) return <div>리뷰 작성 에러가 발생했습니다.</div>;
    
// }


    return(
        <>
        <Banner name={"마이페이지"}/>
        <div className="mypage">
            <SideMenu type={"my"}/>
            <div className="pageBox">
                <form onSubmit={(e) => onSubmit(e)}>
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
                        <textarea className={styles.reviewWrite} name="reviewTxt" id="review" cols="30" rows="10" value={writeReview.review_contents} placeholder='자세하고 솔직한 리뷰는 다른 고객에게 큰 도움이 됩니다. (최소 20자 이상)' />
                        <div>
                            <button className={styles.fileBtn} onClick={fileBtnClick}>
                                <img className={styles.photoImg} src="../../../img/icon/photoIcon.png" alt="사진추가" />
                            </button>
                            <p className={styles.WarningTxt}>
                                    ※ 사진은 JPG, PNG 파일만 첨부 가능합니다.<br/>
                                    ※ 첨부한 이미지 클릭 시 이미지가 삭제됩니다. 
                                </p>
                            <input type="file" ref={fileInput} onChange={fileChange} style={{display: "none"}} />
                            <div className='image_container' style={{'marginTop': '1rem'}}>
                                {imgUrl === '' ? null :
                                    <img className={styles.fileImg} src={imgUrl} onClick={deleteFileImage} alt="fileImgs" />
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.writeBtn}>
                    <button type='submit' key={writeReview.review_id}>작성완료</button>
                </div>
                </form>
            </div>
        </div>
        </>
    )
};

export default WriteReview;