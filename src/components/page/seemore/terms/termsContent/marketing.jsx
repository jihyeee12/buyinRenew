import React from 'react';
import styles from '../../terms/terms.module.css';

const Marketing = ({type}) => {
    return (
        <div>
            {type === "korean" ?
            <>
            <h3>마케팅 활용 동의</h3>
                <p className={styles.contentTxt}>
                    ① 수집 항목<br />
                    - 연락처 정보 : 휴대전화, 이메일, 주소<br />
                     <br />
                    ② 이용 목적<br />
                    - 서비스 및 프로모션 이벤트 정보 안내 등 마케팅 활동 자료로 활용<br />
                     <br />
                    ③ 보유 기간<br />
                    - 회원탈퇴 시 또는 별도 거부의 요청시까지<br />
                     <br />
                    ④ 수집 방법<br />
                    - 홈페이지<br />
                     <br />
                    BUY IN HOTEL 마케팅 활동에 대한 활용을 목적으로 하는 동의서입니다.<br />
                    본 내용에 대해 동의 하지 않으시면 회원가입 및 서비스 이용이 불가능 합니다.<br />
                    비동의 시 BUY IN HOTEL의 상품과 혜택에 대한 다양한 정보를 받아보실 수 없습니다.​ <br />
                    <br />
                </p>
            </>
            :(type === "english"? 
            <>
            <h3>Agree to use marketing</h3>
                <p className={styles.contentTxt}>
                    ① Collected items.<br />
                    - Contact information : Mobile phone, e-mail, address.<br />
                    ② Purpose of using it.<br />
                    - It is used as data for marketing activities such as information on services and promotional events.<br />
                    ③ The retention period.<br />
                    - If you withdraw from the membership or if you request a separate rejection<br />
                    ④ How to collect.<br />
                    - Homepage<br />
                    <br />
                    This is an agreement for the purpose of using BUY IN HOTEL marketing activities.<br />
                    If you do not agree with this, you will not be able to sign up for membership or use the service.<br />
                    If you disagree, You can't receive various information on the products and benefits of the BUY IN HOTEL.<br />
                    
                    <br />
                </p>
            </>
            :<></>)
            }
        </div>
    );
};

export default Marketing;