import { Link } from "react-router-dom";
import SmSidebar from "./SmSidebar";
import MdSidebar from "./MdSidebar";
import { Disclosure } from "@headlessui/react";
import { CrossIcon, HamburgerIcon } from "../Icons/Icons";
import PropTypes from "prop-types";

function Sidebar({ activeComponent, handleComponentChange }) {
  return (
    <div>
      <div>
        <MdSidebar
          activeComponent={activeComponent}
          handleComponentChange={handleComponentChange}
        />
      </div>
      <Disclosure as="nav" className="bg-[#100f12] block md:hidden h-1/5">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 bg-gray-900">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <div className="block h-6 w-6 text-gray-400">
                        <CrossIcon />
                      </div>
                    ) : (
                      <div className="block h-6 w-6 text-gray-400">
                        <HamburgerIcon />
                      </div>
                    )}
                  </Disclosure.Button>
                </div>
                <Link to="#">
                  <div className="flex justify-center items-center gap-4 h-16 p-4 ml-16">
                    <span className="cursor-pointer text-xl font-bold text-white">
                      Weather-App
                    </span>
                  </div>
                </Link>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <SmSidebar
                activeComponent={activeComponent}
                handleComponentChange={handleComponentChange}
              />
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
Sidebar.propTypes = {
  activeComponent: PropTypes.string.isRequired,
  handleComponentChange: PropTypes.func.isRequired,
};
export default Sidebar;
