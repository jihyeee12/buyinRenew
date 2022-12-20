import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from '../lodgement.module.css';

const {kakao} = window;

const HotelMaps = ({lat, lng, address}) => {
    
    const [map, setMap] = useState(null);

    useEffect(() => {
        const container = document.getElementById('map');
        const opitons = {
            center: new kakao.maps.LatLng(lat, lng),
            level: 3
        }
        const KakaoMaps = new kakao.maps.Map(container, opitons);

        const markerPosition = new kakao.maps.LatLng(lat,lng);
        const marker = new kakao.maps.Marker({
            position: markerPosition
        })
        
        const iwContent = '<div style="padding:5px; font-family: pretendard; font-size: 0.75rem; width: 100%; text-align: center;">' + address + '<br>'+
        '<div style="display: flex; justify-content:space-around"><a href="https://map.kakao.com/link/map/'+ address+','+ lat + ', '+ lng+'" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/' + address + ','+ lat + ','+lng +'" style="color:blue" target="_blank">길찾기</a></div></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        iwPosition = new kakao.maps.LatLng(lat, lng); //인포윈도우 표시 위치입니다

        const infowindow = new kakao.maps.InfoWindow({
            position : iwPosition, 
            content : iwContent 
        });
        
        infowindow.open(KakaoMaps, marker);
        marker.setMap(KakaoMaps);
    },[])
    
    return (
        <div id='map' style={{width: '100%', height: '100%'}}>
        </div>
    );
};

export default HotelMaps;