import React, { useContext } from 'react'
import { Appcontext } from '../context/AppContext'

const Pagination = () => {
    const {page , handlePageChange ,totalPages} = useContext(Appcontext);
   return (
    <div className='w-full fixed bottom-0 bg-white justify-center items-center space-between  drop-shadow-xl shadow-black border-2 p-3' > 
        <div className='flex justify-between  w-11/12 max-w-[670px]'> 
        {/* ye ek condition prr aayega  */}
            { page> 1 &&
                <button onClick={()=>handlePageChange(page-1)} className='border rounded-md px-4 py-1'>
                    Previous
                </button>
            }
            {
                page < totalPages &&
                (<button onClick={()=>handlePageChange(page+1)}
                className='border rounded-md px-4 py-1'>
                        Next
                </button>)
            }
            <p>
                Page {page} of {totalPages}
            </p>
        </div>
    </div>

  )
}

export default Pagination