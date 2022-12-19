import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Get from '../../../service/api/url/Get';
import Wishroom from '../../reservation/wishRoom/wishroom';


const Wishlist = (props) => {
    const [wish, setWish] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

 
    useEffect(() => {
        
    const fetchWish = async () => {
        
        Get.getWishList()
        .then(function (response) {
            setWish(response);
        })
        .catch(error => {
            setError(error);
        })

        setLoading(false);
        };
        fetchWish();
    
    }, []);
    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!wish) return null;
    
    console.log(wish);
    
    return(<>
        <div className="titleBar">
            <p>위시리스트</p>
        </div>
        <div className="container">
            <Wishroom wish ={wish} />
        </div>
    </>)
};

export default Wishlist;