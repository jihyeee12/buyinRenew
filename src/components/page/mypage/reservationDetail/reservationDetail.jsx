import React from 'react';
import { useState ,useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './reservationDetail.module.css';
import Get from '../../../../service/api/url/Get';
import Banner from '../../../banner/banner';
import DetailBox from '../../../reservation/reservationDetatilBox/detailBox';
import SideMenu from '../../../sideMenu/sideMenu';

const ReservationDetail = () => {
    const location = useLocation();
    const locationType = location.state.name;
    const locationId = location.state.reservation_id;
    const navigate = useNavigate();
    const reservationCancel = (refund,id) => {
        navigate('/reservationCancel',{
            state:{
                refund: refund,
                id: id
            }
        });
    }

    const [cancel, setcancel] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

 
    useEffect(() => {
        
    const fetchcancel = async () => {
        
        Get.getRefundCharge(locationId)
        .then(function (response) {
            setcancel(response);
        })
        .catch(error => {
            setError(error);
        })
        setLoading(false);
        };
        fetchcancel();
    
    }, []);
    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!cancel) return null;
    
    console.log(cancel);
    
    return(
        <>
        <Banner name={"마이페이지"}/>
        <div className="mypage">
            <SideMenu type={'my'}/>
            <div className="pageBox">
                <p className={styles.reservationTitle}>예약내역상세</p>
                    <DetailBox type={locationType} id={locationId} />
                    {(locationType === "reservation" && cancel.can_refund === true) && <div className={styles.cancelBox}>
                        <button type='button' className={styles.cancelBtn} onClick={() => reservationCancel(cancel.refund_charge, locationId)} >예약취소요청</button>
                    </div>}
                    
            </div>
        </div>
        </>
    )
};

export default ReservationDetail;