"use client"
import React from 'react';
import './page.scss';
import Image from 'next/image';
import { ArrowUpRight, Github, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import shoestore from '../assets/shoestore.png';
import salespage from '../assets/salespage.png';
import space from '../assets/space.png';
import fylo from '../assets/Fylo.png';
import restapi from '../assets/restapi.png';
import themeswitcher from '../assets/themeswitcher.png';
import newshomepage from '../assets/newshomepage.png';

const projects = [
  {
    id: 1,
    title: "Shoe Store",
    desc: "A RESTful API built with Node.js and Express.js that serves product data for an e-commerce shoe store. Features multiple endpoints with filtering capabilities by brand, category, gender, and price range.",
    image: shoestore,
    tags: ["Next.js", "Tailwind CSS", "REST API"],
    liveLink: "https://sole-e-commerce-shoe-store.vercel.app/",
    githubLink: "https://github.com/Mercyaksss/SOLE---E-commerce-Shoe-Store",
    accent: "#ff6b35"
  },
  {
    id: 2,
    title: "Premium Landing Page Template",
    desc: "A clean, responsive landing page template built with HTML and CSS. Designed for beginners to quickly customize and launch product or service pages without starting from scratch or using frameworks.",
    image: salespage,
    tags: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://mercyaksss.github.io/premium-landing-page-template/",
    githubLink: "https://github.com/Mercyaksss/premium-landing-page-template",
    accent: "#4facfe"
  },
   {
    id: 3,
    title: "Fylo",
    desc: "A fully responsive landing page built from a Frontend Mentor challenge. Enhanced the original design with smooth animations and engaging interactions to bring the interface to life.",
    image: fylo,
    tags: ["TypeScript", "SCSS", "Framer Motion"],
    liveLink: "https://fylo-chi-ruby.vercel.app/",
    githubLink: "https://github.com/Mercyaksss/fylo",
    accent: "#CC6699"
  },
  {
    id: 4,
    title: "Shoe Store REST API",
    desc: "A RESTful API built with Node.js and Express.js that serves product data for an e-commerce shoe store. Features multiple endpoints with filtering capabilities by brand, category, gender, and price range.",
    image: restapi,
    tags: ["Vite", "React", "SCSS"],
    liveLink: "https://shoe-store-api-dei7.onrender.com/api/shoes",
    githubLink: "https://github.com/Mercyaksss/shoe-store-api",
    accent: "#ff6b35"
  },
   {
    id: 5,
    title: "Theme Switcher",
    desc: "A web application allowing users to seamlessly switch between teams and workspaces. Built with smooth state management, responsive design, and intuitive user interactions.",
    image: themeswitcher,
    tags: ["React", "SCSS"],
    liveLink: "https://theme-switcher-lyart.vercel.app/",
    githubLink: "https://github.com/Mercyaksss/theme_switcher",
    accent: "#6CC24A"
  },
  {
    id: 6,
    title: "News Homepage",
    desc: "A modern news homepage featuring a complex CSS Grid layout with multiple content sections. Built with a focus on responsive design, visual hierarchy, and creating an organized reading experience.",
    image: newshomepage,
    tags: ["Vite", "React, SCSS"],
    liveLink: "https://news-homepage-alpha-sooty.vercel.app/",
    githubLink: "https://github.com/Mercyaksss/news-homepage",
    accent: "#F7DF1E"
  },
  
];

const ProjectsPage = () => {
  return (
    <div className="projects-page">
      {/* Smaller Header - Matching your homepage style */}
      <section className="projects-header-section">
        <div className="projects-inner">
          <div className="projects-page-header">
            <Link href="/#projects" className="back-btn">
              <ArrowLeft size={15} strokeWidth={2} />
              Back to portfolio
            </Link>
            <span className="section-eyebrow">ALL PROJECTS</span>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-grid-section">
        <div className="projects-inner">
          <div className="projects-grid">
            {projects.map((project) => (
              <div
                key={project.id}
                className="project-card"
                style={{ '--card-accent': project.accent || '#ff6b35' }}
                onClick={() => window.open(project.liveLink, '_blank', 'noopener,noreferrer')}
                role="link"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && window.open(project.liveLink, '_blank', 'noopener,noreferrer')}
              >
                <div className="card-thumb">
                  {project.image ? (
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: 'cover' }}
                      priority={project.id <= 3}   // optional: preload first 3 images
                    />
                  ) : (
                    <div className="card-thumb-placeholder">
                      <span className="thumb-num">{String(project.id).padStart(2, '0')}</span>
                    </div>
                  )}

                  <div className="card-thumb-overlay">
                    <div className="overlay-label">
                      View Live →
                    </div>
                  </div>
                </div>

                <div className="card-body">
                  <div className="card-top">
                    <p className="card-num">0{project.id}</p>
                    
                    <div className="card-links">
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="card-icon-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                       <Github size={15} strokeWidth={1.75} />
                      </a>
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="card-icon-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ArrowUpRight size={15} strokeWidth={1.75} />
                      </a>
                    </div>
                  </div>

                  <h3 className="card-title">{project.title}</h3>
                  <p className="card-desc">{project.desc}</p>

                  <div className="card-tags">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="card-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;