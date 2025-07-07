import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react'

const AppsModel = ({ onClose }) =>{
    return(
        <AnimatePresence>
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0}}
          exit={{ y: 100 }}
          transition={{ duration: 0.3 }}>
        <div >
            <input type="text" name="" id="" placeholder='Type here to search' className='bg-[#1e1e1e70] w-full p-2 border-b-2 border-[#60CDFF]' />
           
        </div>
        </motion.div>
    </AnimatePresence>
    )
}

export default AppsModel;