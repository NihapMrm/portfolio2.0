import React, { useState } from 'react'
import Edge from '../edge';
import '../../css/Model.css';

const contactMethods = [
  {
    label: 'Email',
    value: 'nihapmrm@gmail.com',
    href: 'mailto:nihapmrm@gmail.com',
    gradient: 'linear-gradient(135deg, #6366F1 0%, #A855F7 100%)',
    hint: 'Replies within 24 hours'
  },
  {
    label: 'Phone',
    value: '+94754910523',
    href: 'tel:+94754910523',
    gradient: 'linear-gradient(135deg, #0EA5E9 0%, #22D3EE 100%)',
    hint: 'Available 9am – 6pm'
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/nihapmrm',
    href: 'https://www.linkedin.com/in/nihapmrm/',
    gradient: 'linear-gradient(135deg, #2563EB 0%, #60A5FA 100%)',
    hint: 'Lets connect'
  },
  {
    label: 'Website',
    value: 'nihap.io',
    href: 'https://nihap.io/',
    gradient: 'linear-gradient(135deg, #EC4899 0%, #F472B6 100%)',
    hint: 'Check out my work'
  },
  {
    label: 'GitHub',
    value: 'github.com/NihapMrm',
    href: 'https://github.com/NihapMrm',
    gradient: 'linear-gradient(135deg, #6B7280 0%, #9CA3AF 100%)',
    hint: 'View my code'
  },
];

const ContactModel = ({ onClose }) => {
  const [isMaximized, setIsMaximized] = useState(true);
  const handleRestore = () => setIsMaximized(prev => !prev);

  const content = (
    <section
      id="contact"
      className={`min-h-screen bg-gradient-to-br from-[#e7f0ff] via-[#d8e7ff] to-[#eef4ff] ${isMaximized ? 'px-4 sm:px-6 lg:px-10 py-12' : 'px-3 py-6'}`}
    >
      <div className="mx-auto max-w-6xl rounded-3xl bg-white shadow-2xl shadow-[#0d2f7a]/10 ring-1 ring-[#d6e5ff]">
        <div className={`grid gap-10 border-b border-[#d6e5ff] ${isMaximized ? 'px-6 py-10 md:grid-cols-[1.1fr_0.9fr] sm:px-10 lg:px-14' : 'px-4 py-6 grid-cols-1'}`}>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-2xl flex flex-col justify-center">
              <img src="src/images/contact-hero.webp" alt="Contact Illustration" />
            </div>
          </div>

          <div className="space-y-5 flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1a56f0]">Let's Talk</p>
            <h1 className={`font-bold text-[#0f2a6b] ${isMaximized ? 'text-4xl sm:text-5xl' : 'text-2xl'}`}>Contact</h1>
            <p className={`max-w-2xl leading-7 text-[#1d3c85] ${isMaximized ? 'text-base' : 'text-sm'}`}>
              Reach out for collaborations, projects, or just to say hi. I reply quickly and prefer clear scopes.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#1a56f0] to-[#0f3fbf] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/15 transition hover:-translate-y-0.5 hover:shadow-blue-900/25"
                href="mailto:nihapmrm@gmail.com"
              >
                Email me
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-[#d6e5ff] px-6 py-3 text-sm font-semibold text-[#0f2a6b] transition hover:-translate-y-0.5 hover:border-[#c5d8ff] hover:shadow-lg hover:shadow-blue-900/10"
                href="https://www.linkedin.com/in/nihapmrm/"
                target="_blank"
                rel="noreferrer"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className={`${isMaximized ? 'px-6 py-8 sm:px-10 xl:px-14' : 'px-4 py-4'}`}>
          <div className={`relative overflow-hidden rounded-3xl border border-[#d6e5ff] bg-gradient-to-br from-white via-[#e7f0ff] to-white ${isMaximized ? 'p-6 sm:p-8' : 'p-4'}`}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,91,246,0.08),transparent_45%)]" aria-hidden="true"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(37,66,235,0.08),transparent_45%)]" aria-hidden="true"></div>

            <div className={`relative grid gap-3 ${isMaximized ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
              {contactMethods.map((item) => (
                <a
                  key={item.label}
                  href={item.href || undefined}
                  className={`group relative flex flex-col rounded-2xl border border-[#d6e5ff] bg-white/85 shadow-sm shadow-blue-900/5 backdrop-blur transition hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-900/10 ${isMaximized ? 'gap-2 p-4' : 'gap-1.5 p-3'}`}
                  target={item.href?.startsWith('http') ? '_blank' : undefined}
                  rel={item.href?.startsWith('http') ? 'noreferrer' : undefined}
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className={`rounded-full bg-gradient-to-r from-[#1a56f0] to-[#0f3fbf] font-semibold uppercase tracking-wide text-white shadow-sm shadow-blue-900/25 ${isMaximized ? 'px-3 py-1 text-xs' : 'px-2 py-0.5 text-[10px]'}`}>
                      {item.label}
                    </span>
                    <span className={`font-semibold uppercase tracking-[0.18em] text-[#1a56f0] ${isMaximized ? 'text-[11px]' : 'text-[9px]'}`}>{item.hint}</span>
                  </div>
                  <p className={`font-semibold text-[#0f2a6b] break-all ${isMaximized ? 'text-base' : 'text-sm'}`}>{item.value}</p>
                  <span className={`font-medium text-[#1d3c85] ${isMaximized ? 'text-xs' : 'text-[10px]'}`}>{item.href}</span>
                </a>
              ))}
            </div>

            <div className={`flex flex-col rounded-2xl border border-[#d6e5ff] bg-white/85 shadow-sm shadow-blue-900/5 backdrop-blur ${isMaximized ? 'mt-8 gap-3 p-5 lg:flex-row lg:items-center lg:justify-between' : 'mt-4 gap-2 p-3'}`}>
              <div className="space-y-1">
                <p className={`font-semibold uppercase tracking-[0.2em] text-[#1a56f0] ${isMaximized ? 'text-xs' : 'text-[10px]'}`}>Project in mind?</p>
                <p className={`text-[#1d3c85] ${isMaximized ? 'text-sm' : 'text-xs'}`}>Tell me about the audience, scope, and timeline. I'll reply with next steps.</p>
              </div>
              <a
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#1a56f0] to-[#0f3fbf] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/15 transition hover:-translate-y-0.5 hover:shadow-blue-900/25"
                href="mailto:nihapmrm@gmail.com"
              >
                Start a conversation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <Edge slug={"contact"} content={content} onClose={onClose} isMaximized={isMaximized} onRestore={handleRestore} />
  )
}

export default ContactModel;