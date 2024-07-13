import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <div className="flex flex-wrap mx-40 my-10" id="Home">
      <div className="flex-auto text-white p-2 md:p-10 lg:p-10">
        <div className="title mb-5">
          <h2 className="text-2xl md:leading-normal lg:leading-normal">
            👋, I am
          </h2>
          <h1 className="text-6xl lg:text-7xl md:text-7xl md:leading-normal  lg:leading-normal font-bold">
            Lalit Kakkar
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-2xl md:leading-normal lg:leading-normal">
            I am{" "}
            <ReactTyped
              strings={[
                "Frontend Developer.",
                "Frontend React Developer.",
                "Web Developer.",
                "Mern Developer.",
              ]}
              typeSpeed={80}
              backSpeed={70}
              loop
              className="text-indigo-600 font-black"
            />
          </h2>
        </div>
        <div className="contact mb-5">
          <div className="flex gap-2">
            <a
              href="https://github.com/kakkar2"
              target="_blank"
              className="p-2"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="text-2xl hover:text-indigo-600 transition duration-300 ease-in-out hover:rotate-45"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/lalit-kakkar50/"
              target="_blank"
              className="p-2"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-2xl hover:text-indigo-600 transition duration-300 ease-in-out hover:rotate-45"
              />
            </a>
          </div>
        </div>
        <div className="connect hover:shadow-lg">
          <a
            href="/src/assets/fullStack_Cv.pdf"
            className="text-sm bg-gray-700 px-2 py-3 rounded-lg hover:bg-indigo-600 transition duration-300 ease-in-out active:opacity-85"
            download={true}
          >
            Download CV <FontAwesomeIcon icon={faFileLines} />
          </a>
        </div>
      </div>
      <div className="flex-auto text-white p-10 hidden md:block lg:block">
        <div className="profileImage"></div>
      </div>
    </div>
  );
};

export default Home;
