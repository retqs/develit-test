import React from 'react';
import FeedCard from '../FeedCard';

function FeedList({data}: any) {
  if (data.length === 0) return <h2>Nothing was found</h2>;

  return (
    <main className='feedContainer'>
      <ul className='feedList'>
        {data.map((userInfo: any) => (
          <FeedCard userInfo={userInfo} key={userInfo.uid} />
        ))}
      </ul>
    </main>
  );
}

export default FeedList;
