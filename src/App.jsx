import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Fav from "./Pages/Fav";

export default function App() {
  return (
    <div className="bg-zinc-100 text-zinc-950">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Fav />} />
        </Routes>
      </Router>
    </div>
  );
}
