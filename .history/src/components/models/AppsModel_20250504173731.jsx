import React, { useState } from 'react'

const AppsModel = ({ onClose }) =>{
    if (!isOpen) return null;
    return(
        <div className="w-1/2 h-[80vh] fixed bottom-14 left-1/2 -translate-x-1/2 popModel p-10">
            <input type="text" name="" id="" placeholder='Type here to search' className='bg-[#1e1e1e70] w-full p-2 border-b-2 border-[#60CDFF]' />

            <button onClick={onClose} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
          Close
        </button>
        </div>

    )
}

export default AppsModel;