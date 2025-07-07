import React, { useState } from 'react'
import Edge from '../edge';

const ExperienceModel =({onClose}) =>{
    const [isMaximized, setIsMaximized] = useState(true);
    const handleRestore = () => setIsMaximized(prev => !prev);
    // Content for the Experience model
    
    const content = (
        <section className="bg-white py-12 px-4 md:px-8 lg:px-16 text-black" id="experience">
          <h1>Experience</h1>
        </section>
      );
      
    return(
        <>

        <Edge slug={"experience"} content={content} onClose={onClose} isMaximized={isMaximized} onRestore={handleRestore} />
        </>
    )
}

export default ExperienceModel;