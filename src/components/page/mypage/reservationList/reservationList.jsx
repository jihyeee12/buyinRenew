import React from 'react';
import Banner from '../../../banner/banner';
import SideMenu from '../../../sideMenu/sideMenu';
import ReservationBox from '../../../reservation/reservationBox/reservationBox';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


const ReservationList = () => {
    const tabList = [
        {id: 0, title: "예약내역"},
        {id: 1, title: "취소내역"}
    ]
    const [index, setIndex] = useState(0);

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
             '/v2/cancelations', {header:{'user': 'AppIDEtest'}}
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
console.log(users);

    return(
        <>
        <Banner name={"마이페이지"}/>
        <div className="mypage">
            <SideMenu type={'my'}/>
            <div className="pageBox">
                <section className="reservation">
                    <ul className="tabMenu">
                        {tabList.map(item => (
                            <li
                                key={item.id}
                                className={index === item.id? "selectTab": null}
                                onClick={()=> setIndex(item.id)}
                            >{item.title}</li>
                        ))}
                    </ul>
                    <div className="tabContent">
                        {tabList.filter(item => index === item.id).map(item => {
                            if(item.id === 0){
                                return <><ReservationBox type={"reservation"}/></>
                            } else if(item.id === 1){
                                return <><ReservationBox type={"cancel"}/></>
                            }
                        })}
                        
                    </div>
                </section>
            </div>
        </div>
        
        </>
    )
};

export default ReservationList;