import React, { useState } from 'react';
import Edge from '../edge';
import '../../css/Model.css';

const educationData = [
  {
    institution: 'The Open University of Sri Lanka',
    degree: 'Bachelor of Software Engineering (BSEHons)',
    year: 'Feb 2024 – Present',
    location: 'Online / Colombo',
    focus: 'Software Engineering · Systems · Algorithms',
    description:
      'Pursuing an in-depth program centered on software engineering, algorithmic thinking, and system design with collaborative projects.',
  },
  {
    institution: 'SLYC, Sainthamaruthu',
    degree: 'Web Development NVQ Level 04',
    year: 'Aug 2023 – Feb 2024',
    location: 'Onsite',
    focus: 'HTML · CSS · JavaScript · Backend basics',
    description:
      'Completed a vocational program covering fundamentals of modern web development with hands-on labs and project delivery.',
  },
  {
    institution: 'Morattuva University (Online)',
    degree: 'Complete Web Design',
    year: 'Nov 2023 – Jan 2024',
    location: 'Remote',
    focus: 'Responsive Design · UX · Visual Systems',
    description:
      'Learned modern web design principles with emphasis on responsive layouts, typography, and UX for digital products.',
  },
];

const EducationModel = ({ onClose }) => {
  const [isMaximized, setIsMaximized] = useState(true);
  const handleRestore = () => setIsMaximized((prev) => !prev);

  const content = (
    <section
      id="education"
      className={`min-h-screen bg-gradient-to-br from-[#e7f0ff] via-[#d8e7ff] to-[#eef4ff] ${isMaximized ? 'px-4 sm:px-6 lg:px-10 py-12' : 'px-3 py-6'}`}
    >
      <div className="mx-auto max-w-6xl rounded-3xl bg-white shadow-2xl shadow-[#0d2f7a]/10 ring-1 ring-[#d6e5ff]">
        <div className={`grid gap-10 border-b border-[#d6e5ff] ${isMaximized ? 'px-6 py-10 md:grid-cols-[1.1fr_0.9fr] sm:px-10 lg:px-14' : 'px-4 py-6 grid-cols-1'}`}>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-2xl flex flex-col justify-center">
              <img src="src/images/education-hero.webp" alt="Education Illustration" />
            </div>
          </div>

          <div className="space-y-5 flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1a56f0]">Learning Path</p>
            <h1 className={`font-bold text-[#0f2a6b] ${isMaximized ? 'text-4xl sm:text-5xl' : 'text-2xl'}`}>Education</h1>
            <p className={`max-w-2xl leading-7 text-[#1d3c85] ${isMaximized ? 'text-base' : 'text-sm'}`}>
              A curated journey through engineering, design, and web craft with an emphasis on systems thinking.
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
              {educationData.map((edu, index) => (
                <div key={edu.institution} className="relative pl-12">
                  <div className="absolute left-5 top-0 bottom-0 w-px bg-[#d6e5ff] last:hidden" style={{ opacity: index === educationData.length - 1 ? 0 : 1 }} aria-hidden="true"></div>
                  <div className="absolute left-2 top-1.5 h-6 w-6 rounded-full bg-[#1a56f0] shadow-lg shadow-blue-900/25 ring-4 ring-white"></div>

                  <div className={`flex flex-col rounded-2xl border border-[#d6e5ff] bg-white/85 shadow-sm shadow-blue-900/5 backdrop-blur ${isMaximized ? 'gap-3 p-5' : 'gap-2 p-3'}`}>
                    <div className={`flex flex-wrap items-start justify-between ${isMaximized ? 'gap-3' : 'gap-2'}`}>
                      <div className="space-y-1">
                        <p className={`font-semibold uppercase tracking-[0.2em] text-[#1a56f0] ${isMaximized ? 'text-xs' : 'text-[10px]'}`}>{edu.year} · {edu.location}</p>
                        <h3 className={`font-bold text-[#0f2a6b] ${isMaximized ? 'text-xl' : 'text-base'}`}>{edu.degree}</h3>
                        <p className={`font-semibold text-[#1d3c85] ${isMaximized ? 'text-sm' : 'text-xs'}`}>{edu.institution}</p>
                      </div>
                      <span className={`rounded-full bg-gradient-to-r from-[#1a56f0] to-[#0f3fbf] font-semibold uppercase tracking-wide text-white shadow-sm shadow-blue-900/25 ${isMaximized ? 'px-3 py-1 text-xs' : 'px-2 py-0.5 text-[10px]'}`}>
                        {index === 0 ? 'Current' : 'Completed'}
                      </span>
                    </div>

                    <p className={`leading-6 text-[#1d3c85] ${isMaximized ? 'text-sm' : 'text-xs'}`}>{edu.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {edu.focus.split('·').map((item) => (
                        <span
                          key={item.trim()}
                          className={`rounded-full border border-[#d6e5ff] font-semibold text-[#0f2a6b] bg-[#eaf1ff] ${isMaximized ? 'px-3 py-1 text-xs' : 'px-2 py-0.5 text-[10px]'}`}
                        >
                          {item.trim()}
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
      slug={"education"}
      content={content}
      onClose={onClose}
      isMaximized={isMaximized}
      onRestore={handleRestore}
    />
  );
};

export default EducationModel;