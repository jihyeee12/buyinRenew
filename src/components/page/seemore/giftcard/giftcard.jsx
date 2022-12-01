import React from 'react';
import styles from './giftcard.module.css'
import { Link} from 'react-router-dom';
import { useState ,useEffect } from 'react';
import Get from '../../../../service/api/url/Get';

const Giftcard = () => {
    
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
        // try {
        //     // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        //     setError(null);
        //     setUsers(null);
        //     // loading 상태를 true 로 바꿉니다.
        //     setLoading(true);
        //     const response = await axios.get(
        //      '/giftcards'
        //     );
        //     setUsers(response.data.data); // 데이터는 response.data 안에 들어있습니다.
        // } catch (e) {
        //     setError(e);
        // }
        Get.getGiftcard()
        .then(function (response) {
            setUsers(response);
        })
        .catch(error => {
            setError(error);
        })

        setLoading(false);
        };

        fetchUsers();
    }, []);

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!users) return null;
    console.log(users);
    const giftcard = users;
       
    return(
        <>
            <div className={styles.giftcardBox}>
                <img src="..\img\icon\giftCardMain.png" alt="giftcardTitle" />
                <div className={styles.cardList}>
                {giftcard.map(v => (
                    <Link to={`/giftcardDetail/${v.giftcard_id}`} className={styles.link}>
                    <div key={v.card_id} id={v.card_id} className={styles.giftcard}>
                    <div className={styles.cardImg}>
                            <img className={styles.card_imgs} src={v.giftcard_img_url} alt="cardImg" />
                        </div>
                        <div className={styles.cardTxt}>
                            <p className={styles.cardName}>{v.giftcard_name}</p>
                            <p className={styles.cardPrice}>{String(v.giftcard_price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
                        </div>
                    </div>
                    </Link>
                ))}
                </div>
            </div>
        
        </>
    )
}

export default Giftcard;