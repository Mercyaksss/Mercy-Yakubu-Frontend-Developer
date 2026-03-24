import { Crosshair, Zap, Code2, MessageSquare, Smartphone, Layers } from 'lucide-react';
import './AboutSection.scss';

const values = [
  {
    Icon: Crosshair,
    title: 'Pixel-perfect execution',
    desc: 'Every component matches the design — down to spacing, shadows, and transitions.',
    accent: '#ff6b35',
  },
  {
    Icon: Zap,
    title: 'Fast & responsive',
    desc: 'Sites that load fast and look great on every screen size, from mobile to desktop.',
    accent: '#f7df1e',
  },
  {
    Icon: Code2,
    title: 'Clean, readable code',
    desc: "Well-structured code that's easy to understand, maintain, and build on.",
    accent: '#61dafb',
  },
  {
    Icon: MessageSquare,
    title: 'Easy to collaborate with',
    desc: 'Clear communication, quick turnaround, and openness to feedback at every step.',
    accent: '#a78bfa',
  },
];

const traits = [
  { Icon: Zap,         label: 'Fast turnaround' },
  { Icon: Crosshair,   label: 'Pixel-perfect'   },
  { Icon: MessageSquare, label: 'Easy to work with' },
  { Icon: Smartphone,  label: 'Mobile-first'    },
  { Icon: Layers,      label: 'Clean code'      },
];

export default function AboutSection() {
  return (
    <section className="about-section reveal" id="about">
      <div className="about-inner">

        <div className="about-left">
          <div className="section-eyebrow">About Me</div>
          <h2 className="about-title">
            I turn designs into products people love to use.
          </h2>
          <p className="about-text">
            I&apos;m a frontend developer focused on building{' '}
            <strong>responsive, clean, and fast websites</strong>. I enjoy
            turning Figma designs into real, functional products that look
            great and feel smooth on every screen.
          </p>
          <p className="about-text">
            I&apos;m currently available for freelance projects and open to
            long-term collaborations. I care deeply about{' '}
            <strong>clean code, smooth interactions</strong>, and delivering
            work I&apos;m genuinely proud of.
          </p>

          <div className="about-traits">
            {traits.map(({ Icon, label }) => (
              <span key={label} className="trait-pill">
                <Icon size={12} strokeWidth={2} />
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="about-right">
          <div className="values-grid">
            {values.map(({ Icon, title, desc, accent }) => (
              <div
                key={title}
                className="value-card"
                style={{ '--value-accent': accent }}
              >
                <div className="value-icon-wrap">
                  <Icon size={20} strokeWidth={1.75} className="value-icon" />
                </div>
                <div className="value-body">
                  <p className="value-title">{title}</p>
                  <p className="value-desc">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}