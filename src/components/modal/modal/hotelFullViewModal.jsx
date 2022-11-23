import React from 'react';
import Slider from "react-slick";
import styles from '../modal.module.css';


const HotelFullViewModal = () => {
    const hotelImg = [
        
        {
            "id": 4170,
            "lodgement_img_url": "https://www.buyinhotel.co.kr/images/lodgements/ekklim031/ekklim031_99_000_2022-08-19-17_57_27.jpg"
        },
        {
            "id": 4171,
            "lodgement_img_url": "https://www.buyinhotel.co.kr/images/lodgements/ekklim031/ekklim031_99_069_2022-08-19-17_57_27.jpg"
        },
        {
            "id": 4172,
            "lodgement_img_url": "https://www.buyinhotel.co.kr/images/lodgements/ekklim031/ekklim031_99_070_2022-08-19-17_57_27.jpg"
        },
        {
            "id": 4173,
            "lodgement_img_url": "https://www.buyinhotel.co.kr/images/lodgements/ekklim031/ekklim031_99_075_2022-08-19-17_57_27.jpg"
        },
        {
            "id": 4174,
            "lodgement_img_url": "https://www.buyinhotel.co.kr/images/lodgements/ekklim031/ekklim031_99_076_2022-08-19-17_57_27.jpg"
        },
        {
            "id": 4175,
            "lodgement_img_url": "https://www.buyinhotel.co.kr/images/lodgements/ekklim031/ekklim031_99_077_2022-08-19-17_57_27.jpg"
        },
        {
            "id": 4176,
            "lodgement_img_url": "https://www.buyinhotel.co.kr/images/lodgements/ekklim031/ekklim031_99_078_2022-08-19-17_57_27.jpg"
        },
        {
            "id": 4184,
            "lodgement_img_url": "https://www.buyinhotel.co.kr/images/lodgements/ekklim031/ekklim031_99_086_2022-08-19-17_57_28.jpg"
        }
  ]

    const settings = {
        // customPaging: function(i) {
        //   return (
        //     <a>
        //       <img src={hotelImg.lodgement_img_url} />
        //     </a>
        //   );
        // },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

     

    return (
        <div className={styles.hotelImgBox}>
            <Slider {...settings}>
                {hotelImg.map(hotel => (
                    <div>
                        <img className={styles.bigImg} key={hotel.id} src={hotel.lodgement_img_url} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default HotelFullViewModal;