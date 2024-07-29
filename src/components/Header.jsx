import AnchorLink from "react-anchor-link-smooth-scroll";

const Header = () => {
  return (
    <div className="flex text-white p-6 justify-between shadow sticky top-0 bg-slate-950 z-50">
      <div className="logo font-black text-2xl cursor-pointer">
        <a href="/">
          &lt;Dev.<span className="text-indigo-600">&#47;</span>&gt;
        </a>
      </div>
      <div className="menu-list hidden md:block lg:block">
        <ul className="flex gap-5 cursor-pointer">
          <li className="hover:text-gray-500 hover:text-indigo-600 transition duration-300 ease-in-out font-semibold">
            <AnchorLink href="#Home" offset={() => 80}>
              Home
            </AnchorLink>
          </li>
          <li className="hover:text-gray-500 hover:text-indigo-600 transition duration-300 ease-in-out font-semibold">
            <AnchorLink href="#About" offset={() => 80}>
              About
            </AnchorLink>
          </li>
          <li className="hover:text-gray-500 hover:text-indigo-600 transition duration-300 ease-in-out font-semibold">
            <AnchorLink href="#Project" offset={() => 80}>
              Projects
            </AnchorLink>
          </li>
          <li className="hover:text-gray-500 hover:text-indigo-600 transition duration-300 ease-in-out font-semibold">
            <AnchorLink href="#Contact" offset={() => 80}>
              Contact
            </AnchorLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
