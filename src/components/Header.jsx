import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex text-white p-6 justify-between shadow sticky top-0 bg-slate-950">
      <div className="logo font-black text-2xl cursor-pointer">
        <a href="/">
          &lt;Dev.<span className="text-indigo-600">&#47;</span>&gt;
        </a>
      </div>
      <div className="menu-list hidden md:block lg:block">
        <ul className="flex gap-5 cursor-pointer">
          <li className="hover:text-gray-500 hover:text-indigo-600 transition duration-300 ease-in-out font-semibold">
            <a href="#Home">Home</a>
          </li>
          <li className="hover:text-gray-500 hover:text-indigo-600 transition duration-300 ease-in-out font-semibold">
            <a href="#About">About</a>
          </li>
          <li className="hover:text-gray-500 hover:text-indigo-600 transition duration-300 ease-in-out font-semibold">
            <a href="#Project">Projects</a>
          </li>
          <li className="hover:text-gray-500 hover:text-indigo-600 transition duration-300 ease-in-out font-semibold">
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
