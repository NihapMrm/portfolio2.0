import React, { useState } from 'react'
import Edge from '../edge';

const ProjectsModel =({onClose}) =>{
    
    const content = (
        <section className="bg-white py-12 px-4 md:px-8 lg:px-16" id="projects">
          <h1>Projects</h1>
        </section>
      );
      
    return(
        <>
        
        <Edge slug={"projects"} content={content}/>
        </>
    )
}

export default ProjectsModel;