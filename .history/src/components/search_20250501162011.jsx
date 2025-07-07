import React from 'react'

function Search() {
  return (
    <div className='w-40 bg-white h-7 rounded-2xl bg-opacity-20 border border-white border-opacity-20 flex items-center justify-start pl-2 gap-2'>
        <img src={"/src/assets/icons/Search.svg"} alt="" className="w-3 h-3 rotate-z-90" />
        <p className=' text-gray-300 text-m'>Search</p>
        </div>
  )
}

export default Search
