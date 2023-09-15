import { HomeIcon, FavoritesIcon } from "../Icons/Icons";
import PropTypes from "prop-types";

function SmSidebar({ activeComponent, handleComponentChange }) {
  return (
    <div>
      <div className="mt-5 ">
        <div className="text-sm lg:text-xs flex flex-col gap-4">
          <div className="flex flex-col">
            <div className="flex flex-col gap-2 px-4">
              <ul className="flex flex-col gap-2 text-base font-semibold text-white mb-6">
                <li
                  className={`flex items-center gap-4 py-2 px-4 rounded-2xl cursor-pointer text-white ${
                    activeComponent === "Cities"
                      ? "bg-[#9e2b24] text-white"
                      : "hover:bg-[#9e2b24] hover:text-white"
                  }`}
                  onClick={() => handleComponentChange("Cities")}
                >
                  <span className="text-xl">
                    <HomeIcon />
                  </span>
                  <span className="">Home</span>
                </li>

                <li
                  className={`flex items-center gap-4 py-2 px-4 rounded-2xl cursor-pointer text-white ${
                    activeComponent === "Favorites"
                      ? "bg-[#9e2b24] text-white"
                      : "hover:bg-[#9e2b24] hover:text-white"
                  }`}
                  onClick={() => handleComponentChange("Favorites")}
                >
                  <span className="text-xl">
                    <FavoritesIcon />
                  </span>
                  <span className="">Favorites</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
SmSidebar.propTypes = {
  activeComponent: PropTypes.string.isRequired,
  handleComponentChange: PropTypes.func.isRequired,
};
export default SmSidebar;
