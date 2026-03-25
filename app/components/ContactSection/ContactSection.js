'use client';

import { useState } from 'react';
import { Copy, Check, Github, Linkedin, ArrowUpRight, Mail } from 'lucide-react';
import './ContactSection.scss';

const EMAIL = 'mercyaksss625@gmail.com';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section className="contact-section reveal" id="contact">
      <div className="contact-inner">

        {/* Layered glows */}
        <div className="contact-glow contact-glow--warm" />
        <div className="contact-glow contact-glow--cool" />

        <div className="section-eyebrow">Get in touch</div>

        <h2 className="contact-title">
          Have a project <br />
          in <span className="contact-title-accent">mind?</span>
        </h2>

        <p className="contact-sub">
          I&apos;m currently available for freelance work. If you have a project
          that needs a skilled frontend developer, I&apos;d love to hear about it.
        </p>

        {/* CTA card */}
        <div className="contact-card">

          {/* Email row */}
          <div className="contact-email-row">
            <div className="email-icon-wrap">
              <Mail size={16} strokeWidth={1.75} />
            </div>
            <span className="email-address">{EMAIL}</span>
            <button
              className={`email-copy-btn ${copied ? 'copied' : ''}`}
              onClick={handleCopy}
              aria-label="Copy email"
            >
              {copied
                ? <><Check size={13} /> Copied!</>
                : <><Copy size={13} /> Copy</>
              }
            </button>
          </div>

          <div className="contact-card-divider" />

          {/* Action buttons */}
          <div className="contact-actions">
            <a
              href={`mailto:${EMAIL}`}
              className="btn-primary"
            >
              Send an Email <ArrowUpRight size={15} />
            </a>
            <a
              href="https://www.fiverr.com/s/Ayrj2RQ"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              Hire Me on Fiverr <ArrowUpRight size={15} />
            </a>
          </div>

        </div>

        {/* Social links */}
        <div className="contact-socials">
          <a
            href="https://github.com/Mercyaksss"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-btn"
            aria-label="GitHub"
          >
            <Github size={17} strokeWidth={1.75} />
          </a>
          <a
            href="https://www.linkedin.com/in/mercy-yakubu-92b159196?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-btn"
            aria-label="LinkedIn"
          >
            <Linkedin size={17} strokeWidth={1.75} />
          </a>
        </div>

        <footer className="contact-footer">
          <p>© {new Date().getFullYear()} Mercy Yakubu</p>
          <p>Built with Next.js &amp; SCSS</p>
        </footer>

      </div>
    </section>
  );
}