import React, { useState } from "react";
import { 
  Github, Linkedin, Mail, ExternalLink, Brain, Code, 
  Database, Terminal, Cpu, Globe, MessageSquare, Zap,
  Activity, Layers // Added these missing imports
} from "lucide-react";
import "./App.css";

// --- DATA CONFIGURATION ---

const profile = {
  name: "Ankita Yadav",
  role: "GenAI Engineer | Full Stack Developer",
  bio: "B.Tech Computer Science student at VIT-AP (CGPA: 9.37). I specialize in bridging the gap between complex AI models and scalable web applications, with a focus on RAG pipelines, NVIDIA NIM microservices, and MERN stack development.",
  social: {
    linkedin: "https://www.linkedin.com/in/ankita-yadav-202327btech/",
    github: "https://github.com/aankiita",
    email1: "https://mail.google.com/mail/?view=cm&fs=1&to=abcankitayadav@gmail.com",
    email2: "https://mail.google.com/mail/?view=cm&fs=1&to=ankita.23bce7218@vitapstudent.ac.in"
  }
};

const skills = [
  { 
    category: "Generative AI & LLMs", 
    icon: <Brain size={20} className="text-purple-400" />, 
    items: [
      "LLMs (Llama 3, Mistral)", "NVIDIA NIM", "RAG", "LangChain", 
      "LangGraph", "CrewAI", "Semantic Caching", "LoRA/QLoRA"
    ] 
  },
  { 
    category: "Machine Learning", 
    icon: <Activity size={20} className="text-blue-400" />, 
    items: [
      "Decision Tree", "Random Forest", "Bagging", "Boosting", "SVM", 
      "KNN", "PCA", "Unsupervised Learning", "Clustering", "Scikit-Learn","OpenCV", "NLP","Matplotlib"
    ] 
  },
  { 
    category: "Deep Learning", 
    icon: <Layers size={20} className="text-indigo-400" />, 
    items: [
      "Transformers (Attention Is All You Need)", "CNN", "RNN", "LSTM", "GRU", 
      "Bidirectional RNN", "ANN", "Backpropagation", "PyTorch", "TensorFlow", "YOLOv8"
    ] 
  },
  { 
    category: "Full Stack Development", 
    icon: <Code size={20} className="text-green-400" />, 
    items: [
      "React.js", "Node.js", "Express.js", "FastAPI", "RESTful APIs", 
      "MERN Stack", "Tailwind CSS", "JavaScript", "HTML5/CSS3"
    ] 
  },
  { 
    category: "Data & Infrastructure", 
    icon: <Database size={20} className="text-orange-400" />, 
    items: [
      "FAISS", "AstraDB", "Neo4j", "MongoDB", 
      "Docker", "Git", "Linux", "REST APIs"
    ] 
  }
];

const projects = [
  {
    title: "NVIDIA LLM Census Model",
    desc: "Optimized LLM inference using NVIDIA NIM microservices to analyze and query US Census data with high performance.",
    tech: ["NVIDIA NIM", "Python", "Streamlit", "LLM"],
    link: "https://github.com/aankiita/NVIDIA_LLM_MODEL",
    live: "https://nvidiallmmodel-ectljrcrgxl2eu3agefprp.streamlit.app/",
    type: "AI/ML"
  },
  {
    title: "RAG Q&A with GROQ & Ollama",
    desc: "Retrieval-Augmented Generation system using Ollama for local embeddings and Groq for blazing-fast inference.",
    tech: ["Groq", "Ollama", "HuggingFace", "FAISS"],
    link: "https://github.com/aankiita/RAGQnAwithGROQ",
    live: "https://drive.google.com/file/d/1QLhuAsEoCP4kYBym65QwCyQlroUIzCEh/view",
    type: "AI/ML"
  },
  {
    title: "LCEL Language Translator",
    desc: "A multilingual translation platform built using LangChain Expression Language for modular AI workflows.",
    tech: ["LangChain", "LCEL", "FastAPI", "Streamlit"],
    link: "https://github.com/aankiita/Language_Translation-LLM-MODEL-",
    live: "https://jynzcncktf67mrqeh4gft7.streamlit.app/",
    type: "AI/ML"
  },
  {
    title: "Wanderlust",
    desc: " A travel booking platform featuring secure user authentication. Users can add listings, post reviews, and search locations via an interactive map. Includes robust authorization where only the original creator can edit or delete their listings.",
    tech: ["Node.js", "Express", "MongoDB", "Mapbox API", "EJS","Middlewares"],
    link: "https://github.com/aankiita/WANDERLUST",
    live: "https://wanderlust-qfja.onrender.com/listings",
    type: "Web"
  },
  {
    title: "MathGPT",
    desc: "AI-powered math solver utilizing LangChain Agents, LLMMathChain, Wikipedia API, and Groq to evaluate mathematical expressions and answer complex queries.",
    tech: ["LangChain", "Groq API", "Streamlit", "Python"],
    link: "https://github.com/aankiita/MathGPT",
    live: "https://mathgpt-9pfdbgxy2wrwnrrg7labgr.streamlit.app/",
    type: "AI/ML"
  },
  {
    title: "YouTube Blog Generator",
    desc: "Multi-agent pipeline using CrewAI to research and convert video transcripts into SEO-optimized articles.",
    tech: ["CrewAI", "LangChain", "Python"],
    link: "https://github.com/aankiita",
    type: "AI/ML"
  },
  {
    title: "Collaboration Compiler",
    desc: "Real-time online code editor allowing multiple users to code together in synchronized rooms in any programming language.",
    tech: ["React", "Socket.io", "Node.js", "Express"],
    link: "https://github.com/aankiita/Collaboration-Compiler",
    type: "Web"
  },
  {
    title: "SAHARA AI Civic Deterrent",
    desc: "AI monitoring system detecting public indiscipline via real-time YOLOv8 computer vision pipelines.",
    tech: ["YOLOv8", "OpenCV", "Python"],
    link: "https://github.com/aankiita/Hardware-stuff",
    type: "AI/ML"
  },
  {
    title: "InvestoX",
    desc: "A comprehensive full-stack stock trading platform featuring secure user authentication. Users can buy and sell stocks,and analyze market trends through interactive graph visualizations for individual companies. Also includes dedicated sections detailing the app's mission and founder.",
    tech: ["React.js", "Node.js", "MongoDB", "Tailwind","Restful API","Middlewares"],
    link: "https://github.com/aankiita/InvestoX",
    type: "Web"
  },
  {
    title: "RNN Movie Review Sentiment Analysis",
    desc: "A web app using a Simple RNN neural network in TensorFlow/Keras to classify IMDB movie reviews as positive or negative with real-time prediction scoring.",
    tech: ["TensorFlow", "Keras", "RNN", "Streamlit"],
    link: "https://github.com/aankiita/Movie-Review-Sentiment_Analysis_RNN",
    live: "https://movie-review-sentimentanalysisrnn-8figxubuawdykuk8ebw7vq.streamlit.app/",
    type: "AI/ML"
  },
  {
    title: "ANN Bank Customer Churn Predictor",
    desc: "Machine Learning web application built with Artificial Neural Networks (ANN) to predict bank customer exit probability based on financial and demographic data.",
    tech: ["ANN", "Python", "Streamlit", "Machine Learning"],
    link: "https://github.com/aankiita/ANN-Classification-churn",
    live: "https://ann-classification-churn-w6c5spkt6srkm5tjpndd9q.streamlit.app/",
    type: "AI/ML"
  }
];

const certificates = [
  { 
    title: "Udemy NLP+Generative AI", 
    issuer: "Udemy", 
    date: "Mar 2026",
    link: "https://www.udemy.com/certificate/UC-4192343b-da44-480e-9246-96098c8522ae/" 
  },
  { 
    title: "Oracle Generative AI Professional", 
    issuer: "Oracle", 
    date: "Jul 2025",
    link: "https://www.linkedin.com/in/ankita-yadav-202327btech/overlay/Certifications/2066476876/treasury/?profileId=ACoAAFah0eMBvjm6BAdh-jDJJAzHvmNdSB1-CXo" 
  },
  { 
    title: "MERN Full Stack Developer", 
    issuer: "Apna College", 
    date: "Dec 2025",
    link: "https://www.linkedin.com/in/ankita-yadav-202327btech/overlay/Certifications/608941415/treasury/?profileId=ACoAAFah0eMBvjm6BAdh-jDJJAzHvmNdSB1-CXo" 
  },
  { 
    title: "DSA using Java", 
    issuer: "Infosys Springboard", 
    date: "May 2025",
    link: "https://drive.google.com/file/d/1rX6iChlFpxFyXrlTsuSpmU57y0KT6CE8/view" 
  },
  { 
    title: "Data Science & Analytics", 
    issuer: "HP LIFE", 
    date: "Aug 2025",
    link: "https://drive.google.com/file/d/1kKkoQqZcpzzJazjnjRlH3m000vzGUYXN/view" 
  }
];
// --- MAIN COMPONENT ---

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setMenuOpen(false);
    }
  };

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo" onClick={() => scrollTo("home")}>
          Ankita Yadav<span className="dot">.</span>
        </div>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          {["Home", "Skills", "Projects", "Certificates", "Contact"].map((item) => (
            <button 
              key={item} 
              onClick={() => scrollTo(item.toLowerCase())}
              className={activeSection === item.toLowerCase() ? "active" : ""}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="hero-section">
        <div className="hero-content">
          <div className="badge">Available for 2026 Internships</div>
          <h1 className="hero-title">Hi, I'm <span className="highlight">Ankita</span></h1>
          <p className="hero-subtitle">{profile.role}</p>
          <p className="hero-bio">{profile.bio}</p>
          
          <div className="hero-buttons">
            <a href={profile.social.linkedin} target="_blank" rel="noreferrer" className="btn btn-primary">
              <Linkedin size={18} /> LinkedIn
            </a>
            <a href={profile.social.github} target="_blank" rel="noreferrer" className="btn btn-secondary">
              <Github size={18} /> GitHub
            </a>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section id="skills" className="section-container">
        <h2 className="section-title">Technical Expertise</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-header">
                <span className="skill-icon">{skill.icon}</span>
                <h3>{skill.category}</h3>
              </div>
              <div className="skill-tags">
                {skill.items.map((item, idx) => (
                  <span key={idx} className="tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-container bg-dark">
        <h2 className="section-title">Featured Work</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <span className="project-type">{project.type}</span>
                <div className="project-links">
                  <a href={project.link} target="_blank" rel="noreferrer"><Github size={18} /></a>
                  {project.live && <a href={project.live} target="_blank" rel="noreferrer"><ExternalLink size={18} /></a>}
                </div>
              </div>
              <h3>{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              <div className="project-tech">
                {project.tech.map((t, i) => <span key={i}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certificates" className="section-container">
        <h2 className="section-title">Certifications</h2>
        <div className="cert-list">
          {certificates.map((cert, index) => (
            <div key={index} className="cert-item">
              <div className="cert-info">
                <h4>{cert.title}</h4>
                <p>{cert.issuer} • {cert.date}</p>
              </div>
              <Zap size={20} className="text-yellow-500" />
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-container contact-section">
        <div className="contact-card">
          <h2>Let's Build Something Together</h2>
          <p>I'm currently looking for opportunities in AI Engineering and Full Stack Development.</p>
          <div className="contact-buttons-container">
            <a href={profile.social.email1} target="_blank" rel="noreferrer" className="btn btn-primary">
              <Mail size={18} /> Personal Mail
            </a>
            <a href={profile.social.email2} target="_blank" rel="noreferrer" className="btn btn-secondary">
              <Mail size={18} /> University Mail
            </a>
          </div>
        </div>
      </section>

      <footer>
        <p>Built with React & Tailwind • Ankita Yadav © 2026</p>
      </footer>
    </div>
  );
}

export default App;
