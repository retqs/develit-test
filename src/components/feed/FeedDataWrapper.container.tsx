import React, {useState, useCallback} from 'react';
import {useFetch} from '../../hooks';
import Feed from './Feed.layout';

function FeedDataWrapper() {
  const [currentLink, setCurrentLink] = useState('/people');
  const [currentPage, setPage] = useState<number>(1);
  const {isLoading, data, error} = useFetch(currentLink);

  const handleNextPage = useCallback(() => {
    setCurrentLink(data.next);
    setPage((prevState) => prevState + 1);
  }, [data]);

  const handlePrevPage = useCallback(() => {
    setCurrentLink(data.previous);
    setPage((prevState) => prevState - 1);
  }, [data]);

  return (
    <Feed
      data={data}
      isLoading={isLoading}
      error={error}
      handleNextPage={handleNextPage}
      handlePrevPage={handlePrevPage}
      currentPage={currentPage}
    />
  );
}

export default FeedDataWrapper;
