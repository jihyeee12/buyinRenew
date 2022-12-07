import React from 'react';
import { ReactInicis} from '@hellojh/react-inicis';
import { useState } from 'react';
import Close from './close';

const Inicis = () => {
    const [isPurchase, setIsPurchase] = useState(0);

    const payData = {
        productName: "",
        buyerName: "",
        buyerTel: "",
        buyerEmail: "",
        productEmail: 0,
        payStatus: 0,
        returnUrl: "",
        closeUrl: <Close/>,
        mKey: "SU5JTElURV9UUklQTEVERVNfS0VZU1RS",
        mid: "INIpayTest",

    }

    return (
        <div>
            <button></button>
        </div>
    );
};

export default Inicis;