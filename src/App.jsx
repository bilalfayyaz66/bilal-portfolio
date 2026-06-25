import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Star,
  BriefcaseBusiness,
} from "lucide-react";
import { profile, projects, skillGroups } from "./data.js";
import "./styles.css";

function Header() {
  return (
    <header className="site-header">
      <a href="#home" className="brand">
        Bilal Fayyaz
      </a>

      <nav className="nav-links" aria-label="Main navigation">
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#freelance">Freelance</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function SocialLinks() {
  return (
    <div className="social-links" aria-label="Social profile links">
      <a
        href={profile.linkedin}
        target="_blank"
        rel="noreferrer"
        aria-label="Open LinkedIn profile"
      >
        <Linkedin size={22} />
      </a>

      <a
        href={profile.github}
        target="_blank"
        rel="noreferrer"
        aria-label="Open GitHub profile"
      >
        <Github size={22} />
      </a>
    </div>
  );
}

function Hero() {
  return (
    <div className="hero-wrap">
      <section id="home" className="hero section">
        <div className="hero-content">
          <p className="eyebrow">{profile.role}</p>
          <h1>{profile.name}</h1>
          <p className="intro-text">{profile.intro}</p>
          <p className="availability">{profile.availability}</p>

          <div className="hero-actions">
            <a className="button primary" href="#projects">
              View Projects
            </a>
            <a className="button secondary" href={`mailto:${profile.email}`}>
              Contact Me
            </a>
          </div>
        </div>

        <aside className="hero-card" aria-label="Profile summary">
          <h2>Focus</h2>
          <p>
            Agentic AI, computer vision, data engineering, automation workflows,
            scalable ETL pipelines, and practical ML systems.
          </p>
          <SocialLinks />
        </aside>
      </section>
    </div>
  );
}

function Skills() {
  return (
    <div className="section-wrap">
      <section id="skills" className="section">
        <div className="section-heading">
          <p className="eyebrow">Skills</p>
          <h2>Technical skills</h2>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3>{group.title}</h3>

              <div className="tags">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article
      className={`project-card ${project.featured ? "featured-project" : ""}`}
    >
      <div className="project-topline">
        <div>
          <p className="project-category">{project.category}</p>

          {project.featured && (
            <div className="featured-badge">
              <Star size={15} />
              <span>Featured Project</span>
            </div>
          )}
        </div>

        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open GitHub repository for ${project.title}`}
        >
          <Github size={21} />
        </a>
      </div>

      <h3>{project.title}</h3>
      <p>{project.summary}</p>

      <div className="impact-block">
        <h4>Business value</h4>
        <p>{project.businessImpact}</p>
      </div>

      <ul className="project-points">
        {project.highlights.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>

      <div className="tech-list">
        {project.tech.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
    </article>
  );
}

function Projects() {
  return (
    <div className="section-wrap alt">
      <section id="projects" className="section">
        <div className="section-heading">
          <p className="eyebrow">Featured Projects</p>

          <p>
            AI engineering, computer vision, automation and data engineering
            projects built around practical business and technical problems.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </section>
    </div>
  );
}

function FreelanceExperience() {
  return (
    <div className="freelance-wrap">
      <section id="freelance" className="section freelance-section">
        <div className="section-heading">
          <p className="eyebrow">Freelance Experience</p>
          <h2>Level 2 Seller on Fiverr</h2>
          <p>
            Delivered client projects across data engineering, big data
            analytics, AI automation, agent-based workflows, and computer
            vision.
          </p>
        </div>

        <div className="freelance-card">
          <div className="freelance-icon">
            <BriefcaseBusiness size={30} />
          </div>

          <div className="freelance-content">
            <h3>Fiverr Freelance Projects</h3>
            <p>
              As a Level 2 Fiverr Seller, I have worked with clients on
              practical data pipelines, big data analytics workflows, automation
              systems, AI agents, and computer vision tasks. My focus is on
              understanding the business need first, then delivering clean,
              reliable, and maintainable technical solutions.
            </p>

            <a
              className="button primary freelance-button"
              href="https://www.fiverr.com/s/6YyvEVB"
              target="_blank"
              rel="noreferrer"
            >
              View Fiverr Profile
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function Contact() {
  return (
    <div className="contact-wrap">
      <section id="contact" className="section contact-section">
        <div className="section-heading">
          <p className="eyebrow">Contact</p>
          <h2>Let’s connect</h2>
          <p>
            For roles, collaborations or project discussions, you can reach me
            here.
          </p>
        </div>

        <div className="contact-card">
          <a href={`mailto:${profile.email}`}>
            <Mail size={20} />
            <span>{profile.email}</span>
          </a>

          <a href={`tel:${profile.phone}`}>
            <Phone size={20} />
            <span>{profile.phone}</span>
          </a>

          <p>
            <MapPin size={20} />
            <span>{profile.location}</span>
          </p>

          <SocialLinks />
        </div>
      </section>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Bilal Fayyaz. Built with React and
        deployed on Vercel.
      </p>

      <a href="#home" aria-label="Back to top">
        Back to top <ExternalLink size={14} />
      </a>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Skills />
        <Projects />
        <FreelanceExperience />
        <Contact />
      </main>

      <Footer />
    </>
  );
}