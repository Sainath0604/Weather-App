import Sidebar from "./Sidebar";
import Cities from "./Cities";
import Favorites from "./Favorites";
import { useState } from "react";

function Home() {
  const [activeComponent, setActiveComponent] = useState(
    sessionStorage.getItem("activeComponent") || "Cities"
  );

  const handleComponentChange = (componentName) => {
    setActiveComponent(componentName);
    sessionStorage.setItem("activeComponent", componentName);
  };

  return (
    <div className="m-0 h-screen">
      <div className="flex flex-col lg:flex-row">
        <div className="md:w-[15%]">
          <Sidebar
            activeComponent={activeComponent}
            handleComponentChange={handleComponentChange}
          />
        </div>
        <div className="border-l border-gray-400 md:w-[85%]">
          {activeComponent === "Cities" && <Cities />}
          {activeComponent === "Favorites" && <Favorites />}
        </div>
      </div>
    </div>
  );
}

export default Home;
