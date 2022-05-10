import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="mb-2 flex items-center flex-wrap bg-blue-700 p-3 font-kanit">
        <Link href="/">
          <a className="inline-flex items-center p-2 mr-4 ">
            <span className="text-lg text-white font-bold tracking-wide">
              Computer Vision Project
            </span>
          </a>
        </Link>
        <button
          className=" inline-flex p-3 hover:bg-blue-800 rounded lg:hidden text-white ml-auto hover:text-white outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-800 hover:text-white ">
                Overview
              </a>
            </Link>
            <Link href="/project">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-800 hover:text-white">
                Project
              </a>
            </Link>
            <Link href="/demo">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-800 hover:text-white">
                Demo
              </a>
            </Link>
            <Link href="/team">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-800 hover:text-white">
                Team
              </a>
            </Link>
            <Link href="/code">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-800 hover:text-white">
                Code
              </a>
            </Link>
            <Link href="/test-hand">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-red-800 hover:text-white">
                Test Camera
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
