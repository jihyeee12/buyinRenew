import React from 'react';
import styles from './wishroom.module.css';
import { Link, useNavigate } from 'react-router-dom';

const Wishroom = (props) => {
    const navigate = useNavigate();
    const linkLodge = () =>{
        navigate('/lodgement')
    }
    const wishData = [
        {   "lodgement_id": 247,
            "lodgement_img_url": "https://www.buyinhotel.co.kr/images/lodgements/aurahotel/aurahotel_99_000_2022-09-08-17_15_44.jpg",
            "lodgement_name": "송정 아우라 호텔",
            "landmark": "광주공항,KTX 송정역",
            "list_price": 140000,
            "sale_price": 1,
            "dc_rate": 100,
            "lodge_list_price": 140000,
            "lodge_sale_price": 1,
            "lodge_dc_rate": 100
        },
        {   "lodgement_id": 257,
            "lodgement_img_url": "https://www.buyinhotel.co.kr/images/lodgements/grang/grang_99_000_2022-09-28-17_51_45.jpg",
            "lodgement_name": "광주 더그랑 모텔",
            "landmark": "국립아시아문화전당",
            "list_price": 100000,
            "sale_price": 35000,
            "dc_rate": 65,
            "lodge_list_price": 100000,
            "lodge_sale_price": 35000,
            "lodge_dc_rate": 65
        },
        {   "lodgement_id": 245,
            "lodgement_img_url": "https://www.buyinhotel.co.kr/images/lodgements/dyouhotel/dyouhotel_99_000_2022-08-12-18_04_54.jpg",
            "lodgement_name": "상무지구 듀호텔",
            "landmark": "광주1호선 상무역,광주1호선 운천역,광주공항",
            "list_price": 150000,
            "sale_price": 65000,
            "dc_rate": 56.7,
            "lodge_list_price": 150000,
            "lodge_sale_price": 65000,
            "lodge_dc_rate": 56.7
        }
    ]

    return(
        <>
        {wishData.length === 0 ? 
            <div className="noData">
                <img src="../../../img/icon/memoIcon.png" alt="noWish" />
                <p className="noDataTxt">선택하신 위시리스트가 없습니다.</p>
            </div>
        : <>{wishData.map(wish => (
            <div className={styles.wishBox}>
                <Link to={`/lodgement/${wish.lodgement_id}`}>
                <img className={styles.wishImg} src={wish.lodgement_img_url} alt="roomImg" />
                </Link>
                <img className={styles.wishIcon} src="/img/icon/wishOkIcon.png" alt="wishIcon" />
                <div>
                    <table className={styles.wishTable}>
                        <tbody>
                            <tr>
                                <td className={styles.hotelName}>{wish.lodgement_name}</td>
                                <td><span className={styles.percent}>{wish.dc_rate}%</span> <span className={styles.discount}>{wish.list_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</span></td>
                            </tr>
                            <tr>
                                <td className={styles.standard}>{wish.landmark}</td>
                                <td className={styles.price}>{wish.sale_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        ))}  </>}
        
        </>
    )
};

export default Wishroom;