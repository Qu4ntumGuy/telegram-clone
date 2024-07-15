import { Routes, BowserRouter, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="flex max-w-[105rem] mx-auto">
      <Sidebar />
      <BowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BowserRouter>
      {/* <Home /> */}
    </div>
  );
}

export default App;
