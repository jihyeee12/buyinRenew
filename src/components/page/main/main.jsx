// import React,{useState, useEffect} from 'react';
import styles from './main.module.css';
import SearchBar from '../../searchBar/searchBar';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import RoomList from '../../reservation/roomList/roomList';
// import axios from 'axios';
// import {BrowserRouter as Router} from 'react-router-dom';

SwiperCore.use([Navigation, Pagination,Autoplay])

function Main() {
    // const [users, setUsers] = useState(null);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     const fetchUsers = async () => {
    //         try {
    //             // 요청이 시작 할 때에는 error 와 users 를 초기화하고
    //             setError(null);
    //             setUsers(null);
    //             // loading 상태를 true 로 바꿉니다.
    //             setLoading(true);
    //             const response = await axios.get(
    //                 'https://www.buyinhotel.co.kr/mainpage'
    //             );
    //             setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
    //             console.log(response.data);
    //         } catch (e) {
    //             setError(e);
    //         }
    //         setLoading(false);
    //     };
    
    //     fetchUsers();
    // }, []);

    // if (loading) return <div>로딩중..</div>;
    // if (error) return <div>에러가 발생했습니다</div>;
    // if (!users) return null;

        return (
            <>
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
                        <SwiperSlide className={styles.slides} ><img src='img/header/eventBanner.png'/></SwiperSlide>
                        <SwiperSlide className={styles.slides} ><img src='img/header/eventBanner.png'/></SwiperSlide>
                    </Swiper>
                </div>
                
                <SearchBar />
                
                <div className={styles.roomList}>
                    <RoomList />
                </div>
                <div className={styles.ad}>
                    <div className="ara">
                        <h3 className={styles.adTitle}>BUY IN ARA</h3>
                        <img className={styles.adImg} src="/img/roomImg/app.png" alt="araAd" />
                    </div>
                    <div className="app">
                        <h3 className={styles.adTitle}>BUY IN HOTEL APP</h3>
                        <img className={styles.adImg} src="/img/roomImg/app.png" alt="app" />
                    </div>
                </div>

            </div>
            </>
                
        );
    }


export default Main;

