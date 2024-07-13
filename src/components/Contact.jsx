import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="bg-gray-900 p-10" id="Contact">
      <div className="mx-40 my-10">
        <div className="text-center mb-4">
          <h2 className="font-bold text-white text-3xl uppercase cursor-pointer">
            Contact <span className="text-indigo-600">Me</span>
          </h2>
        </div>
        <div className="text-center text-white mb-2 p-5">
          <p>
            I'm open to hearing about new opportunities and collaborations. Feel
            free to ask your doubts, questions, or just say hi.
          </p>
        </div>
        <div className="flex justify-center contact-options text-white p-5">
          <a href="https://www.linkedin.com/in/lalit-kakkar50/" target="_blank">
            <div className="group linkedin p-5 text-center flex items-center gap-1">
              <div className="icon">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-2xl rounded-full p-3 bg-gray-700 cursor-pointer group-hover:bg-indigo-600 duration-300 transition ease-in-out"
                />
              </div>
              <div className="title group-hover:text-indigo-600 duration-300 transition ease-in-out cursor-pointer">
                lalitKakkar50
              </div>
            </div>
          </a>
          <a href="https://github.com/kakkar2" target="_blank">
            <div className="group github p-5 text-center flex items-center gap-1">
              <div className="icon">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-2xl rounded-full p-3 bg-gray-700 cursor-pointer hover:bg-indigo-600 duration-300 transition ease-in-out"
                />
              </div>
              <div className="title group-hover:text-indigo-600 duration-300 transition ease-in-out cursor-pointer">
                Kakkar2
              </div>
            </div>
          </a>
          <a href="mailto:lalitkakkar50@gmail.com" target="_blank">
            <div className="group email p-5 text-center flex items-center gap-1">
              <div className="icon">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-2xl rounded-full p-3 bg-gray-700 cursor-pointer hover:bg-indigo-600 duration-300 transition ease-in-out"
                />
              </div>
              <div className="title group-hover:text-indigo-600 duration-300 transition ease-in-out cursor-pointer">
                lalitKakkar50@gmail.com
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
