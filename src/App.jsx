
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blog/Blogs'
import Bookmarks from './components/BookMarks/Bookmarks'
import Header from './components/Header/Header'
import PropTypes from 'prop-types'

function App() {
  const [bookMarks, setBookmarks] = useState([]);

  const handleAddBookMark = (blog) => {
    const newBookmark = [...bookMarks, blog]
    setBookmarks(newBookmark)
  }

  return (
    <>
  
      <Header></Header>
      <div className='flex justify-between'>
      <Blogs handleAddBookMark={handleAddBookMark}></Blogs>
        <Bookmarks bookMarks={bookMarks}></Bookmarks>
      </div>
   
    </>
  )
}

export default App
