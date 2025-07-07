import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react'

const AppsModel = ({ onClose }) =>{
    return(
        <AnimatePresence>
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0}}
          exit={{ y: 100 }}
          transition={{ duration: 0.3 }}
          className=' -translate-x-1/2 fixed left-1/2 w-1/2 h-[80vh] '
          >
        <div className="w-1/2 h-[80vh] fixed bottom-14 left-1/2 -translate-x-1/2 popModel p-10">
            <input type="text" name="" id="" placeholder='Type here to search' className='bg-[#1e1e1e70] w-full p-2 border-b-2 border-[#60CDFF]' />
           
        </div>
        </motion.div>
    </AnimatePresence>
    )
}

export default AppsModel;