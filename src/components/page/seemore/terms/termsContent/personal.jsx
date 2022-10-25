import React from 'react';
import styles from '../../terms/terms.module.css';

const Personal = ({type}) => {
    return (
        <div>
            {type === "korean"? 
            <>
            <h3>개인정보 수집 및 이용에 대한 안내</h3>
            <p className={styles.contentTxt}>
                개인정보의 수집항목<br />
                 <br />
                BUY IN HOTEL은 별도의 회원가입 절차 없이 대부분의 컨텐츠에 자유롭게 접근할 수 있습니다.BUY IN HOTEL은 서비스를 이용하시고자 할 경우 다음의 정보를 입력해주셔야 하며,<br />
                선택항목을 입력하시지 않았다 하여 서비스 이용에 제한은 없습니다.<br />
                1) 고객 문의(연회 및 웨딩)시 수집하는 개인정보의 항목<br />
                - 필수항목 : 성명, 이메일, 전화번호, 주소, 휴대폰, 행사종류, 인원수, 행사날짜,  행사시간, 문의사항<br />
                 <br />
                2) 객실예약시 수집하는 개인정보의 항목<br />
                - 필수항목 : 예약자, 투숙자, 투숙인원, 예약타입, 호텔도착일자, 호텔출발일자, 생년월일, 이메일, 주소, 휴대폰, 카드번호, 요구사항<br />
                - 선택항목 : 팩스번호, 객실수, 추가침대수, 흡연여부<br />
                 <br />
                개인정보의 보유 및 이용기간<br />
                 <br />
                ① 귀하의 개인정보는 다음과 같이 개인정보의 수집목적 또는 제공받은 목적이 달성되면 파기됩니다.<br />
                단, 상법 등 관련법령의 규정에 의하여 다음과 같이 거래 관련 권리 의무 관계의 확인 등을 이유로 일정기간 보유하여야 할 필요가 있을 경우에는 일정기간 보유합니다.<br />
                - 회원가입정보의 경우, 회원가입을 탈퇴하거나 회원에서 제명된 경우 등 일정한 사전에 보유목적, 기간 및 보유하는 개인정보 항목을 명시하여 동의를 구합니다.<br />
                - 회원 가입정보의 경우, 회원가입을 탈퇴하거나 회원에서 제명된때<br />
                   보존 기간 : 소송이나 분쟁의 근거 자료로 보존하는 목적으로서 10년<br />
                   기타 개별적으로 이용자의 동의를 받은 경우 : 3년<br />
                - 배송정보의 경우 물품 또는 서비스가 인도되거나 제공된때<br />
                - 이벤트 등 일시적목적을 위하여 수집한 경우 이벤트등이 종료한 때<br />
                - 계약 또는 청약철회 등에 관한 기록 : 5년<br />
                - 대금결제 및 재화등의 공급에 관한 기록 : 5년<br />
                - 소비자의 불만 또는 분쟁처리에 관한 기록 : 3년<br />
                ② 귀하의 동의를 받아 보유하고 있는 거래정보 등을 귀하께서 열람을 요구하는 경우BUY IN HOTEL은  지체없이 그 열람,확인 할 수 있도록 조치합니다.<br />
                 <br />
                개인정보의 수집목적 및 이용목적<br />
                 <br />
                BUY IN HOTEL은 개인정보보호 관련 주요 법률인 ‘정보통신망 이용촉진 및 정보보호 등에 관한 법률’을 준수하기 위하여 개인정보취급방침을 제정하고 이를 준수하고 있습니다.<br />
                 <br />
                ① 수집 항목: 개인 식별 정보 (성명, 성별, 생년월일), 서비스 제공 연락 정보 (휴대폰, 이메일)<br />
                * 인터넷 서비스 이용과정에서 IP주소, 쿠키, 방문기록, 등 개인정보가 자동으로 생성되어 수집될 수 있습니다.<br />
                ② 이용 목적: 본인 확인 절차에 활용, 고객 불만 처리<br />
                ③BUY IN HOTEL은 개인정보의 이용목적의 달성 및 해지시까지 개인정보를 보유, 이용하되 개인정보의 수집 및 이용 목적이 달성된 때에는 고객의 개인정보를 지체없이 파기합니다.​ <br />
                <br />
            </p>
            </>
            :(type === "english"? 
            <>
            <h3>Privacy policy</h3>
                <p className={styles.contentTxt}>
                &lt;Information on the collection and use of personal information&gt;<br />
                <br />
                Items to collect personal information.<br />
                <br />
                The BUY IN HOTEL Design Hotel has free access to most of the content without a separate membership registration process. If you want to use the service at the BUY IN HOTEL, you must enter the following information.<br />
                <br />
                There is no restriction on the use of the service just because you did not enter the selection.<br />
                <br />
                1) Items of personal information collected during customer inquiries (banquet and wedding)<br />
                - Required items: name, e-mail, phone number, address, mobile phone, event type, number of people, event date, event time, and inquiries<br />
                <br />
                2) Items of personal information collected when booking a room.<br />
                - Required items: reservation person, guest, number of guests, reservation type, hotel arrival date, hotel departure date, date of birth, e-mail, address, mobile phone, card number, requirement<br />
                - Optional items: fax number, number of rooms, number of additional beds, smoking status<br />
                <br />
                Period of retention and use of personal information.<br />
                <br />
                ① Your personal information will be destroyed when the purpose of collecting or receiving personal information is achieved as follows.<br />
                However, if it is necessary to hold it for a certain period of time due to the confirmation of the transaction-related rights and obligations relationship according to the provisions of related laws such as the Commercial Act, etc., it shall be held for a certain period of time.<br />
                - In the case of membership information, consent is sought by specifying the purpose, period, and personal information items to be held in advance, such as withdrawal from membership or expulsion from membership.<br />
                - In the case of membership information, when you withdraw from membership or are expelled from a member,<br />
                Preservation period: 10 years for the purpose of preserving it as evidence for litigation or dispute.<br />
                In the case of obtaining the consent of the user individually: 3 years.<br />
                - In the case of delivery information, when goods or services are delivered or provided,<br />
                - If collected for temporary purposes such as an event, when the event, etc. ends,<br />
                - Records of contract or withdrawal of subscription, etc.:<br />
                - Records of payment and supply of goods, etc.: 5 years.<br />
                - Records of consumer complaints or disputes: 3 years<br />
                ② If you request access to the transaction information you have with your consent, the BUY IN HOTEL will take measures to view and confirm it without delay.<br />
                <br />
                Purpose of collecting and using personal information<br />
                <br />
                The BUY IN HOTEL has enacted and complies with the Personal Information Handling Policy to comply with the "Act on Promotion of Information and Communication Network Utilization and Information Protection," a major law related to personal information protection.<br />
                <br />
                ① Collection items: personal identification information (name, gender, date of birth), contact information for service provision (cell phone, email)<br />
                * Personal information such as IP addresses, cookies, visit records, etc. can be automatically generated and collected in the process of using the Internet service.<br />
                ② Purpose of use: Use it for identification procedures to handle customer complaints.<br />
                ③ The BUY IN HOTEL holds and uses personal information until the purpose of personal information is achieved or terminated, but when the purpose of collecting and using personal information is achieved, the customer's personal information is destroyed without delay.<br />​
                <br />
            </p>
            </>
            :
            <></>)}
        </div>
    );
};

export default Personal;