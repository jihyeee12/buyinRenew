import React from 'react';
import styles from './giftcard.module.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const Giftcard = () => {
    const navigate = useNavigate();
    const cardDetail = (value) => {
        navigate('/giftcardDetail',{
            state:{
                value: value,
            }
        });
    }

    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
        try {
            // 요청이 시작 할 때에는 error 와 users 를 초기화하고
            setError(null);
            setUsers(null);
            // loading 상태를 true 로 바꿉니다.
            setLoading(true);
            const response = await axios.get(
             '/giftcards'
            );
            setUsers(response.data.data); // 데이터는 response.data 안에 들어있습니다.
        } catch (e) {
            setError(e);
        }
        setLoading(false);
        };

        fetchUsers();
    }, []);

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!users) return null;
    
    const giftcard = users;
    
    

    
    return(
        <>
            <div className={styles.giftcardBox}>
                <img src="..\img\icon\giftCardMain.png" alt="giftcardTitle" />
                <div className={styles.cardList}>
                {giftcard.map(v => (
                    <div id={v.card_id} className={styles.giftcard} onClick={cardDetail(v.giftcard_id)}>
                    <div className={styles.cardImg}>
                            <img className={styles.card_imgs} src={v.giftcard_img_url} alt="cardImg" />
                        </div>
                        <div className={styles.cardTxt}>
                            <p className={styles.cardName}>{v.giftcard_name}</p>
                            <p className={styles.cardPrice}>{String(v.giftcard_price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        
        </>
    )
}

export default Giftcard;