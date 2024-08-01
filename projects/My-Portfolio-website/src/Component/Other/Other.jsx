
import { useState } from "react";
import { GoFileDirectory } from "react-icons/go";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import Container from "../Container/Container";

const OtherSection = () => {
      const [showAll, setShowAll] = useState(false);

      const projects = [
            {
                  title: "Match-Box",
                  description:
                        "With supporting text below as a natural lead-in to additional content.",
                  tech: ["React.js", "Tailwind CSS", "Node.js"],
                  link: "https://fancy-cassata-c6fd63.netlify.app/",
            },
            {
                  title: "Online-Merket-Place",
                  description:
                        "With supporting text below as a natural lead-in to additional content.",
                  tech: ["React.js", "Tailwind CSS", "Node.js"],
                  link: "https://abcdremarkable-weather.surge.sh/",
            },
            {
                  title: "Summer-Sall",
                  description:
                        "With supporting text below as a natural lead-in to additional content.",
                  tech: ["React.js", "Tailwind CSS", "Node.js"],
                  link: "https://shahin-alom82.github.io/Assignment-5/",
            },
            {
                  title: "Doctor-AppointMent",
                  description:
                        "With supporting text below as a natural lead-in to additional content.",
                  tech: ["React.js", "Tailwind CSS", "Node.js"],
                  link: "https://medisure-healthcare.web.app/",
            },

            {
                  title: "Match-Box",
                  description:
                        "With supporting text below as a natural lead-in to additional content.",
                  tech: ["React.js", "Tailwind CSS", "Node.js"],
                  link: "https://fancy-cassata-c6fd63.netlify.app/",
            },
            {
                  title: "Online-Merket-Place",
                  description:
                        "With supporting text below as a natural lead-in to additional content.",
                  tech: ["React.js", "Tailwind CSS", "Node.js"],
                  link: "https://abcdremarkable-weather.surge.sh/",
            },
            {
                  title: "Summer-Sall",
                  description:
                        "With supporting text below as a natural lead-in to additional content.",
                  tech: ["React.js", "Tailwind CSS", "Node.js"],
                  link: "https://shahin-alom82.github.io/Assignment-5/",
            },
            {
                  title: "Doctor-AppointMent",
                  description:
                        "With supporting text below as a natural lead-in to additional content.",
                  tech: ["React.js", "Tailwind CSS", "Node.js"],
                  link: "https://medisure-healthcare.web.app/",
            },

            {
                  title: "Match-Box",
                  description:
                        "With supporting text below as a natural lead-in to additional content.",
                  tech: ["React.js", "Tailwind CSS", "Node.js"],
                  link: "https://fancy-cassata-c6fd63.netlify.app/",
            },
            {
                  title: "Online-Merket-Place",
                  description:
                        "With supporting text below as a natural lead-in to additional content.",
                  tech: ["React.js", "Tailwind CSS", "Node.js"],
                  link: "https://abcdremarkable-weather.surge.sh/",
            },
            {
                  title: "Summer-Sall",
                  description:
                        "With supporting text below as a natural lead-in to additional content.",
                  tech: ["React.js", "Tailwind CSS", "Node.js"],
                  link: "https://shahin-alom82.github.io/Assignment-5/",
            },
            {
                  title: "Doctor-AppointMent",
                  description:
                        "With supporting text below as a natural lead-in to additional content.",
                  tech: ["React.js", "Tailwind CSS", "Node.js"],
                  link: "https://medisure-healthcare.web.app/",
            },


            // Add more projects as needed
      ];

      const toggleShowAll = () => {
            setShowAll(!showAll);
      };

      const projectsToShow = showAll ? projects : projects.slice(0, 6);

      return (
            <Container >
                  <div className="lg:mx-36 lg:px-0 md:px-32 lg:ml-32">
                        <div className="text-center justify-center font-bold">
                              <h1 className="lg:text-4xl mt-28">Other Noteworthy Projects</h1>
                              <p className="text-designColor mt-2"> View the archive</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto font-bodyFont mt-10">
                              {projectsToShow.map((project, index) => (
                                    <a
                                          key={index}
                                          href={project.link}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="block rounded-lg bg-[#112240] text-white shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
                                          style={{
                                                minWidth: "18rem",
                                                maxWidth: "100%",
                                                textDecoration: "none",
                                                color: "inherit",
                                          }}
                                    >
                                          <div className="p-6">
                                                <div className="flex justify-between items-center mb-4">
                                                      <GoFileDirectory className="w-8 h-8 text-designColor" />
                                                      <BsBoxArrowInUpRight className="w-6 h-6 text-designColor" />
                                                </div>
                                                <h1 className="text-2xl font-semibold mb-2 hover:text-designColor duration-500">{project.title}</h1>
                                                <p className="mb-4 text-sm text-gray-400">
                                                      {project.description}
                                                </p>
                                                <ul className="flex flex-wrap justify-around text-xs font-medium">
                                                      {project.tech.map((tech, techIndex) => (
                                                            <li
                                                                  key={techIndex}
                                                                  className="px-2 py-1 rounded-md m-1"
                                                            >
                                                                  {tech}
                                                            </li>
                                                      ))}
                                                </ul>
                                          </div>
                                    </a>
                              ))}
                        </div>
                        <div className="mt-4 text-center">
                              <button
                                    onClick={toggleShowAll}
                                    className="text-designColor border-2 border-designColor px-8 mt-5 py-3 rounded-md text-center items-center duration-300 hover:bg-slate-700"
                              >
                                    {showAll ? "Show Less" : "Show More"}
                              </button>
                        </div>
                  </div>
            </Container>
      );
};

export default OtherSection;