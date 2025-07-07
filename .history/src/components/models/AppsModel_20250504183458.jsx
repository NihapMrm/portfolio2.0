import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AppsModel = ({ onClose }) => {
  return (
    <AnimatePresence>
        <div className="transform -translate-x-1/2">
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-1/2 h-[80vh] fixed bottom-14 left-1/2 transform -translate-x-1/2 bg-white p-10 rounded-lg shadow-lg z-50 popModel"
            >
        <input
          type="text"
          placeholder="Type here to search"
          className="bg-[#1e1e1e70] w-full p-2 border-b-2 border-[#60CDFF] focus:outline-none"
        />
      </motion.div></div>
    </AnimatePresence>
  );
};

export default AppsModel;
