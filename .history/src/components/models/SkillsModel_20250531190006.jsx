import React, { useState } from 'react'
import Edge from '../edge';

const SkillsModel = ({ onClose }) => {
    const [isMaximized, setIsMaximized] = useState(false);

    const handleRestore = () => setIsMaximized(prev => !prev);

    const content = (
        <section className="bg-white py-12 px-4 md:px-8 lg:px-16" id="skills">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">My Skills</h2>
            <p className="text-gray-600 mb-10">
              Here are some of the tools and technologies I work with regularly.
            </p>
      
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
              <div className="bg-gray-100 rounded-lg p-5 shadow-sm hover:shadow-md transition">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" className="w-10 h-10 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-700">HTML5</p>
              </div>
      
              <div className="bg-gray-100 rounded-lg p-5 shadow-sm hover:shadow-md transition">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" className="w-10 h-10 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-700">CSS3</p>
              </div>
      
              <div className="bg-gray-100 rounded-lg p-5 shadow-sm hover:shadow-md transition">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-10 h-10 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-700">JavaScript</p>
              </div>
      
              <div className="bg-gray-100 rounded-lg p-5 shadow-sm hover:shadow-md transition">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-10 h-10 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-700">React.js</p>
              </div>
      
              <div className="bg-gray-100 rounded-lg p-5 shadow-sm hover:shadow-md transition">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" className="w-10 h-10 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-700">PHP</p>
              </div>
      
              <div className="bg-gray-100 rounded-lg p-5 shadow-sm hover:shadow-md transition">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="w-10 h-10 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-700">MySQL</p>
              </div>
      
              <div className="bg-gray-100 rounded-lg p-5 shadow-sm hover:shadow-md transition">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" alt="WordPress" className="w-10 h-10 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-700">WordPress</p>
              </div>
      
              <div className="bg-gray-100 rounded-lg p-5 shadow-sm hover:shadow-md transition">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-10 h-10 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-700">GitHub</p>
              </div>
            </div>
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