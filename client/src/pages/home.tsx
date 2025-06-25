import { useState } from "react";
import { TerminalWindow } from "@/components/terminal-window";
import { ProgressBar } from "@/components/progress-bar";
import { TypingAnimation } from "@/components/typing-animation";
import { InteractiveTerminal } from "@/components/interactive-terminal";
import { personalInfo, skills, experience, education, projects, softSkills, hobbies } from "@/data/portfolio-data";
import { 
  User, 
  Code, 
  FolderOpen, 
  Briefcase, 
  Terminal, 
  Phone, 
  Mail, 
  MapPin, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Download,
  CheckCircle,
  GraduationCap,
  Database,
  Server,
  Layers,
  Rocket
} from "lucide-react";
import { SiReact, SiNodedotjs, SiMongodb, SiExpress, SiSpringboot, SiJavascript, SiJava, SiPython, SiMysql, SiPostgresql } from "react-icons/si";

type Section = 'hero' | 'about' | 'skills' | 'projects' | 'experience' | 'contact';

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>('hero');

  const navigateToSection = (section: Section) => {
    setActiveSection(section);
  };

  const renderHeroSection = () => (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 gap-8">
      <TerminalWindow title="Terminal - aman@ubuntu-portfolio" className="max-w-4xl w-full">
        <div className="font-ubuntu-mono">
          <div className="space-y-2">
            <div className="flex">
              <span className="text-terminal-green">aman@ubuntu-portfolio</span>
              <span className="text-white">:</span>
              <span className="text-blue-400">~</span>
              <span className="text-white">$ whoami</span>
            </div>
            <div className="text-white">
              <div className="typing-animation">
                <h1 className="text-4xl md:text-6xl font-bold text-ubuntu-orange mb-4">{personalInfo.name.toUpperCase()}</h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-6">{personalInfo.title}</p>
                <div className="space-y-1 text-sm">
                  <p><span className="text-terminal-green">Location:</span> Ujjain, Madhya Pradesh, India</p>
                  <p><span className="text-terminal-green">Experience:</span> Back End Developer Intern at Smallfare</p>
                  <p><span className="text-terminal-green">Education:</span> MCA Graduate (CGPA: 7.79)</p>
                  <p><span className="text-terminal-green">Specialization:</span> Spring Boot, React.js, MERN Stack</p>
                </div>
              </div>
            </div>
            <div className="flex items-center mt-6">
              <span className="text-terminal-green">aman@ubuntu-portfolio</span>
              <span className="text-white">:</span>
              <span className="text-blue-400">~</span>
              <span className="text-white">$ help</span>
            </div>
            <div className="text-gray-300 text-sm mt-2">
              Try commands: ls, cd about, skills, projects, experience, contact
            </div>
          </div>
        </div>
      </TerminalWindow>
      
      <div className="max-w-4xl w-full">
        <InteractiveTerminal 
          onSectionChange={navigateToSection} 
          currentSection={activeSection}
        />
      </div>
    </section>
  );

  const renderAboutSection = () => (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <TerminalWindow title="about.txt - Text Editor">
          <h2 className="text-3xl font-bold text-ubuntu-orange mb-6 flex items-center">
            <User className="mr-3" />
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm a passionate Back End Developer with a strong foundation in Java, Spring Boot, and modern web technologies. 
                Currently pursuing excellence in full-stack development with a focus on the MERN stack.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                During my internship at Smallfare, I worked extensively with payment gateway integrations, 
                security implementations, and database management using PostgreSQL.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I believe in writing clean, efficient code and creating solutions that make a real difference. 
                My goal is to contribute to innovative projects that challenge me to grow as a developer.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-ubuntu-dark p-4 rounded border border-ubuntu-border">
                <h3 className="text-ubuntu-orange font-semibold mb-2">Quick Facts</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><MapPin className="text-ubuntu-orange mr-2 w-4 h-4" />Based in Ujjain, Madhya Pradesh</li>
                  <li className="flex items-center"><GraduationCap className="text-ubuntu-orange mr-2 w-4 h-4" />MCA Graduate (2024)</li>
                  <li className="flex items-center"><Code className="text-ubuntu-orange mr-2 w-4 h-4" />3+ Programming Languages</li>
                  <li className="flex items-center"><FolderOpen className="text-ubuntu-orange mr-2 w-4 h-4" />Multiple Full-Stack Projects</li>
                </ul>
              </div>
              <div className="bg-ubuntu-dark p-4 rounded border border-ubuntu-border">
                <h3 className="text-ubuntu-orange font-semibold mb-2">Current Focus</h3>
                <ul className="space-y-1 text-sm">
                  <li>• MERN Stack Development</li>
                  <li>• API Design & Integration</li>
                  <li>• Database Optimization</li>
                  <li>• Cloud Technologies</li>
                </ul>
              </div>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );

  const renderSkillsSection = () => (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <TerminalWindow title="skills.json - System Monitor">
          <h2 className="text-3xl font-bold text-ubuntu-orange mb-8 flex items-center">
            <Code className="mr-3" />
            Technical Skills
          </h2>

          {/* MERN Stack Highlight */}
          <div className="bg-ubuntu-dark p-6 rounded-lg border border-ubuntu-orange mb-8">
            <h3 className="text-2xl font-bold text-ubuntu-orange mb-4 text-center">MERN Stack Specialist</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <SiMongodb className="text-2xl" />
                </div>
                <p className="font-semibold">MongoDB</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <SiExpress className="text-2xl" />
                </div>
                <p className="font-semibold">Express.js</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <SiReact className="text-2xl" />
                </div>
                <p className="font-semibold">React.js</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <SiNodedotjs className="text-2xl" />
                </div>
                <p className="font-semibold">Node.js</p>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Programming Languages */}
            <div className="bg-ubuntu-dark p-6 rounded border border-ubuntu-border">
              <h3 className="text-ubuntu-orange font-semibold mb-4 flex items-center">
                <Code className="mr-2 w-5 h-5" />
                Programming Languages
              </h3>
              <div className="space-y-3">
                {skills.languages.map((skill, index) => (
                  <ProgressBar key={index} skill={skill.name} level={skill.level} />
                ))}
              </div>
            </div>

            {/* Frameworks & Libraries */}
            <div className="bg-ubuntu-dark p-6 rounded border border-ubuntu-border">
              <h3 className="text-ubuntu-orange font-semibold mb-4 flex items-center">
                <Layers className="mr-2 w-5 h-5" />
                Frameworks & Libraries
              </h3>
              <div className="space-y-3">
                {skills.frameworks.map((skill, index) => (
                  <ProgressBar key={index} skill={skill.name} level={skill.level} />
                ))}
              </div>
            </div>

            {/* Databases & Tools */}
            <div className="bg-ubuntu-dark p-6 rounded border border-ubuntu-border">
              <h3 className="text-ubuntu-orange font-semibold mb-4 flex items-center">
                <Database className="mr-2 w-5 h-5" />
                Databases & Tools
              </h3>
              <div className="space-y-3">
                {skills.databases.map((skill, index) => (
                  <ProgressBar key={index} skill={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          </div>

          {/* Additional Skills */}
    
            <div className="bg-ubuntu-dark p-6 rounded border border-ubuntu-border">
              <h3 className="text-ubuntu-orange font-semibold mb-4">Development Tools</h3>
              <div className="flex flex-wrap gap-2">
                {skills.devTools.map((tool, index) => (
                  <span key={index} className="bg-ubuntu-purple text-white px-3 py-1 rounded text-sm font-medium">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );

  const renderProjectsSection = () => (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <TerminalWindow title="projects/ - File Manager">
          <h2 className="text-3xl font-bold text-ubuntu-orange mb-8 flex items-center">
            <FolderOpen className="mr-3" />
            Projects Portfolio
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-ubuntu-dark rounded-lg border border-ubuntu-border overflow-hidden hover:border-ubuntu-orange transition-colors duration-300">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${index === 0 ? 'bg-ubuntu-orange' : 'bg-ubuntu-purple'} rounded-lg flex items-center justify-center mr-4`}>
                      {index === 0 ? <User className="text-xl" /> : <FolderOpen className="text-xl" />}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <p className="text-gray-400 text-sm">{project.type}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-ubuntu-orange font-semibold mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-ubuntu-orange font-semibold mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, idx) => (
                        <span key={idx} className={`${getTechColor(tech)} px-2 py-1 rounded text-xs`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <button className="bg-ubuntu-orange hover:bg-orange-600 text-white px-4 py-2 rounded transition-colors text-sm">
                      <Github className="inline w-4 h-4 mr-2" />View Code
                    </button>
                    <button className="border border-ubuntu-orange text-ubuntu-orange hover:bg-ubuntu-orange hover:text-white px-4 py-2 rounded transition-colors text-sm">
                      <ExternalLink className="inline w-4 h-4 mr-2" />Live Demo
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Future Projects Section */}
          <div className="mt-12 bg-ubuntu-dark p-6 rounded-lg border border-ubuntu-border">
            <h3 className="text-ubuntu-orange font-semibold mb-4 flex items-center">
              <Rocket className="mr-2" />
              Upcoming Projects
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 border border-ubuntu-border rounded">
                <div className="text-2xl text-ubuntu-orange mb-2">🛒</div>
                <h4 className="font-semibold">E-Commerce Platform</h4>
                <p className="text-sm text-gray-400">MERN Stack</p>
              </div>
              <div className="text-center p-4 border border-ubuntu-border rounded">
                <div className="text-2xl text-ubuntu-orange mb-2">📊</div>
                <h4 className="font-semibold">Analytics Dashboard</h4>
                <p className="text-sm text-gray-400">React + D3.js</p>
              </div>
              <div className="text-center p-4 border border-ubuntu-border rounded">
                <div className="text-2xl text-ubuntu-orange mb-2">📱</div>
                <h4 className="font-semibold">Mobile App</h4>
                <p className="text-sm text-gray-400">React Native</p>
              </div>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );

  const renderExperienceSection = () => (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <TerminalWindow title="experience.log - System Log">
          <h2 className="text-3xl font-bold text-ubuntu-orange mb-8 flex items-center">
            <Briefcase className="mr-3" />
            Professional Experience
          </h2>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-ubuntu-orange"></div>
            
            {/* Experience Item */}
            <div className="relative flex items-start mb-8">
              <div className="absolute left-6 w-4 h-4 bg-ubuntu-orange rounded-full border-4 border-ubuntu-dark"></div>
              <div className="ml-20 bg-ubuntu-dark p-6 rounded-lg border border-ubuntu-border flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{experience.position}</h3>
                    <p className="text-ubuntu-orange font-semibold">{experience.company}</p>
                    <p className="text-gray-400 text-sm">{experience.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-ubuntu-orange font-semibold">{experience.duration}</p>
                    <p className="text-gray-400 text-sm">3 months</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-ubuntu-orange font-semibold mb-2">Key Responsibilities:</h4>
                  <ul className="space-y-2 text-gray-300">
                    {experience.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="text-ubuntu-orange mr-3 mt-1 w-4 h-4 flex-shrink-0" />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-ubuntu-orange font-semibold mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-600 px-3 py-1 rounded text-sm">PostgreSQL</span>
                    <span className="bg-green-600 px-3 py-1 rounded text-sm">Payment APIs</span>
                    <span className="bg-orange-600 px-3 py-1 rounded text-sm">Postman</span>
                    <span className="bg-purple-600 px-3 py-1 rounded text-sm">Encryption</span>
                    <span className="bg-red-600 px-3 py-1 rounded text-sm">API Testing</span>
                  </div>
                </div>
                
                <div className="bg-ubuntu-light p-4 rounded border border-ubuntu-border">
                  <h4 className="text-ubuntu-orange font-semibold mb-2">Key Achievements:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Successfully integrated multiple payment gateways with 99.9% uptime</li>
                    <li>• Implemented security measures that reduced data breach risks by 80%</li>
                    <li>• Optimized database queries resulting in 40% faster response times</li>
                    <li>• Conducted over 500+ API tests ensuring robust application performance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-ubuntu-orange mb-6 flex items-center">
              <GraduationCap className="mr-3" />
              Education
            </h3>
            
            <div className="space-y-6">
              {education.slice(0, 2).map((edu, index) => (
                <div key={index} className="bg-ubuntu-dark p-6 rounded-lg border border-ubuntu-border">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                      <p className="text-ubuntu-orange font-semibold">{edu.institution}</p>
                      <p className="text-gray-400">{edu.university}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-ubuntu-orange font-semibold">{edu.duration}</p>
                      <p className="text-white font-semibold">{edu.grade}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );

  const renderContactSection = () => (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <TerminalWindow title="contact.sh - Terminal">
          <h2 className="text-3xl font-bold text-ubuntu-orange mb-8 flex items-center">
            <Terminal className="mr-3" />
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Terminal Contact Info */}
            <div className="bg-ubuntu-dark p-6 rounded border border-ubuntu-border font-ubuntu-mono">
              <div className="mb-4">
                <span className="text-terminal-green">aman@ubuntu-portfolio</span>
                <span className="text-white">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-white">$ cat contact.txt</span>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center">
                  <span className="text-ubuntu-orange">EMAIL:</span>
                  <span className="text-white ml-2">{personalInfo.email}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-ubuntu-orange">LOCATION:</span>
                  <span className="text-white ml-2">Ujjain, Madhya Pradesh, India</span>
                </div>
                <div className="flex items-center">
                  <span className="text-ubuntu-orange">STATUS:</span>
                  <span className="text-terminal-green ml-2">Available for opportunities</span>
                </div>
              </div>
              
              <div className="mt-6">
                <span className="text-terminal-green">aman@ubuntu-portfolio</span>
                <span className="text-white">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-white">$ ls social/</span>
              </div>
              
              <div className="mt-2 space-y-2">
                <div className="flex items-center space-x-4">
                  <span className="text-ubuntu-orange">linkedin.link</span>
                  <span className="text-ubuntu-orange">github.repo</span>
                  <span className="text-ubuntu-orange">resume.pdf</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-xl font-bold text-ubuntu-orange mb-4">Send a Message</h3>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Message sent successfully! (This is a demo)'); }}>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-ubuntu-dark border border-ubuntu-border rounded px-3 py-2 text-white focus:border-ubuntu-orange focus:outline-none" 
                    placeholder="Your Name" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-ubuntu-dark border border-ubuntu-border rounded px-3 py-2 text-white focus:border-ubuntu-orange focus:outline-none" 
                    placeholder="your.email@example.com" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                  <input 
                    type="text" 
                    className="w-full bg-ubuntu-dark border border-ubuntu-border rounded px-3 py-2 text-white focus:border-ubuntu-orange focus:outline-none" 
                    placeholder="Message Subject" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea 
                    rows={4} 
                    className="w-full bg-ubuntu-dark border border-ubuntu-border rounded px-3 py-2 text-white focus:border-ubuntu-orange focus:outline-none" 
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button type="submit" className="bg-ubuntu-orange hover:bg-orange-600 text-white px-6 py-2 rounded transition-colors">
                  <Mail className="inline w-4 h-4 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Social Links & Resume */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a href="https://www.linkedin.com/in/a-mansheikh/" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded transition-colors flex items-center">
              <Linkedin className="mr-2 w-5 h-5" />
              LinkedIn Profile
            </a>
            <a href="https://github.com/a-man-sheikh" className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded transition-colors flex items-center">
              <Github className="mr-2 w-5 h-5" />
              GitHub Profile
            </a>
            <a href="https://drive.google.com/file/d/1hCVXLMEH_kyEwMXbhUn7TCJup6Eq6A9v/view?usp=sharing" className="bg-ubuntu-orange hover:bg-orange-600 text-white px-6 py-3 rounded transition-colors flex items-center">
              <Download className="mr-2 w-5 h-5" />
              Download Resume
            </a>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );

  const getTechColor = (tech: string) => {
    const colors: { [key: string]: string } = {
      'Spring Boot': 'bg-green-600',
      'Thymeleaf': 'bg-blue-600',
      'Spring JPA': 'bg-purple-600',
      'MySQL': 'bg-orange-600',
      'Spring Security': 'bg-red-600',
      'Bootstrap': 'bg-indigo-600',
      'Java': 'bg-red-600',
      'Hibernate': 'bg-purple-600',
      'Servlet': 'bg-blue-600',
      'JSP': 'bg-orange-600'
    };
    return colors[tech] || 'bg-gray-600';
  };

  return (
    <div className="min-h-screen relative z-10">
      {/* Terminal Navigation Bar */}
      <nav className="relative z-50 bg-ubuntu-light border-b border-ubuntu-border shadow-2xl">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-12">
            {/* Terminal Window Controls */}
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-4 text-sm font-ubuntu-mono text-gray-300">aman@ubuntu-portfolio:~$</span>
            </div>
            
            {/* Navigation Commands */}
            <div className="hidden md:flex items-center space-x-6 font-ubuntu-mono text-sm">
              <button 
                className={`terminal-nav transition-colors ${activeSection === 'about' ? 'text-ubuntu-orange' : 'text-terminal-green hover:text-ubuntu-orange'}`}
                onClick={() => navigateToSection('about')}
              >
                ./about
              </button>
              <button 
                className={`terminal-nav transition-colors ${activeSection === 'skills' ? 'text-ubuntu-orange' : 'text-terminal-green hover:text-ubuntu-orange'}`}
                onClick={() => navigateToSection('skills')}
              >
                ./skills
              </button>
              <button 
                className={`terminal-nav transition-colors ${activeSection === 'projects' ? 'text-ubuntu-orange' : 'text-terminal-green hover:text-ubuntu-orange'}`}
                onClick={() => navigateToSection('projects')}
              >
                ./projects
              </button>
              <button 
                className={`terminal-nav transition-colors ${activeSection === 'experience' ? 'text-ubuntu-orange' : 'text-terminal-green hover:text-ubuntu-orange'}`}
                onClick={() => navigateToSection('experience')}
              >
                ./experience
              </button>
              <button 
                className={`terminal-nav transition-colors ${activeSection === 'contact' ? 'text-ubuntu-orange' : 'text-terminal-green hover:text-ubuntu-orange'}`}
                onClick={() => navigateToSection('contact')}
              >
                ./contact
              </button>
            </div>

            {/* Logo/Home Button */}
            <button 
              className="text-terminal-green hover:text-ubuntu-orange transition-colors font-ubuntu-mono text-sm"
              onClick={() => navigateToSection('hero')}
            >
              <Terminal className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {activeSection === 'hero' && renderHeroSection()}
        {activeSection === 'about' && renderAboutSection()}
        {activeSection === 'skills' && renderSkillsSection()}
        {activeSection === 'projects' && renderProjectsSection()}
        {activeSection === 'experience' && renderExperienceSection()}
        {activeSection === 'contact' && renderContactSection()}
      </main>

      {/* Ubuntu Dock/Footer */}
      <footer className="relative z-50 bg-ubuntu-light border-t border-ubuntu-border py-4">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm font-ubuntu-mono">
            © 2024 Aman Sheikh | Ubuntu Portfolio | Powered by MERN Stack
          </p>
        </div>
      </footer>
    </div>
  );
}
