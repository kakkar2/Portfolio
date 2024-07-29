import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const social = [
    {
      title: "lalitKakkar50",
      link: "https://www.linkedin.com/in/lalit-kakkar50/",
      icon: faLinkedin,
    },
    {
      title: "Kakkar2",
      link: "https://github.com/kakkar2",
      icon: faGithub,
    },
    {
      title: "lalitkakkar50@gmail.com",
      link: "mailto:lalitkakkar50@gmail.com",
      icon: faEnvelope,
    },
  ];

  return (
    <div className="bg-gray-900 p-10" id="Contact">
      <div className="mx-10 md:mx-20 lg:mx-40 my-10">
        <div className="text-center mb-4">
          <h2 className="font-bold text-white text-3xl uppercase cursor-pointer">
            Contact <span className="text-indigo-600">Me</span>
          </h2>
        </div>
        <div className="text-center text-white mb-2 p-3">
          <p>
            I'm open to hearing about new opportunities and collaborations. Feel
            free to ask your doubts, questions, or just say hi👋🏻.
          </p>
        </div>
        <div className="flex flex-wrap justify-center contact-options text-white p-3">
          {social.map((item) => (
            <a href={item.link} target="_blank" key={item.icon}>
              <div className="group linkedin p-3 md:p-4 lg:p-5 text-center flex items-center gap-1">
                <div className="icon">
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="text-2xl rounded-full p-3 bg-gray-700 cursor-pointer group-hover:bg-indigo-600 duration-300 transition ease-in-out"
                  />
                </div>
                <div className="title group-hover:text-indigo-600 duration-300 transition ease-in-out cursor-pointer">
                  {item.title}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
