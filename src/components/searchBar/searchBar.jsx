import React from 'react';
import styles from './searchBar.module.css';
import { useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import DatePicker from "react-datepicker";
import { ko } from 'date-fns/esm/locale';
import "react-datepicker/dist/react-datepicker.css";
import Region from './region/region';
import dayjs from 'dayjs';

const SearchBar = ({searchInfo}) => {
    const location = useLocation();
    //const localName = location.state.regionTxt;
    const navigate = useNavigate();
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const [startDate, setStartDate] = useState(today);
    const [endDate, setEndDate] = useState(tomorrow);
    const [region, setRegion] = useState("");
    const [zone, setZone] = useState("");
    const [regionInfo, setRegionInfo] = useState();
    const [zoneInfo, setZoneInfo] = useState();
    const [visible, setvisible] = useState(false);
    const [hotelSearch, setHotelSearch] = useState("");
    const [regionSearch, setRegionSearch] = useState("");
    
    const getFormattedDate = (date) => {
        const month = date.toLocaleDateString('ko-KR', {
            month: 'long',
        });
        
        const day = date.toLocaleDateString('ko-KR', {
            day: 'numeric',
        });
        
        return `${month.substr(0, month.length - 1)}/${day.substr(0, day.length - 1)}`;
        }

        // 요일 반환
        const getDayName = (date) => {
            return date.toLocaleDateString('ko-KR', {
            weekday: 'long',
            }).substr(0, 1);
        }
        
        // 날짜 비교시 년 월 일까지만 비교하게끔
        const createDate = (date) => {
            return new Date(new Date(date.getFullYear()
            , date.getMonth()
            , date.getDate()
            , 0
            , 0
            , 0));
        }

        const startDay = dayjs(startDate).format("YYYY.MM.DD");
        const endDay = dayjs(endDate).format("YYYY.MM.DD");
        let regionId = zoneInfo;
        const regionTxt = region + ", "+ zone;
        
        if(zoneInfo === undefined || zoneInfo === 0){
            if(regionInfo === undefined){
                regionId = "";
            } else {
                regionId = regionInfo;
            }
        }


        const linkSearch = () => {
            navigate(`/search?checkin=${startDay}&checkout=${endDay}&region=${regionId}&name=${hotelSearch}`);
        }
        
        return(
            <>
                <div className={styles.searchDiv}>
                    <ul className={styles.searchBar}>
                        <li className={styles.searchLi}>
                            <p className={styles.searchTitle}>숙소명</p>
                            <input 
                                type='textbox' 
                                id='hotelName' 
                                onChange={(e) => {setHotelSearch(e.target.value)}} 
                                defaultValue={searchInfo.regionName !== "" ? searchInfo.regionName : null}
                                placeholder='숙소명을 입력해주세요'/>
                        </li>
                        <li className={styles.searchLi}>
                            <p className={styles.searchTitle}>지역</p>
                            <input 
                                type='textbox' 
                                className={styles.selectInput} 
                                readOnly
                                onClick={() => setvisible(!visible)}
                                onChange ={(e) => {setRegionSearch(e.target.value)}}
                                placeholder='지역을 선택해주세요' 
                                defaultValue= {searchInfo.region !== "" ? searchInfo.region : region + "," + zone} />
                            {visible && <Region setRegion={setRegion} setZone={setZone} setvisible={setvisible} setRegionInfo={setRegionInfo} setZoneInfo={setZoneInfo} />}
                        </li>
                        <li className={styles.searchLi}>
                            <p className={styles.searchTitle}>체크인</p>
                            <DatePicker 
                                selected={searchInfo.checkin !== null ? dayjs(searchInfo.checkin).$d : startDate} 
                                onChange={date => setStartDate(date)}
                                placeholderText="날짜를 선택해주세요."
                                minDate={new Date()}
                                selectsStart
                                startDate={startDate}
                                endDate={endDate}
                                locale={ko}
                                dateFormat="yyyy.MM.dd"
                                showDisabledMonthNavigation
                                disabledKeyboardNavigation
                                dayClassName={date => 
                                getDayName(createDate(date)) === '토' ? styles.saturDay :
                                getDayName(createDate(date)) === '일' ? styles.sunDay : ""}
                                />
                        
                        </li>
                        <li className={styles.searchLi}>
                            <p className={styles.searchTitle}>체크아웃</p>
                            <DatePicker
                                selected={searchInfo.checkout !== null ? dayjs(searchInfo.checkout).$d : endDate}
                                onChange={(date) => setEndDate(date)}
                                selectsEnd
                                placeholderText="날짜를 선택해주세요."
                                startDate={startDate}
                                endDate={endDate}
                                minDate={startDate}
                                locale={ko}
                                dateFormat="yyyy.MM.dd"
                                showDisabledMonthNavigation
                                disabledKeyboardNavigation
                                dayClassName={date => 
                                getDayName(createDate(date)) === '토' ? styles.saturDay :
                                getDayName(createDate(date)) === '일' ? styles.sunDay : undefined}
                            />
                        </li>
                    </ul>
                    
                    <div className={styles.searchButton}>
                        <button type='button' className={styles.searchBtn} onClick={() => linkSearch(regionTxt)} >
                            <img src='/img/icon/round-search.png' alt='magnifier' />
                        </button>
                    </div>
                </div>           
            </>
            );
    }

export default SearchBar;
