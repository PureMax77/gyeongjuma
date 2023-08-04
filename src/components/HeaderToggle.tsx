import { Menu } from "@headlessui/react";
import { useState } from "react";

export const HeaderToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as="div" className="md:hidden relative">
      {({ open }) => (
        <>
          <Menu.Button className="text-white">
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
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </Menu.Button>
          {open && (
            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 bg-blue-400 text-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={`block px-4 py-2 ${
                      active ? "bg-blue-500" : ""
                    } hover:bg-blue-500`}
                  >
                    Home
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={`block px-4 py-2 ${
                      active ? "bg-blue-500" : ""
                    } hover:bg-blue-500`}
                  >
                    About
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={`block px-4 py-2 ${
                      active ? "bg-blue-500" : ""
                    } hover:bg-blue-500`}
                  >
                    Services
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={`block px-4 py-2 ${
                      active ? "bg-blue-500" : ""
                    } hover:bg-blue-500`}
                  >
                    Contact
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          )}
        </>
      )}
    </Menu>
  );
};
