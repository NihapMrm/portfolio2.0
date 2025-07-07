import React, { useState } from 'react'
import Edge from '../edge';

const ContactModel =({onClose}) =>{
    const [isMaximized, setIsMaximized] = useState(true);
    const handleRestore = () => setIsMaximized(prev => !prev);
    // Content for the Contact model
    
    const content = (
        <section className="bg-white py-12 px-4 md:px-8 lg:px-16 text-black" id="contact">
          <h1>Contact</h1>
        </section>
      );
      
    return(
        <>

        <Edge slug={"contact"} content={content} onClose={onClose} isMaximized={isMaximized} onRestore={handleRestore} />
        </>
    )
}

export default ContactModel;