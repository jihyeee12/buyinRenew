import React from 'react';
import styles from './wishroom.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Get from '../../../service/api/url/Get';
import Delete from 'service/api/url/Delete';

const Wishroom = ({wish, setDeleteState}) => {
    const navigate = useNavigate();
    const linkLodge = () =>{
        navigate('/lodgement')
    }
    
    const [error, setError] = useState(null);
    const [wishOut, setWishOut] = useState();
        const clickWish = (id) => {
            const fetchDeleteWish = async () => {
                Delete.deleteWish(id)
                    .then(function (response) {
                        console.log(response);
                        setWishOut(id);
                        setDeleteState();
                    })
                    .catch(error => {
                        setError(error);
                        console.log(error);
                    })
                };
                    fetchDeleteWish();
        }
        if (error) return <div>에러가 발생했습니다</div>;
    return(
        <>
        {wish.length === 0 ? 
            <div className="noData">
                <img src="../../../img/icon/memoIcon.png" alt="noWish" />
                <p className="noDataTxt">선택하신 위시리스트가 없습니다.</p>
            </div>
        : <>{wish.map(wish => (
            <div className={styles.wishBox} key={wish.lodgement_id}>
                <Link to={`/lodgement/${wish.lodgement_id}`}>
                <img className={styles.wishImg} src={wish.lodgement_img_url} alt="roomImg" />
                </Link>
                <button type='button' className={styles.wishBtn} key={wish.lodgement_id} onClick={() => clickWish(wish.lodgement_id)}>
                    <img className={styles.wishIcon}  src={(wishOut === wish.lodgement_id ? "/img/icon/wish.png" : "/img/icon/wishOkIcon.png")} alt="wishIcon" />
                </button>
                <div>
                    <table className={styles.wishTable}>
                        <tbody>
                            <tr>
                                <td className={styles.hotelName}>{wish.lodgement_name}</td>
                                {wish.lodge_list_price !== null && <td className={styles.listPrice}><span className={styles.percent}>{wish.lodge_dc_rate}%</span> <span className={styles.discount}>{wish.lodge_list_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</span></td>}
                            </tr>
                            <tr>
                                <td className={styles.standard}>{wish.landmark}</td>
                                {wish.lodge_sale_price ? <td className={styles.price}>{wish.lodge_sale_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</td> : <td className={styles.close}>예약마감</td>}
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