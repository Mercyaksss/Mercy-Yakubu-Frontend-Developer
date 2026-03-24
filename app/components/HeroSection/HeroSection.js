'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Github, Linkedin, Copy, Check, ArrowRight } from 'lucide-react';
import './HeroSection.scss';
import photo2 from "../../assets/photo5.png"

export default function HeroSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('mercyaksss625@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-inner">

        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot" />
            Available for freelance
          </div>

          <h1 className="hero-title">
            Mercy<br />
            <span className="gradient-name">Yakubu</span>
          </h1>

          <p className="hero-tagline">
            I build <strong>fast, responsive websites</strong> from Figma
            designs — pixel-perfect, every time.
          </p>

          <p className="hero-sub">
            Frontend Developer specializing in React & Next.js and modern UI
          </p>

          <div className="hero-actions">
            <a
              href="https://www.fiverr.com/YOUR_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Hire Me on Fiverr <ArrowRight size={15} />
            </a>
            <button className="btn-ghost" onClick={scrollToProjects}>
              View Projects
            </button>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/Mercyaksss"
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill"
              aria-label="GitHub"
            >
              <Github size={14} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mercy-yakubu-92b159196?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill"
              aria-label="LinkedIn"
            >
              <Linkedin size={14} /> LinkedIn
            </a>
            <button
              className={`social-pill ${copied ? 'copied' : ''}`}
              onClick={handleCopy}
              aria-label="Copy email"
            >
              {copied ? <><Check size={14} /> Copied!</> : <><Copy size={14} /> Copy Email</>}
            </button>
          </div>
        </div>

        <div className="hero-image-wrap">
          <div className="hero-image-frame">
            {/* Replace src with your actual photo path e.g. "/photo.jpg" */}
            <Image src={photo2} alt="Mercy Yakubu" fill style={{ objectFit: 'cover', objectPosition: 'top center' }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority />
          </div>

          <div className="hero-badge-float hero-badge-float--top">
            <span className="float-dot" />
            Open to work
          </div>
        </div>

      </div>
    </section>
  );
}