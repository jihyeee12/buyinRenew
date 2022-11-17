import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const MainContext = createContext({
    onDateSetting: (a,b) => {},
    dateSet: {start: "" , end: ""},
});

const Store = () => {
    const [dateSet, setDateSet] = useState({start: "", end: ""});
    
    const onDateSetting = (start, end) => {
        if(start && end) {
            const startDay = start.getFullYear().toString() + `.`
            + (start.getMonth() +1).toString()
            +(`.`) + start.getDate().toString();

            const endDay = end.getFullYear().toString() + `.`
            + (end.getMonth() +1).toString()
            +(`.`) + end.getDate().toString();

            return setDateSet({start: startDay, end: endDay});
        } else{
            return;
        }
    }
};
