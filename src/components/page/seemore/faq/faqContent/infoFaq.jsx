import React from 'react';
import { useState } from 'react';
import styles from "../../faq/faq.module.css"

const InfoFaq = () => {
    const data =[
        {id: 0, category: "회원·개인정보", title: "아이디, 비밀번호를 잃어버렸어요.", answer: "[아이디 찾기]\n"
        +"- 바이인 호텔은 회원 가입 시 별도의 이메일 인증 절차를 진행하지 않아 아이디 분실 시 고객센터로 문의해 주시기 바랍니다.\n\n"
        +"[비밀번호 찾기]\n"
        +"- 바이인 호텔 앱/웹 > 내 정보 > 로그인 > '비밀번호 찾기'에서 가입 시 등록한 이메일 주소 기재 후 재설정 메일 발송 > 메일 내 링크를 통해 비밀번호 재설정 (링크는 24시간 동안만 유지)\n\n"
        +"[간편로그인]\n"
        +"- 회원가입/로그인 후 내 정보 > 설정 > 간편 로그인에서 설정이 되어야만 사용 가능\n\n"
        +"※ 바이인 호텔은 개인정보보호의 일환으로 1년 이상 장기 미이용 고객을 대상으로 모든 개인정보를 삭제 처리합니다.\n"
        +"로그인 시 '회원정보를 찾을 수 없습니다'의 메시지가 확인되는 경우, 바이인 호텔 고객센터(1533-3152 / 09:00 ~ 18:00 )로 문의해 주시기 바랍니다."},
        {id: 1, category: "회원·개인정보", title: "바이인호텔 사이트 아이디로 로그인이 되지 않아요.", answer: "로그인이 되지 않는 경우는 다음과 같습니다.\n"
        +"▶ SNS로그인이 안될 경우\n"
        +"- 먼저 ID로 회원가입/로그인 후 내 정보 > 설정 > 간편 로그인에서 연동해 주세요.\n"
        +"- 바이인 호텔 웹사이트의 경우, SNS 로그인을 지원하지 않으며, 휴대폰 번호로 로그인 기능을 제공하고 있으니 이용에 참고하시기 바랍니다.\n"
        +"▶ 장기 미사용 고객일 경우\n"
        +"- 바이인 호텔은 개인정보보호의 일환으로 12개월 장기 미이용 고객을 대상으로 모든 개인정보를 삭제 처리합니다.\n"
        +"개인정보가 남아있지 않은 경우 탈퇴 여부를 확인할 수 없습니다.\n\n"
        +"로그인 시, /회원정보를 찾을 수 없습니다'의 메시지가 나오는 경우 바이인 호텔 고객센터(1533-3152)에 문의해 주세요."},
        {id: 2, category: "회원·개인정보", title: "탈퇴했는데, 약관 개정 등의 메일이 왔어요.", answer: "- 바이인 호텔은 가입 시 별도의 이메일 인증 절차를 진행하지 않아 탈퇴 이후 다른 사람이 가입 시 고객님의 이메일 정보를 입력했을 수 있으며, 이 경우 가입 여부와 관계없이 이메일이 전송될 수 있습니다.\n"
        +"- 이메일 수신이 불편하신 경우, 바이인 호텔 고객센터(1533-3152)로 문의해 주세요."},
        {id: 3, category: "회원·개인정보", title: "탈퇴하고 싶어요.", answer: "회원 탈퇴는 아래의 방법을 통해 직접 가능합니다.\n"
        +" ▶ 바이인 호텔 앱/ 웹 : 내 정보 > 상단 닉네임 옆 내 정보 관리 > 회원 탈퇴"},
        {id: 4, category: "회원·개인정보", title: "회원 정보 수정은 어떻게 하나요?", answer: "아이디 변경은 불가하며, 아래 방법을 통해 비밀번호/닉네임 변경이 가능합니다.\n"
        +"- 비밀번호\n"
        +"바이인 호텔 앱 > 내 정보 > 상단 닉네임 옆 내 정보 관리 > 비밀번호 수정하기\n"
        +"- 닉네임\n"
        +"바이인 호텔 앱 > 내 정보 > 상단 닉네임 옆 내 정보 관리 > 닉네임 옆 연필 표시 선택 후 수정하기"},
        {id: 5, category: "회원·개인정보", title: "마케팅 수신 여부를 수정하고 싶습니다.", answer: "아래 방법을 통해 마케팅 수신 및 해제가 가능합니다.\n"
        +"- 마케팅 수신 여부\n"
        +"▶ 바이인 호텔 앱 : 핸드폰 > 설정 > 바이인 호텔 알림 설정\n\n"
        +"단, 서비스 이용에 필수적인 공지 내용은 동의 여부와 관계없이 발송된다는 점 참고 부탁드립니다."},
        {id: 6, category: "회원·개인정보", title: "탈퇴한 아이디로 재가입 할 수 있나요?", answer: "- 탈퇴 후 30일 이후부터 동일한 아이디로 재가입이 가능합니다."},
        {id: 7, category: "회원·개인정보", title: "회원가입 시 인증 문자가 오지 않아요.", answer: "- 회원가입 시 인증번호 문자가 확인이 안될 시 차단 여부를 확인해 주세요."},
    ]
        
    const [clickedNumArr, setClickedNumArr] = useState([]);

    const handleClickToggleBtn = (id) => {
      setClickedNumArr((arr) => {
        let newArr = [];
        arr.map((item) => newArr.push(item));
  
        if (newArr.includes(id)) {
          newArr.splice(newArr.indexOf(id), 1);
        } else {
          newArr.push(id);
        }
        console.log(clickedNumArr);
        return newArr;
      });
    };

    return (
        <>
        {data.map(v => (
            <div className={styles.contentList}>
                <div className={styles.contentTitle}>
                    <div className={styles.title}>
                        <p>[{v.category}]</p>
                        <p key={v.id}>{v.title}</p>    
                    </div>
                    <button type='button' key={v.id} className={styles.toggleBtn} onClick={() => handleClickToggleBtn(v.id)}>
                        {clickedNumArr.includes(v.id)  ? <img src='../../../img/icon/oneUp.png' alt='upIcon' /> : <img src='../../../img/icon/oneDown.png' alt='downIcon' />}
                    </button>
                </div>
                {clickedNumArr.includes(v.id)  && (
                    <div key={v.id} className={styles.answerBox}>
                        <p className={styles.answerTxt}>{v.answer}</p>
                    </div>
                )}
            </div> 
        ))}
        </>
    );
};

export default InfoFaq;