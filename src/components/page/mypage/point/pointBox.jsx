import React from 'react';
import styles from './point.module.css';
import Get from '../../../../service/api/url/Get';
import { useState } from 'react';
import { useEffect } from 'react';

const PointBox = () => {
    const [point, setPoint] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
      
    const fetchPoint = async () => {

        Get.getPoint()
        .then(function (response) {
            setPoint(response);
        })
        .catch(error => {
            setError(error);
        })
        setLoading(false);
        };
        fetchPoint();
    
    }, []);
    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!point) return null;
    
    console.log(point);
    return (
        <div className={styles.point}>
            <div className={styles.pointBox}>
                <div>
                    <p>사용가능포인트</p>
                    <p>{point.current_point.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}P</p>
                </div>
                <div>
                    <p>소멸예정포인트</p>
                    <p>{point.will_destroy.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}P</p>
                </div>
            </div>
            <p className={styles.pointTitle}>포인트내역</p>
            <div className={styles.pointList}>
                <table className={styles.pointTable}>
                    <tbody>
                        {point.point_usages.map(v => (
                        <tr>
                            <td>
                                <p className={styles.pointName}>{v.usage_name}</p>
                                <p className={styles.pointHotel}>{v.usage_contents}</p>
                            </td>
                            <td>
                                <p className={styles.pointUsed} style={{color: v.is_usage === "true" ? "#FF5F5F" : "#477696"}}>{v.is_usage === "true" ? "-" : "+"} {v.point_value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}P</p>
                                <p className={styles.pointDate}>{v.point_date.split(" ")[0]}</p>
                            </td>
                        </tr>
                        ))}
                        </tbody>
                </table>
            </div>
        </div>
    );
};

export default PointBox;