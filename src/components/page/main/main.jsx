import React,{useState, useEffect} from 'react';
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import styles from './main.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import SearchBar from '../../searchBar/searchBar';
import RoomList from '../../reservation/roomList/roomList';
import RecommandHotel from './recommandHotel/recommandHotel';
import RecommandCard from './recommandCard/recommandCard';
import Adverisement from './advertisement/adverisement';

SwiperCore.use([Navigation, Pagination,Autoplay])

function Main() {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const [searchParams, setSeratchParams] = useSearchParams();
    const checkin = searchParams.get("checkin");
    const checkout = searchParams.get("checkout");
    const regionName = searchParams.get("name");
    const region = searchParams.get("region");
    const period = {checkin,checkout};
    
    const recommandDorm = (state) => {
        navigate('/recommandDorm',{
            state:{
                state: state
            }
        });
    }

    useEffect(() => {
        const fetchUsers = async () => {
        try {
            // 요청이 시작 할 때에는 error 와 users 를 초기화하고
            setError(null);
            setUsers(null);
            // loading 상태를 true 로 바꿉니다.
            setLoading(true);
            const response = await axios.get(
             '/mainpage'
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
    
    console.log(users)
    const recommendLodgements = users.recommend_lodgements;
    
    const searchInfo = {checkin,checkout,regionName,region};
    

    return (
            <div className={styles.container}>
                <div className={styles.main}>
                    <Swiper 
                        className='banner'
                        spaceBetween={50}
                        slidesPerView ={1}
                        navigation
                        pagination={{clickable : true}}
                        autoplay={{delay : 3000}}
                    >
                        {users.events.map(data => (
                            <SwiperSlide className={styles.slides}>
                                <img className={styles.eventImg} src={data.event_img_url} key={data.event_id} onClick={()=> window.open(data.event_contents_url,"_blank","width=780, height=1200,left=100%")} />
                            </SwiperSlide>
                        ))}
                        
                    </Swiper>
                </div>
                <SearchBar searchInfo={searchInfo} />
                <div className={styles.roomList}>
                    <RoomList period={period} state={users.thumb_lodgements} />
                </div>
                <div className={styles.ad}>
                    <Adverisement/>
                </div>
                <div className={styles.recommand}>
                    <p className={styles.title}>추천숙소 &nbsp;<img className={styles.seemoreBtn} onClick={()=> recommandDorm({recommendLodgements})} src='img/icon/seemore.png' alt='더보기' /></p>
                    <div className={`${styles.recommandBox} ${styles.recommandHotelBox}`}>
                        <RecommandHotel state={users.recommend_lodgements}/>
                    </div>
                </div>
                <div className={styles.giftcard}>
                    <p className={styles.title}>바이인호텔 기프트카드 &nbsp;<Link to ="giftcard"><img className={styles.seemoreBtn} src='img/icon/seemore.png' alt='더보기' /></Link></p>
                    <div className={styles.recommandBox}>
                        <RecommandCard state={users.giftcards}/>
                    </div>
                </div>
            </div>
        );
    }


export default Main;

