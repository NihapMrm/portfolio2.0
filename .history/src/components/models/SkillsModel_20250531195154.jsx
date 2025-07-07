import React, { useState } from 'react'
import Edge from '../edge';

const SkillsModel = ({ onClose }) => {
    const [isMaximized, setIsMaximized] = useState(true);

    const handleRestore = () => setIsMaximized(prev => !prev);

    const content = (
        <section className="bg-white py-12 px-4 md:px-8 lg:px-16 h-[150vh]" id="skills">
       
        </section>
      );
      
    return (
        <Edge
            slug={"skills"}
            content={content}
            onClose={onClose}
            isMaximized={isMaximized}
            onRestore={handleRestore}
        />
    );
}

export default SkillsModel;