import React, { useContext, useEffect } from 'react'
import Header from './components/Header'
import Blogs from './components/Blogs'
import Pagination from './components/Pagination'
import { Appcontext } from './context/AppContext'

const App = () => {
  const {fetchBlogPost} = useContext(Appcontext);
  useEffect(()=>{
    fetchBlogPost();
  },[])
  return (
    <div className='w-full h-full flex flex-col gap-y-2 justify-center items-center'>
      <Header/>
      <Blogs/>
      <Pagination/>
    </div>
  )
}

export default App