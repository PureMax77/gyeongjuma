import { HeaderToggle } from "./HeaderToggle";
import logo from "../assets/images/icon/logo.svg";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <span className="text-xl font-semibold">
          <img src={logo} alt="gyeongjuma logo" />
        </span>
        <nav className="hidden md:flex space-x-4 ml-8">
          <Link to="/" className="hover:text-blue-300">
            Home
          </Link>
          <Link to="/racing" className="hover:text-blue-300">
            racing
          </Link>
          <a href="#" className="hover:text-blue-300">
            Services
          </a>
          <a href="#" className="hover:text-blue-300">
            Contact
          </a>
        </nav>
        <HeaderToggle />
      </div>
    </header>
  );
};
