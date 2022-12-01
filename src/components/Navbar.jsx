import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="w-screen h-[80px] z-10 bg-purple-1 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center text-orange-1">
          <h1 className="text-xl font-bold mr-4 lg:text-4xl">
            Weasley's Wizard Wheezes.
          </h1>
          <ul className="hidden md:flex cursor-pointer">
            <Link to="home" smooth={true} duration={500}>
              <li>Home</li>
            </Link>
            <Link to="about" smooth={true} offset={-100} duration={500}>
              <li>About</li>
            </Link>
            <Link to="support" smooth={true} offset={-80} duration={500}>
              <li>Support</li>
            </Link>
            <Link to="branches" smooth={true} offset={-87} duration={500}>
              <li>Branches</li>
            </Link>
            <Link to="offers" smooth={true} duration={500}>
              <li>Offers</li>
            </Link>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="mr-4">Sign In</button>
          <button>Sign Up</button>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          {!nav ? (
            <Bars3Icon className="w-5 text-orange-1" />
          ) : (
            <XMarkIcon className="w-5 text-orange-1" />
          )}
        </div>
      </div>
      <ul
        className={
          !nav
            ? "hidden"
            : "aboslute bg-purple-1 w-full px-8 text-orange-1 md:hidden"
        }
      >
        <Link to="home" smooth={true} duration={500}>
          <li className="border-b-2 border-purple-3 w-full">Home</li>
        </Link>
        <Link to="about" smooth={true} offset={-100} duration={500}>
          <li className="border-b-2 border-purple-3 w-full">About</li>
        </Link>
        <Link to="support" smooth={true} offset={-80} duration={500}>
          <li className="border-b-2 border-purple-3 w-full">Support</li>
        </Link>
        <Link to="branches" smooth={true} offset={-100} duration={500}>
          <li className="border-b-2 border-purple-3 w-full">Branches</li>
        </Link>
        <Link to="offers" smooth={true} offset={-100} duration={500}>
          <li className="border-b-2 border-purple-3 w-full">Offers</li>
        </Link>
        <div className="flex flex-col gap-3 my-4">
          <button>Sign In</button>
          <button className="mb-4">Sign Up</button>
        </div>
      </ul>
    </div>
  );
};
export default Navbar;
