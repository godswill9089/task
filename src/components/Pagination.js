import React from 'react';
import './Pagination.css'; 

const Pagination = ({ currentPage, totalItems, itemsPerPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination">
     <div className='pagination-item'> 
     <span>{`${startItem}-${endItem} of ${totalItems}`}</span>
      <button onClick={handlePrevPage} disabled={currentPage === 1}>
        {'<'}
      </button>
      <button onClick={handleNextPage} disabled={currentPage === totalPages}>
        {'>'}
      </button>
     </div>
    </div>
  );
};

export default Pagination;
