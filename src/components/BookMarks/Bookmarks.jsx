
import Bookmark from './Bookmark';

const Bookmarks = ({ bookMarks }) => {
 
  return (
    <div className='w-2/6 bg-gray-300 p-3'>
      <p className='text-2xl font-bold'>Bookmarks Blogs:{bookMarks.length} </p>
      {
        bookMarks.map((bookMark)=> <Bookmark bookMark={bookMark} ></Bookmark>)
      }
    </div>
  );
};

export default Bookmarks;