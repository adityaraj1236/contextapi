import React, { useContext } from 'react'
import { Appcontext } from '../context/AppContext'
import Spinner from './Spinner';
// import Card from './Card';

const Blogs = () => {
    // consuming wala part laoding ka 
    const {posts ,loading}  = useContext(Appcontext);
    console.log("Printing inside blogs posts ")
    console.log(posts);

  return (
    <div className='w-11/12 max-w-[670px] py-8 flex flex-col gap-y-7 mt-16 '>
        {
            loading ? 

            (<Spinner/>)
             :
              (
                posts.length === 0 ?
                 (<div>No posts Found</div>) :
                  (posts.map((post)=>(
                    <div>
                    <p className='font-extrabold text-lg'>{post.title}</p>
                    <p className='text-[13px]'>
                    By <span className='italic'>{post.author}</span> on <span className='underline font-bold'>{post.category}</span>

                    </p>
                    <p className='text-[12px]'>Posted on <span>{post.date}</span></p>

                    <p className='text-lg mt-[10px]'>{post.content}</p>


                    {/* now differne ttags  */}
                    <div className='flex gap-x-2'>
                    {post.tags.map((tag)=>{
                        return <span className='text-blue-500 underline font text-sm'>{`#${tag}`}</span>
                    })}
                    </div>
                    </div>
                  )))

            )

        }
    </div>
  )
}

export default Blogs