import React, {useState, useCallback, memo} from 'react';

import FeedList from './FeedList';
import Filters from './Filters';
import SearchInput from './SearchInput';
import Navbar from '../shared/Navbar';
import BreadCrumbs from '../shared/BreadCrumbs';
import Loader from '../shared/Loader';
import Pagination from './Pagination';
import {filtersState, filtersData as filtersStaticData} from './Filters/data';

import {useEdit} from '../../hooks';
import {isFiltersOn, filterUsers} from '../../utils';
import {IInput} from '../../types';

function Feed({
  data,
  isLoading,
  error,
  handleNextPage,
  handlePrevPage,
  currentPage,
}: any): JSX.Element {
  const [searchValue, setSearchValue] = useState<string>('');
  const {data: filtersData, handleChange: handleFiltersChange} = useEdit<typeof filtersState>(
    filtersState
  );

  const onChange = useCallback((e: IInput) => {
    setSearchValue(e.target.value);
  }, []);

  const renderContent = () => {
    const regexQuery = new RegExp(searchValue, 'gi');

    if (error) return <h2>Something went wrong :(</h2>;

    if (isLoading) return <Loader />;

    const filteredDataByInput = searchValue
      ? data?.results.filter((user: any) => user.name.match(regexQuery))
      : data?.results;

    if (isFiltersOn<typeof filtersState>(filtersData))
      return <FeedList data={filterUsers(data.results, filtersData)} />;

    return <FeedList data={filteredDataByInput} />;
  };

  return (
    <>
      <Navbar />
      <BreadCrumbs />
      <div className='appContainer'>
        <Filters
          data={filtersStaticData}
          handleChange={handleFiltersChange}
          filtersState={filtersData}
        />
        <div className='content'>
          <SearchInput value={searchValue} handleChange={onChange} />
          {renderContent()}
          <Pagination
            handleNextPage={handleNextPage}
            handlePrevPage={handlePrevPage}
            data={data}
            currentPage={currentPage}
          />
        </div>
      </div>
    </>
  );
}

export default memo(Feed);
