import React, { useState } from 'react'
import Edge from '../edge';

const SkillsModel = ({ onClose }) => {
    const [isMaximized, setIsMaximized] = useState(true);

    const handleRestore = () => setIsMaximized(prev => !prev);

    const content = (
        <section className="py-12 px-4 md:px-8  lg:px-16 bg-black w-full h-full" id="skills">
       
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