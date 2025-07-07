import React, { useState } from 'react'
import Edge from '../edge';
import '../../css/Skills.css';
import { FaJs } from "react-icons/fa";



const SkillsModel = ({ onClose }) => {
  const [isMaximized, setIsMaximized] = useState(true);

  const handleRestore = () => setIsMaximized(prev => !prev);

  const content = (
    <>
     <div className="skill-container absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-10 user-select-none">
      <div className="skills-list-1">
        <div className="skill-item w-32 h-32 bg-white bg-opacity-10 p-4 flex flex-col items-center justify-center rounded-lg border border-opacity-20 border-white backdrop-blur-lg text-xl ">
          <div className="skill-icon text-xl"><FaJs /></div>
          <span className="skill-name">JavaScript</span>
        </div>
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