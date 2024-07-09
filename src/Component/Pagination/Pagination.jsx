import React, { useState } from 'react'
import './pagination.css';
const Pagination = ({ totalItem, itemPerPage, onPageChange }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPage = Math.ceil(totalItem / itemPerPage);
    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    const handleNextPage = () => {
        if (currentPage < totalPage) {
            setCurrentPage(currentPage - 1)
        }
    }
    const handlePageChange = (page) => {
        setCurrentPage(page);
        onPageChange(page);
    }
    const renderPageNumber = () => {
        const pageNumber = [];
        for (let i = 1; i <= totalPage; i++) {
            pageNumber.push(
                <button key={i} className={`page-number ${i === currentPage ? 'active' : ''}`} onClick={()=>handlePageChange(i)}>{i}</button>
            )
        }
        return pageNumber;
        // console.log("pageNumber",pageNumber);
    }
    return (
        <div>
           
            <button onClick={handlePrevPage} disabled={currentPage === 1}>prev</button>
            {renderPageNumber()}
            <button onClick={handleNextPage} disabled={currentPage === totalPage}>Next</button>
        </div>
    )
}

export default Pagination