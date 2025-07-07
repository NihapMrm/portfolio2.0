import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AppsModel = ({ onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.3 }}
        >
        <input
          type="text"
          placeholder="Type here to search"
          className="bg-[#1e1e1e70] w-full p-2 border-b-2 border-[#60CDFF] focus:outline-none"
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default AppsModel;
