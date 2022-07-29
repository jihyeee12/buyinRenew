import React from 'react';
import Wishroom from '../../reservation/wishRoom/wishroom';
//import styles from './wishlist.module.css';

const Wishlist = (props) => (
    <>
        <div className="titleBar">
            <p>위시리스트</p>
        </div>
        <div className="container">
            <Wishroom />
        </div>
    </>
    );

export default Wishlist;