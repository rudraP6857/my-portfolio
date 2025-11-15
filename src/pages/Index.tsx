import { useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Mail, Phone, MapPin, Linkedin, Github, 
  GraduationCap, Briefcase, Code, Award, Users, 
  Globe, Target, TrendingUp, ChevronDown, Menu, X 
} from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Index = () => {
  const [activeSection, setActiveSection] = useState("cover");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sections = [
    { id: "cover", label: "Cover" },
    { id: "contents", label: "Contents" },
    { id: "introduction", label: "Introduction" },
    { id: "resume", label: "Resume" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "leadership", label: "Leadership" },
    { id: "global", label: "Global Awareness" },
    { id: "future", label: "Future Goals" },
    { id: "conclusion", label: "Conclusion" },
    { id: "testimonials", label: "Testimonials" },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h2 className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            Rudra Patel
          </h2>
          
          <div className="hidden md:flex items-center gap-6">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`text-sm transition-colors ${
                  activeSection === section.id
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {section.label}
              </button>
            ))}
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`text-left px-4 py-2 rounded-lg transition-colors ${
                    activeSection === section.id
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Cover Page */}
      <section id="cover" className="min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-gradient-hero blur-3xl opacity-30 rounded-full" />
            <img
              src={profilePhoto}
              alt="Patel Rudra"
              className="relative w-48 h-48 rounded-full object-cover border-4 border-primary shadow-glow"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Patel Rudra
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-6">
            BTech Computer Engineering | 3rd Year
          </p>
          
          <p className="text-lg text-muted-foreground mb-4">
            Pandit Deendayal Energy University
          </p>
          
          <p className="text-md text-primary font-medium mb-8">
            "Innovating at the intersection of code, creativity, and problem-solving"
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="mailto:23bcp401@sot.pdpu.ac.in">
              <Button variant="outline" className="gap-2">
                <Mail className="h-4 w-4" />
                Email
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/rudra-patel-b0a83a293/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Button>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2">
                <Github className="h-4 w-4" />
                GitHub
              </Button>
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            Submitted: November 2025
          </p>

          <button
            onClick={() => scrollToSection("contents")}
            className="mt-12 animate-bounce"
          >
            <ChevronDown className="h-8 w-8 text-primary" />
          </button>
        </div>
      </section>

      {/* Table of Contents */}
      <section id="contents" className="min-h-screen flex items-center justify-center py-20 px-4">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Table of <span className="bg-gradient-hero bg-clip-text text-transparent">Contents</span>
          </h2>
          
          <Card className="p-8">
            <div className="grid gap-4">
              {sections.slice(2).map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="flex items-center justify-between p-4 rounded-lg hover:bg-muted transition-colors text-left group"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-bold text-primary">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <span className="text-lg font-medium group-hover:text-primary transition-colors">
                      {section.label}
                    </span>
                  </div>
                  <ChevronDown className="h-5 w-5 -rotate-90 text-muted-foreground group-hover:text-primary transition-colors" />
                </button>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Introduction and Learning Philosophy */}
      <section id="introduction" className="min-h-screen flex items-center justify-center py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Introduction & <span className="bg-gradient-hero bg-clip-text text-transparent">Learning Philosophy</span>
          </h2>
          
          <Card className="p-8">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                My academic journey in Computer Engineering at Pandit Deendayal Energy University has been driven by an insatiable curiosity for how technology can solve real-world problems. With a CGPA of 9.93, I've maintained academic excellence while actively engaging in projects that bridge theory and practice.
              </p>
              
              <p className="text-lg leading-relaxed">
                I believe in <span className="font-semibold text-primary">learning by doing</span>. My philosophy centers on three core principles: continuous exploration, collaborative innovation, and ethical application of technology. Rather than passively consuming information, I actively seek opportunities to apply concepts through hands-on projects and internships.
              </p>
              
              <p className="text-lg leading-relaxed">
                My approach to learning is <span className="font-semibold text-primary">interdisciplinary</span>. I understand that modern challenges require solutions that draw from multiple fields—combining software engineering with data science, user experience design with algorithmic thinking, and technical skills with soft skills like communication and teamwork.
              </p>
              
              <div className="mt-8 p-6 bg-gradient-hero rounded-lg text-primary-foreground">
                <h3 className="text-xl font-bold mb-3">Core Values</h3>
                <ul className="space-y-2">
                  <li>✦ Innovation through continuous learning</li>
                  <li>✦ Collaboration and knowledge sharing</li>
                  <li>✦ Ethical and responsible technology development</li>
                  <li>✦ Practical application of theoretical knowledge</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Resume/CV */}
      <section id="resume" className="min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Resume / <span className="bg-gradient-hero bg-clip-text text-transparent">CV</span>
          </h2>

          <div className="grid gap-8">
            {/* Contact Info */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Mail className="h-6 w-6 text-primary" />
                Contact Information
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <span>23bcp401@sot.pdpu.ac.in</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <span>+91 7573092630</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <span>Ahmedabad, Gujarat, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-muted-foreground" />
                  <a href="https://www.linkedin.com/in/rudra-patel-b0a83a293/" className="text-primary hover:underline">
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </Card>

            {/* Education */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-primary" />
                Education
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-xl font-semibold">BTech in Computer Engineering</h4>
                      <p className="text-muted-foreground">Pandit Deendayal Energy University</p>
                    </div>
                    <Badge variant="secondary" className="text-lg font-bold">
                      CGPA: 9.93
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">2022 - 2026 (Expected) | 3rd Year, 5th Semester</p>
                  <p className="mt-3">Specializing in Software Development, Data Structures & Algorithms, Database Management Systems, and Web Technologies.</p>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="text-lg font-semibold">Higher Secondary (12th)</h4>
                  <p className="text-muted-foreground">Gujarat State Board</p>
                  <p className="text-sm text-muted-foreground mt-1">Science Stream with Mathematics</p>
                </div>
              </div>
            </Card>

            {/* Work Experience */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Briefcase className="h-6 w-6 text-primary" />
                Work Experience
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-xl font-semibold">Software Development Intern</h4>
                      <p className="text-muted-foreground">Ajay Infotech</p>
                    </div>
                    <Badge>3 Months</Badge>
                  </div>
                  <ul className="mt-3 space-y-2 list-disc list-inside text-muted-foreground">
                    <li>Developed responsive web applications using React and TypeScript</li>
                    <li>Collaborated with cross-functional teams to deliver client projects</li>
                    <li>Implemented RESTful APIs and integrated third-party services</li>
                    <li>Participated in code reviews and agile development practices</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Areas of Interest & Specialization */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Target className="h-6 w-6 text-primary" />
                Areas of Interest & Specialization
              </h3>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="text-base py-2 px-4">Full-Stack Development</Badge>
                <Badge variant="secondary" className="text-base py-2 px-4">Machine Learning</Badge>
                <Badge variant="secondary" className="text-base py-2 px-4">Cloud Computing</Badge>
                <Badge variant="secondary" className="text-base py-2 px-4">Data Structures & Algorithms</Badge>
                <Badge variant="secondary" className="text-base py-2 px-4">Database Management</Badge>
                <Badge variant="secondary" className="text-base py-2 px-4">DevOps</Badge>
              </div>
            </Card>

            {/* Certifications */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Award className="h-6 w-6 text-primary" />
                Certifications & Professional Development
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">AWS Cloud Practitioner Essentials</h4>
                    <p className="text-sm text-muted-foreground">Amazon Web Services</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Python for Data Science</h4>
                    <p className="text-sm text-muted-foreground">Coursera</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Full-Stack Web Development</h4>
                    <p className="text-sm text-muted-foreground">Udemy</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Awards & Honors */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Award className="h-6 w-6 text-primary" />
                Awards & Honors
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <span>Dean's List - Consistently ranked in top 5% of the class</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <span>Smart India Hackathon 2024 - Finalist</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <span>University Coding Competition - 2nd Place</span>
                </li>
              </ul>
            </Card>

            {/* Co-curricular & Hobbies */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Users className="h-6 w-6 text-primary" />
                Co-Curricular Activities & Hobbies
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Co-Curricular Activities</h4>
                  <ul className="space-y-2">
                    <li>• Tech Club - Core Member</li>
                    <li>• Coding Club - Active Participant</li>
                    <li>• Hackathon Organizer</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Hobbies & Interests</h4>
                  <ul className="space-y-2">
                    <li>• Open-source contribution</li>
                    <li>• Technical blogging</li>
                    <li>• Chess and problem-solving games</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="min-h-screen py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Interdisciplinary <span className="bg-gradient-hero bg-clip-text text-transparent">Projects & Research</span>
          </h2>

          <div className="grid gap-8">
            {/* Project 1 */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Code className="h-6 w-6 text-primary" />
                Smart Campus Management System
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Overview & Objectives</h4>
                  <p className="text-muted-foreground">
                    Developed an integrated platform to digitize and streamline campus operations including attendance tracking, resource booking, and student services. The system aimed to reduce administrative overhead by 40% and improve student engagement.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">Methodologies</h4>
                  <p className="text-muted-foreground">
                    Utilized Agile development methodology with React for frontend, Node.js/Express for backend, and MongoDB for database. Implemented QR code-based attendance, real-time notifications using WebSockets, and RESTful API architecture.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">Outcomes & Innovations</h4>
                  <p className="text-muted-foreground">
                    Successfully deployed to 500+ users with 95% adoption rate. Reduced manual attendance time by 80%. Integrated AI-powered analytics for predictive insights on student performance and resource utilization.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">Challenges & Solutions</h4>
                  <p className="text-muted-foreground">
                    Faced scalability issues with concurrent users. Implemented load balancing, caching strategies (Redis), and database indexing to handle 1000+ simultaneous connections. Security concerns addressed through JWT authentication and role-based access control.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge>React</Badge>
                  <Badge>Node.js</Badge>
                  <Badge>MongoDB</Badge>
                  <Badge>WebSockets</Badge>
                  <Badge>Redis</Badge>
                </div>
              </div>
            </Card>

            {/* Project 2 */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Code className="h-6 w-6 text-primary" />
                ML-Powered Energy Consumption Predictor
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Overview & Objectives</h4>
                  <p className="text-muted-foreground">
                    Designed a machine learning model to predict and optimize energy consumption patterns for residential and commercial buildings, aiming to reduce energy waste by 25% and provide actionable insights for sustainability.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">Methodologies</h4>
                  <p className="text-muted-foreground">
                    Employed Python with scikit-learn and TensorFlow for model development. Used LSTM networks for time-series prediction, collected data from IoT sensors, and performed feature engineering on historical consumption patterns.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">Outcomes & Innovations</h4>
                  <p className="text-muted-foreground">
                    Achieved 92% prediction accuracy with RMSE of 0.08. Created interactive dashboard using Plotly for real-time monitoring. Model deployed on edge devices for low-latency predictions.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">Challenges & Solutions</h4>
                  <p className="text-muted-foreground">
                    Data quality issues with missing sensor readings resolved through interpolation techniques. Model overfitting addressed via regularization and dropout layers. Integration challenges solved through containerization with Docker.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge>Python</Badge>
                  <Badge>TensorFlow</Badge>
                  <Badge>LSTM</Badge>
                  <Badge>IoT</Badge>
                  <Badge>Docker</Badge>
                </div>
              </div>
            </Card>

            {/* Project 3 */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Code className="h-6 w-6 text-primary" />
                Collaborative Code Review Platform
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Overview & Objectives</h4>
                  <p className="text-muted-foreground">
                    Built a peer-to-peer platform for students to share, review, and improve code collaboratively. Objective was to enhance learning through constructive feedback and promote best coding practices.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">Methodologies</h4>
                  <p className="text-muted-foreground">
                    Developed using React, TypeScript, and Firebase for real-time collaboration. Integrated Monaco Editor for syntax highlighting, implemented version control features, and utilized WebRTC for peer-to-peer communication.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">Outcomes & Innovations</h4>
                  <p className="text-muted-foreground">
                    Platform adopted by 200+ students within first semester. Average code quality improved by 35% based on instructor evaluations. Featured automated linting and suggestions powered by static analysis tools.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">Challenges & Solutions</h4>
                  <p className="text-muted-foreground">
                    Real-time synchronization conflicts resolved using operational transformation algorithms. Privacy concerns addressed through end-to-end encryption. Scalability improved through serverless architecture on AWS Lambda.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge>React</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>Firebase</Badge>
                  <Badge>WebRTC</Badge>
                  <Badge>AWS Lambda</Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Advanced <span className="bg-gradient-hero bg-clip-text text-transparent">Skills & Mastery</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Code className="h-6 w-6 text-primary" />
                Technical Proficiencies
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Programming Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">JavaScript/TypeScript</Badge>
                    <Badge variant="secondary">Java</Badge>
                    <Badge variant="secondary">C++</Badge>
                    <Badge variant="secondary">SQL</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">
                    Proficient in multiple paradigms including OOP, functional programming, and asynchronous programming. Strong algorithmic problem-solving with 500+ LeetCode problems solved.
                  </p>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold mb-3">Web Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">Express</Badge>
                    <Badge variant="secondary">Next.js</Badge>
                    <Badge variant="secondary">Tailwind CSS</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">
                    Expert in building responsive, accessible, and performant web applications. Deep understanding of web performance optimization, SEO, and modern frontend architectures.
                  </p>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold mb-3">Data & ML</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">TensorFlow</Badge>
                    <Badge variant="secondary">PyTorch</Badge>
                    <Badge variant="secondary">Pandas</Badge>
                    <Badge variant="secondary">NumPy</Badge>
                    <Badge variant="secondary">Scikit-learn</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">
                    Experience in building ML models for classification, regression, and time-series analysis. Skilled in data preprocessing, feature engineering, and model optimization.
                  </p>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold mb-3">Tools & Platforms</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Git/GitHub</Badge>
                    <Badge variant="secondary">Docker</Badge>
                    <Badge variant="secondary">AWS</Badge>
                    <Badge variant="secondary">MongoDB</Badge>
                    <Badge variant="secondary">PostgreSQL</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">
                    Experienced in DevOps practices, CI/CD pipelines, cloud deployment, and database design. Comfortable with both SQL and NoSQL databases.
                  </p>
                </div>
              </div>
            </Card>

            {/* Soft Skills */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Users className="h-6 w-6 text-primary" />
                Soft Skills & Creative Competencies
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Leadership & Management</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Led teams of 5-10 members in multiple hackathons and projects</li>
                    <li>• Effective delegation and task prioritization</li>
                    <li>• Mentored junior students in coding and project development</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-3 italic">
                    Demonstrated through successful project completions with 95% team satisfaction ratings.
                  </p>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold mb-3">Communication & Collaboration</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Excellent written and verbal communication skills</li>
                    <li>• Experience presenting technical concepts to non-technical audiences</li>
                    <li>• Active listener with strong conflict resolution abilities</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-3 italic">
                    Evidenced by successful client presentations and positive peer feedback.
                  </p>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold mb-3">Design Thinking & Innovation</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• User-centered design approach in all projects</li>
                    <li>• Creative problem-solving with emphasis on innovation</li>
                    <li>• Rapid prototyping and iterative development</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-3 italic">
                    Applied in UX/UI design for multiple applications with positive user feedback.
                  </p>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold mb-3">Critical Thinking & Analysis</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Strong analytical and logical reasoning abilities</li>
                    <li>• Data-driven decision making</li>
                    <li>• Systematic approach to debugging and optimization</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-3 italic">
                    Consistently ranked in top 10% for problem-solving assessments.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="min-h-screen py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Collaborative & <span className="bg-gradient-hero bg-clip-text text-transparent">Leadership Experiences</span>
          </h2>

          <div className="grid gap-8">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4">Tech Club - Core Committee Member</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Roles & Responsibilities</h4>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Led initiative to organize monthly coding workshops for 100+ students</li>
                    <li>Coordinated with faculty and external speakers for technical seminars</li>
                    <li>Managed social media presence and event promotions</li>
                    <li>Mentored 20+ juniors in competitive programming</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">Team Dynamics & Conflict Resolution</h4>
                  <p className="text-muted-foreground">
                    Worked with diverse team of 8 members with varying skill levels and schedules. Successfully mediated conflicts by implementing transparent communication channels (Slack/Discord) and regular sync meetings. Resolved resource allocation disputes through fair voting mechanisms and priority matrices.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">Achievements & Contributions</h4>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Increased club membership by 40% within one semester</li>
                    <li>Successfully organized university-level hackathon with 200+ participants</li>
                    <li>Established partnerships with 3 tech companies for sponsorships</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4">Smart India Hackathon - Team Lead</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Roles & Responsibilities</h4>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Formed and led cross-functional team of 6 members (developers, designers, domain experts)</li>
                    <li>Coordinated 36-hour development sprint with clear milestones</li>
                    <li>Managed task distribution based on individual strengths</li>
                    <li>Presented final solution to judges and government officials</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">Team Dynamics & Conflict Resolution</h4>
                  <p className="text-muted-foreground">
                    Navigated high-pressure environment with tight deadlines. Addressed technical disagreements through quick prototyping and A/B testing rather than prolonged debates. Maintained team morale through regular breaks, positive reinforcement, and inclusive decision-making.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">Achievements & Contributions</h4>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Reached national finals among 10,000+ participating teams</li>
                    <li>Developed working prototype of AI-powered grievance redressal system</li>
                    <li>Received appreciation from ministry officials for innovative approach</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Global Awareness */}
      <section id="global" className="min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Global Awareness & <span className="bg-gradient-hero bg-clip-text text-transparent">Ethical Considerations</span>
          </h2>

          <div className="grid gap-8">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Globe className="h-6 w-6 text-primary" />
                Impact of Digital Divide on Education
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Case Study</h4>
                  <p className="text-muted-foreground">
                    During the COVID-19 pandemic, I observed firsthand how lack of digital infrastructure affected students in rural areas near Gujarat. While developing the Smart Campus system, I had to consider that not all users would have high-speed internet or modern devices.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">Ethical Implications</h4>
                  <p className="text-muted-foreground">
                    This raised questions about digital equity and accessibility. Should technology development prioritize cutting-edge features or ensure basic functionality for all? How do we balance innovation with inclusivity? These considerations led me to implement progressive web app features, offline functionality, and low-bandwidth modes in my projects.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">Personal Reflections</h4>
                  <p className="text-muted-foreground">
                    I realized that as developers, we have a responsibility to build technology that bridges gaps rather than widens them. This experience shaped my commitment to creating accessible, inclusive solutions and advocating for policies that support digital infrastructure development in underserved areas.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Globe className="h-6 w-6 text-primary" />
                Data Privacy & AI Ethics
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Scenario</h4>
                  <p className="text-muted-foreground">
                    While working on the ML-powered energy predictor, I had access to detailed consumption patterns that could reveal sensitive information about user behavior—when they're home, their routines, and lifestyle patterns.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">Analysis of Ethical Implications</h4>
                  <p className="text-muted-foreground">
                    This presented ethical dilemmas around data collection, storage, and usage. Questions arose: How much data is necessary? Who owns this data? What are the risks of data breaches? How do we prevent misuse of predictive models? I researched GDPR principles and implemented privacy-by-design approaches.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">Personal Reflections</h4>
                  <p className="text-muted-foreground">
                    I learned that ethical considerations must be integrated from the design phase, not as an afterthought. I implemented data minimization, anonymization techniques, and transparent user consent mechanisms. This experience reinforced my belief that technological capability should always be tempered with ethical responsibility.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section id="future" className="min-h-screen py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Future Aspirations & <span className="bg-gradient-hero bg-clip-text text-transparent">Professional Development</span>
          </h2>

          <div className="grid gap-8">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Target className="h-6 w-6 text-primary" />
                Career Goals (2-5 Years)
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Software Engineer at Leading Tech Company</h4>
                    <p className="text-muted-foreground">
                      Secure position at FAANG or high-growth startup focusing on distributed systems, cloud architecture, or AI/ML applications. Goal: Contribute to products used by millions globally.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Master's Degree in Computer Science</h4>
                    <p className="text-muted-foreground">
                      Pursue MS from top-tier university (US/Europe) specializing in Machine Learning, Distributed Systems, or HCI. Target universities: Stanford, MIT, CMU, ETH Zurich.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Open Source Contribution & Community Building</h4>
                    <p className="text-muted-foreground">
                      Become active contributor to major open-source projects. Aim to maintain at least one popular library/framework with 1000+ stars.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <TrendingUp className="h-6 w-6 text-primary" />
                Areas for Further Study
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Technical Deep Dives</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Advanced Distributed Systems & Microservices</li>
                    <li>• Deep Learning & Neural Architecture Search</li>
                    <li>• Cloud-Native Development & Kubernetes</li>
                    <li>• System Design at Scale</li>
                    <li>• Blockchain & Web3 Technologies</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Interdisciplinary Skills</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Product Management & Strategy</li>
                    <li>• User Experience Research</li>
                    <li>• Technical Writing & Documentation</li>
                    <li>• Entrepreneurship & Startup Ecosystem</li>
                    <li>• Technology Ethics & Policy</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <TrendingUp className="h-6 w-6 text-primary" />
                Strategies for Continuous Improvement
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Daily Learning Habits</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Solve 2-3 coding problems daily (LeetCode/CodeForces)</li>
                    <li>• Read technical papers and articles (30 min/day)</li>
                    <li>• Contribute to open source (minimum 1 PR/week)</li>
                    <li>• Write technical blog posts (bi-weekly)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Skill Development Plan</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Complete one major online course per semester</li>
                    <li>• Attend at least 2 tech conferences/year</li>
                    <li>• Build one substantial side project per quarter</li>
                    <li>• Participate in hackathons and coding competitions</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Network & Mentorship</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Connect with industry professionals on LinkedIn</li>
                    <li>• Seek mentorship from senior engineers</li>
                    <li>• Join tech communities and forums</li>
                    <li>• Present at local meetups and conferences</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section id="conclusion" className="min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Conclusion & <span className="bg-gradient-hero bg-clip-text text-transparent">Self-Assessment</span>
          </h2>

          <div className="grid gap-8">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Key Achievements & Lessons Learned</h3>
              
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  Throughout my academic journey at PDPU, I've achieved significant milestones: maintaining a <span className="font-bold text-primary">CGPA of 9.93</span>, successfully completing an industry internship, developing three major interdisciplinary projects, and actively contributing to the campus tech community. These achievements reflect not just technical competence but also dedication, perseverance, and a growth mindset.
                </p>

                <p className="text-lg leading-relaxed">
                  The most valuable lesson I've learned is that <span className="font-semibold text-primary">failure is an essential part of growth</span>. Early project failures taught me the importance of thorough planning, testing, and user feedback. Working in teams taught me that diverse perspectives strengthen solutions, and that effective communication is as crucial as technical skills.
                </p>

                <p className="text-lg leading-relaxed">
                  I've learned to approach problems systematically, breaking them into manageable components. I've discovered the power of interdisciplinary thinking—how insights from UX design can improve algorithm implementation, or how understanding business needs shapes technical architecture decisions.
                </p>
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Self-Evaluation Against Initial Goals</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">✅</div>
                  <div>
                    <h4 className="font-semibold">Academic Excellence</h4>
                    <p className="text-muted-foreground">Goal: Top 5% of class. Achievement: Exceeded expectations with 9.93 CGPA and Dean's List recognition.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-2xl">✅</div>
                  <div>
                    <h4 className="font-semibold">Practical Experience</h4>
                    <p className="text-muted-foreground">Goal: Complete internship and build real-world projects. Achievement: 3-month internship at Ajay Infotech + multiple deployed projects.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-2xl">✅</div>
                  <div>
                    <h4 className="font-semibold">Leadership & Community Involvement</h4>
                    <p className="text-muted-foreground">Goal: Contribute to campus tech culture. Achievement: Core member of Tech Club, hackathon finalist, mentored 20+ juniors.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-2xl">⚠️</div>
                  <div>
                    <h4 className="font-semibold">Research Publications</h4>
                    <p className="text-muted-foreground">Goal: Publish research paper. Status: In progress—working on ML research with faculty guidance. Target: Submit by end of semester.</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">SWOT Analysis</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-hero rounded-lg text-primary-foreground">
                  <h4 className="text-xl font-bold mb-4">Strengths</h4>
                  <ul className="space-y-2">
                    <li>• Strong technical foundation across multiple domains</li>
                    <li>• Quick learner with proven adaptability</li>
                    <li>• Excellent academic track record</li>
                    <li>• Leadership experience and teamwork skills</li>
                    <li>• Problem-solving and analytical thinking</li>
                  </ul>
                </div>

                <div className="p-6 bg-muted rounded-lg">
                  <h4 className="text-xl font-bold mb-4">Weaknesses</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Limited industry experience (only one internship)</li>
                    <li>• Need to improve system design knowledge</li>
                    <li>• Sometimes overly ambitious with project scope</li>
                    <li>• Public speaking could be more polished</li>
                    <li>• Time management during high-pressure situations</li>
                  </ul>
                </div>

                <div className="p-6 bg-muted rounded-lg">
                  <h4 className="text-xl font-bold mb-4">Opportunities</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Growing demand for full-stack developers</li>
                    <li>• Emerging AI/ML opportunities in Gujarat</li>
                    <li>• Open-source contribution potential</li>
                    <li>• Research collaboration with faculty</li>
                    <li>• Startup ecosystem in Ahmedabad</li>
                  </ul>
                </div>

                <div className="p-6 bg-muted rounded-lg">
                  <h4 className="text-xl font-bold mb-4">Threats</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Rapidly evolving technology landscape</li>
                    <li>• Intense competition for top positions</li>
                    <li>• Economic uncertainties affecting hiring</li>
                    <li>• Risk of skill obsolescence without continuous learning</li>
                    <li>• Balancing academics with extracurriculars</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Areas for Growth</h3>
              
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  While I'm proud of my accomplishments, I recognize several areas requiring focused improvement:
                </p>

                <div className="space-y-3 ml-4">
                  <div>
                    <h4 className="font-semibold text-primary">1. Depth in System Design</h4>
                    <p className="text-muted-foreground">Need to strengthen understanding of designing large-scale distributed systems, load balancing, and database sharding.</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary">2. Industry Exposure</h4>
                    <p className="text-muted-foreground">Seek more internship opportunities and real-world project experience to bridge the gap between academic learning and industry practices.</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary">3. Soft Skills Enhancement</h4>
                    <p className="text-muted-foreground">Improve public speaking, presentation skills, and professional networking abilities through workshops and practice.</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary">4. Research Methodology</h4>
                    <p className="text-muted-foreground">Develop stronger research skills including literature review, hypothesis testing, and academic writing for potential publications.</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="min-h-screen py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-gradient-hero bg-clip-text text-transparent">Testimonials</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground font-bold text-xl">
                  DR
                </div>
                <div>
                  <h4 className="font-bold">Dr. Amit Shah</h4>
                  <p className="text-sm text-muted-foreground">Professor, Computer Engineering Department</p>
                  <p className="text-xs text-muted-foreground">Pandit Deendayal Energy University</p>
                </div>
              </div>
              <p className="text-muted-foreground italic leading-relaxed">
                "Rudra is an exceptional student who consistently demonstrates deep understanding of complex concepts. His Smart Campus Management project showcased remarkable integration of multiple technologies and practical problem-solving abilities. His ability to work independently while also being a strong team player makes him stand out. I have no doubt he will excel in his future endeavors."
              </p>
            </Card>

            <Card className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground font-bold text-xl">
                  VM
                </div>
                <div>
                  <h4 className="font-bold">Vikram Mehta</h4>
                  <p className="text-sm text-muted-foreground">Senior Software Engineer</p>
                  <p className="text-xs text-muted-foreground">Ajay Infotech (Internship Supervisor)</p>
                </div>
              </div>
              <p className="text-muted-foreground italic leading-relaxed">
                "During his internship with us, Rudra proved to be a quick learner and dedicated developer. He picked up our tech stack within days and contributed meaningful code to production. His attention to detail, willingness to accept feedback, and proactive communication made him a valuable team member. He has strong potential for a successful career in software development."
              </p>
            </Card>

            <Card className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground font-bold text-xl">
                  NK
                </div>
                <div>
                  <h4 className="font-bold">Nisha Kapoor</h4>
                  <p className="text-sm text-muted-foreground">Tech Club President</p>
                  <p className="text-xs text-muted-foreground">Pandit Deendayal Energy University</p>
                </div>
              </div>
              <p className="text-muted-foreground italic leading-relaxed">
                "Working with Rudra in the Tech Club has been inspiring. He brings both technical excellence and genuine enthusiasm for helping others learn. His mentorship has helped many juniors overcome coding challenges and build confidence. He's not just technically skilled but also empathetic and patient—qualities that make him an excellent leader."
              </p>
            </Card>

            <Card className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground font-bold text-xl">
                  AP
                </div>
                <div>
                  <h4 className="font-bold">Arjun Patel</h4>
                  <p className="text-sm text-muted-foreground">Hackathon Teammate</p>
                  <p className="text-xs text-muted-foreground">Smart India Hackathon 2024</p>
                </div>
              </div>
              <p className="text-muted-foreground italic leading-relaxed">
                "Rudra was our team lead at SIH and his leadership was instrumental in reaching the finals. He kept us focused during the intense 36-hour sprint, managed conflicts calmly, and ensured everyone's ideas were heard. His technical skills combined with his ability to motivate the team under pressure made all the difference. He's the kind of person you want on your team during challenges."
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg font-semibold mb-4">Thank you for reviewing my portfolio</p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="mailto:23bcp401@sot.pdpu.ac.in" className="text-primary hover:underline">
              Email
            </a>
            <a href="https://www.linkedin.com/in/rudra-patel-b0a83a293/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              LinkedIn
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              GitHub
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2025 Patel Rudra. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
