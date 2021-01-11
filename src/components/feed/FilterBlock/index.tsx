import React from 'react';
import {ReactComponent as CheckIcon} from '../../../assets/icons/check.svg';
import {IHandleChange} from '../../../types';

interface IFilterField {
  id: string;
  label: string;
  onChange: IHandleChange;
  value: any;
}

function FilterBlock({id, label, onChange, value, ...rest}: IFilterField) {
  return (
    <fieldset className='filterBlock'>
      <label htmlFor={id} className='filterBlock__label'>
        <div className={`filterBlock__checkbox ${value ? 'active' : ''}`}>
          {value && <CheckIcon></CheckIcon>}
        </div>
        <span>{label}</span>
      </label>
      <input
        className='filterBlock__input'
        name={id}
        id={id}
        value={value}
        onChange={onChange}
        style={{display: 'none'}}
        type='checkbox'
      />
    </fieldset>
  );
}

export default FilterBlock;
