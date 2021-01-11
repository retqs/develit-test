import React, {memo} from 'react';
import {useFetch} from '../../../hooks';
import {IuseFetchResult} from '../../../types';

import {ReactComponent as FemaleIcon} from '../../../assets/icons/femaleIcon.svg';
import {ReactComponent as MaleIcon} from '../../../assets/icons/maleIcon.svg';

function FeedCard({userInfo}: any) {
  const {isLoading, data, error}: IuseFetchResult = useFetch(userInfo.url);

  if (isLoading)
    return (
      <li className='feedCard'>
        <h2>Loading details</h2>
      </li>
    );

  if (error) return <h2>something went wrong</h2>;

  const {
    result: {properties},
  } = data;
  const {name, gender, eye_color, birth_year} = properties;

  return (
    <li className='feedCard'>
      <figure className='feedCard__avatar'>
        {gender === 'male' ? <MaleIcon /> : <FemaleIcon />}
      </figure>
      <article className='feedCard__content'>
        <h2 className='feedCard__username'>{name}</h2>
        <p className='feedCard__contentRow'>
          <span className='feedCard__criteria'>Eye Color</span>
          <span className='feedCard__detail color'>{eye_color}</span>
        </p>
        <p className='feedCard__contentRow'>
          <span className='feedCard__criteria'>Birth Year</span>
          <span className='feedCard__detail'>{birth_year}</span>
        </p>
        <p className='feedCard__contentRow'>
          <span className='feedCard__criteria'>Gender</span>
          <span className='feedCard__detail'>
            {gender === 'male' ? (
              <i data-gender='male' className='fas fa-mars' />
            ) : (
              <i data-gender='female' className='fas fa-venus' />
            )}
          </span>
        </p>
      </article>
    </li>
  );
}

export default memo(FeedCard);
