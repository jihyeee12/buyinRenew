import React from 'react';
import { useState } from 'react';
import styles from './region.module.css';
import searchStyle from '../searchBar.module.css';
import { useEffect } from 'react';
import Get from 'service/api/url/Get';

const Region = ({setRegion, setZone, setvisible, setRegionInfo, setZoneInfo}) => {
    const [regionClick, setRegionClick] = useState(0);
    const [zoneClick, setZoneClick] = useState(0);
    const [regionName, setRegionName] = useState("");
    const [ZoneName, setZoneName] = useState("");
    const [regionCss, setRegionCss] = useState(0);
    const [zoneCss, setZoneCss] = useState(0);

    const SelectRegion = () =>{
        setRegion(regionName);
        setZone(ZoneName);
        setvisible(false);
        setRegionCss(regionClick);
        setZoneCss(zoneClick);
        setRegionInfo(regionClick);
        setZoneInfo(zoneClick);
    }
    console.log(regionCss);

    const [regionList, setRegionList] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        
    const fetchRegionList = async () => {
        
        Get.getRegion()
        .then(function (response) {
            setRegionList(response);
        })
        .catch(error => {
            setError(error);
        })

        setLoading(false);
        };
        fetchRegionList();
    
    }, []);
    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!regionList) return null;
    
    console.log(regionList);

    const regionData = regionList;

    return (
        <div className={searchStyle.searchPop}>
            <div className={styles.resultPop}>
                <div>
                    <ul className={styles.region}>
                        {regionData.map(region => (
                            <li 
                                key={region.region_id}
                                className={[styles.regionList, (regionClick === region.region_id || regionCss === region.region_id)? styles.active: null].join(" ")}
                                onClick={()=> {setRegionClick(region.region_id); setRegionName(region.region_name)}}
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
                                className={(zoneClick === inner.region_id || zoneCss === inner.region_id)? styles.zoneActive: null}
                                onClick={() => {setZoneClick(inner.region_id); setZoneName(inner.region_name)}}
                                >{inner.region_name}</li>
                            ))}
                            </>
                        )
                        )}
                    </ul>
                </div>
            </div>
            <div className={styles.btnBox}>
                <button className={styles.selectBtn} onClick={()=> SelectRegion()}>선택</button>
                <button className={styles.cancelBtn} onClick={() => setvisible(false)}>취소</button>
            </div>
        </div>
    );
};

export default Region;