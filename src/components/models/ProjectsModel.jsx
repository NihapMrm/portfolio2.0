import React, { useState } from 'react'
import Edge from '../edge';
import FileManager from '../FileManager';

const ProjectsModel =({onClose}) =>{
  const [isMaximized, setIsMaximized] = useState(true);
  const handleRestore = () => setIsMaximized(prev => !prev);
    const content = (
        <section className="" id="projects">
        </section>
      );
      
    return(
        <>

        <FileManager slug={"projects"} content={content} onClose={onClose} isMaximized={isMaximized} onRestore={handleRestore} />
        </>
    )
}

export default ProjectsModel;