import Image from "next/image";
import BackgroundWrapper from "../components/BackgroundWrapper";
import CursorGradient from "../components/CursorGradient";
import TypeWriter from "../components/TypeWriter";
import SkillsSection from "../components/SkillsSection";
import ProjectCard from "../components/ProjectCard";
import ContactForm from "../components/ContactForm";
import Navbar from "../components/Navbar";

export default function Home() {
  const typingTexts = [
    "Building scalable web applications",
    "Turning ideas into reality",
    "Crafting exceptional user experiences",
  ];

  const projects = [
    {
      title: "Telegram Bot",
      description:
        "I built a full-stack application consisting of a Telegram weather bot and a React.js admin panel. This project demonstrates my proficiency in both backend and frontend development using the MERN stack (MongoDB, Express.js, React.js, Node.js) with TypeScript.Integrated with a weather API ( OpenWeather )",
      imageUrl: "/images/telegrambot.png",
      technologies: [
        { name: "React.js", icon: "⚛️" },
        { name: "NestJS", icon: "🦉" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "Node.js", icon: "🟢" },
        { name: "TypeScript", icon: "📘" },
        { name: "Tailwind CSS", icon: "🎨" },
      ],
      liveUrl: "https://ecommerce-demo.com",
      githubUrl: "https://github.com/Nikhil-Sadhwani/TelegramBot_NestJS",
    },
    {
      title: "Shop Vibe",
      description:
        "ShopVibe is a full-fledged e-commerce website I built using the MySQL and PHP on the backend and React.js on the frontend. This project showcases my ability to develop a comprehensive e-commerce solution with functionalities like product search, category browsing, and a shopping cart implemented using Redux for state management. Facilitating user-specific roles including User, Seller, and Admin. Implemented different levels of permissions and access for each role.",
      imageUrl: "/images/shopvibe.png",
      technologies: [
        { name: "React.js", icon: "⚛️" },
        { name: "PHP", icon: "🐘" },
        { name: "HTML5/CSS3", icon: "🌐" },
        { name: "Bootstrap", icon: "🎨" },
        { name: "PostgreSQL", icon: "🐘" },
      ],
      liveUrl: "https://taskmanager-demo.com",
      githubUrl: "https://github.com/Nikhil-Sadhwani/ShopVibe",
    },
    {
      title: "Green Bus",
      description:
        "GreenBus is a web application prototype I designed to streamline city bus tracking and management. This project demonstrates my ability to build user-centric applications that address real-world problems. Led the back-end development and contributed to front-end design.",
      imageUrl: "/images/greenbus.png",
      technologies: [
        { name: "PHP", icon: "🐘" },
        { name: "HTML5/CSS3", icon: "🌐" },
        { name: "JavaScript", icon: "✨" },
        { name: "Bootstrap", icon: "🎨" },
        { name: "PostgreSQL", icon: "🐘" },
      ],
      liveUrl: "https://ai-generator-demo.com",
      githubUrl: "https://github.com/Nikhil-Sadhwani/GreenBus",
    },
    {
      title: "Cyber-Shield",
      description:
        "Cyber-Shield is a collaborative project I participated in during a hackathon. This website aims to empower users with knowledge about cybercrime and self-protection strategies. Developed the Hate Speech Detection (HSD) module to filter out content violating Internet policies. Implemented a user-centric Reporting section for cyber incidents.",
      imageUrl: "/images/cybershield.png",
      technologies: [
        { name: "React.js", icon: "⚛️" },
        { name: "Express.js", icon: "🚂" },
        { name: "Tailwind CSS", icon: "🎨" },
        { name: "Node.js", icon: "🟢" },
        { name: "MongoDB", icon: "🍃" },
      ],
      liveUrl: "https://analytics-demo.com",
      githubUrl: "https://github.com/Nikhil-Sadhwani/Cyber-Shield",
    },
    {
      title: "ToDoList",
      description:
        "This mobile application allows users to manage their daily tasks and schedules, enhancing productivity and reducing time wasted on task planning. I built this app using React Native for the user interface, Express.js for the backend API, and MongoDB for the database.",
      imageUrl: "/images/todolist.png",
      technologies: [
        { name: "React Native", icon: "📱" },
        { name: "Express.js", icon: "🚂" },
        { name: "Node.js", icon: "🟢" },
        { name: "MongoDB", icon: "🍃" },
      ],
      liveUrl: "https://analytics-demo.com",
      githubUrl: "https://github.com/Nikhil-Sadhwani/ToDoList",
    },
  ];

  return (
    <main className="min-h-screen relative">
      <BackgroundWrapper />
      <div className="relative z-10">
        <Navbar />
        <CursorGradient />

        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-32 pb-20" id="home">
          <div className="flex flex-col items-center text-center gap-8">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-lg shadow-blue-500/20">
              <Image
                src="/images/IMG_20240312_214820.jpg"
                alt="Profile picture"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                Software Engineer
              </h1>
              <div className="h-20 flex items-center justify-center">
                <p className="text-xl sm:text-2xl text-gray-300 font-light">
                  <TypeWriter texts={typingTexts} />
                </p>
              </div>
            </div>

            <p className="max-w-2xl text-gray-400 text-lg leading-relaxed">
              Passionate about creating innovative solutions and delivering
              high-quality software. Specialized in modern web technologies and
              best development practices.
            </p>

            <div className="flex gap-4 mt-8">
              <a
                href="#contact"
                className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-3 border border-blue-600 text-blue-400 rounded-full hover:bg-blue-600/10 transition-colors"
              >
                View Work
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="container mx-auto px-4 py-20" id="about">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              About Me
            </h2>

            <div className="space-y-12">
              {/* About Text */}
              <div className="max-w-3xl mx-auto space-y-6 text-gray-300 text-center">
                <p>
                  My name is Nikhil Sadhwani, and I graduated recently with a
                  BCA. I am currently pursuing an MCA. I&apos;m very eager to do some
                  full-stack development, mostly in MERN Stack technology, with
                  TypeScript and Tailwind CSS. I&apos;m conversant with quite a
                  number of languages, including Python, PHP, MySQL, Java, and
                  many others.
                </p>
                <p>
                  I have completed my 3-month internship as a full-stack
                  developer, where I worked on Nest.js at the back end and
                  React.js at the front end. With it, I also worked on
                  TypeScript and MUI components, which has extended my knowledge
                  of the development field.
                </p>
                <p>
                  I worked as a frontend engineer for 5 months at Taiyo.ai,
                  where I used Next.js with TypeScript and ElasticSearch for
                  database manipulation. This experience significantly enhanced
                  my understanding of modern web development practices.
                </p>
                <p>
                  I feel excited to learn and explore new things. With some
                  experience in both mobile application development and desktop
                  development, this has imbued me with new, more meaningfully
                  profound insight that I may now use to dive deep into the
                  field that I have chosen.
                </p>
                <p>
                  Driven by a passion for technology and a commitment to
                  excellence, I am eager to contribute my skills and dedication
                  to innovative projects.
                </p>
              </div>

              {/* Skills Grid */}
              <div>
                <h3 className="text-2xl font-semibold text-center mb-8 text-gray-200">
                  Technical Skills
                </h3>
                <SkillsSection />
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center gap-4">
                <a
                  href="https://drive.google.com/file/d/1enj4ZotqGEosA8qwcEYwF0O1OEZ0iyH7/view?usp=drive_link"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-700/50 hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <span>📄</span> View Resume
                </a>
                {/* <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-700/50 hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <span>📦</span> View Projects
                </a> */}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="container mx-auto px-4 py-20" id="projects">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Featured Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {projects.map((project) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  technologies={project.technologies}
                  liveUrl={project.liveUrl}
                  githubUrl={project.githubUrl}
                />
              ))}
            </div>

            {/* More Projects Button */}
            <div className="text-center mt-12">
              <a
                href="https://github.com/Nikhil-Sadhwani"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gray-700/50 hover:bg-gray-700 rounded-lg transition-colors"
              >
                <span>📦</span>
                View More Projects
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="container mx-auto px-4 py-20" id="contact">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Get In Touch
            </h2>

            <div className="grid md:grid-cols-[1fr,1.5fr] gap-12 mt-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-200 mb-4">
                    Let&apos;s Connect
                  </h3>
                  <p className="text-gray-400">
                    I&apos;m always interested in hearing about new projects and
                    opportunities. Whether you have a question or just want to
                    say hi, feel free to reach out!
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-800/50 flex items-center justify-center text-xl">
                      📧
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-400">
                        Email
                      </h4>
                      <a
                        href="mailto:nikhilsadhwani42@gmail.com"
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        nikhilsadhwani42@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-800/50 flex items-center justify-center text-xl">
                      🐙
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-400">
                        GitHub
                      </h4>
                      <a
                        href="https://github.com/Nikhil-Sadhwani"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        https://github.com/Nikhil-Sadhwani
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-800/50 flex items-center justify-center text-xl">
                      🔗
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-400">
                        LinkedIn
                      </h4>
                      <a
                        href="https://www.linkedin.com/in/nikhil-sadhwani-863872261/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        https://www.linkedin.com/in/nikhil-sadhwani-863872261/
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-800/50 flex items-center justify-center text-xl">
                      📍
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-400">
                        Location
                      </h4>
                      <p className="text-gray-300">
                        Nasirabad, Ajmer, Rajasthan, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-800/50 flex items-center justify-center text-xl">
                      💼
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-400">
                        Work Inquiries
                      </h4>
                      <p className="text-gray-300">
                        Open for freelance projects, Full-time , Part-time and
                        Contract based projects
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                {/* <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-200">
                    Follow Me
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center hover:bg-gray-700 transition-colors"
                    >
                      <span className="text-xl">📦</span>
                    </a>
                    <a
                      href="https://linkedin.com/in/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center hover:bg-gray-700 transition-colors"
                    >
                      <span className="text-xl">💼</span>
                    </a>
                    <a
                      href="https://twitter.com/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center hover:bg-gray-700 transition-colors"
                    >
                      <span className="text-xl">🐦</span>
                    </a>
                  </div>
                </div> */}
              </div>

              {/* Contact Form */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-gray-700/50">
                <h3 className="text-xl font-semibold text-gray-200 mb-6">
                  Send Me a Message
                </h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
