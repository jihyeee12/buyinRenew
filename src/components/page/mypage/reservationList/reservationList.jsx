import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Banner from '../../../banner/banner';
import SideMenu from '../../../sideMenu/sideMenu';
import ReservationBox from '../../../reservation/reservationBox/reservationBox';
import Paging from '../../../paging/paging';
import Get from '../../../../service/api/url/Get';



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
    
    const fetchgifts = async () => {
        
        Get.getReservationList(index)
        .then(function (response) {
            setgifts(response);
        })
        .catch(error => {
            setError(error);
        })

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