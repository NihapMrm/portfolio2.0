import React, { useState } from 'react'
import Edge from '../edge';

const EducationModel =({onClose}) =>{
    
    const content = (
        <section className="bg-white py-12 px-4 md:px-8 lg:px-16 text-black" id="education">
          <h1>Education</h1>
        </section>
      );
      
    return(
        <>
        
        <Edge slug={"education"} content={content}/>
        </>
    )
}

export default EducationModel;