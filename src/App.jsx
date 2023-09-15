import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cities from "./components/Cities";
import Favorites from "./components/Favorites";

export default function App() {
  return (
    <div className="bg-zinc-100 text-zinc-950">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </div>
  );
}
