import React, {Fragment, useState, useEffect} from 'react';

import {ReactComponent as Arrow} from '../../../assets/icons/chevronArrowUp.svg';
import FilterField from '../FilterBlock';
import {useWindowResize} from '../../../hooks';

function Filters({data, handleChange, filtersState}: any): JSX.Element {
  const {width = 0} = useWindowResize();
  const [isOpen, setIsOpen] = useState<boolean | null>(null);

  useEffect(() => {
    width > 768 ? setIsOpen(true) : setIsOpen(false);
  }, [width]);

  const renderFilterField = (filters: any[]) =>
    filters.map((filter: string) => (
      <FilterField
        id={filter}
        key={filter}
        label={filter}
        onChange={handleChange}
        value={filtersState[filter]}
      />
    ));

  return (
    <div className='filtersBox'>
      <div className='filtersHeader' onClick={() => (width < 768 ? setIsOpen(!isOpen) : '')}>
        <span className='filtersHeader__title'>Filters</span>
        <Arrow></Arrow>
      </div>
      {isOpen && (
        <div className='filtersBody'>
          {data.map(({title, filters}: any) => (
            <Fragment key={title}>
              <h3 className='filterTitle'>{title}:</h3>
              {renderFilterField(filters)}
            </Fragment>
          ))}
        </div>
      )}
    </div>
  );
}

export default Filters;
