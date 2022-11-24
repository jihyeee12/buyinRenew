import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Banner from '../../../banner/banner';
import SideMenu from '../../../sideMenu/sideMenu';
import ReservationBox from '../../../reservation/reservationBox/reservationBox';
import Paging from '../../../paging/paging';



const ReservationList = () => {
    const tabList = [
        {id: 0, title: "예약내역"},
        {id: 1, title: "취소내역"}
    ]
    const [index, setIndex] = useState(0);
   
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    
    const [gifts, setgifts] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const listUrl = () => {
            if(index === 0){
                return '/v2/reservations'
            } else if(index === 1){
                return '/v2/cancelations'
            }
        }
        
    const fetchgifts = async () => {
        try {
            // 요청이 시작 할 때에는 error 와 gifts 를 초기화하고
            setError(null);
            setgifts(null);
            // loading 상태를 true 로 바꿉니다.
            setLoading(true);
            const response = await axios.get(
                listUrl(),{headers:{'Contents-type': 'application/json','user': 'AppIDEtest'}}); //get은 data 넣을 자리 필요없으니까 안넣어도 됨
            setgifts(response.data.data); // 데이터는 response.data 안에 들어있습니다.
            setProducts(response.data.data);
        } catch (e) {
            setError(e);
        }
        setLoading(false);
        setCount(products.length);
       
        };
        fetchgifts();
    
    }, [index,currentPage]);
    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!gifts) return null;

    const setPage = (error) => {
        setCurrentPage(error);
      };
    
    console.log(gifts);
    

   
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
                        <div style={{display : "flex", flexWrap: "wrap"}}>
                            {tabList.filter(item => index === item.id).map(item => {
                                if(item.id === 0){
                                    return <><ReservationBox index={0} gifts={gifts}/></>
                                } else if(item.id === 1){
                                    return <><ReservationBox index={1} gifts={gifts}/></>
                                }
                            })}
                        </div>
                        <Paging page={currentPage} count={count} setPage={setPage}/>
                    </div>
                </section>
            </div>
        </div>
        
        </>
    )
};

export default ReservationList;