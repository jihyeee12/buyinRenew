import React from 'react';
import styles from './recentSearch.module.css';
import { Link, useNavigate } from 'react-router-dom';

const RecentBox = () => {
    const navigate = useNavigate();

    const lodgement = () =>{
        navigate('/lodgement');
    }

    const recentData =[
        {   "lodgement_id": 250,
            "lodgement_img_url": "https://www.buyinhotel.co.kr/images/lodgements/stay35/stay35_99_000_2022-09-15-14_14_48.jpg",
            "lodgement_name": "광주 하남 호텔 스테이 35",
            "landmark": "광주공항,송정역",
            "list_price": 90000,
            "sale_price": 45000,
            "dc_rate": 50,
            "lodge_list_price": 90000,
            "lodge_sale_price": 45000,
            "lodge_dc_rate": 50},
        {   "lodgement_id": 257,
            "lodgement_img_url": "https://www.buyinhotel.co.kr/images/lodgements/grang/grang_99_000_2022-09-28-17_51_45.jpg",
            "lodgement_name": "광주 더그랑 모텔",
            "landmark": "국립아시아문화전당",
            "list_price": 100000,
            "sale_price": 35000,
            "dc_rate": 65,
            "lodge_list_price": 100000,
            "lodge_sale_price": 35000,
            "lodge_dc_rate": 65},
        {   "lodgement_id": 78,
            "lodgement_img_url": "https://www.buyinhotel.co.kr/images/lodgements/test0325/test0325_99_000_2022-03-30-17_56_09.jpg",
            "lodgement_name": "신안동 이끌림(테스트용)",
            "landmark": "광주역까지 차로 1분거리",
            "list_price": 60000,
            "sale_price": 2222,
            "dc_rate": 96.3,
            "lodge_list_price": 60000,
            "lodge_sale_price": 2222,
            "lodge_dc_rate": 96.3},
        {   "lodgement_id": 79,
            "lodgement_img_url": "https://www.buyinhotel.co.kr/images/lodgements/hhanameb/hhanameb_99_001_2022-03-25-17_42_08.jpg",
            "lodgement_name": "하남 이끌림비지니스호텔 ",
            "landmark": "광주여자대학교,한국소방안전원,광주지방공무원교육원",
            "list_price": 80000,
            "sale_price": 35000,
            "dc_rate": 56.2,
            "lodge_list_price": 80000,
            "lodge_sale_price": 35000,
            "lodge_dc_rate": 56.2},
        {   "lodgement_id": 258,
            "lodgement_img_url": "https://www.buyinhotel.co.kr/images/lodgements/hotelb/hotelb_99_000_2022-10-01-12_02_33.jpg",
            "lodgement_name": "광주 호텔 B",
            "landmark": "광주시청",
            "list_price": 160000,
            "sale_price": 80000,
            "dc_rate": 50,
            "lodge_list_price": 160000,
            "lodge_sale_price": 80000,
            "lodge_dc_rate": 50}
    ]

    return (
        <>
        {recentData.length === 0 ? 
            <div className='noData'>
                <img src="../../../img/icon/searchIcon.png" alt="noSearch" />
                <p className='noDataTxt'>최근 검색 목록이 없습니다.</p>
            </div>
        :<>
        {recentData.map(recent => (
            <div className={styles.recentBox}>
                <Link to={`/lodgement/${recent.lodgement_id}`}>
                    <div>
                        <img className={styles.hotelImg} src={recent.lodgement_img_url} alt='hotelImg' />
                    </div>
                </Link>
                <div className={styles.hotelInfo}>
                    <p className={styles.hotelName}>{recent.lodgement_name}</p>
                    <p className={styles.standard}>{recent.landmark}</p>
                    <div className={styles.infoTxt}>
                        {/* <p className={styles.standard}>2인기준 / 1박</p> */}
                        <p><span className={styles.percent}>{recent.dc_rate}%</span> <span className={styles.listPrice}>{recent.list_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</span></p>
                        <p className={styles.salePrice}>{recent.sale_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
                    </div>
                </div>
                <div className={styles.deleteIcon}>
                    <img className={styles.deleteImg} src='../../../img/icon/deleteIcon.png' alt='deleteIcon' />
                </div>
            </div>
        ))}
        </>}
        </>
    );
};

export default RecentBox;