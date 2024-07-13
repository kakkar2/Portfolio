import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTowerBroadcast } from "@fortawesome/free-solid-svg-icons";

const Project = () => {
  const projects = [
    {
      tittle: "Aeroscape(Airline Reservation System)",
      description:
        "Aeroscape is an 'airline reservation system' which allows users to search for flights and book them. Users can search for the available flights, book their tickets and can even view them in their profile section. There is an admin panel also to store, maintain and manipulate the data.",
      src: "/src/assets/aeroscape.png",
      link: "https://aeroscape.infinityfreeapp.com/",
    },
    {
      tittle: "MyPortfolio",
      description:
        "This is a portfolio website that can help you to know me a little. It is made using ReactJS and Tailwind CSS.",
      src: "/src/assets/portfolio.png",
      link: "https://kakkar2.github.io/MyPortfolio/",
    },
  ];

  return (
    <div className="flex flex-wrap mx-40 my-10" id="Project">
      <div className="text-center w-full">
        <h2 className="font-bold text-white text-3xl uppercase cursor-pointer">
          Project<span className="text-indigo-600">s</span>
        </h2>
      </div>
      <div className="flex justify-between items-center flex-wrap gap-3 text-white p-10">
        {projects.map((item) => (
          <div
            className="group flex-1 gap-2 items-center p-5 rounded-lg cursor-pointer bg-gray-800 shadow-lg h-auto"
            key={item.tittle}
            style={{ minHeight: "100%" }}
          >
            <div className="flex-1 image bg-contain">
              <img
                src={item.src}
                alt="PROJECTIMAGE"
                className="group-hover:scale-105 transition duration-300 ease-in-out"
              />
            </div>
            <div className="flex-1 content p-5">
              <div className="title mb-2">
                <h2 className="font-semibold text-indigo-600 text-xl">
                  {item.tittle}
                </h2>
              </div>
              <div className="description mb-3">
                <p className="text-gray-400">{item.description}</p>
              </div>
              <a
                href={item.link}
                className="text-sm bg-gray-700 px-2 py-3 rounded-lg hover:bg-indigo-600 transition duration-300 ease-in-out active:opacity-85"
              >
                <FontAwesomeIcon icon={faTowerBroadcast} /> Live Link
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
