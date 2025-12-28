import React, { useState } from 'react';
import Edge from '../edge';
import '../../css/Model.css';
import { Card } from 'pixel-retroui';

const EducationModel = ({ onClose }) => {
  const [isMaximized, setIsMaximized] = useState(true);
  const handleRestore = () => setIsMaximized((prev) => !prev);

  const educationData = [
    {
      institution: 'The Open University of Sri Lanka',
      degree: 'Bachelor of Software Engineering (BSEHons)',
      year: 'Feb 2024 – Present',
      description: 'Pursuing a comprehensive program focusing on software development, algorithms, and system design. Engaged in collaborative projects and research activities.',
    },
    {
      institution: 'SLYC, Sainthamaruthu',
      degree: 'Web Development NVQ Level 04',
      year: 'Aug 2023 – Feb 2024',
      description: 'Completed a vocational qualification in web development, covering HTML, CSS, JavaScript, and basic backend technologies.',
    },
    {
      institution: 'Morattuva University (Online)',
      degree: 'Complete Web Design',
      year: 'Nov 2023 – Jan 2024',
      description: 'Acquired skills in modern web design principles, including responsive design, user experience, and graphic design tools.',
    },
  ];

  const content = (
    <section className="bg-white py-6 px-4 text-black" id="education">
      <h1 className="text-3xl lg:text-4xl xl:text-5xl title mb-6 text-center">Education</h1>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-4 auto-rows-min" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))' }}>
          {/* First Card - Full Width */}
          <Card className="p-3 lg:p-4 gap-3 lg:gap-5 flex flex-col col-span-full">
            <h2 className="text-base lg:text-lg xl:text-xl font-bold edu-title">{educationData[0].institution}</h2>
            <p className="text-xs lg:text-sm font-medium edu-degree">{educationData[0].degree}</p>
            <p className="text-xs font-light edu-year">{educationData[0].year}</p>
            <p className="text-xs lg:text-sm italic text-justify">{educationData[0].description}</p>
          </Card>
        </div>
        
        {/* Other Cards - Responsive Grid */}
        <div className="grid gap-4 mt-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))' }}>
          {educationData.slice(1).map((edu, index) => (
            <Card key={index} className="p-3 lg:p-4 gap-3 lg:gap-5 flex flex-col">
              <h2 className="text-base lg:text-lg xl:text-xl font-bold edu-title">{edu.institution}</h2>
              <p className="text-xs lg:text-sm font-medium edu-degree">{edu.degree}</p>
              <p className="text-xs font-light edu-year">{edu.year}</p>
              <p className="text-xs lg:text-sm italic text-justify">{edu.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <Edge
      slug={"education"}
      content={content}
      onClose={onClose}
      isMaximized={isMaximized}
      onRestore={handleRestore}
    />
  );
};

export default EducationModel;