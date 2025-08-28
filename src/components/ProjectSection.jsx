import { ArrowRight, ExternalLink, Github, Section } from "lucide-react";
import React from "react";

const projects = [
  {
    id: 1,
    title: "Guess The Number",
    description:
      "A fun guessing game where you try to guess a randomly generated number.",
    image: "/projects/project-1.png",
    githubUrl: "https://github.com/Ravneet2711/01-guess-the-number",
    demoUrl: "https://guess-it-win-it.netlify.app/",
    tags: ["JavaScript", "DOM", "Game Logic"],
  },
  {
    id: 2,
    title: "Pig Game",
    description:
      "A dice-based multiplayer game. First to reach 100 points wins!",
    image: "/projects/project-2.png",
    githubUrl: "https://github.com/Ravneet2711/02-pig-game",
    demoUrl: "https://epig-game.netlify.app/",
    tags: ["JavaScript", "DOM", "Game Logic"],
  },
  {
    id: 3,
    title: "Bank User Login",
    description: "A banking UI with login feature and transaction tracking.",
    image: "/projects/project-3.png",
    githubUrl: "https://github.com/Ravneet2711/03-bankist-user-login",
    demoUrl: "https://bank-user.netlify.app/",
    tags: ["JavaScript", "DOM", "UI/UX"],
  },
  {
    id: 4,
    title: "Bankist Website",
    description:
      "A modern banking landing page with scroll animations and tabbed features.",
    image: "/projects/project-4.png",
    githubUrl: "https://github.com/Ravneet2711/04-bankist-website",
    demoUrl: "https://best-bankist-app.netlify.app/",
    tags: ["JavaScript", "Scroll", "UI Animations"],
  },
  {
    id: 5,
    title: "Mapish",
    description: "Track your running or cycling workouts on a map.",
    image: "/projects/project-5.png",
    githubUrl: "https://github.com/Ravneet2711/05-mapish",
    demoUrl: "https://squirrel-map.netlify.app/",
    tags: ["JavaScript", "Geolocation", "LeafletJS"],
  },
  {
    id: 6,
    title: "Forkifite",
    description: "A recipe search app powered by Forkify API.",
    image: "/projects/project-6.png",
    githubUrl: "https://github.com/Ravneet2711/06-forkify",
    demoUrl: "https://forkizza.netlify.app/",
    tags: ["JavaScript", "API", "MVC"],
  },
  {
    id: 7,
    title: "Photowall",
    description: "A mini React-Redux photo gallery app.",
    image: "/projects/project-7.png",
    githubUrl: "https://github.com/Ravneet2711/07-photowall",
    demoUrl: "https://photo-walled.netlify.app/",
    tags: ["React", "Redux", "Photo Gallery"],
  },
  {
    id: 8,
    title: "Expense Tracker",
    description: "Track your expenses and visualize spending habits.",
    image: "/projects/project-8.png",
    githubUrl: "https://github.com/Ravneet2711/08-expense-tracker",
    demoUrl: "https://x-pense-tracker.netlify.app/",
    tags: ["React", "Context API", "Finance"],
  },
  {
    id: 9,
    title: "Food Order App",
    description: "React-based food ordering system with cart functionality.",
    image: "/projects/project-9.png",
    githubUrl: "https://github.com/Ravneet2711/09-food-order-app",
    demoUrl: "https://you-order-food.netlify.app/",
    tags: ["React", "Cart Logic", "Hooks"],
  },
  {
    id: 10,
    title: "Up-Quote-Load",
    description: "App to create and load inspirational quotes.",
    image: "/projects/project-10.png",
    githubUrl: "https://github.com/Ravneet2711/10-up-quote-load",
    demoUrl: "https://upload-quotes.netlify.app/quotes",
    tags: ["React", "Router", "API"],
  },
  {
    id: 11,
    title: "Netflix Clone",
    description: "Netflix-style movie browsing with previews.",
    image: "/projects/project-11.png",
    githubUrl: "https://github.com/Ravneet2711/Netflix-clone",
    demoUrl: "https://movie-flix-clone.vercel.app/",
    tags: ["React", "TailwindCSS", "TMDB API"],
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="min-h-screen py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project has been carefully
          crafted with attention to detail, performance, and user experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground ">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2 "
            target="_blank"
            href="https://github.com/Ravneet2711"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
