import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faPhp } from "@fortawesome/free-brands-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faBootstrap } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faNode } from "@fortawesome/free-brands-svg-icons";
import { faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faServer } from "@fortawesome/free-solid-svg-icons";
import aboutImage from "../assets/aboutImage.png";

const skills = [
  { title: "HTML", icon: faHtml5 },
  { title: "CSS", icon: faCss3 },
  { title: "Javascript", icon: faJs },
  { title: "BootStrap", icon: faBootstrap },
  { title: "Tailwind CSS", icon: faCss3Alt },
  { title: "React JS", icon: faReact },
  { title: "Node JS", icon: faNode },
  { title: "Express JS", icon: faNodeJs },
  { title: "MongoDB", icon: faDatabase },
  { title: "PHP", icon: faPhp },
  { title: "SQL", icon: faServer },
];

const About = () => {
  return (
    <div className="bg-gray-900 p-2 md:p-10 lg:p-10" id="About">
      <div className="mx-10 md:mx-10 lg:mx-20 my-10">
        <div className="text-center">
          <h2 className="font-bold text-white text-3xl uppercase cursor-pointer">
            About <span className="text-indigo-600">Me</span>
          </h2>
        </div>
        <div className="lg:flex md:flex-wrap lg:flex-wrap">
          <div className="flex-1 md:flex md:justify-center md:items-center text-white p-5">
            <div className="aboutImage">
              <img src={aboutImage} loading="lazy" alt="ABOUTIMAGE" />
            </div>
          </div>
          <div className="flex-1 text-white p-5">
            <div className="summary">
              <p className="text-gray-400 text-base text-justify md:text-left lg:text-left mb-2">
                Hello! I’m{" "}
                <span className="font-bold text-indigo-600">Lalit Kakkar</span>,
                a passionate web developer with a strong foundation in front-end
                and back-end development. By building responsive websites and
                web applications, I turn ideas into functional, user-friendly
                digital solutions.
              </p>
              <p className="text-base text-gray-400 text-justify md:text-left lg:text-left mb-4">
                Beyond coding, I'm passionate about user experience (UX) design
                and usability principles, ensuring that every project I
                undertake not only meets technical standards but also provides
                users with seamless accessibility.
              </p>
            </div>
            <h2 className="font-bold mb-3 text-indigo-600 uppercase cursor-pointer">
              Tech Stack
            </h2>
            <div className="flex gap-3 flex-wrap justify-center items-center skills mb-4">
              {skills.map((item, index) => (
                <button
                  className="text-sm bg-gray-700 px-2 py-3 rounded-lg hover:bg-indigo-600 transition duration-300 ease-in-out active:opacity-85 flex items-center gap-1"
                  key={index}
                >
                  <FontAwesomeIcon icon={item.icon} className="text-xl" />{" "}
                  {item.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
