
import Bookmark from './Bookmark';
import PropTypes from 'prop-types';

const Bookmarks = ({ bookMarks,readingTime }) => {
 
  return (
    <div className='w-2/6 bg-gray-300 p-3'>
      <h2>Spend Reading Time: {readingTime}</h2>
      <p className='text-2xl font-bold'>Bookmarks Blogs:{bookMarks.length} </p>
      {
        bookMarks.map((bookMark, idx)=> <Bookmark key={idx} bookMark={bookMark} ></Bookmark>)
      }
    </div>
  );
};

// Blog.propTypes = {
//    blog: PropTypes.object.isRequired,
//   handleAddBookMark: PropTypes.func,
//   handleReadingTime: PropTypes.func
// }
Bookmarks.propTypes = {
  readingTime: PropTypes.number,
  bookMarks:PropTypes.object.isRequired

}

export default Bookmarks;