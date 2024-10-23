
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blog/Blogs'
import Bookmarks from './components/BookMarks/Bookmarks'
import Header from './components/Header/Header'


function App() {
  const [bookMarks, setBookmarks] = useState([]);

  const [readingTime, setReadingTime] = useState((0));

  const handleReadingTime = (time,id) => {
    const newBookmark = bookMarks.filter(p => p.id !== id)
    setBookmarks(newBookmark)

    // const remainingBookmarks = bookMarks.find((p) => p.id == id)
    // if (remainingBookmarks) {
    //   const newReadingTime = readingTime + time
    //   setReadingTime(newReadingTime);
     
    // } 
       const newReadingTime = readingTime + time
      setReadingTime(newReadingTime);
    
  }


  const handleAddBookMark = (blog) => {
    const isExist = bookMarks.find((p) => p.id === blog.id);
 
    if (isExist) {
      alert('already existed')
    } else {
      
      const newBookmark = [...bookMarks, blog]
      setBookmarks(newBookmark)
    }
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
