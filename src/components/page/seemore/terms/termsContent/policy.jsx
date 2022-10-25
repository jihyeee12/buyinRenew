
import React from 'react';
import styles from '../../terms/terms.module.css';

const Policy = ({type}) => {
    return (
        <div>
            {type === "korean" ? 
                <>
                <h3>이용약관</h3>
                <p className={styles.contentTxt}>
						제 1 장 총칙<br />
						 <br />
						제 1 조 (목적)<br />
						 <br />
						이 약관은 BUY IN HOTEL(이하 "호텔"이라 합니다)이 제공하는 BUY IN HOTEL 온라인 서비스(이하 "서비스"라 한다)의 이용 조건 및 절차에 관한 기본적인 사항을 규정함을 목적으로 합니다.<br />
						 <br />
						제 2 조 (약관의 효력 및 변경)<br />
						<br /> 
						① 이 약관은 서비스 메뉴 및 호텔에 게시하여 공시함으로써 효력을 발생합니다.<br />
						② 호텔은 이 약관의 내용을 변경할 수 있으며, 변경된 약관은 제1항과 같은 방법으로 공지 또는 통지함으로써 효력을 발생합니다.<br />
						③ 회원제서비스 이용고객은 변경된 약관 사항에 동의하지 않으면 서비스 이용을 중단하고 이용계약을 해지할 수 있습니다. 약관의 효력발생일 이후의 계속적인 서비스 이용은 약관의 변경사항에 동의한 것으로 간주됩니다.<br />
						 <br />
						제 3 조 (약관 이외의 준칙)<br />
						 <br />
						이 약관에 언급되지 않은 사항이 전기통신기본법, 전기통신사업법, 기타 관련법령에 규정되어 있는 경우 그 규정에 따라 적용할 수 있습니다.<br />
						 <br />
						제 4 조 (용어의 정의)<br />
						 <br />
						이 약관에서 사용하는 용어의 정의는 다음과 같습니다.<br />
						 <br />
						① 회원 : 서비스를 제공받기 위하여 호텔과 이용계약을 체결하거나 이용자 아이디(ID)를 부여 받은 자를 말합니다.<br />
						② 아이디(ID) : 회원의 식별과 서비스를 이용을 위하여 회원이 정하고 호텔이 승인하는 문자와 숫자의 조합을 말합니다.<br />
						③ 비밀번호 : 회원이 부여 받은 아이디(ID)와 일치된 회원임을 확인하고 회원 자신의 비밀을 보호하기 위하여 회원이 정한 문자와 숫자의 조합을 말합니다.<br />
						④ 해지 : 호텔 또는 회원이 서비스를 개통 후 이용계약을 종료 시키는 의사표시를 말합니다.
						 <br />
						제 2 장 서비스 이용계약<br />
						 <br />
						제 5 조 (이용계약의 성립)<br />
						 <br />
						이용계약은 서비스 이용희망자의 이용약관 신청에 대하여 호텔이 승낙함으로써 성립합니다.<br />
						 <br />
						제 6 조 (이용신청)<br />
						 <br />
						① 본 서비스를 이용하기 위해서는 호텔 소정의 가입신청 양식에서 요구하는 모든 이용자 정보를 기록 하여 신청합니다.<br />
						② 본 서비스는 만 19세 이상의 성인만이 가입이 가능합니다. <br />
						③ 가입신청 양식에 기재하는 모든 이용자 정보는 모두 실제 데이터인 것으로 간주됩니다. 실명이나 실제 정보를 입력하지 않은 사용자는 법적인 보호를 받을 수 없으며 서비스의 제한을 받을 수 있습니다.<br />
						 <br />
						제 7 조 (이용신청의 승낙)<br />
						 <br />
						① 호텔은 제6조에 따른 이용 신청 고객에 대하여 제2호, 제3호의 경우를 예외로 하여 서비스 이용신청을 승낙합니다.<br />
						② 호텔은 다음에 해당하는 경우에 그 신청에 대한 승낙 제한사유가 해소될 때까지 승낙을 유보할 수 있습니다.<br />
						가. 서비스 관련 설비의 용량이 부족한 경우<br />
						나. 기술상 장애사유가 있는 경우<br />
						다. 기타 호텔이 필요하다고 인정되는 경우<br />
						 <br />
						③ 호텔은 다음에 해당하는 경우에는 동 이용신청을 승낙하지 아니 할 수 있습니다.<br />
						 <br />
						가. 다른 사람의 명의를 사용하여 신청한 경우<br />
						나. 이용신청 시 이용자정보를 허위로 기재하여 신청한 경우<br />
						다. 사회의 안녕질서 또는 미풍양속을 저해할 목적으로 신청한 경우<br />
						라. 기타 호텔 소정의 이용신청요건을 충족하지 못하는 경우<br />
						 <br />
						제 8 조 (이용자정보의 변경)<br />
						 <br />
						회원은 이용신청 시 기재한 이용자정보가 변경되었을 경우에는, 온라인으로 수정을 하여야 하며 미 변경으로 인하여 발생되는 문제의 책임은 이용자에게 있습니다.<br />
						 <br />
						제 3 장 계약 당사자의 의무<br />
						 <br />
						제 9 조 (호텔의 의무)<br />
						 <br />
						① 호텔은 서비스 제공과 관련하여 취득한 회원의 개인정보를 본인의 사전 승낙 없이 타인에게 공개 또는 배포할 수 없습니다. 단, 다음 각 호의 1에 해당하는 경우는 예외입니다.<br />
						가. 전기통신기본법 등 법률의 규정에 의해 국가기관의 요구가 있는 경우<br />
						나. 범죄에 대한 수사상의 목적이 있거나 정보통신윤리 위원회의 요청이 있는 경우<br />
						다. 기타 관계법령에서 정한 절차에 따른 요청이 있는 경우<br />
						② 1항의 범위 내에서, 호텔은 업무와 관련하여 회원 전체 또는 일부의 개인 정보에 관한 통계 자료를 작성하여 이를 사용할 수 있고, 서비스를 통하여 회원의 컴퓨터 쿠키를 전송할 수 있습니다. 이 경우 회원은 쿠키의 수신을 거부하거나 쿠키의 수신에 대하여 경고하도록 사용하는 컴퓨터의 브라우저의 설정을 변경할 수 있습니다.<br />
						 <br />
						제 10 조 (회원의 의무)<br />
						 <br />
						① 회원은 서비스 이용 시 다음 각 호의 행위를 하지 않아야 합니다.<br />
						<br /> 
						가. 다른 회원의 ID를 부정하게 사용하는 행위<br />
						나. 서비스에서 얻은 정보를 호텔의 사전승낙 없이 회원의 이용이외의 목적으로 복사, 복제, 변경, 번역하거나 출판 및 방송 등에 사용하거나 타인에게 제공하는 행위<br />
						다. 호텔의 저작권, 타인의 저작권 등 기타 귄리를 침해하는 행위<br />
						라. 공공질서 및 미풍양속에 위반되는 내용의 정보, 문장, 도형 등을 타인에게 유포하는 행위<br />
						마. 범죄행위를 목적으로 하거나 범죄와 결부된다고 객관적으로 판단하는 행위<br />
						바. 기타 관계법령에 위배되는 행위<br />
						② 회원은 관계법령, 이 약관에서 규정하는 사항, 서비스 이용 안내 및 주의 사항을 준수 하여야 합니다.<br />
						③ 회원은 내용별로 호텔이 서비스 공지사항에 게시하거나 별도로 공지한 이용 제한 사항을 준수하여야 합니다.<br />
						④ 회원은 호텔의 사전 승낙 없이 서비스를 이용하여 어떠한 영리행위도 할 수 없습니다.<br />
						 <br />
						제 4 장 제공 서비스 및 이용<br />
						 <br />
						제 11 조 (회원 아이디(ID)와 비밀번호 관리에 대한 회원의 의무)<br />
						 <br />
						아이디(ID)와 비밀번호에 대한 모든 관리는 회원에게 책임이 있습니다. 회원에게 부여된 아이디(ID)와 비밀번호의 관리소홀, 부정사용에 의하여 발생하는 모든 결과에 대한 전적인 책임은 회원에게 있습니다.<br />
						자신의 아이디(ID)가 부정하게 사용된 경우 또는 기타 보안 위반에 대하여, 회원은 반드시 호텔에 그 사실을 통보해야 합니다.<br />
						 <br />
						온라인 회원가입 약관<br />
						<br /> 
						제 12 조 (제공 서비스)<br />
						 <br />
						① 호텔은 회원의 서비스 이용 중 필요가 있다고 인정되는 다양한 점에 대해서 전자메일이나 서신우편등의 방법으로 회원에게 제공할 수 있으며, 회원은 원하지 않을 경우 가입신청 메뉴와 회원정보수정 메뉴에서 정보수신거부를 할 수 있습니다.<br />
						② 호텔은 온라인 커뮤니티 서비스를 제공하며, 이는 회원이 원할 경우에만 직접 가입하여 활동할 수 있습니다.<br />
						 <br />
						제 13 조 (광고주와의 거래)<br />
						 <br />
						호텔은 본 서비스상에 게재되어 있거나 본 서비스를 통한 광고주의 판촉활동에 회원이 참여하거나 교신 또는 거래의 결과로서 발생하는 모든 손실 또는 손해에 대해 책임을 지지 않습니다.<br />
						 <br />
						제 14 조 (회원의 게시물)<br />
						 <br />
						호텔은 회원이 본 서비스를 통하여 게시, 게재, 전자메일 또는 달리 전송한 내용물에 대하여 책임을 지지 않으며, 다음 각 호의 1에 해당한다고 판단되는 경우에 사전통지 없이 삭제할 수 있습니다.<br />
						 <br />
						① 다른 회원이나 타인을 비방하거나, 프라이버시를 침해하거나, 중상모략으로 명예를 손상시키는 내용인 경우.<br />
						② 서비스의 안정적인 운영에 지장을 주거나 줄 우려가 있는 경우<br />
						③ 범죄적 행위에 관련된다고 인정되는 내용일 경우<br />
						④ 호텔의 지적재산권, 타인의 지적재산권 등 기타 권리를 침해하는 내용인 경우<br />
						⑤ 호텔에서 규정한 게시기간을 초과한 경우<br />
						⑥ 기타 관계법령에 위반된다고 판단되는 경우<br />
						 <br />
						제 15 조 (게시물에 대한 권리 및 책임)<br />
						 <br />
						게시물에 대한 저작권을 포함한 모든 권리 및 책임은 이를 게시한 회원에게 있습니다.<br />
						 <br />
						제 16 조 (서비스 이용 책임)<br />
						 <br />
						회원은 서비스를 이용하여 불법 상품을 판매하는 영업 활동을 할 수 없으며 특히 해킹, 돈 벌기 광고, 음란사이트를 통한 상업행위, 상용 S/W 불법배포 등을 할 수 없습니다. <br />
						이를 어기고 발생한 영업활동의 결과 및 손실, 관계기관에 의한 구속 등 법적 조치등에 관해서는 호텔이 책임을 지지 않습니다.<br />
						<br /> 
						제 17 조 (서비스 제한 및 정지)<br />
						 <br />
						호텔은 전시, 사변, 천재지변 또는 이에 준하는 국가비상사태가 발생하거나 발생할 우려가 있는 경우와 전기통신사업법에 의한 기간통신 사업자가 전기통신서비스를 중지하는 등 기타 불가항력적 사유가 있는 경우에는 서비스의 전부 또는 일부를 제한 하거나 정지할 수 있습니다. 호텔은 제1항의 규정에 의하여 서비스의 이용을 제한하거나 정지한 때에는 그 사유 및 제한기간 등을 지체 없이 회원에게 알려야 합니다.<br />
						 <br />
						제 5 장 기타<br />
						 <br />
						제 18 조 (계약해지 및 이용제한)<br />
						 <br />
						① 회원이 이용계약을 해지하고자 하는 때에는 회원 본인이 호텔에 해지신청을 하여야 합니다.<br />
						② 호텔은 회원이 다음 각 호의 1에 해당하는 행위를 하였을 경우 사전통지 없이 이용계약을 해지하거나 또는 기간을 정하여 서비스 이용을 제한하거나 중지할 수 있습니다.<br />
						가. 타인의 서비스 ID 및 비밀번호를 도용한 경우<br />
						나. 서비스의 안정적인 운영을 방해한 경우<br />
						다. 공공질서 및 미풍양속에 저해되는 내용을 고의로 유포시킨 경우<br />
						라. 회원이 국익 또는 사회적 공익을 저해할 목적으로 서비스이용을 계획 또는 실행하는 경우<br />
						마. 타인의 지적재산권을 침해하는 내용을 게시, 게재, 전자메일 또는 기타의 방법으로 전송 하여 타인의 명예를 손상시키거나 불이익을 주는 행위를 한 경우<br />
						바. 수신자의 의사에 반하는 음란, 저속, 위협적인 내용이나 광고성 정보, 전자우편 등을 지속적으로 전송하는 경우<br />
						사. 정보통신설비의 오 작동이나 정보 등의 파괴를 유발시키는 컴퓨터 바이러스프로그램 등을 유포하는 경우<br />
						아. 호텔, 다른 회원 또는 타인의 지적재산권을 침해하는 경우<br />
						자. 정보통신윤리위원회 등 외부기관의 시정요구가 있거나 불법선거 운동과 관련하여 선거관리위원회의 유권해석을 받은 경우<br />
						차. 타인의 개인정보, 이용자ID 및 비밀번호를 부정하게 사용하는 경우<br />
						카. 호텔의 서비스 정보를 이용하여 얻은 정보를 호텔의 사전 승낙 없이 복제 또는 유통시키거나 상업적으로 이용하는 경우<br />
						타. 전기통신 관련법령 등에 위배되는 경우<br />
						파. 본 약관을 포함하여 기타 호텔이 정한 이용조건 및 관계법령에 위반한 경우<br />
						 <br />
						제 19 조 (손해배상)<br />
						 <br />
						호텔은 서비스 요금이 무료인 동안의 서비스 이용과 관련하여 회원에게 발생한 어떠한 손해에 관하여도 책임을 지지 않습니다.<br />
						 <br />
						제 20 조 (면책조항)<br />
						 <br />
						① 호텔은 천재지변 도는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.<br />
						② 호텔은 회원의 귀책사유로 인하여 서비스 이용의 장애가 발생한 경우에는 책임이 면제됩니다.<br />
						③ 호텔은 회원이 호텔의 서비스 제공으로부터 기대되는 이익을 얻지 못하였거나 서비스 자료에 대한 취사 선택 또는 이용으로 발생하는 손해 등에 대해서는 책임이 면제됩니다.<br />
						 <br />
						④ 호텔은 회원이 서비스에 게재한 정보, 자료, 사실의 정확성, 신뢰성 등 그 내용에 관하여는 책임이 면제되고, 회원은 자기의 책임아래 서비스를 이용하며, 서비스를 이용하여 게시 또는 전송한 자료 등에 관하여 손해가 발생하거나 자료의 취사선택, 기타 서비스 이용과 관련하여 어떠한 불이익이 발생 하더라도 이에 대한 모든 책임은 회원에게 있습니다.<br />
						⑤ 호텔은 회원간 또는 회원과 제3자간에 서비스를 매개로 하여 물품거래 등과 관련하여 어떠한 책임도 부담하지 아니하고, 회원이 서비스의 이용과 관련하여 기대하는 이익에 관하여 책임이 면책됩니다.<br />
						⑥ 회원 아이디(ID)와 비밀번호의 관리 및 이용상의 부주의로 인하여 발생되는 손해 또는 제3자에 의한 부정사용 등에 대한 책임은 모두 회원에게 있습니다.<br />
						 <br />
						제 21 조 (관할법원)<br />
						 <br />
						본 약관 상의 분쟁에 대해 소송이 제기될 경우 호텔의 본사 소재지를 관할하는 법원을 전속 관할법원으로 합니다.<br />
						<br /> 
						본 약관은 2014년 9월 12일부터 시행합니다<br />​
						<br />
                </p>
                </>
                : (type === 'english' ?
                <>
                <h4>Terms and conditions</h4>
                <p className={styles.contentTxt}>
				Chapter 1. General Rules.<br />
				<br />
				Article 1 (Purpose)<br />
				<br />
				These terms and conditions are aimed at stipulating basic matters concerning the terms and procedures of use of the BUY IN HOTEL online service (hereinafter referred to as "service") provided by the BUY IN HOTEL (hereinafter referred to as "hotel").<br />
				<br />
				Article 2 (Effective and amended terms and conditions)<br />
				<br />
				① These terms and conditions take effect by posting them on the service menu and hotel.<br />
				② The hotel may change the contents of these terms and conditions, and the changed terms and conditions take effect by notifying or notifying in the same way as in paragraph 1.<br />
				③ Customers who use the membership service can stop using the service and terminate the contract if they do not agree to the changed terms and conditions. Continuous service use after the effective date of the terms and conditions is considered to have agreed to the changes in the terms and conditions.<br />
				<br />
				Article 3 (Regulations other than Terms and Conditions)<br />
				<br />
				Matters not mentioned in these terms and conditions may be applied in accordance with the provisions of the Framework Act on Telecommunications, the Telecommunications Business Act, and other relevant laws.<br />
				<br />
				Article 4 (Definition of Terms)<br />
				<br />
				The definitions of terms used in these terms and conditions are as follows.<br />
				① Member: It refers to a person who has signed a contract with a hotel or has been given a user ID to receive services.<br />
				② ID: It refers to a combination of letters and numbers determined by a member and approved by a hotel for the identification of members and use of services.<br />
				③ Password: It refers to a combination of letters and numbers set by a member to confirm that the member is a member that matches the ID given and to protect the member's own secret.<br />
				④ Cancellation: It refers to an expression of intention for a hotel or member to terminate the service contract after opening the service.<br />
				<br />
				Chapter 2. Contract for Service Use.<br />
				<br />
				Article 5 (Estitution of a contract for use)<br />
				<br />
				The use contract is established by the hotel's consent to the application of the terms and conditions of use of the service.<br />
				<br />
				Article 6 (Application for Use)<br />
				<br />
				① To use this service, record and apply all user information required by the hotel's prescribed subscription application form.<br />
				② Only adults over the age of 19 can sign up for this service.<br />
				③ All user information on the subscription application form is considered to be actual data. Users who do not enter real names or actual information are not legally protected and may be restricted from services.<br />
				<br />
				Article 7 (approval of application for use)<br />
				<br />
				① The hotel approves the application for service use with the exception of subparagraphs 2 and 3 for customers who apply for use under Article 6.<br />
				② The hotel may withhold consent until the reasons for the restriction on consent to the application are resolved in the following cases.<br />
				A. When the capacity of service-related facilities is insufficient,<br />
				B. If there are technical reasons for disability,<br />
				C. Other cases where it is deemed necessary to have a hotel.<br />
				<br />
				③ The hotel may not accept the application for use in the following cases.<br />
				A. In the case of an application using the name of another person,<br />
				B. In the case of applying for use by falsely stating user information,<br />
				C. In a case where an application is made for the purpose of hindering the well-being and order or customs of society.<br />
				D. Other cases where the requirements for application for use of the hotel are not met.<br />
				<br />
				Article 8 (Change of user information)<br />
				<br />
				If the user information entered at the time of application for use is changed, the member must modify it online, and the user is responsible for the problem caused by the non-change.<br />
				<br />
				Chapter 3. The obligations of the parties to the contract.<br />
				<br />
				Article 9 (Hotel's duty)<br />
				<br />
				① Hotels cannot disclose or distribute the personal information of members acquired in connection with the provision of services to others without prior consent. However, exceptions are made in cases falling under any of the following subparagraphs.<br />
				A. Where there is a request from a state agency pursuant to the provisions of the Framework Act on Telecommunications, etc.<br />
				B. Where there is an investigative purpose for a crime or a request from the Information and Communication Ethics Committee.<br />
				C. Where there is a request in accordance with the procedures prescribed by other relevant laws and regulations,<br />
				② Within the scope of paragraph 1, hotels can prepare and use statistical data on all or part of their personal information related to their work, and transmit members' computer cookies through services. In this case, the member may change the settings of the br /owser on the computer that is used to refuse to receive the cookie or warn about the receipt of the cookie.<br />
				<br />
				Article 10 (Duties of Members)<br />
				<br />
				① Members shall not engage in the following acts when using the service.<br />
				A. The act of illegally using the IDs of other members.<br />
				B. Copying, copying, changing, translating information obtained from the service for purposes other than the use of members without prior consent of the hotel, or using it for publication and br /oadcasting, or providing it to others.<br />
				C. Infringement of hotel copyrights, copyrights of others, etc.<br />
				D. The act of distributing information, sentences, figures, etc. of content in violation of public order and customs and customs to others.<br />
				E. An act of objectively determining that it is for the purpose of a criminal act or is associated with a crime.<br />
				F. Other acts that violate relevant laws and regulations.<br />
				② Members must comply with relevant laws, matters stipulated in these terms and conditions, guidance on service use, and precautions.<br />
				③ Members must comply with the usage restrictions posted by the hotel on the service notice or announced separately for each content.<br />
				④ Members are not allowed to engage in any for-profit activities using the service without prior consent from the hotel.<br />
				<br />
				Chapter 4. Services provided and used.<br />
				Article 11 (Member's obligation to manage member IDs and passwords)<br />
				<br />
				Members are responsible for all management of IDs and passwords. The member is fully responsible for all consequences arising from the negligence of the ID and password assigned to the member and fraudulent use.<br />
				<br />
				Members must notify the hotel of this fact if their ID is illegally used or for other security violations.<br />
				<br />
				Terms and conditions of online membership registration.<br />
				<br />
				Article 12 (Provided Service)<br />
				<br />
				① Hotels can provide members with various points that are deemed necessary while using members' services by e-mail or letter mail, and members can refuse to receive information from the membership application menu and the membership information modification menu if they do not want.<br />
				② The hotel provides online community service, which allows members to sign up and work directly only if they want.<br />
				<br />
				Article 13 (Transaction with advertisers)<br />
				<br />
				The hotel is not responsible for any losses or damages incurred as a result of communication or transaction or participation of members in advertisers' promotional activities posted on this service or through this service.<br />
				<br />
				Article 14 (Member's Post)<br />
				<br />
				Hotels are not responsible for the contents posted, posted, e-mail, or otherwise transmitted by members through this service, and may be deleted without prior notice if they are deemed to fall under any of the following subparagraphs.<br />
				<br />
				① Case where it is a content that slanders other members or others, infringes on privacy, or defames them by slanderously.<br />
				② In a case where there is a concern that it interferes with or may interfere with the stable operation of the service.<br />
				③ In the case of content recognized as being related to criminal acts,<br />
				④ In the case of infringement of other rights such as intellectual property rights of a hotel, intellectual property rights of another person, etc.<br />
				⑤ In the case where the posting period prescribed by the hotel is exceeded,<br />
				⑥ In the case where it is deemed to violate other relevant laws and regulations,<br />
				<br />
				Article 15 (Rights and Liabilities for Posts)<br />
				<br />
				All rights and responsibilities, including copyrights for posts, lie with the member who posted them.<br />
				<br />
				Article 16 (Responsibility for Service Use)<br />
				<br />
				Members are not allowed to engage in sales activities that sell illegal products using services, especially hacking, money-making advertisements, commercial activities through obscene sites, and illegal distribution of commercial S/W.<br />
				<br />
				The hotel is not responsible for the consequences and losses of business activities that have occurred in violation of this, and legal measures such as arrest by related agencies.<br />
				<br />
				Article 17 (Service restrictions and suspension)<br />
				<br />
				Hotels may restrict or suspend all or part of the service in case of exhibition, speculation, natural disasters, or equivalent national emergencies, and other force majeure reasons such as the suspension of telecommunication services by key telecommunications operators under the Telecommunications Business Act. When a hotel restricts or suspends the use of the service pursuant to paragraph (1), it shall notify the member of the reason and the period of restriction without delay.<br />
				<br />
				Chapter 5. Guitar.<br />
				<br />
				Article 18 (Contract termination and restriction on use)<br />
				<br />
				① When a member intends to terminate the contract, the member himself/herself must apply for termination at the hotel.<br />
				② Hotels may terminate or suspend the use of the service without prior notice if a member has committed any of the following acts, or restrict or suspend the use of the service for a fixed period.<br />
				A. In the case of stealing another person's service ID and password,<br />
				B. In the case of interfering with the stable operation of the service,<br />
				C. In the case of intentionally disseminating content that hinders public order and customs and customs,<br />
				D. In a case where a member plans or executes the use of services for the purpose of hindering the national interest or social public interest,<br />
				E. In a case where an act of damaging or penalizing another person's reputation by posting, posting, e-mailing, or other means of infringing on the intellectual property rights of another person is performed.<br />
				F. In the case of continuous transmission of obscene, low-speed, threatening content, advertising information, e-mail, etc. contrary to the intention of the recipient,<br />
				G. In the case of distributing computer virus programs that cause malfunction of information and communication facilities or destruction of information, etc.<br />
				H. In the case of infringing on the intellectual property rights of a hotel, another member, or another person,<br />
				I. In the case where there is a request for correction by an external agency such as the Information and Communication Ethics Committee or an authoritative interpretation of the Election Commission in connection with an illegal election campaign, etc.,<br />
				J. In the case of fraudulent use of another person's personal information, user ID, and password,<br />
				K. In a case where information obtained using the hotel's service information is reproduced, distributed, or commercially used without prior consent of the hotel.<br />
				L. In the case of violation of telecommunications-related laws, etc.,<br />
				M. In the case of violation of the terms and conditions of use and related statutes prescribed by the hotel, including these terms and conditions.<br />
				<br />
				Article 19 (Compensation for damages)<br />
				<br />
				The hotel is not responsible for any damages incurred to its members regarding the use of the service while the service charge is free.<br />
				<br />
				Article 20 (Exemption clause)<br />
				<br />
				① If the hotel is unable to provide services due to force majeure equivalent to this, it is exempted from responsibility for providing services.<br />
				② Hotels are exempt from liability in the event of a service failure due to reasons attributable to members.<br />
				③ Hotels are exempt from liability for damages caused by members' failure to benefit from the hotel's service provision or selection or use of service materials.<br />
				④ The hotel is exempt from responsibility for information, data, accuracy, reliability, etc. posted on the service, and the member uses the service under his or her responsibility, and no damage to the data posted or transmitted using the service, selection of materials, or other disadvantages.<br />
				⑤ Hotels do not bear any responsibility for goods transactions, etc. between members or between members and third parties through services, and are exempted from liability for the benefits members expect in relation to the use of the service.<br />
				⑥ The member is all responsible for damages caused by carelessness in managing and using the member ID and password or fraudulent use by a third party.<br />
				<br />
				Article 21 (Court of competent jurisdiction)<br />
				<br />
				If a lawsuit is filed against a dispute under these terms and conditions, the court having jurisdiction over the location of the hotel's headquarters shall be the exclusive competent court.<br />
				<br />
				These terms and conditions will take effect on September 12th, 2014.<br />
			</p>
                </>
                :<></>
                )
            }
        </div>
    );
};

export default Policy;