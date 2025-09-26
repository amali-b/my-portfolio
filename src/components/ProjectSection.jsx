import { ArrowRight, ExternalLink, GithubIcon } from "lucide-react";

// define array for projects
const projects = [
  {
    id: 1,
    title: "IRM System",
    description:
      "Designed and developed a comprehensive restaurant management system to streamline daily operations and support data-driven decision-making",
    image: "/projects/Project1.jpg",
    tags: [
      "Java",
      "HTML/CSS",
      "JavaScript",
      "SpringBoot",
      "Bootstrap",
      "MySQL",
    ],
    demoUrl: "",
    githubUrl:
      "https://github.com/amali-b/Integrated-Restaurant-Management.git",
  },
  {
    id: 2,
    title: "Personal Portfolio",
    description:
      "Create a interactive personal portfolio website using React and Tailwind.",
    image: "/projects/Project2.png",
    tags: ["React", "JavaScript", "TailwindCss", "Node.js"],
    demoUrl: "#",
    githubUrl: "https://github.com/amali-b/my-portfolio.git",
  },
  {
    id: 2,
    title: "Todo-List App",
    description:
      "Create a fully functional todo list app with beautiful UI using React and Tailwind.",
    image: "/projects/Project3.png",
    tags: ["React", "JavaScript", "TailwindCss", "Node.js"],
    demoUrl: "https://todo-list-app-sage-iota.vercel.app/",
    githubUrl: "https://github.com/amali-b/todo-list.git",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are the projects that I created so far. Each projects was crafted
          with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              {/* Project Title */}
              <h3 className="p-4 text-xl font-semibold mb-2">
                {project.title}
              </h3>

              {/* Project sample image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* technologies used */}
              <div className="p-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, key) => (
                    <span
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      key={key}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project description */}
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}{" "}
                </p>

                {/* Url for Projects */}
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank" //this makes the url opens up in a new window
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} className="text-primary" />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <GithubIcon className="h-5 w-5 text-primary" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/*  */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/amali-b"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
