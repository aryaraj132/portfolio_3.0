import Link from "next/link";
import { Transition } from "@headlessui/react";
import { useState, useEffect } from "react";
export default function Nav() {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-gray-800 sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
              <h1 className="text-3xl cursor-pointer"><span className="text-cyan-500">{`< Aryan `}</span><span className="text-teal-500">{`Raj />`}</span></h1>
              </Link>
            </div>

          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/dashboard" legacyBehavior><h4 className="bg-cyan-500 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Dashboard</h4></Link>
              </div>
            </div>
            <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <div className="relative ml-3">
                  <button type="button" className="px-4 py-2 text-md bg-teal-500 text-white rounded-lg font-medium" role="menuitem" id="user-menu-item-2">Contact Me</button>
              </div>
            </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button type="button" onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                // <svg
                //   className="block h-6 w-6"
                //   xmlns="http://www.w3.org/2000/svg"
                //   fill="none"
                //   viewBox="0 0 24 24"
                //   stroke="currentColor"
                //   aria-hidden="true"
                // >
                //   <path
                //     strokeLinecap="round"
                //     strokeLinejoin="round"
                //     strokeWidth="2"
                //     d="M4 6h16M4 12h16M4 18h16"
                //   />
                // </svg>
                <h1 className="text-xl cursor-pointer">{`<>`}</h1>
              ) : (
                // <svg
                //   className="block h-6 w-6"
                //   xmlns="http://www.w3.org/2000/svg"
                //   fill="none"
                //   viewBox="0 0 24 24"
                //   stroke="currentColor"
                //   aria-hidden="true"
                // >
                //   <path
                //     strokeLinecap="round"
                //     strokeLinejoin="round"
                //     strokeWidth="2"
                //     d="M6 18L18 6M6 6l12 12"
                //   />
                // </svg>
                <h1 className="text-xl cursor-pointer">{`</>`}</h1>
              )}
            </button>
          </div>
        </div>
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
              <Link href="/dashboard" legacyBehavior><h4 className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</h4></Link>
            </div>
            <div className="border-t border-gray-700 pt-4 pb-3">
                <button type="button" className="px-4 py-2 text-md bg-teal-500 text-white rounded-lg font-medium mx-8 w-40" role="menuitem" id="user-menu-item-2">Contact Me</button>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}