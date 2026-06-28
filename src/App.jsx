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
  ArrowUpRight,
} from "lucide-react";
import { profile, projects, skillGroups } from "./data.js";
import "./styles.css";

function Header() {
  return (
    <header className="site-header">
      <a href="#home" className="brand">Bilal Fayyaz</a>

      <nav className="nav-links" aria-label="Main navigation">
        <a href="#about">About</a>
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
      <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="Open LinkedIn profile">
        <Linkedin size={21} />
      </a>
      <a href={profile.github} target="_blank" rel="noreferrer" aria-label="Open GitHub profile">
        <Github size={21} />
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
              View Projects <ArrowUpRight size={17} />
            </a>
            <a className="button secondary" href={`mailto:${profile.email}`}>
              Contact Me
            </a>
          </div>
        </div>

        <aside className="hero-card" aria-label="Profile summary">
          <p className="card-label">Core Focus</p>
          <h2>AI systems with practical business value.</h2>
          <p>
            Agentic AI, computer vision, automation workflows, data engineering,
            scalable ETL pipelines, and applied machine learning systems.
          </p>
          <SocialLinks />
        </aside>
      </section>
    </div>
  );
}

function Stats() {
  return (
    <div className="stats-wrap">
      <section className="stats section" aria-label="Portfolio highlights">
        <div>
          <strong>15+</strong>
          <span>AI & Data Projects</span>
        </div>
        <div>
          <strong>Level 2</strong>
          <span>Fiverr Seller</span>
        </div>
        <div>
          <strong>AI</strong>
          <span>Engineering Focus</span>
        </div>
        <div>
          <strong>Data</strong>
          <span>Engineering & Analytics</span>
        </div>
      </section>
    </div>
  );
}

function About() {
  return (
    <div className="about-wrap">
      <section id="about" className="section about-section">
        <div className="section-heading">
          <p className="eyebrow">About</p>
          <h2>Building AI and data systems that solve practical problems</h2>
        </div>

        <div className="about-grid">
          <div className="about-main">
            <p>
              I’m focused on designing and building AI-powered solutions that
              connect machine learning, data engineering, automation, and
              real-world business use cases. My work includes agentic AI
              workflows, computer vision pipelines, data analytics systems,
              recommendation models, anomaly detection, and production-style
              MLOps pipelines.
            </p>

            <p>
              I enjoy working across the complete development flow: understanding
              the problem, preparing data, designing the model or pipeline,
              building APIs, deploying services, and improving performance,
              reliability, and usability. My projects are built to show not only
              technical implementation, but also how AI and data systems can
              support better decisions, faster workflows, and measurable
              business value.
            </p>

            <p>
              My current focus is on agentic AI, AI automation, computer vision,
              scalable ETL pipelines, big data analytics, and applied machine
              learning systems that are clean, maintainable, and useful in real
              environments.
            </p>
          </div>

          <div className="about-card">
            <h3>What I build</h3>
            <ul>
              <li>AI agents and automation workflows</li>
              <li>Computer vision and image analysis systems</li>
              <li>Big data analytics and ETL pipelines</li>
              <li>MLOps pipelines with APIs and monitoring</li>
              <li>Dashboards for business and technical insights</li>
            </ul>
          </div>
        </div>
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
          <h2>Technical expertise</h2>
          <p>
            Tools and technologies I use to design, build, deploy, and improve
            AI-driven systems, automation workflows, and data pipelines.
          </p>
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
    <article className={`project-card ${project.featured ? "featured-project" : ""}`}>
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

        <a href={project.repo} target="_blank" rel="noreferrer" aria-label={`Open GitHub repository for ${project.title}`}>
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
          <p className="eyebrow">Projects</p>
          <h2>Selected engineering work</h2>
          <p>
            A focused selection of AI engineering, computer vision, automation,
            MLOps, and data engineering projects built around practical technical
            and business problems.
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
            Delivered client work across data engineering, big data analytics,
            AI automation, agent-based workflows, and computer vision.
          </p>
        </div>

        <div className="freelance-card">
          <div className="freelance-icon">
            <BriefcaseBusiness size={30} />
          </div>

          <div className="freelance-content">
            <h3>Client-focused AI and data solutions</h3>
            <p>
              As a Level 2 Fiverr Seller, I have worked with clients on practical
              data pipelines, analytics workflows, automation systems, AI agents,
              and computer vision tasks. I focus on understanding the business
              need first, then delivering clean, reliable, and maintainable
              technical solutions.
            </p>

            <div className="freelance-points">
              <span>Level 2 Seller</span>
              <span>AI Automation</span>
              <span>Big Data Analytics</span>
              <span>Computer Vision</span>
            </div>

            <a
              className="button primary freelance-button"
              href="https://www.fiverr.com/bilal_fayyaz_?public_mode=true"
              target="_blank"
              rel="noreferrer"
            >
              View Fiverr Profile <ArrowUpRight size={17} />
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
          <h2>Open to opportunities</h2>
          <p>
            Available for AI engineering, data science, data engineering,
            automation, freelance consulting, and project collaboration.
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
      <p>© {new Date().getFullYear()} Bilal Fayyaz. Designed and developed with React & Vercel.</p>
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
        <Stats />
        <About />
        <Skills />
        <Projects />
        <FreelanceExperience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}