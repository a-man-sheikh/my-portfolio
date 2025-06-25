import { useState, useRef, useEffect } from "react";

interface InteractiveTerminalProps {
  onSectionChange: (section: string) => void;
  currentSection: string;
}

interface TerminalLine {
  type: 'command' | 'output' | 'error';
  content: string;
}

export function InteractiveTerminal({ onSectionChange, currentSection }: InteractiveTerminalProps) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<TerminalLine[]>([
    { type: 'output', content: 'Welcome to Aman Sheikh\'s Ubuntu Portfolio Terminal' },
    { type: 'output', content: 'Type "help" to see available commands' },
    { type: 'output', content: '' }
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const commands = {
    help: () => [
      'Available commands:',
      '  ls              - List available sections',
      '  cd <section>    - Navigate to a section',
      '  pwd             - Show current section',
      '  whoami          - Display personal info',
      '  clear           - Clear terminal',
      '  skills          - Show technical skills',
      '  projects        - List projects',
      '  experience      - Show work experience',
      '  contact         - Display contact information',
      '  about           - Show about information',
      ''
    ],
    ls: () => [
      'Available sections:',
      '  hero/',
      '  about/',
      '  skills/',
      '  projects/',
      '  experience/',
      '  contact/',
      ''
    ],
    pwd: () => [`Current section: /${currentSection}`, ''],
    whoami: () => [
      'Aman Sheikh',
      'Back End Developer & MERN Stack Enthusiast',
      'Location: Ujjain, Madhya Pradesh, India',
      'Email: sheikhaman0321@gmail.com',
      'Phone: +91-9617505456',
      ''
    ],
    clear: () => {
      setHistory([]);
      return [];
    },
    skills: () => [
      'Technical Skills:',
      '├── Languages: Java (90%), JavaScript (85%), Python (75%), SQL (80%)',
      '├── MERN Stack: MongoDB, Express.js, React.js, Node.js',
      '├── Frameworks: Spring Boot (90%), React.js (85%), Spring JPA (80%)',
      '├── Databases: MySQL (90%), PostgreSQL (85%)',
      '└── Tools: Git/GitHub, Postman, VS Code, IntelliJ',
      ''
    ],
    projects: () => [
      'Featured Projects:',
      '1. Smart Contact Manager',
      '   └── Spring Boot, Thymeleaf, Spring JPA, MySQL, Spring Security',
      '2. Note Taker Application',
      '   └── Java, Hibernate, Servlet, JSP, Bootstrap, MySQL',
      ''
    ],
    experience: () => [
      'Professional Experience:',
      'Back End Developer Intern @ Smallfare (Aug 2024 - Nov 2024)',
      '├── Payment gateway integrations (Cashfree, Razorpay)',
      '├── Encryption/decryption algorithms implementation',
      '├── PostgreSQL database management',
      '└── API testing with Postman',
      ''
    ],
    contact: () => [
      'Contact Information:',
      '📧 Email: sheikhaman0321@gmail.com',
      '📱 Phone: +91-9617505456',
      '📍 Location: Ujjain, Madhya Pradesh, India',
      '💼 LinkedIn: Available on request',
      '🐙 GitHub: Available on request',
      ''
    ],
    about: () => [
      'About Aman Sheikh:',
      'Passionate Back End Developer with expertise in Java, Spring Boot,',
      'and modern web technologies. Currently focused on MERN stack development.',
      'MCA Graduate (2024) with hands-on experience in payment integrations,',
      'database management, and API development.',
      ''
    ]
  };

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const [command, ...args] = trimmedCmd.split(' ');

    // Add command to history
    setCommandHistory(prev => [...prev, cmd]);
    setHistoryIndex(-1);

    // Add command line to terminal
    setHistory(prev => [...prev, { type: 'command', content: `aman@ubuntu-portfolio:~$ ${cmd}` }]);

    if (command === 'cd') {
      const section = args[0];
      const validSections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
      
      if (!section) {
        setHistory(prev => [...prev, { type: 'error', content: 'cd: missing argument' }, { type: 'output', content: '' }]);
        return;
      }

      if (validSections.includes(section)) {
        onSectionChange(section);
        setHistory(prev => [...prev, 
          { type: 'output', content: `Navigating to /${section}...` },
          { type: 'output', content: '' }
        ]);
      } else {
        setHistory(prev => [...prev, 
          { type: 'error', content: `cd: ${section}: No such section` },
          { type: 'output', content: 'Use "ls" to see available sections' },
          { type: 'output', content: '' }
        ]);
      }
    } else if (commands[command as keyof typeof commands]) {
      const output = commands[command as keyof typeof commands]();
      setHistory(prev => [...prev, ...output.map(line => ({ type: 'output' as const, content: line }))]);
    } else if (command === '') {
      setHistory(prev => [...prev, { type: 'output', content: '' }]);
    } else {
      setHistory(prev => [...prev, 
        { type: 'error', content: `Command not found: ${command}` },
        { type: 'output', content: 'Type "help" for available commands' },
        { type: 'output', content: '' }
      ]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput("");
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex >= 0) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput("");
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="bg-ubuntu-light rounded-lg shadow-2xl border border-ubuntu-border h-80">
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 rounded-t-lg border-b border-ubuntu-border">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-sm font-ubuntu-mono text-gray-300">Interactive Terminal</span>
        <div className="w-6"></div>
      </div>
      
      {/* Terminal Content */}
      <div 
        ref={terminalRef}
        className="p-4 h-64 overflow-y-auto font-ubuntu-mono text-sm"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((line, index) => (
          <div key={index} className={`
            ${line.type === 'command' ? 'text-white' : ''}
            ${line.type === 'output' ? 'text-gray-300' : ''}
            ${line.type === 'error' ? 'text-red-400' : ''}
          `}>
            {line.content}
          </div>
        ))}
        
        {/* Input Line */}
        <div className="flex items-center text-white">
          <span className="text-terminal-green">aman@ubuntu-portfolio</span>
          <span className="text-white">:</span>
          <span className="text-blue-400">~</span>
          <span className="text-white">$ </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none border-none text-white"
            autoComplete="off"
            spellCheck="false"
          />
          <span className="blinking-cursor">_</span>
        </div>
      </div>
    </div>
  );
}