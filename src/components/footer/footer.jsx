import React, { Component } from 'react';
import styles from './footer.module.css';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className={styles.footer}>
                    <div>
                        <img src="/img/header/Logo.png" alt='Logo' />
                    </div>
                    <div>
                        <ul className= {styles.notice}>
                            <li>Tems and Comditions</li>
                            <li>Personal information processing policy</li>
                            <li>Confirmation of business information</li>
                            <li>a adolescent protection policy</li>
                            <li>Location information use slightly</li>
                        </ul>
                        <ul className= {styles.hotelInfo}>
                            <li>Buy In Hotel CO.,Ltd</li>
                            <li>Business registration number: 627-81-02234</li>
                            <li>Mail Order business report : Dong-gu, Gwangju-0024</li>
                            <li>Address: Room 1109, 11th floor, 58, Nonhyeon-ro 85-gil, Gangnam-gu, Seoul (Yeoksam-dong, Gangnam Rudens Officetel)</li>
                            <li>CEO : Lim Jae Ok</li>
                            <li>Buy in Hotel Co.,Ltd is responsible for all transacrtions such as responsibility, delivery, exchange, refund, and civil complaints.
                                (complaint Officer: Lim Jae Ok / Contact information: 062-230-0115)
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;