import React from 'react';
import { useState } from 'react';
import styles from "../../faq/faq.module.css"

const CouponFaq = () => {
    const data =[
        {id: 0, category: "쿠폰·할인", title: "후기를 작성했는데 적립금이 안들어옵니다.", answer: "- 서버오류로 발생한 상황이니 고객센터로 문의 주시면 감사하겠습니다."},
        {id: 1, category: "쿠폰·할인", title: "직접 작성한 후기가 왜 블라인드 처리되었나요?", 
        answer: "- 이용후기 게시판은 블라인드 운영원칙 및 커뮤니티 운영원칙에 의거하여 운영되고 있습니다.\n\n 블라인드 운영원칙\n1. 욕설 비속어 포함한 게시물\n2. 객실 언급 없이 의미 없는 단순 자음을 반복하거나 의미 없는 알파벳, 숫자 등을 나열한 게시물\n"
        +"3. 상업적인 홍보의 목적으로 작성된 게시물\n"
        +"4. 객실을 사용하지 않고 작성된 게시물\n"
        +"5. 개인정보를 포함한 게시물\n"
        +"6. 음란성 게시물 / 청소년에게 부적합한 게시물\n\n"
        +"해당 게시글이 위와 같은 운영원칙에 위배되는 내용을 포함할 경우 블라인드 처리됩니다.\n"
        +"이용에 불편이 없으시도록 후기 작성 시 확인 부탁드리겠습니다.\n"
        +"자세한 후기 정책 내용은 제휴점 후기 영역에서 확인 가능합니다."},
        {id: 2, category: "쿠폰·할인", title: "작성한 이용 후기를 수정/삭제하고 싶어요.", answer: "- 작성한 후기 수정 및 삭제는 바이인 호텔 앱 > 내 정보 > 리뷰 관리에서 하실 수 있습니다.\n"
        +"- 수정의 경우 본인이 작성한 후기는 작성일을 기준으로 48시간 이내 수정 가능합니다.\n(단, 본문 수정이 가능하며 사진의 경우 삭제만 가능)\n"
        +"- 후기 삭제는 본인이 작성한 후기에 한해 삭제 가능하며, 바이인 호텔 고객센터(1533-3152)에 문의하시면 후기 삭제가 가능합니다.\n"
        +"- 후기 삭제 시, 기 지급된 포인트가 회수될 수 있다는 점 서비스 이용에 참고 부탁드립니다."}
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

export default CouponFaq;