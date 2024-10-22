import React from 'react';

const Bookmark = ({ bookMark }) => {
  const {author,posted_date,title}=bookMark
  return (
    <div>
      <h3 className='bg-slate-100 rounded-xl p-5 text-xl font-bold mb-3'>
        {title}
      </h3>
    </div>
  );
};

export default Bookmark;