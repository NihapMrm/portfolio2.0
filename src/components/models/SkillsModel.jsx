import React, { useState } from 'react'
import Edge from '../edge';
import '../../css/Model.css';

const icon = (file) => new URL(`../../assets/icons/skills/${file}`, import.meta.url).href;

const skillCards = [
  {
    title: 'HTML',
    level: 'Expert',
    detail: 'Semantic, accessible structure as the base for every interface.',
    tags: ['Markup', 'A11y'],
    iconSrc: icon('html.png')
  },
  {
    title: 'CSS',
    level: 'Expert',
    detail: 'Modern layouts, fluid typography, and responsive grids that stay minimal.',
    tags: ['Styling', 'Layouts'],
    iconSrc: icon('css.png')
  },
  {
    title: 'JavaScript',
    level: 'Expert',
    detail: 'Interactive logic with clean patterns and lean bundles.',
    tags: ['Frontend', 'Logic'],
    iconSrc: icon('js.png')
  },
  {
    title: 'React',
    level: 'Advanced',
    detail: 'Composable UI, hooks, and state patterns tuned for performance.',
    tags: ['SPA', 'Components'],
    iconSrc: icon('react.png')
  },
  {
    title: 'Node.js',
    level: 'Advanced',
    detail: 'API design with validation, logging, and predictable error handling.',
    tags: ['APIs', 'Backend'],
    iconSrc: icon('nodejs.png')
  },
  {
    title: 'Python',
    level: 'Advanced',
    detail: 'Automation, scripting, and services to glue systems together.',
    tags: ['Automation', 'Services'],
    iconSrc: icon('python.png')
  },
  {
    title: 'PHP',
    level: 'Intermediate',
    detail: 'Server-side pages and APIs for content-driven products.',
    tags: ['Backend', 'CMS'],
    iconSrc: icon('php.png')
  },
  {
    title: 'Java',
    level: 'Intermediate',
    detail: 'Object-oriented foundations and robust service patterns.',
    tags: ['OOP', 'Services'],
    iconSrc: icon('java.png')
  },
  {
    title: 'Android',
    level: 'Intermediate',
    detail: 'Usable native experiences with attention to performance.',
    tags: ['Mobile', 'UX'],
    iconSrc: icon('android.png')
  },
  {
    title: 'API Craft',
    level: 'Advanced',
    detail: 'Contracts first, testing built-in, and predictable integrations.',
    tags: ['Contracts', 'Testing'],
    iconSrc: icon('api.png')
  },
  {
    title: 'Cloudflare',
    level: 'Intermediate',
    detail: 'Edge rules, DNS, and caching to keep delivery fast globally.',
    tags: ['Edge', 'Perf'],
    iconSrc: icon('cloudflare.png')
  },
  {
    title: 'GitHub',
    level: 'Advanced',
    detail: 'Version control, code reviews, and CI-driven workflows.',
    tags: ['Collab', 'CI/CD'],
    iconSrc: icon('github.png')
  },
  {
    title: 'GSAP',
    level: 'Advanced',
    detail: 'Purposeful motion for feedback without visual noise.',
    tags: ['Motion', 'UX'],
    iconSrc: icon('gsap.png')
  },
  {
    title: 'Laravel',
    level: 'Intermediate',
    detail: 'Structured backends with batteries-included tooling.',
    tags: ['Backend', 'Framework'],
    iconSrc: icon('laravel.png')
  },
  {
    title: 'SEO',
    level: 'Intermediate',
    detail: 'Technical SEO and performance hygiene for discoverability.',
    tags: ['Search', 'Perf'],
    iconSrc: icon('seo.png')
  },
  {
    title: 'Tailwind',
    level: 'Advanced',
    detail: 'Design tokens and utility-first systems for speed and consistency.',
    tags: ['Design System', 'UI'],
    iconSrc: icon('tailwind.png')
  },
  {
    title: 'Three.js',
    level: 'Beginner',
    detail: 'Lightweight 3D and interactive visuals experiments.',
    tags: ['3D', 'WebGL'],
    iconSrc: icon('threejs.png')
  },
  {
    title: 'WordPress',
    level: 'Intermediate',
    detail: 'Custom themes and blocks with an eye on performance.',
    tags: ['CMS', 'Content'],
    iconSrc: icon('wordpress.png')
  }
];

const SkillsModel = ({ onClose }) => {
  const [isMaximized, setIsMaximized] = useState(true);
  const handleRestore = () => setIsMaximized(prev => !prev);

  const content = (
    <section
      id="skills"
      className={`min-h-screen bg-gradient-to-br from-[#e7f0ff] via-[#d8e7ff] to-[#eef4ff] ${isMaximized ? 'px-4 sm:px-6 lg:px-10 py-12' : 'px-3 py-6'}`}
    >
      <div className="mx-auto max-w-6xl rounded-3xl bg-white shadow-2xl shadow-[#0d2f7a]/10 ring-1 ring-[#d6e5ff]">
        <div className={`grid gap-10 border-b border-[#d6e5ff] ${isMaximized ? 'px-6 py-10 md:grid-cols-[1.1fr_0.9fr] sm:px-10 lg:px-14' : 'px-4 py-6 grid-cols-1'}`}>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-2xl flex flex-col justify-center">
              <img src="src/images/skills-hero.webp" alt="Skills Illustration" />
            </div>
          </div>

          <div className="space-y-5 flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1a56f0]">My Skills</p>
            <h1 className={`font-bold text-[#0f2a6b] ${isMaximized ? 'text-4xl sm:text-5xl' : 'text-2xl'}`}>What I work with</h1>
            <p className={`max-w-2xl leading-7 text-[#1d3c85] ${isMaximized ? 'text-base' : 'text-sm'}`}>
              A focused set of technologies I trust to build clean, dependable web software.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#1a56f0] to-[#0f3fbf] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/15 transition hover:-translate-y-0.5 hover:shadow-blue-900/25"
                href="#projects"
              >
                View portfolio
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-[#d6e5ff] px-6 py-3 text-sm font-semibold text-[#0f2a6b] transition hover:-translate-y-0.5 hover:border-[#c5d8ff] hover:shadow-lg hover:shadow-blue-900/10"
                href="mailto:nihapmrm@gmail.com"
              >
                Start a project
              </a>
            </div>
          </div>
        </div>

        <div className={`grid gap-4 ${isMaximized ? 'grid-cols-1 px-6 py-8 sm:px-10 lg:grid-cols-2 lg:gap-6 xl:grid-cols-3 xl:px-14' : 'grid-cols-1 px-4 py-4'}`}>
          {skillCards.map((card) => (
            <div
              key={card.title}
              className={`group flex flex-col rounded-2xl border border-[#d6e5ff] bg-white shadow-lg shadow-blue-900/5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/10 ${isMaximized ? 'gap-4 p-5' : 'gap-2 p-3'}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className={`flex items-center justify-center rounded-xl ${isMaximized ? 'h-24 w-24' : 'h-16 w-16'}`}>
                    <img src={card.iconSrc} alt={card.title} className={`object-contain ${isMaximized ? 'h-18 w-18' : 'h-114 w-14'}`} />
                  </span>
                </div>
                <span className={`rounded-full bg-gradient-to-r from-[#1a56f0] to-[#0f3fbf] font-semibold uppercase tracking-wide text-white shadow-sm shadow-blue-900/25 ${isMaximized ? 'px-3 py-1 text-xs' : 'px-2 py-0.5 text-[10px]'}`}>
                  {card.title}
                </span>
              </div>

              <p className={`leading-6 text-[#1d3c85] ${isMaximized ? 'text-sm' : 'text-sm'}`}>{card.detail}</p>

              <div className="flex flex-wrap gap-2">
                {card.tags.map(tag => (
                  <span
                    key={tag}
                    className={`rounded-full border border-[#d6e5ff] font-semibold text-[#0f2a6b] bg-[#eaf1ff] ${isMaximized ? 'px-3 py-1 text-xs' : 'px-2 py-0.5 text-[10px]'}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
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