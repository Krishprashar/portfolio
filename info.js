let info = {
  name: "Anshul Choudhary",
  logo_name: "radiant",
  flat_picture: require("./src/assets/pp.png"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "Cybersecurity enthusiast and CSE undergrad at Lovely Professional University, with a focus on malware analysis, OSINT, and security research. I enjoy solving complex problems and building hands-on CTF challenges that test real-world skills. I’m passionate about offensive security and constantly exploring ways to break, analyze, and secure systems. I’m also a tech enthusiast and love to learn about new technologies and their applications in the cybersecurity domain.",
  links: {
    linkedin: "https://www.linkedin.com/in/0xrad1ant/",
    twitter: "https://twitter.com/0xrad1ant",
    github: "https://github.com/0xrad1ant",
    resume:
      "https://github.com/0xrad1ant",
  },
  education: [
    {
      name: "Lovely Professional University",
      place: "Punjab, India",
      date: "2022 - Present",
      degree: "B.Tech in Computer Science and Engineering",
      gpa: "",
      description:
        "Pursuing Bachelor's in Computer Science with a strong interest in cybersecurity, system internals, and capture-the-flag competitions.",
      skills: [
        "Cybersecurity",
        "Malware Analysis",
        "Reverse Engineering",
        "Network Security",
        "Operating Systems"
      ]
    }
  ],

  experience: [
    {
      name: "Self-Hosted Malware Analysis Sandbox",
      place: "Remote",
      date: "Jan, 2025 – Present",
      position: "Cybersecurity Researcher",
      description:
        "Designed and deployed an isolated malware analysis environment using VirtualBox and Ghidra. Analyzed malicious binaries, reverse-engineered executables, and captured behavioral data using Wireshark and Procmon.",
      skills: ["Ghidra", "Wireshark", "Procmon", "VirtualBox", "Reverse Engineering"]
    },
    {
      name: "AWS Honeypot and CTF Server",
      place: "Amazon EC2",
      date: "Dec, 2024 – Present",
      position: "Security Engineer (Independent Project)",
      description:
        "Deployed a high-interaction honeypot using Cowrie on EC2. Integrated ELK stack and Filebeat for real-time log analysis. Hosting custom root-to-boot CTF challenges with focus on attacker behavior and logging.",
      skills: ["Cowrie", "Elasticsearch", "Kibana", "Logstash", "Linux Security", "Filebeat"]
    },
    {
      name: "Cloudflare Workers – OSINT API Project",
      place: "Remote",
      date: "Mar, 2025 – Present",
      position: "CTF Challenge Developer",
      description:
        "Built an OSINT-based API using Cloudflare Workers with advanced user-agent filtering and token-based authentication. Designed to simulate reconnaissance scenarios in CTF environments, enhancing participant research skills.",
      skills: ["Cloudflare Workers", "JavaScript", "API Security", "OSINT", "Access Control"]
    },
    {
      name: "API Vulnerability Research",
      place: "Remote",
      date: "Jan, 2024 – Mar, 2024",
      position: "Security Researcher",
      description:
        "Conducted vulnerability assessments on real-world APIs. Discovered and responsibly disclosed critical flaws including authentication bypass and insecure data exposure, contributing to security improvements.",
      skills: ["Burp Suite", "API Security", "Responsible Disclosure", "OWASP Top 10"]
    },
  ],
  

  skills: [
    {
      title: "languages",
      info: [
        "Python",
        "JavaScript",
        "TypeScript",
        "C",
        "C++",
        "Bash",
        "SQL",
        "Assembly"
      ],
      icon: "fa fa-code"
    },
    {
      title: "cybersecurity & tools",
      info: [
        "Wireshark",
        "Burp Suite",
        "Nmap",
        "Metasploit",
        "Ghidra",
        "IDA Pro",
        "Volatility",
        "Cowrie",
        "Dionaea"
      ],
      icon: "fas fa-shield-alt"
    },
    {
      title: "web & scripting",
      info: [
        "Node.js",
        "Express",
        "Flask",
        "HTML",
        "CSS",
        "Cloudflare Workers",
        "Wrangler"
      ],
      icon: "fas fa-laptop-code"
    },
    {
      title: "platforms & operating systems",
      info: [
        "Arch Linux (Hyprland)",
        "Ubuntu",
        "Windows",
        "Kali Linux",
        "VirtualBox",
        "VMware",
        "AWS EC2"
      ],
      icon: "fas fa-server"
    },
    {
      title: "monitoring & logging",
      info: [
        "Elasticsearch",
        "Logstash",
        "Kibana",
        "Filebeat",
        "Syslog",
        "Suricata"
      ],
      icon: "fas fa-eye"
    },
    {
      title: "reverse engineering & analysis",
      info: [
        "Static & Dynamic Malware Analysis",
        "Packet Capture Analysis",
        "Disassembly",
        "Memory Forensics",
        "Network Traffic Monitoring"
      ],
      icon: "fas fa-bug"
    },
    {
      title: "version control & ci/cd",
      info: [
        "Git",
        "GitHub Actions",
        "Docker",
        "GitLab CI/CD"
      ],
      icon: "fas fa-code-branch"
    },
    {
      title: "authentication & security protocols",
      info: [
        "OAuth2",
        "JWT",
        "TOTP",
        "HTTPS",
        "SSH",
        "TLS/SSL"
      ],
      icon: "fas fa-lock"
    },
    {
      title: "ctf & forensics tools",
      info: [
        "CyberChef",
        "Steghide",
        "binwalk",
        "strings",
        "ExifTool",
        "hashcat"
      ],
      icon: "fas fa-search"
    }
  ],
  

  portfolio: [
    {
      name: "Malware Analysis Sandbox",
      pictures: [
        {
          img: require("./src/assets/portfolio/malware.png")
        },
      ],
      technologies: ["VirtualBox", "Wireshark", "Ghidra", "Flare VM", "Reverse Engineering"],
      category: "Cybersecurity",
      date: "Feb, 2025 - Mar, 2025",
      // github: "https://github.com/0xRad1ant/malware-analysis-sandbox",
      visit: "https://0xrad1ant.hashnode.dev/malware-analysis-for-beginners-step-by-step",
      description:
        "A sandbox environment for safe static and dynamic malware analysis. This setup involves using VirtualBox VMs hardened with Flare VM, traffic analysis through Wireshark, and reverse engineering using Ghidra. It helps analyze malware behavior and identify Indicators of Compromise (IOCs) without exposing the host system."
    },
    {
      name: "Minimal EC2 Honeypot",
      pictures: [
        {
          img: require("./src/assets/portfolio/ec2.png")
        },
      ],
      technologies: ["AWS EC2", "Cowrie", "Kibana", "Filebeat", "Suricata"],
      category: "Cybersecurity",
      date: "Mar, 2025 - Present",
      // github: "https://github.com/0xRad1ant/ec2-honeypot",
      visit: "https://0xrad1ant.hashnode.dev/deploying-a-honeypot-on-aws",
      description:
        "A lightweight honeypot deployed on an EC2 instance to detect brute force and unauthorized access attempts. Integrated with ELK stack and Suricata for real-time alerting and forensic analysis. Logs are centralized using Filebeat and visualized with Kibana."
    },
    {
      name: "OSINT CTF Challenge",
      pictures: [
        {
          img: require("./src/assets/portfolio/ctf.png")
        },
      ],
      technologies: ["Wayback Machine", "Mastodon", "Cloudflare Workers", "OSINT"],
      category: "CTF",
      date: "Apr, 2025",
      // github: "https://github.com/0xRad1ant/osint-ctf",
      visit: "https://osint-api.rad1ant.workers.dev",
      description:
        "A custom CTF challenge that hides a flag behind multiple layers of OSINT techniques. Participants must extract usernames from archived data, trace posts on decentralized platforms, and bypass fake APIs secured with custom tokens and anti-bot logic."
    },
    {
      name: "Cloudflare Curl API",
      pictures: [
        {
          img: require("./src/assets/portfolio/curl.png")
        },
      ],
      technologies: ["Cloudflare Workers", "Anti-Bot Logic", "API Security", "Curl Detection"],
      category: "Cybersecurity",
      date: "Apr, 2025",
      // github: "https://github.com/0xRad1ant/cloudflare-fake-api",
      visit: "https://osint-api.rad1ant.workers.dev",
      description:
        "An API trap designed to only respond to requests from `curl` clients with specific tokens, while denying access to Linux user agents. This project explores deceptive OSINT barriers and anti-enumeration logic to enhance CTF challenges and security setups."
    },

  ],


};

export default info;
