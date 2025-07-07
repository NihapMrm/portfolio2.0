import React, { useState } from 'react'
import Edge from '../edge';
import '../../css/Skills.css';


const SkillsModel = ({ onClose }) => {
  const [isMaximized, setIsMaximized] = useState(true);

  const handleRestore = () => setIsMaximized(prev => !prev);

  const content = (
    <>
     <div className="skill-container absolute top-0 left-0 bg-red-300 w-full h-full flex flex-col items-center justify-center z-10 user-select-none">
      <h1 className="title">Skills</h1>
      <p className="description">
        I am a Full Stack Developer with expertise in React, Node.js, and MongoDB. I have a passion for building scalable web applications and a keen interest in exploring new technologies.
      </p>
      <div className="skills-list">
        <div className="skill-item">JavaScript</div>
        <div className="skill-item">React</div>
        <div className="skill-item">Node.js</div>
        <div className="skill-item">MongoDB</div>
        <div className="skill-item">CSS</div>
        <div className="skill-item">HTML</div>
      </div>
  </div>
    <div className="gradient-bg">
      <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className="gradients-container">
        <div className="g1"></div>
        <div className="g2"></div>
        <div className="g3"></div>
        <div className="g4"></div>
        <div className="g5"></div>
        <div className="interactive"></div>
      </div>
    </div>
    </>
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