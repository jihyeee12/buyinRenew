import React from 'react';
import styles from '../../terms/terms.module.css';

const Email = ({type}) => {
    return (
        <div>
            {type === "korean" ?
            <>
            <h3>이메일 무단수집 거부</h3>
                <p className={styles.contentTxt}>
                        본 사이트에 게시된 이메일 주소가 전자우편 수집프로그램이나 그 밖의 기술적 장치를 이용하여 무단으로 수집되는 것을 거부하며,<br />
                        이를 위반할 경우 정보통신망 법에 의해 형사 처벌됨을 유념하시기 바랍니다.<br />
                        <br />

                        관련법규 - 정보통신망 이용촉진 및 정보보호 등에 관한 법률<br />
                        <br />
                        제50조의2 (전자우편주소의 무단 수집행위 등 금지)<br />
                        ① 누구든지 인터넷 홈페이지 운영자 또는 관리자의 사전 동의 없이 인터넷 홈페이지에서 자동으로 전자우편주소를 수집하는 프로그램이나 그 밖의 기술적 장치를 이용하여 전자우편주소를 수집하여서는 아니 된다.<br />
                        ② 누구든지 제1항을 위반하여 수집된 전자우편주소를 판매·유통하여서는 아니 된다.<br />
                        ③ 누구든지 제1항과 제2항에 따라 수집·판매 및 유통이 금지된 전자우편주소임을 알면서 이를 정보 전송에 이용하여서는 아니 된다.<br />
                    <br />
                </p>
            </>
            : (type === "english" ? 
            <>
            <h3>Refusing to collect emails without permission</h3>
                <p className={styles.contentTxt}>
                    <br />
                    Please note that e-mail addresses posted on this site will be refused to be collected without permission using e-mail collection programs or other technical devices, and that violations will be criminally punished under the Information and Communication Network Act.<br />
                    <br />
                    Related laws and regulations - Act on Promotion of Information and Communication Network Utilization and Information Protection, etc.<br />
                    <br />
                    Article 50-2 (Prohibition of unauthorized collection of e-mail addresses, etc.)<br />
                    ① No one shall collect e-mail addresses using programs or other technical devices that automatically collect e-mail addresses from the Internet homepage without prior consent from the operator or administrator of the Internet homepage.<br />
                    ② No one shall sell or distribute e-mail addresses collected in violation of paragraph (1).<br />
                    ③ No one shall use it for information transmission, knowing that it is an e-mail address prohibited from collecting, selling, and distributing pursuant to paragraphs (1) and (2).<br />
                    <br />
        
                </p>
            </>
            : <></>)}
        </div>
    );
};

export default Email;