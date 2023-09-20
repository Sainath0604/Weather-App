import { Link } from "react-router-dom";
import { HomeIcon, FavoritesIcon } from "../Icons/Icons";
import { useEffect, useState } from "react";

function MdSidebar() {
  const [activeMenuItem, setActiveMenuItem] = useState(
    sessionStorage.getItem("activeMenuItem") || "Home"
  );

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
    sessionStorage.setItem("activeMenuItem", menuItem);
  };

  useEffect(() => {
    const storedMenuItem = sessionStorage.getItem("activeMenuItem");
    if (storedMenuItem) {
      setActiveMenuItem(storedMenuItem);
    }
  }, []);
  return (
    <div className="hidden md:block min-h-screen">
      <div className="flex flex-col">
        <Link to="#">
          <div className="flex justify-center items-center gap-4 h-20 p-4">
            <span className="cursor-pointer text-xl font-bold">
              Weather-App
            </span>
          </div>
        </Link>
        <div className="flex flex-col justify-between ">
          <div className="">
            <div className="text-sm lg:text-xs flex flex-col gap-4">
              <div className="flex flex-col">
                <div className="flex flex-col gap-2 px-4">
                  <ul className="flex flex-col gap-2 text-base font-semibold">
                    <Link to="/">
                      <li
                        className={`flex transition-colors duration-150 items-center gap-4 py-2 px-4 rounded-2xl cursor-pointer ${
                          activeMenuItem === "Home"
                            ? "bg-blue-600 text-white"
                            : "hover:bg-blue-600 hover:text-white"
                        }`}
                        onClick={() => handleMenuItemClick("Home")}
                      >
                        <span className="text-xl">
                          <HomeIcon />
                        </span>
                        <span className="">Home</span>
                      </li>
                    </Link>

                    <Link to="favorite">
                      <li
                        className={`flex transition-colors duration-150 items-center gap-4 py-2 px-4 rounded-2xl cursor-pointer ${
                          activeMenuItem === "Favorites"
                            ? "bg-blue-600 text-white"
                            : "hover:bg-blue-600 hover:text-white"
                        }`}
                        onClick={() => handleMenuItemClick("Favorites")}
                      >
                        <span className="text-xl">
                          <FavoritesIcon />
                        </span>
                        <span className="">Favorites</span>
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MdSidebar;
