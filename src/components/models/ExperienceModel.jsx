import React, { useState } from 'react'
import Edge from '../edge';
import '../../css/Model.css';

const experiences = [
  {
    company: 'X4DigitalLabs',
    role: 'Full Stack Developer',
    period: 'Mar 2025 – Present',
    location: 'Onsite',
    summary:
      'Building scalable web products end-to-end with a focus on performance, reliability, and clean architecture.',
    achievements: [
      'Developed full-stack features with modern frontend frameworks and backend services',
      'Integrated secure REST APIs to power dynamic client experiences',
      'Optimized load times and database interactions across key flows',
      'Partnered with designers and stakeholders to ship production-ready features',
    ],
    stack: ['React', 'JavaScript', 'Node.js', 'PHP', 'APIs', 'Databases', 'Cloud & Security'],
  },
  {
    company: 'Digimpact',
    role: 'Senior Web Developer',
    period: '2022 – Oct 2024',
    location: 'Onsite',
    summary:
      'Led full-stack builds, tuned performance, and delivered resilient products with cross-functional teams.',
    achievements: [
      'Architected web platforms with scalable backend services',
      'Boosted Core Web Vitals and page-load speeds',
      'Owned deployment pipelines and release stability',
    ],
    stack: ['JavaScript', 'React', 'Node.js', 'DevOps', 'Performance'],
  },
];

const ExperienceModel = ({ onClose }) => {
  const [isMaximized, setIsMaximized] = useState(true);
  const handleRestore = () => setIsMaximized(prev => !prev);

  const content = (
    <section
      id="experience"
      className={`min-h-screen bg-gradient-to-br from-[#e7f0ff] via-[#d8e7ff] to-[#eef4ff] ${isMaximized ? 'px-4 sm:px-6 lg:px-10 py-12' : 'px-3 py-6'}`}
    >
      <div className="mx-auto max-w-6xl rounded-3xl bg-white shadow-2xl shadow-[#0d2f7a]/10 ring-1 ring-[#d6e5ff]">
        <div className={`grid gap-10 border-b border-[#d6e5ff] ${isMaximized ? 'px-6 py-10 md:grid-cols-[1.1fr_0.9fr] sm:px-10 lg:px-14' : 'px-4 py-6 grid-cols-1'}`}>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-2xl flex flex-col justify-center">
              <img src="src/images/experience-hero.webp" alt="Experience Illustration" />
            </div>
          </div>

          <div className="space-y-5 flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1a56f0]">Experience Journey</p>
            <h1 className={`font-bold text-[#0f2a6b] ${isMaximized ? 'text-4xl sm:text-5xl' : 'text-2xl'}`}>Where I have built</h1>
            <p className={`max-w-2xl leading-7 text-[#1d3c85] ${isMaximized ? 'text-base' : 'text-sm'}`}>
              A concise record of teams and products I have shaped, focused on impact, performance, and delivery.
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

        <div className={`${isMaximized ? 'px-6 py-8 sm:px-10 xl:px-14' : 'px-4 py-4'}`}>
          <div className={`relative overflow-hidden rounded-3xl border border-[#d6e5ff] bg-gradient-to-br from-white via-[#e7f0ff] to-white ${isMaximized ? 'p-6 sm:p-8' : 'p-4'}`}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,91,246,0.08),transparent_45%)]" aria-hidden="true"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(37,66,235,0.08),transparent_45%)]" aria-hidden="true"></div>

            <div className="relative space-y-10">
              {experiences.map((exp, index) => (
                <div key={exp.company} className="relative pl-12">
                  <div className="absolute left-5 top-0 bottom-0 w-px bg-[#d6e5ff] last:hidden" style={{ opacity: index === experiences.length - 1 ? 0 : 1 }} aria-hidden="true"></div>
                  <div className="absolute left-2 top-1.5 h-6 w-6 rounded-full bg-[#1a56f0] shadow-lg shadow-blue-900/25 ring-4 ring-white"></div>

                  <div className={`flex flex-col rounded-2xl border border-[#d6e5ff] bg-white/85 shadow-sm shadow-blue-900/5 backdrop-blur ${isMaximized ? 'gap-3 p-5' : 'gap-2 p-3'}`}>
                    <div className={`flex flex-wrap items-start justify-between ${isMaximized ? 'gap-3' : 'gap-2'}`}>
                      <div className="space-y-1">
                        <p className={`font-semibold uppercase tracking-[0.2em] text-[#1a56f0] ${isMaximized ? 'text-xs' : 'text-[10px]'}`}>{exp.period} · {exp.location}</p>
                        <h3 className={`font-bold text-[#0f2a6b] ${isMaximized ? 'text-xl' : 'text-base'}`}>{exp.role}</h3>
                        <p className={`font-semibold text-[#1d3c85] ${isMaximized ? 'text-sm' : 'text-xs'}`}>{exp.company}</p>
                      </div>
                      <span className={`rounded-full bg-gradient-to-r from-[#1a56f0] to-[#0f3fbf] font-semibold uppercase tracking-wide text-white shadow-sm shadow-blue-900/25 ${isMaximized ? 'px-3 py-1 text-xs' : 'px-2 py-0.5 text-[10px]'}`}>
                        {index === 0 ? 'Current' : 'Previous'}
                      </span>
                    </div>

                    <p className={`leading-6 text-[#1d3c85] ${isMaximized ? 'text-sm' : 'text-xs'}`}>{exp.summary}</p>

                    <div className={`grid grid-cols-1 text-[#1d3c85] ${isMaximized ? 'gap-2 text-sm sm:grid-cols-2' : 'gap-1.5 text-xs'}`}>
                      {exp.achievements.map((item) => (
                        <div key={item} className={`flex items-start rounded-lg bg-[#eaf1ff] border border-[#d6e5ff] ${isMaximized ? 'gap-2 px-3 py-2' : 'gap-1.5 px-2 py-1.5'}`}>
                          <span className={`inline-block rounded-full bg-[#0f3fbf] ${isMaximized ? 'mt-1 h-1.5 w-1.5' : 'mt-0.5 h-1 w-1'}`}></span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.stack.map((tag) => (
                        <span
                          key={tag}
                          className={`rounded-full border border-[#d6e5ff] font-semibold text-[#0f2a6b] bg-[#eaf1ff] ${isMaximized ? 'px-3 py-1 text-xs' : 'px-2 py-0.5 text-[10px]'}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <Edge
      slug={"experience"}
      content={content}
      onClose={onClose}
      isMaximized={isMaximized}
      onRestore={handleRestore}
    />
  );
}

export default ExperienceModel;