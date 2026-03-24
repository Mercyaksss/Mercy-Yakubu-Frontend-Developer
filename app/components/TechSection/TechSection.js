import Image from 'next/image';
import './TechSection.scss';
import js from '../../assets/js.svg';
import html from '../../assets/html.svg';
import react from '../../assets/react.svg';
import next from '../../assets/next.svg';
import css from '../../assets/css.svg';
import github from '../../assets/github.svg';
import nodejs from '../../assets/nodejs.svg';
import tailwind from '../../assets/tailwind.svg';

const techStack = [
  { name: 'HTML',       icon: html,     color: '#E34F26' },
  { name: 'CSS',        icon: css,       color: '#CC6699' },
  { name: 'JavaScript', icon: js,        color: '#F7DF1E' },
  { name: 'React',      icon: react,     color: '#61DAFB' },
  { name: 'Next.js',    icon: next,      color: '#ffffff' },
  { name: 'Git',        icon: github,    color: '#f0f0f0' },
  { name: 'Tailwind',   icon: tailwind,  color: '#38BDF8' },
  { name: 'Node.js',    icon: nodejs,    color: '#6CC24A' },
];

export default function TechSection() {
  return (
    <section className="tech-section reveal" id="tech">
      <div className="tech-inner">
        <div className="section-eyebrow">Tech Stack</div>
        <div className="tech-header">
          <h2 className="tech-title">Tools I build with.</h2>
          <p className="tech-sub">
            Everything I need to take a design from Figma to a fully functional,
            production-ready website.
          </p>
        </div>

        <div className="tech-grid">
          {techStack.map((tech, i) => (
          <div
              key={tech.name}
              className="tech-item"
              data-index={i}
              style={{
                '--tech-color': tech.color,
                animationDelay: `${i * 0.07}s`,
              }}
            >
              <div className="tech-icon-wrap">
                <Image
                  src={tech.icon}
                  width={40}
                  height={40}
                  alt={`${tech.name} icon`}
                />
              </div>
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}