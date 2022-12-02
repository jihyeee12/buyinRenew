import React from 'react';
import styles from './recentSearch.module.css';
import { Link, useNavigate } from 'react-router-dom';

const RecentBox = ({recentData, recentRemove}) => {
    const navigate = useNavigate();

    const lodgement = () =>{
        navigate('/lodgement');
    }

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
                    <img className={styles.deleteImg} key={recent.lodgement_id} onRemove={() => recentRemove(recent.lodgement_id)} src='../../../img/icon/deleteIcon.png' alt='deleteIcon' />
                </div>
            </div>
        ))}
        </>}
        </>
    );
};

export default RecentBox;