import React, { useState } from 'react'
import Edge from '../edge';
import '../../css/Model.css';
import { FaJs } from "react-icons/fa";
import { Card } from 'pixel-retroui';

const skills = [
  { name: 'HTML', icon: '../../src/assets/icons/skills/html.png'},
  { name: 'CSS', icon: '../../src/assets/icons/skills/css.png'},
  { name: 'JavaScript', icon: '../../src/assets/icons/skills/js.png'},
  { name: 'React', icon: '../../src/assets/icons/skills/react.png'},
  { name: 'NodeJs', icon: '../../src/assets/icons/skills/nodejs.png'},
  { name: 'Python', icon: '../../src/assets/icons/skills/python.png'},
  { name: 'PHP', icon: '../../src/assets/icons/skills/php.png'},
  { name: 'Java', icon: '../../src/assets/icons/skills/java.png'},
  { name: 'Android', icon: '../../src/assets/icons/skills/android.png'},
  { name: 'API', icon: '../../src/assets/icons/skills/api.png'},
  { name: 'Cloudflare', icon: '../../src/assets/icons/skills/cloudflare.png'},
  { name: 'GitHub', icon: '../../src/assets/icons/skills/github.png'},
  { name: 'GSAP', icon: '../../src/assets/icons/skills/gsap.png'},
  { name: 'Laravel', icon: '../../src/assets/icons/skills/laravel.png'},
  { name: 'SEO', icon: '../../src/assets/icons/skills/seo.png'},
  { name: 'Tailwind', icon: '../../src/assets/icons/skills/tailwind.png'},
  { name: 'ThreeJs', icon: '../../src/assets/icons/skills/threejs.png'},
  { name: 'WordPress', icon: '../../src/assets/icons/skills/wordpress.png'},
];

const SkillsModel = ({ onClose }) => {
  const [isMaximized, setIsMaximized] = useState(true);

  const handleRestore = () => setIsMaximized(prev => !prev);

  const content = (
    <section className="bg-white text-center p-10 text-black" id="experience">
      <h1 className='text-5xl title mb-8'>Skills</h1>
      <div className="skills-grid gap-4 sm:gap-6">
        {skills.map(skill => (
          <Card key={skill.name} className="p-4 flex flex-col items-center justify-center">
            <img src={skill.icon} alt={skill.name} className='w-16 h-16 sm:w-20 sm:h-20 mb-2'/>
            <h1 className='text-base sm:text-sm skill-name'>{skill.name}</h1>
          </Card>
        ))}
      </div>
    </section>
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