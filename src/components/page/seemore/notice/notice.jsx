import React from 'react';
import Banner from '../../../banner/banner';
import SideMenu from '../../mypage/sideMenu/sideMenu';
import {useState} from 'react';
import styles from './notice.module.css';


const Notice = () => {
    const [isCheck, setCheck] = useState(false);

    return(
        <>
        <Banner name={"더보기"}/>
            <div className="mypage">
                <SideMenu type={'see'}/>
                <div className="pageBox">
                    <div className={styles.noticeBox}>
                        <div className={styles.noticeTitle}>
                            <div className={styles.noticeTitleTxt}>
                                <p>[공지] 서비스 점검 안내</p>
                                <p>2022.01.01</p>
                            </div>
                            <button type='button' className={styles.toggleBtn} onClick={() => {
                                setCheck((e) => !e);
                            }}>
                                {isCheck ? <img src='../../../img/icon/oneUp.png' alt='upIcon' /> : <img src='../../../img/icon/oneDown.png' alt='downIcon' />}
                            </button>
                        </div>
                        {isCheck && (
                            <div className={styles.answerBox}>
                                <ul>
                                    <li>안녕하세요. 바이인 호텔 입니다.<br/>
                                        더욱 친절한 서비스 제공을 위해 서비스 점검 안내 드립니다.<br />
                                        점검 시간 동안 바이인 호텔 앱/웹 이용이 제한됩니다.
                                    </li>
                                    <li>- 일시 : 2022.01.01(토) 00시 00분 ~ 12시 00분(12시간)</li>
                                    <li>점검시간은 변경 될 수 있으며 변경 시 공지를 통해 안내 드리겠습니다. <br />
                                        감사합니다.
                                    </li>
                                </ul>
                            </div>
                        )

                        }
                        
                    </div>
                </div>
            </div>
        </>
    )
};

export default Notice;