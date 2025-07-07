import React, { useState } from 'react'
import Edge from '../edge';
import '../../css/Model.css';
import { Card } from 'pixel-retroui';



const ExperienceModel = ({ onClose }) => {
  const [isMaximized, setIsMaximized] = useState(true);
  const handleRestore = () => setIsMaximized(prev => !prev);
  // Content for the Experience model

  const content = (
    <section className="bg-white p-10 text-black" id="experience">
      <h1 className='text-5xl title mb-8 text-center'>Experience</h1>
      <div className='flex gap-5'>
        <Card className="p-4 w-full gap-5 flex flex-col">
          <h2 className='exp-title'>X4DigitalLabs — Mar 2025 – Present</h2>
          <p className='exp-desc text-xs font-light text-justify'>At X4DigitalLabs, I work as a WordPress Developer focusing on plugin development, WooCommerce customization, and email communication tools. I contribute to both backend logic and frontend UI, ensuring fast, secure, and user-friendly products tailored for business needs.</p>
          <ul className='exp-resp list-disc text-xs w-4/5 flex flex-col gap-3'>
            <li>Collaborate with teams to design and develop scalable WordPress solutions</li>
            <li>Maintain code quality, performance, and security across projects</li>
            <li>Work on both client and internal tools with attention to UX and maintainability</li>
            <li>Handle version control, testing, and deployment workflows</li>
            <li>Support integration of third-party APIs and services</li>
          </ul>

        </Card>

        <Card className="p-4 w-full gap-5 flex flex-col">
          <h2 className='exp-title'>Digimpact — 2022 – Oct 2024</h2>
          <p className='exp-desc text-xs font-light text-justify'>
            Worked as a Senior Web Developer responsible for leading full-stack web development projects, from backend systems to frontend interfaces. Contributed to scalable application design, optimized performance, and collaborated with cross-functional teams to deliver high-quality digital solutions.
          </p>
          <ul className='exp-resp list-disc text-xs w-4/5 flex flex-col gap-3'>
            <li>Lead development of web-based platforms and custom tools</li>
            <li>Coordinate with teams for planning, execution, and delivery of projects</li>
            <li>Ensure systems are optimized for performance, usability, and security</li>
            <li>Manage deployments, server setups, and overall project stability</li>
            <li>Support ongoing improvements and maintain existing applications</li>
          </ul>
        </Card>

      </div>
    </section>
  );

  return (
    <>

      <Edge slug={"experience"} content={content} onClose={onClose} isMaximized={isMaximized} onRestore={handleRestore} />
    </>
  )
}

export default ExperienceModel;