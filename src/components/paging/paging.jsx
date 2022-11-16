import React from 'react';
import { useState } from 'react';
import Pagination from 'react-js-pagination';
import './paging.module.css';


const Paging = ({page, count, setPage}) => {
    
    return (
        <Pagination 
            activePage={page}
            itemsCountPerPage={6}
            totalItemsCount={count}
            pageRangeDisplayed={5}
            onChange={setPage}
        />
            
        
    );
};

export default Paging;