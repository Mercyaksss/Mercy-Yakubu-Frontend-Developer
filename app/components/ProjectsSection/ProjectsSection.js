"use client"
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Github } from 'lucide-react';
import './ProjectsSection.scss';
import shoestore from '../../assets/shoestore.png'
import restapi from '../../assets/restapi.png'
import salespage from '../../assets/salespage.png'
import space from '../../assets/space.png'



// Drop your thumbnail images into /assets/ and import them here.
// e.g: import shopifyThumb from '../../assets/thumb-shopify.png';
// Then replace the `thumb` value below with the imported image.
// Until then, each card shows a styled gradient placeholder.

const projects = [
  {
    num: '01',
    title: 'Shoe store',
    description:
      'A personal Figma-to-code build practising e-commerce UI — responsive layout, product grid, and cart flow.',
    tags: ['Next.js', 'Tailwind', 'Shopify'],
    accent: '#ff6b35',
    thumb: shoestore, // replace with imported image
    github: 'https://github.com/Mercyaksss/SOLE---E-commerce-Shoe-Store',
    live: 'https://sole-e-commerce-shoe-store.vercel.app/',
  },
  {
    num: '02',
    title: 'Shoe Store REST API',
    description:
      'A RESTful API built with Node.js and Express.js that serves product data for an e-commerce shoe store. Features multiple endpoints with filtering capabilities by brand, category, gender, and price range.',
    tags: ['React', 'SCSS', 'Chart.js'],
    accent: '#61dafb',
    thumb: restapi,
    github: 'https://github.com/Mercyaksss/shoe-store-api',
    live: 'https://shoe-store-api-dei7.onrender.com/api/shoes',
  },
  {
    num: '03',
    title: 'Digital guide Salespage',
    description:
      'A sales landing page built for my digital marketing guide. Designed and developed with conversion in mind, featuring strategic layout, persuasive copy flow, and clear CTAs to drive purchases.',
    tags: ['Next.js', 'SCSS'],
    accent: '#f7df1e',
    thumb:  salespage,
    github: 'https://github.com/Mercyaksss/Digital-marketing-salespage',
    live: 'https://digital-marketing-salespage.vercel.app/',
  },
  {
    num: '04',
    title: 'Space Tourism',
    description:
      'A multi-page space tourism site featuring dynamic routing and interactive content sections. Focused on creating an immersive experience with polished UI and smooth navigation.',
    tags: ['Next.js', 'SCSS'],
    accent: '#a78bfa',
    thumb: space,
    github: 'https://github.com/Mercyaksss/Space-Tourism',
    live: 'https://space-tourism-mu-ten.vercel.app/',
  },
];

export default function ProjectsSection() {
  return (
    <section className="projects-section reveal" id="projects">
      <div className="projects-inner">

        <div className="projects-header">
          <div>
            <div className="section-eyebrow">Featured Projects</div>
            <h2 className="projects-title">Work that speaks for itself.</h2>
          </div>
          <Link href="/ProjectsPage" className="view-all-link">
            View all projects <ArrowUpRight size={15} />
          </Link>
        </div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <div
              key={project.num}
              className="project-card"
              style={{
                '--card-accent': project.accent,
                animationDelay: `${i * 0.08}s`,
              }}
            >
              {/* Thumbnail */}
              <div className="card-thumb">
                {project.thumb ? (
                  <Image
                    src={project.thumb}
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={project.id <= 3}
                  />
                ) : (
                  <div className="card-thumb-placeholder">
                    <span className="thumb-num">{project.num}</span>
                  </div>
                )}

                {/* Live link overlay on hover */}
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-thumb-overlay"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="overlay-label">
                    View Live <ArrowUpRight size={14} />
                  </span>
                </a>
              </div>

              {/* Body */}
              <div className="card-body">
                <div className="card-top">
                  <p className="card-num">{project.num}</p>
                  <div className="card-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-icon-link"
                      aria-label="GitHub"
                    >
                      <Github size={15} strokeWidth={1.75} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-icon-link"
                      aria-label="Live site"
                    >
                      <ArrowUpRight size={15} strokeWidth={1.75} />
                    </a>
                  </div>
                </div>

                <h3 className="card-title">{project.title}</h3>
                <p className="card-desc">{project.description}</p>

                <div className="card-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="card-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}