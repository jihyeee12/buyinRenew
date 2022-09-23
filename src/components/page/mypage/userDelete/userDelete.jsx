import React from 'react';
import styles from './userDelete.module.css';

const UserDelete = () => {
    
    return(
        <>
        <div className={styles.deleteBox}>
            <p className={`${styles.deleteTitle} ${styles.title}`}>회원탈퇴</p>
            <p className={styles.deleteTxt}>회원탈퇴를 하시려면 안내 및 동의가 필요합니다.</p>
            <p className={styles.deleteWarning}>회원탈퇴를 진행하시겠습니까?</p>
            <div className={styles.deleteNoiceBox}>
                <p className={styles.deleteTitle}>탈퇴 시 주의사항</p>
                <ul>
                    <li>탈퇴시 적립된 포인트와 쿠폰 등 금액에 관련된 내용은 삭제되어 복구가 불가능합니다.</li>
                    <li>등록된 리뷰는 자동으로 삭제되지 않으니 탈퇴 전 개별적으로 삭제해주시기 바랍니다.</li>
                    <li>계정 정보 및 위시리스트 정보 등 서비스 이용정보는 복구가 불가능합니다.</li>
                </ul>
            </div>
            <div className={styles.agreeBox}>
                <label className={styles.deleteCheck}><input type="checkbox" />위 주의사항을 모두 숙지했고, 탈퇴에 동의합니다.</label>
                <button type='button' className={styles.deleteBtn}>회원탈퇴</button>
            </div>
        </div>

        </>
    )
};

export default UserDelete;