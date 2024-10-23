import PropTypes from "prop-types";


const Blog = ({ blog,handleAddBookMark,handleReadingTime }) => {
 const {cover_img,title,author_img,author,posted_date,reading_time}=blog

  return (
    <div className="m-5">
     <img src={cover_img} alt="" />
     
      <div className="flex items-center gap-3 ">
        <img className="w-[70px] h-[70px] object-cover rounded-full" src={author_img} alt="" />
        <div>
        <h3 className="font-bold text-2xl my-2">{author}</h3>
          <p>{posted_date}</p>
      </div>
      
      </div>

      <div className="flex items-center justify-between">
        <h3 className="text-4xl font-bold my-4">Title:{title}</h3>
        
        <div className="flex items-center gap-2">
            <p className="text-end">{reading_time} minute</p>
        <button onClick={()=>handleAddBookMark(blog)}><img className="w-5" src="https://img.icons8.com/?size=48&id=82461&format=png" alt="" /></button>
        </div>
 </div>
      <button className="underline text-purple-900 font-semibold"
        onClick={()=>handleReadingTime(reading_time)}>Mark as read</button>

    </div>
  );
};

Blog.propTypes = {
   blog: PropTypes.object.isRequired,
  handleAddBookMark: PropTypes.func.isRequired,
  handleReadingTime: PropTypes.func
}
export default Blog;