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
    <section className="bg-white py-12 px-4 md:px-8 lg:px-16 text-black" id="education">
      <h1 className="text-5xl title mb-8 text-center">Education</h1>
      <div className="flex flex-col gap-5">
        {/* Open University Card at the Top */}
        <div className="flex justify-center">
          <Card className="p-4 w-2/3 gap-5 flex flex-col">
            <h2 className="text-xl font-bold edu-title">{educationData[0].institution}</h2>
            <p className="text-sm font-medium edu-degree">{educationData[0].degree}</p>
            <p className="text-xs font-light edu-year">{educationData[0].year}</p>
            <p className="text-sm text-justify italic">{educationData[0].description}</p>
          </Card>
        </div>

        {/* Other Cards in the Same Row */}
        <div className="flex flex-row gap-5 justify-center">
          {educationData.slice(1).map((edu, index) => (
            <Card key={index} className="p-4 w-1/3 gap-5 flex flex-col">
              <h2 className="text-xl font-bold edu-title">{edu.institution}</h2>
              <p className="text-sm font-medium edu-degree">{edu.degree}</p>
              <p className="text-xs font-light edu-year">{edu.year}</p>
              <p className="text-sm italic text-justify">{edu.description}</p>
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