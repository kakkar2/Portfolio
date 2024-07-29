import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const Loader = () => {
  return (
    <>
      <div class="flex-col gap-4 w-full flex items-center justify-center h-screen">
        <div class="w-28 h-28 border-8 text-indigo-400 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-indigo-400 rounded-full">
          <FontAwesomeIcon
            className="animate-ping text-indigo-600"
            height="1em"
            width="1em"
            icon={faCode}
          />
        </div>
      </div>
    </>
  );
};

export default Loader;
