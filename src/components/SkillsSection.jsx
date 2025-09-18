import { useState } from "react";
import { cn } from "../lib/utils";

// define array for skills
const skills = [
  // FrontEnd
  { name: "HTML/Css", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 95, category: "frontend" },
  { name: "Tailwind Css", level: 30, category: "frontend" },
  { name: "Bootstrap", level: 90, category: "frontend" },
  { name: "Python", level: 30, category: "frontend" },
  { name: "C#", level: 30, category: "frontend" },
  { name: "C", level: 30, category: "frontend" },

  //   BackEnd
  { name: "Spring", level: 85, category: "backend" },
  { name: "Node.js", level: 65, category: "backend" },
  { name: "Java", level: 90, category: "backend" },
  { name: "MySQL", level: 95, category: "backend" },

  //   Tools
  { name: "Git", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Visual Paradigm", level: 85, category: "tools" },
];

// define array for categories
const categories = ["all", "frontend", "backend", "tools"];

// main function
export const SkillsSection = () => {
  // useState for selecting skill category
  const [activeCategory, setActiveCategory] = useState("all");

  //   going through each item and choose which item to keep on this new array
  const filteredSkills = skills.filter(
    // if the below condition is true keep that item, if false we don't keep that item
    // if activeCategory is all need all the items to keep
    // else if the individual skill's category is equal to activeCategory keep that item
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Button for select skill category */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xm card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name} </h3>
              </div>

              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-2">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
