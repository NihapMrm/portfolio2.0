import React, { useState } from 'react'
import Edge from '../edge';

const EducationModel =({onClose}) =>{
    const [isMaximized, setIsMaximized] = useState(true);
    const handleRestore = () => setIsMaximized(prev => !prev);
    // Content for the Education model
    
    const content = (
        <section className="bg-white py-12 px-4 md:px-8 lg:px-16 text-black" id="education">
          <h1>Education</h1>
        </section>
      );
      
    return(
        <>

        <Edge slug={"education"} content={content} onClose={onClose} isMaximized={isMaximized} onRestore={handleRestore} />
        </>
    )
}

export default EducationModel;