import React from "react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <header className="text-black body-font w-full bg-blue-300">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center z-50 sticky top-0">
        <a
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <span className="ml-3 text-xl">PORTFOLIO</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href={"#"} className="mr-5 hover:text-blue-600">
            Home
          </Link>
          <Link href={"#About"} className="mr-5 hover:text-blue-600">
           About
          </Link>
          <Link href={"#projects"} className="mr-5 hover:text-blue-600">
            Project
          </Link>
          <Link href={"#skills"} className="mr-5 hover:text-blue-600">
            Skills
          </Link>
          <Link href={"#Contact"} className="mr-5 hover:text-blue-600">
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};
export default Navbar;