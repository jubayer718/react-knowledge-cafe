
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blog/Blogs'
import Bookmarks from './components/BookMarks/Bookmarks'
import Header from './components/Header/Header'


function App() {
  const [bookMarks, setBookmarks] = useState([]);

  const [readingTime, setReadingTime] = useState((0));

  const handleReadingTime = (time) => {
    const newReadingTime = readingTime + time
    setReadingTime(newReadingTime);
  }

  const handleAddBookMark = (blog) => {
    const newBookmark = [...bookMarks, blog]
    setBookmarks(newBookmark)
  }

  return (
    <>
  
      <Header></Header>
      <div className='flex justify-between'>
      <Blogs handleAddBookMark={handleAddBookMark} handleReadingTime={handleReadingTime}></Blogs>
        <Bookmarks bookMarks={bookMarks} readingTime={readingTime}></Bookmarks>
      </div>
   
    </>
  )
}

export default App
