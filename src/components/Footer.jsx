import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="flex justify-between items-center flex-wrap p-5 border-t-2 text-white">
      <div className="logo">
        <div className="logo font-black text-2xl cursor-pointer">
          <a href="/">
            &lt;Dev.<span className="text-indigo-600">&#47;</span>&gt;
          </a>
        </div>
      </div>
      <div className="social">
        <div className="flex gap-2">
          <a href="https://github.com/kakkar2" target="_blank" className="p-2">
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
    </div>
  );
};

export default Footer;
