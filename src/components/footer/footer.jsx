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
                            <li>Address: 403, Cheonbyeon-ro, Dong-gu, Gwangju, 1st floor(Bulul-dong)</li>
                            <li>CEO : Lin Jae Ok</li>
                            <li>Phone number : 062-230-0115</li>
                            <li>FAX: 062-227-6400</li>
                            <li>Buy in Hotel Co.,Ltd is responsible for all transacrtions such as responsibility, delivery, exchange, refund, and civil complaints.
                                (complaint Officer: Lim Ji-yeon / Contact information: 062-230-0115)
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;