
import { useEffect } from "react";
import { useState } from "react";
import Blog from "./blog";
import PropTypes, { func } from "prop-types";

const Blogs = ({handleAddBookMark,handleReadingTime}) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch('blog.json')
      .then(res => res.json())
    .then(data=>setBlogs(data))
  },[])

  return (
    <div className="w-4/6">
      <h3 className="p-3">Blogs:{blogs.length}</h3>
      
      {blogs.map(blog =>
        <Blog
        key={blogs.id} blog={blog}
          handleAddBookMark={handleAddBookMark}
          handleReadingTime={handleReadingTime}
        >
          
        </Blog>)}
     
      
    </div>
    
  );
};
Blogs.propTypes = {
  handleAddBookMark: PropTypes.func,
  handleReadingTime: PropTypes,func
}
export default Blogs;

