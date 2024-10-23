import PropTypes from "prop-types";

const Bookmark = ({ bookMark }) => {
  const {title}=bookMark
  return (
    <div>
      <h3 className='bg-slate-100 rounded-xl p-5 text-xl font-bold mb-3'>
        {title}
      </h3>
    </div>
  );
};
Bookmark.propTypes = {
  bookMark: PropTypes.object.isRequired
}
export default Bookmark;