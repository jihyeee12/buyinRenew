import React from 'react';
import { useState } from 'react';
import {Map, MapMarker} from "react-kakao-maps-sdk";
import styled from 'styled-components';

const HotelMaps = () => {
    const MapContainer = styled.div`
        padding: 5px;
        font-size: 14px;
    `
    const [state, setState] = useState({
        center: {lat: 35.22243518268784, lang: 126.85170332677008},
        inPanto: false,
    })
    return (
        <Map
            center={state.center}
            style={{
                width: "100%",
                height: "100%",
            }}
        >
            <MapMarker>
                <MapContainer>
                    <p style={{textAlign : "center"}}>hotelName</p>
                    <a class="bigMap" style={{cursor: "pointer", color: "blue"}} target="_blank" rel="noopener noreferrer">큰 지도보기</a>
                </MapContainer>
            </MapMarker>
        </Map>
    );
};

export default HotelMaps;