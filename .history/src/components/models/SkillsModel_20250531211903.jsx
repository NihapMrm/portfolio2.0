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
        <div className="skill-item w-32 h-32 bg-white bg-opacity-10 p-4 flex flex-col items-center gap-4 justify-center rounded-lg border border-opacity-20 border-white backdrop-blur-lg text-xl ">
          <div className="skill-icon text-6xl"><FaJs /></div>
          <span className="skill-name">JavaScript</span>
        </div>
      </div>

      <section class="bg-black text-white pt-8 pb-4">
  <h2 class="text-center text-2xl mb-2 font-bold leading-8 ">Our Clients</h2>
  <p class="text-center text-lg font-extralight leading-8 ">We are trusted by the world’s most innovative teams</p>

  <div class="logos group relative overflow-hidden whitespace-nowrap  py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
    <div class="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
      <img class="mx-4 inline h-16" src="https://tailwindui.com/plus/img/logos/158x48/transistor-logo-white.svg" alt="Transistor" />
      <img class="mx-4 inline h-16" src="https://tailwindui.com/plus/img/logos/158x48/reform-logo-white.svg" alt="Reform" />
      <img class="mx-4 inline h-16" src="https://tailwindui.com/plus/img/logos/158x48/tuple-logo-white.svg" alt="Tuple" />
      <img class="mx-4 inline h-16" src="https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-white.svg" alt="SavvyCal" />
      <img class="mx-4 inline h-16" src="https://tailwindui.com/plus/img/logos/158x48/statamic-logo-white.svg" alt="SavvyCal" />
      <img class="mx-4 inline h-16" src="https://tailwindui.com/plus/img/logos/158x48/laravel-logo-white.svg" alt="SavvyCal" />
    </div>

    <div class="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
      <img class="mx-4 inline h-16" src="https://tailwindui.com/plus/img/logos/158x48/transistor-logo-white.svg" alt="Transistor" />
      <img class="mx-4 inline h-16" src="https://tailwindui.com/plus/img/logos/158x48/reform-logo-white.svg" alt="Reform" />
      <img class="mx-4 inline h-16" src="https://tailwindui.com/plus/img/logos/158x48/tuple-logo-white.svg" alt="Tuple" />
      <img class="mx-4 inline h-16" src="https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-white.svg" alt="SavvyCal" />
      <img class="mx-4 inline h-16" src="https://tailwindui.com/plus/img/logos/158x48/statamic-logo-white.svg" alt="SavvyCal" />
      <img class="mx-4 inline h-16" src="https://tailwindui.com/plus/img/logos/158x48/laravel-logo-white.svg" alt="SavvyCal" />
    </div>
  </div>
</section>
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