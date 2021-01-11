import React, {useState, useEffect, Fragment} from 'react';
import {Link} from 'react-router-dom';

import {ReactComponent as ArrowRight} from '../../../assets/icons/chevronArrowRight.svg';
import {isLastItem} from '../../../utils';

// since we have only one page crumbs would be static
const tempLinks = ['star-wars', 'database', 'peoples'];

function BreadCrumbs() {
  const [links, setLinks] = useState<string[]>([]);

  useEffect(() => {
    // console.log(window.location);
  }, []);

  const renderLink = (link: string, i: number) => {
    const index = i + 1;
    const url = tempLinks.slice(0, index).join('/');

    if (isLastItem(tempLinks, index))
      return (
        <li key={link} className={`breadCrumbs__item lastLink`}>
          <Link to={`/${url}`}>{link}</Link>
        </li>
      );

    return (
      <Fragment key={link}>
        <li className={`breadCrumbs__item`}>
          <Link to={`/${url}`}>{link}</Link>
        </li>
        <ArrowRight></ArrowRight>
      </Fragment>
    );
  };

  return (
    <div className='breadCrumbsContainer'>
      <ul className='breadCrumbs'>{tempLinks.map((link, i) => renderLink(link, i))}</ul>
    </div>
  );
}

export default BreadCrumbs;
