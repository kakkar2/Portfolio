import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTowerBroadcast } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import aeroscape from "../assets/aeroscape.png";
import blogImage from "../assets/blogwebsite.png";

const Project = () => {
  const projects = [
    {
      tittle: "Blog Website",
      description:
        "TAn engaging blog website built with the MERN stack, offering a dynamic platform for publishing and managing posts with real-time updates and interactive features.",
      src: `${blogImage}`,
      link: "",
      githubLink: "https://github.com/kakkar2/mern-blog-app",
    },
    {
      tittle: "Airline Reservation System",
      description:
        "Aeroscape is a robust airline reservation system developed using core PHP, providing efficient flight booking, management, and real-time availability features.",
      src: `${aeroscape}`,
      link: "https://aeroscape.infinityfreeapp.com/",
      githubLink: "",
    },
  ];

  return (
    <div className="flex flex-wrap mx-10 md:mx-10 lg:mx-20 my-10" id="Project">
      <div className="text-center w-full">
        <h2 className="font-bold text-white text-3xl uppercase cursor-pointer">
          Project<span className="text-indigo-600">s</span>
        </h2>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-4 text-white p-10 md:w-full lg:w-full">
        {projects.map((item) => (
          <div
            className="group w-60 md:w-64 lg:w-96 gap-2 items-center p-2 md:3/12 lg:9/12 rounded-lg cursor-pointer bg-gray-800 shadow-lg h-auto md:min-h-full lg:min-h-full"
            key={item.tittle}
          >
            <div className="flex-1 image bg-contain">
              <img
                src={item.src}
                alt="PROJECTIMAGE"
                loading="lazy"
                className="group-hover:scale-95 transition duration-300 ease-in-out"
              />
            </div>
            <div className="flex-1 content p-5">
              <div className="title mb-2">
                <h2 className="font-semibold text-indigo-600 text-xl">
                  {item.tittle}
                </h2>
              </div>
              <div className="description mb-3">
                <p className="text-gray-400 text-left">{item.description}</p>
              </div>
              {item.githubLink != "" ? (
                <a
                  href={item.githubLink}
                  className="text-sm bg-indigo-600 px-3 py-3 rounded-lg hover:bg-gray-700 transition duration-300 ease-in-out active:opacity-85 justify-self-end"
                >
                  <FontAwesomeIcon icon={faGithub} /> Github
                </a>
              ) : (
                <a
                  href={item.link}
                  className="text-sm bg-indigo-600 px-3 py-3 rounded-lg hover:bg-gray-700 transition duration-300 ease-in-out active:opacity-85 justify-self-end"
                >
                  <FontAwesomeIcon icon={faTowerBroadcast} /> Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
