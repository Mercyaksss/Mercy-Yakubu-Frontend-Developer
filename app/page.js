import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import TechSection from './components/TechSection/TechSection';
import AboutSection from './components/AboutSection/AboutSection';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import ContactSection from './components/ContactSection/ContactSection';
import ScrollReveal from './components/ScrollReveal/ScrollReveal';
import ProgressBar from './components/ProgressBar/ProgressBar';

export default function Home() {
  return (
    <>
      <ProgressBar />
      <Navbar />
      <main>
        <HeroSection />
        <div className="section-divider" />
        <TechSection />
        <div className="section-divider" />
        <AboutSection />
        <div className="section-divider" />
        <ProjectsSection />
        <div className="section-divider" />
        <ContactSection />
      </main>
      <ScrollReveal />
    </>
  );
}