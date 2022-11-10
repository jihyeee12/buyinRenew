import React from 'react';
import { useState } from 'react';
import styles from './region.module.css';
import searchStyle from '../searchBar.module.css';

const Region = () => {
    const regionData = [
        {
            "region_id": 1,
            "region_name": "서울",
            "inner_regions": [
                {
                    "region_id": 203,
                    "region_name": "강남/역삼/삼성/논현"
                },
                {
                    "region_id": 204,
                    "region_name": "서초/신사/방배"
                },
                {
                    "region_id": 205,
                    "region_name": "잠실/신천(잠실새내)"
                },
                {
                    "region_id": 206,
                    "region_name": "영등포/여의도"
                },
                {
                    "region_id": 207,
                    "region_name": "신림/서울대/사당/동작"
                },
                {
                    "region_id": 208,
                    "region_name": "천호/길동/둔촌"
                },
                {
                    "region_id": 209,
                    "region_name": "화곡/까치산/양천/목동"
                },
                {
                    "region_id": 210,
                    "region_name": "구로/금천/오류/신도림"
                },
                {
                    "region_id": 211,
                    "region_name": "신촌/홍대/합정"
                },
                {
                    "region_id": 212,
                    "region_name": "연신내/불광/응암"
                },
                {
                    "region_id": 213,
                    "region_name": "종로/대학로/동묘앞 역"
                },
                {
                    "region_id": 214,
                    "region_name": "성신여대/성북/월곡"
                },
                {
                    "region_id": 215,
                    "region_name": "이태원/용산/서울역/명동/회현"
                },
                {
                    "region_id": 216,
                    "region_name": "동대문/을지로/충무로/신당/약수"
                },
                {
                    "region_id": 217,
                    "region_name": "회기/고려대/청량리/신설동"
                },
                {
                    "region_id": 218,
                    "region_name": "장안동/답십리"
                },
                {
                    "region_id": 219,
                    "region_name": "건대/군자/구의"
                },
                {
                    "region_id": 220,
                    "region_name": "왕십리/성수/금호"
                },
                {
                    "region_id": 221,
                    "region_name": "수유/미아"
                },
                {
                    "region_id": 222,
                    "region_name": "상봉/중랑/면목"
                },
                {
                    "region_id": 223,
                    "region_name": "태릉/노원/도봉/창동"
                }
            ]
        },
        {
            "region_id": 15,
            "region_name": "전남",
            "inner_regions": [
                {
                    "region_id": 346,
                    "region_name": "여수"
                },
                {
                    "region_id": 347,
                    "region_name": "순천"
                },
                {
                    "region_id": 348,
                    "region_name": "광양"
                },
                {
                    "region_id": 349,
                    "region_name": "목포/무안/영암/신안"
                },
                {
                    "region_id": 350,
                    "region_name": "나주/함평/영광/장성"
                },
                {
                    "region_id": 351,
                    "region_name": "담양/곡성/화순/구례"
                },
                {
                    "region_id": 352,
                    "region_name": "해남/완도/진도/강진/장흥/보성/고흥"
                }
            ]
        }
    ]

    const [regionClick, setRegionClick] = useState(0);
    const [zoneClick, setZoneClick] = useState(0);

    return (
        <div className={searchStyle.searchPop}>
            <div className={styles.resultPop}>
                <div>
                    <ul className={styles.region}>
                        {regionData.map(region => (
                            <li 
                                key={region.region_id}
                                className={regionClick === region.region_id? styles.active: null}
                                onClick={()=> setRegionClick(region.region_id)}
                                >
                            {region.region_name}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <ul className={styles.zone}>
                        {regionData.filter((region) => regionClick === region.region_id).map(zone => (
                            <>
                            {zone.inner_regions.map((inner) => (
                                <li
                                className={zoneClick === inner.region_id? styles.zoneActive: null}
                                onClick={() => setZoneClick(inner.region_id)}
                                >{inner.region_name}</li>
                            ))}
                            </>
                        )
                        )}
                    </ul>
                </div>
            </div>
            <div className={styles.btnBox}>
                <button className={styles.selectBtn}>선택</button>
                <button className={styles.cancelBtn}>취소</button>
            </div>
        </div>
    );
};

export default Region;