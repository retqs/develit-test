import React, {memo} from 'react';

function Pagination({handleNextPage, handlePrevPage, data, currentPage}: any) {
  return (
    <div className='feedPagination'>
      <button
        onClick={() => handlePrevPage()}
        disabled={data && data.previous === null}
        className='feedPagination__button btn'
        type='button'
      >
        prev
      </button>
      <div className='feedPagination__count'>
        {currentPage} <span className='feedPagination__divider'>of</span> {data?.total_pages || 1}
      </div>
      <button
        onClick={() => handleNextPage()}
        disabled={data && data.next === null}
        className='feedPagination__button btn'
        type='button'
      >
        next
      </button>
    </div>
  );
}

export default memo(Pagination);
