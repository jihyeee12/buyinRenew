import React from 'react';
import { useState ,useEffect } from 'react';
import Banner from '../../../banner/banner';
import SideMenu from '../../../sideMenu/sideMenu';
import Get from '../../../../service/api/url/Get';
import PointTabBox from './pointTabBox';

const Point = () => {
    const tabList = [
        {id: 0, title : "포인트"},
        {id: 1, title : "쿠폰"}
    ]
    const [index, setIndex] = useState(0);
    const [point, setPoint] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
      
    const fetchPoint = async () => {

        Get.getPoint(index)
        .then(function (response) {
            setPoint(response);
        })
        .catch(error => {
            setError(error);
        })
        setLoading(false);
        };
        fetchPoint();
    
    }, [index]);
    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!point) return null;
    
    console.log(point);
    
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
                                onClick={() => setIndex(item.id)}
                            >{item.title}</li>
                        ))}
                        
                    </ul>
                    <div className="tabContent">
                        {tabList.filter(item => index === item.id).map(item => {
                            if(item.id === 0){
                                return <PointTabBox point={point} index={0}/>
                            } else if(item.id === 1){
                                return <PointTabBox point={point} index={1}/>
                            }
                            }
                        )}
                        </div>
                </section>
            </div>
        </div>
        </>
    )

};

export default Point;