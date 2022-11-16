import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Banner from '../../../banner/banner';
import DetailBox from '../../../reservation/reservationDetatilBox/detailBox';
import SideMenu from '../../../sideMenu/sideMenu';
import styles from './reservationDetail.module.css';

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
        try {
            // 요청이 시작 할 때에는 error 와 cancel 를 초기화하고
            setError(null);
            setcancel(null);
            // loading 상태를 true 로 바꿉니다.
            setLoading(true);
            const response = await axios.get(
               `/v2/refund-charge?reservation=${locationId}`,{headers:{'Contents-type': 'application/json','user': 'AppIDEtest'}}); //get은 data 넣을 자리 필요없으니까 안넣어도 됨
            setcancel(response.data.data); // 데이터는 response.data 안에 들어있습니다.
            
        } catch (e) {
            setError(e);
        }
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